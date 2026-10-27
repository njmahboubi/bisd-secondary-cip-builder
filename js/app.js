"use strict";

(() => {
  const config = window.BISD_CIP_CONFIG;
  const form = document.getElementById("cip-form");
  if (!config || !form) return;
  const district = config.DISTRICT_CONFIG;
  // Generation is available only when the Secondary module and district setting agree.
  const GENERATION_READY = district.generation_ready === true && typeof window.BISD_CIP_GENERATOR?.build === "function";
  const state = { campus_name: "", campus_id: null, districtCampus: null, optional: Object.create(null), localSources: Object.create(null) };
  const panels = Array.from(form.querySelectorAll(".form-step"));
  const stepLabels = {
    campus: "Campus Information", demographics: "Demographics",
    academic: "Academic / Accountability", readiness: "Student Readiness / Pathways",
    climate: "Attendance / Climate", implementation: "Implementation",
    program: "Program Information", review: "Review"
  };
  const reviewIndex = panels.length - 1;
  const progressList = document.getElementById("progress-steps");
  const backButton = document.getElementById("back-button");
  const nextButton = document.getElementById("next-button");
  const campusControl = document.getElementById("campus_name");
  const controls = new Map();
  const displayedFields = [];
  let currentStep = 0;

  function node(tag, text, className) {
    const item = document.createElement(tag);
    if (text !== undefined) item.textContent = text;
    if (className) item.className = className;
    return item;
  }
  function configuredText(raw) {
    if (raw === undefined || raw === null || String(raw).trim() === "" ||
        /\b(?:XX(?: TARGET)?|undefined|null|NaN)\b/i.test(String(raw)) ||
        String(raw).trim().toLowerCase() === district.pending_value.toLowerCase()) return district.pending_value;
    return String(raw).trim();
  }
  function applicability(field) {
    return config.resolveApplicability(field, state.districtCampus);
  }
  function definitionText(field) {
    if (!field.definitionKey) return "";
    const campusDefinitions = state.districtCampus && state.districtCampus.measurement_definitions;
    const raw = campusDefinitions && campusDefinitions[field.definitionKey];
    return configuredText(raw ?? district.measurement_definitions[field.definitionKey]);
  }
  function targetInfo(field) {
    const status = applicability(field);
    if (status.kind === "na") return { text: config.NA_GRADE_SPAN, kind: "na", description: status.reason };
    if (status.kind === "pending") return { text: district.pending_value, kind: "pending", description: status.reason };
    if (!field.targetKey) return { text: "N/A", kind: "na", description: "No numerical target for this descriptive / program value" };
    const target = district.targets[field.targetKey];
    const raw = target && (target.configKey ? district[target.configKey] : target.value);
    if (configuredText(raw) === district.pending_value || String(raw).startsWith("VERIFY")) return { text: "VERIFY — District target confirmation required", kind: "pending", description: "Retained source benchmark: " + (target.source_value ?? "not supplied") + ". Requires district confirmation." };
    let text = String(raw);
    if (target.format === "percentage") text += "%";
    if (target.format === "percentage-plus") text += "%+";
    text += target.suffix || "";
    return { text, kind: "fixed", description: target.source_status === "existing"
      ? "Retained source measure; subject to BISD validation"
      : "CONFIRMED DISTRICT TARGET — Secondary reference target key" };
  }
  function targetDisplay(field) {
    const box = node("div", undefined, "field-target");
    box.id = field.id + "-target";
    return box;
  }
  function updateTarget(entry) {
    const target = targetInfo(entry.definition);
    entry.target.className = "field-target target-" + target.kind;
    entry.target.replaceChildren(node("span", district.school_year + " District Target:"), node("strong", target.text), node("small", target.description));
  }

  panels.forEach((panel, index) => {
    const item = node("li");
    const number = node("span", String(index + 1), "step-number");
    number.setAttribute("aria-hidden", "true");
    item.append(number, node("span", stepLabels[panel.dataset.step]));
    progressList.append(item);
  });
  const progressItems = Array.from(progressList.querySelectorAll("li"));
  district.campuses.forEach(campus => {
    const option = node("option", campus.campus_name);
    option.value = campus.campus_id;
    campusControl.append(option);
  });
  document.getElementById("campus-config-notice").textContent = district.campus_list_note;
  document.getElementById("campus-config-notice").hidden = !district.campus_list_is_temporary;
  document.getElementById("plan-edition").textContent = district.school_year + " · Secondary";
  document.getElementById("target-status-notice").textContent = district.target_notice;
  controls.set(campusControl.id, { control: campusControl, definition: { type: "campus", required: true }, step: 0 });

  function addField(field) {
    const container = document.getElementById(field.group + "-fields");
    const step = field.group === "baseline" ? 0 : panels.findIndex(panel => panel.dataset.step === field.group);
    if (!container || step < 0 || field.enabled !== true) return;
    const wrapper = node("div", undefined, "field");
    const label = node("label", field.label);
    label.htmlFor = field.id;
    const requiredLabel = node("span", field.required ? "Required" : "Optional override", "required-label");
    label.append(requiredLabel);
    const control = document.createElement("input");
    control.id = field.id;
    control.name = field.id;
    control.type = field.type === "percentage" ? "number" : field.type;
    if (field.type === "percentage") {
      control.min = "0"; control.max = "100"; control.step = "any"; control.inputMode = "decimal";
    } else if (field.type === "number") {
      control.step = String(field.step ?? "any");
      control.inputMode = field.step === 1 ? "numeric" : "decimal";
      if (field.min !== undefined) control.min = String(field.min);
      if (field.max !== undefined) control.max = String(field.max);
    } else if (field.maxLength !== undefined) control.maxLength = field.maxLength;
    const help = node("p", field.help, "field-help"); help.id = field.id + "-help";
    const definition = node("p", "", "field-help metric-definition"); definition.id = field.id + "-definition";
    const note = node("p", "", "field-help"); note.id = field.id + "-applicability"; note.hidden = true;
    const error = node("p", "", "field-error"); error.id = field.id + "-error"; error.hidden = true;
    const target = targetDisplay(field);
    control.setAttribute("aria-describedby", [help.id, definition.id, note.id, target.id, error.id].join(" "));
    wrapper.append(label);
    const inputRegion = field.type === "percentage" ? node("div", undefined, "percentage-input") : node("div");
    inputRegion.append(control);
    if (field.type === "percentage") {
      const unit = node("span", "%"); unit.setAttribute("aria-hidden", "true"); inputRegion.append(unit);
    }
    wrapper.append(inputRegion, help, definition, note, target, error);
    let sourceControl, overrideControl;
    if (field.publicBaseline) {
      const sourceLabel = node("label", "Override source and underlying year");
      sourceControl = document.createElement("input"); sourceControl.type = "text";
      sourceControl.id = field.id + "-source"; sourceControl.maxLength = 300; sourceLabel.htmlFor = sourceControl.id;
      sourceControl.addEventListener("input", () => { state.localSources[field.id] = sourceControl.value.trim(); save(controls.get(field.id)); if (control.hasAttribute("aria-invalid")) validate(controls.get(field.id)); });
            overrideControl = document.createElement("input"); overrideControl.type = "checkbox";
      overrideControl.id = field.id + "-override"; overrideControl.className = "public-override-toggle";
      const overrideLabel = node("label", "Use a verified local override instead of the published value"); overrideLabel.htmlFor = overrideControl.id;
      const overrideRegion = node("div", undefined, "public-override-choice"); overrideRegion.append(overrideControl, overrideLabel); wrapper.prepend(overrideRegion);
      overrideControl.addEventListener("change", () => { syncApplicability(); save(controls.get(field.id)); });
      wrapper.append(sourceLabel, sourceControl);
    }
    container.append(wrapper);
    displayedFields.push(field);
    controls.set(field.id, { control, definition: field, step, wrapper, inputRegion, requiredLabel, note, definitionNode: definition, target, sourceControl, overrideControl });
  }
  config.CAMPUS_FIELDS.forEach(addField);

  function syncApplicability() {
    displayedFields.forEach(field => {
      const entry = controls.get(field.id);
      const status = applicability(field);
      const publicRecord = config.getPublishedBaseline(state.campus_id, field.id);
      const active = status.kind === "applicable" && (!publicRecord || entry.overrideControl?.checked);
      entry.control.disabled = !active;
      entry.control.required = active && field.required;
      entry.inputRegion.hidden = !active;
      // Do not show an irrelevant CCMR question for middle-school campuses.
      entry.wrapper.hidden = field.publicBaseline && status.kind !== "applicable";
      if (entry.overrideControl) { entry.overrideControl.parentElement.hidden = !publicRecord; entry.overrideControl.disabled = status.kind !== "applicable"; }
      if (entry.sourceControl) entry.sourceControl.disabled = !active;
      entry.requiredLabel.textContent = active ? (field.required ? "Required" : "Optional override") : "District configuration";
      entry.note.hidden = active;
      entry.note.textContent = status.kind === "na" ? "Not applicable" : status.reason;
      const definition = definitionText(field);
      entry.definitionNode.hidden = !definition;
      entry.definitionNode.textContent = definition ? "District measurement definition / period: " + definition : "";
      updateTarget(entry);
      if (!active) {
        entry.control.value = "";
        delete state.optional[field.id];
        entry.control.removeAttribute("aria-invalid");
        document.getElementById(field.id + "-error").hidden = true;
      }
    });
  }
  function errorFor(entry) {
    const { control, definition } = entry;
    if (control.disabled) return "";
    const raw = control.value.trim();
    if (control.validity.badInput) return "Enter a valid number.";
    if (!raw) return definition.required ? "This field is required." : "";
    if (definition.publicBaseline && !/\b(?:19|20)\d{2}(?:[-–]\d{2,4})?\b/.test(entry.sourceControl?.value || "")) return "Provide the verified override source and underlying year.";
    if (definition.type === "campus") return district.campuses.some(campus => campus.campus_id === raw) ? "" : "Select a campus from the list.";
    if (definition.type === "percentage" || definition.type === "number") {
      const number = Number(raw);
      if (!Number.isFinite(number)) return "Enter a valid number.";
      if (definition.type === "percentage" && (number < 0 || number > 100)) return "Enter a percentage from 0 to 100.";
      if (definition.min !== undefined && number < definition.min) return "Enter a value of " + definition.min + " or more.";
      if (definition.max !== undefined && number > definition.max) return "Enter a value of " + definition.max + " or less.";
      if (definition.step === 1 && !Number.isInteger(number)) return "Enter a whole number.";
    }
    if (definition.type === "text") {
      if (/\b(?:XX(?: TARGET)?|undefined|null|NaN)\b/i.test(raw)) return "Enter the official reported value instead of template placeholder text.";
      if (raw.length > definition.maxLength) return "Use " + definition.maxLength + " characters or fewer.";
      if (/^(?:n\/a|not applicable|district confirmation needed)$/i.test(raw)) return "Enter the official value; indicator applicability is set by district configuration.";
    }
    return "";
  }
  function validate(entry) {
    const message = errorFor(entry);
    const error = document.getElementById(entry.control.id + "-error");
    error.textContent = message; error.hidden = !message;
    if (message) entry.control.setAttribute("aria-invalid", "true");
    else entry.control.removeAttribute("aria-invalid");
    return !message;
  }
  function focusEntry(entry) { entry.control.focus(); }
  function save(entry) {
    const raw = entry.control.value.trim();
    if (entry.definition.type === "campus") {
      const campus = district.campuses.find(item => item.campus_id === raw) || null;
      if (state.districtCampus !== campus) {
        displayedFields.forEach(field => {
          controls.get(field.id).control.value = "";
          controls.get(field.id).control.removeAttribute("aria-invalid");
          document.getElementById(field.id + "-error").hidden = true;
        });
        state.optional = Object.create(null); state.localSources = Object.create(null);
        controls.forEach(item => { if (item.sourceControl) item.sourceControl.value = ""; if (item.overrideControl) item.overrideControl.checked = false; });
      }
      state.districtCampus = campus;
      state.campus_name = campus ? campus.campus_name : "";
      state.campus_id = campus ? campus.campus_id : null;
      document.getElementById("campus-id-value").textContent = campus ? configuredText(campus.campus_id) : "Select a campus first";
      syncApplicability();
      renderBaselinePanel();
      const curriculumBody = document.getElementById("readiness-curriculum");
      curriculumBody.replaceChildren();
      if (campus) config.secondaryCurriculumRows(campus).forEach(values => {
        const row = node("tr"); values.forEach(value => row.append(node("td", value))); curriculumBody.append(row);
      });
      const bands = campus ? config.gradeBands(campus) : [];
      document.getElementById("readiness-context").textContent = !campus ? "Select a campus first" : "Grade span: " + campus.grade_span + ". " + (bands.includes("9-12") ? "High-school CCMR and graduation history is separate from targets; confirm the published indicator units, cohort years and any campus-specific pathway definitions." : bands.includes("6-8") ? "High-school-only CCMR and graduation measures: Not Applicable — campus grade span. Middle-school readiness cohorts require district verification." : "VERIFY — confirm the combined/alternative campus grade bands and applicable cohorts.");
      return;
    }
    if (entry.control.disabled) { delete state.optional[entry.control.id]; return; }
    const numeric = entry.definition.type === "percentage" || entry.definition.type === "number";
    state.optional[entry.control.id] = !raw || errorFor(entry) ? null : numeric ? Number(raw) : raw;
    if (entry.sourceControl) state.localSources[entry.control.id] = entry.sourceControl.value.trim();
    renderBaselinePanel();
  }
  function renderBaselinePanel() {
    document.getElementById("campus-baseline-review").hidden = !state.districtCampus;
    const body = document.getElementById("campus-published-baselines"); body.replaceChildren();
    for (const values of config.publicBaselineRows(state.campus_id, state.optional, state.localSources)) {
      const row = node("tr"); values.forEach(value => row.append(node("td", value))); body.append(row);
    }
  }
  function captureInput(event) {
    const entry = controls.get(event.target.id);
    if (!entry) return;
    save(entry);
    if (entry.control.hasAttribute("aria-invalid")) validate(entry);
  }
  function formatValue(field) {
    const status = applicability(field);
    if (field.publicBaseline) { const info = config.getBaselineReview(state.campus_id, field.id, state.optional, state.localSources); return info.text + " · " + info.sourceLabel; }
    if (status.kind === "na") return config.NA_GRADE_SPAN;
    if (status.kind === "pending") return "VERIFY — " + district.pending_value;
    const entered = state.optional[field.id];
    if (entered === null || entered === undefined || entered === "") return "Not provided";
    if (field.type === "percentage") return entered + "%";
    if (field.format === "currency") return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(entered);
    return String(entered);
  }
  function renderReview() {
    document.getElementById("review-campus-name").textContent = state.campus_name;
    document.getElementById("review-campus-id").textContent = configuredText(state.campus_id);
    const districtBody = document.getElementById("review-district-campus");
    districtBody.replaceChildren();
    [
      ["Campus Name", "campus_name"], ["TEA Campus ID", "campus_id"],
      ["Campus Type", "campus_type"], ["Grade Span", "grade_span"],
      ["Intervention Status", "campus_intervention_status"],
      ["TEA Identification / Accountability Indicator(s)", "tea_identification_indicators"],
      ["Board Approval Status", "board_approval_status"],
      ["Submission / Local Maintenance Status", "submission_local_maintenance_status"]
    ].forEach(([label, key]) => {
      const row = node("tr");
      const heading = node("th", label); heading.setAttribute("scope", "row");
      row.append(heading, node("td", configuredText(state.districtCampus && state.districtCampus[key])));
      districtBody.append(row);
    });
    document.getElementById("review-perception-context").textContent = "Survey indicator (district-controlled): " + configuredText(district.perception_indicator_name) + ". Campus baseline entered below; district target: " + configuredText(district.perception_target) + ".";
    const body = document.getElementById("review-metrics");
    body.replaceChildren();
    displayedFields.forEach(field => {
      const row = node("tr");
      row.dataset.fieldId = field.id;
      const status = applicability(field); row.dataset.applicability = status.kind;
      const label = node("th", field.label); label.setAttribute("scope", "row");
      const baseline = node("td", formatValue(field), "baseline-value");
      if (status.kind !== "applicable") baseline.append(node("small", status.reason));
      else if (field.definitionKey) baseline.append(node("small", "District definition / period: " + definitionText(field)));
      const target = targetInfo(field);
      const targetCell = node("td", undefined, "target-" + target.kind);
      targetCell.append(node("strong", target.text), node("small", target.description));
      row.append(label, baseline, targetCell); body.append(row);
    });
  }
  function showStep(index, focus = true) {
    currentStep = index;
    panels.forEach((panel, position) => { panel.hidden = position !== index; });
    progressItems.forEach((item, position) => {
      if (position === index) item.setAttribute("aria-current", "step");
      else item.removeAttribute("aria-current");
      item.dataset.complete = String(position < index);
    });
    document.getElementById("step-status").textContent = "Step " + (index + 1) + " of " + panels.length + " · " + stepLabels[panels[index].dataset.step];
    backButton.disabled = index === 0; nextButton.hidden = index === reviewIndex;
    if (index === reviewIndex) renderReview();
    if (focus) panels[index].querySelector("h2").focus();
  }
  form.addEventListener("input", captureInput);
  form.addEventListener("change", captureInput);
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (currentStep === reviewIndex) return;
    const entries = Array.from(controls.values()).filter(entry => currentStep === reviewIndex - 1 || entry.step === currentStep);
    let firstInvalid = null;
    entries.forEach(entry => {
      if (!validate(entry) && !firstInvalid) firstInvalid = entry;
      save(entry);
    });
    if (firstInvalid) {
      if (firstInvalid.step !== currentStep) showStep(firstInvalid.step);
      focusEntry(firstInvalid); return;
    }
    showStep(currentStep + 1);
  });
  backButton.addEventListener("click", () => { if (currentStep > 0) showStep(currentStep - 1); });

  const output = document.getElementById("cip-output");
  const fullView = document.getElementById("full-cip-view");
  const guideView = document.getElementById("guide-view");
  const fullViewButton = document.getElementById("full-cip-button");
  const guideButton = document.getElementById("guide-button");
  const copyStatus = document.getElementById("copy-status");
  const copyTimers = new Map();

  // Render text nodes only: campus/optional values can never inject HTML.
  function element(tag, text, className) {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    if (className) node.className = className;
    return node;
  }

  function renderBlocks(container, blocks, headingLevel) {
    blocks.forEach((block) => {
      if (block.type === "paragraph") container.append(element("p", block.text));
      else if (block.type === "heading") container.append(element("h" + Math.min(headingLevel, 6), block.text));
      else if (block.type === "list") {
        const list = element("ul");
        block.items.forEach(item => list.append(element("li", item)));
        container.append(list);
      } else if (block.type === "table") {
        const region = element("div", undefined, "table-scroll");
        region.tabIndex = 0;
        region.setAttribute("role", "region");
        region.setAttribute("aria-label", block.caption);
        const table = element("table", undefined, block.rows[0].length === 6 ? "action-table" : "cip-table");
        table.append(element("caption", block.caption));
        const head = element("thead");
        const body = element("tbody");
        block.rows.forEach((cells, rowIndex) => {
          const row = element("tr");
          const headerRow = block.hasHeader && rowIndex === 0;
          cells.forEach((text, columnIndex) => {
            const cell = element(headerRow || columnIndex === 0 ? "th" : "td", text);
            if (headerRow) cell.setAttribute("scope", "col");
            else if (columnIndex === 0) cell.setAttribute("scope", "row");
            if (text === "District confirmation needed") cell.className = "unresolved-value";
            row.append(cell);
          });
          (headerRow ? head : body).append(row);
        });
        if (block.hasHeader) table.append(head);
        table.append(body);
        region.append(table);
        container.append(region);
      }
    });
  }

  function destinationLabel(destination) {
    const label = element("div", undefined, "plan4learning-destination");
    label.append(element("strong", "COPY/PASTE TO PLAN4LEARNING:"));
    label.append(element("span", destination));
    return label;
  }

  function renderSection(item, parent, level = 3) {
    const section = element("section", undefined, level === 3 ? "cip-section" : "cip-child");
    section.dataset.sectionId = item.id;
    if (item.id === "identification") section.className += " campus-identification";
    // Retain the official three-level CNA structure. Other entry-block titles
    // are small captions rather than another layer of oversized headings.
    if (level === 3 || !item.destination || item.id === "prioritized-problems" || item.id.startsWith("demographics-") ||
        item.id.startsWith("student-learning-") || item.id.startsWith("school-processes-") ||
        item.id.startsWith("perceptions-")) {
      section.append(element("h" + Math.min(level, 6), item.title));
    } else {
      section.append(element("p", item.title, "cip-block-title"));
    }
    if (item.destination) section.append(destinationLabel(item.destination));
    renderBlocks(section, item.blocks, level + 1);
    item.children.forEach(child => renderSection(child, section, level + 1));
    parent.append(section);
  }

  function selectView(guide) {
    fullView.hidden = guide;
    guideView.hidden = !guide;
    fullViewButton.setAttribute("aria-pressed", String(!guide));
    guideButton.setAttribute("aria-pressed", String(guide));
    copyStatus.textContent = "";
  }

  // Clipboard access is user-initiated and local. No server receives the content.
  async function copySection(text, button, fallback, title, statusElement = copyStatus) {
    try {
      let copied = false;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        try { await navigator.clipboard.writeText(text); copied = true; } catch { /* Try local fallback. */ }
      }
      if (!copied) {
        fallback.hidden = false;
        fallback.value = text;
        fallback.focus();
        fallback.select();
        copied = typeof document.execCommand === "function" && document.execCommand("copy");
      }
      if (!copied) {
        statusElement.textContent = "Automatic copy is unavailable. The section text is selected below; press Ctrl+C (Command+C on Mac) to copy it.";
        return;
      }
      fallback.hidden = true;
      button.focus();
      button.textContent = "Copied";
      button.setAttribute("aria-label", "Copied " + title);
      statusElement.textContent = "Copied " + title + ".";
      clearTimeout(copyTimers.get(button));
      copyTimers.set(button, setTimeout(() => {
        button.textContent = "Copy";
        button.setAttribute("aria-label", "Copy " + title);
        copyTimers.delete(button);
      }, 1800));
    } catch {
      fallback.hidden = false;
      fallback.value = text;
      fallback.focus();
      fallback.select();
      statusElement.textContent = "Select the section text below and press Ctrl+C (Command+C on Mac).";
    }
  }

  window.BISD_CIP_CLIPBOARD = Object.freeze({ copySection });

  function renderGuide(items) {
    const container = document.getElementById("guide-sections");
    container.replaceChildren();
    items.forEach((item) => {
      const card = element("article", undefined, "guide-card");
      card.dataset.guideId = item.id;
      card.append(element("h3", item.title));
      if (item.destination) card.append(destinationLabel(item.destination));
      const content = element("div", undefined, "guide-content");
      renderBlocks(content, item.blocks, 4);
      const button = element("button", "Copy", "button-secondary copy-button");
      button.type = "button";
      button.setAttribute("aria-label", "Copy " + item.title);
      const fallback = element("textarea", undefined, "copy-fallback");
      fallback.readOnly = true;
      fallback.hidden = true;
      fallback.rows = 8;
      fallback.setAttribute("aria-label", "Manual copy text for " + item.title);
      button.addEventListener("click", () => copySection(item.text, button, fallback, item.title));
      card.append(content, button, fallback);
      container.append(card);
    });
  }

  document.getElementById("generate-button").addEventListener("click", () => {
    if (!GENERATION_READY || !district.generation_ready || currentStep !== reviewIndex) return;
    // Use the existing validators unchanged; generation cannot bypass the form.
    let firstInvalid = null;
    controls.forEach((entry) => {
      if (!validate(entry) && !firstInvalid) firstInvalid = entry;
      save(entry);
    });
    if (firstInvalid) {
      showStep(firstInvalid.step);
      focusEntry(firstInvalid);
      return;
    }
    const error = document.getElementById("generation-error");
    error.hidden = true;
    try {
      const generated = window.BISD_CIP_GENERATOR.build(state, config);
      copyTimers.forEach(timer => clearTimeout(timer));
      copyTimers.clear();
      fullView.replaceChildren();
      generated.sections.forEach(item => renderSection(item, fullView));
      renderGuide(generated.guide);
      document.getElementById("output-campus-name").textContent = generated.campus;
      document.getElementById("output-school-year").textContent = generated.schoolYear + " Secondary Campus Improvement Plan";
      document.getElementById("draft-status").textContent = generated.status;
      const confirmationList = document.getElementById("district-confirmation-list");
      confirmationList.replaceChildren(...generated.pendingItems.map(item => element("li", item.label + ": District confirmation needed")));
      document.getElementById("district-confirmations").hidden = generated.pendingItems.length === 0;
      selectView(false);
      form.hidden = true;
      output.hidden = false;
      document.getElementById("output-heading").focus();
    } catch (generationError) {
      error.textContent = "Content could not be generated. Review the campus entries and district configuration, then try again.";
      error.hidden = false;
      console.error(generationError);
    }
  });
  document.getElementById("print-button").addEventListener("click", () => {
    if (!output.hidden) window.print();
  });
  fullViewButton.addEventListener("click", () => selectView(false));
  guideButton.addEventListener("click", () => selectView(true));
  document.getElementById("back-to-edit").addEventListener("click", () => {
    output.hidden = true;
    form.hidden = false;
    showStep(reviewIndex);
  });

  document.getElementById("generate-button").disabled = !GENERATION_READY;

  // Clear browser-restored values: each refresh starts a new draft.
  form.reset();
  syncApplicability();
  showStep(0, false);
  document.getElementById("loading-message").hidden = true;
  form.hidden = false;
})();
