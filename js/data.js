"use strict";

// District-owned Secondary configuration. Source: reference/Beaumont_ISD_2026-27_Secondary_CIP_Targets_Prefilled.pdf.
// Targets are planning benchmarks, not campus inputs or a claim of district adoption.
// Roster: data/Beaumont_ISD_Campuses_TEA_2026.xlsx, "Campus List" worksheet.
// Only the seven unambiguous Secondary/Yes records are selectable provisionally.
// IDs remain strings. Reconciliation records are excluded pending district review.
// Campus metric_applicability overrides accept true, false, or the pending marker,
// by field ID or applicabilityKey (tested, rated, grade_level_readiness,
// algebra_readiness, pathway). Set rated=false for unrated campuses, tested=false
// for untested campuses, and false for an inapplicable cohort. These defaults ask
// for reported baselines; they do not certify a campus rating or cohort definition.
// CCMR always follows campus_type: HS applies, MS does not; Mixed requires an
// explicit ccmr_applicable boolean. Unknown/missing Mixed settings stay pending.
const DISTRICT_CONFIG = Object.freeze({
  "school_year": "2026-27",
  "baseline_year": 2026,
  "pending_value": "District confirmation needed",
  "generation_ready": true,
  "campus_list_is_temporary": true,
  "campus_list_note": "Provisional Secondary campus list from the supplied district workbook. Final campus eligibility, names and IDs remain subject to BISD validation. Campuses requiring reconciliation are not selectable.",
  "campus_types": [
    "Middle School",
    "High School",
    "Mixed / Other Secondary"
  ],
  "campuses": [
    {
      "campus_name": "Beaumont United HS",
      "campus_id": "123910014",
      "campus_type": "High School",
      "grade_span": "Grade 9 - Grade 12",
      "campus_intervention_status": "District confirmation needed",
      "tea_identification_indicators": "District confirmation needed",
      "board_approval_status": "District confirmation needed",
      "submission_local_maintenance_status": "District confirmation needed",
      "metric_applicability": {}
    },
    {
      "campus_name": "Dr Martin Luther King Collegiate Academy",
      "campus_id": "123910013",
      "campus_type": "High School",
      "grade_span": "Grade 9 - Grade 12",
      "campus_intervention_status": "District confirmation needed",
      "tea_identification_indicators": "District confirmation needed",
      "board_approval_status": "District confirmation needed",
      "submission_local_maintenance_status": "District confirmation needed",
      "metric_applicability": {}
    },
    {
      "campus_name": "Marshall MS",
      "campus_id": "123910046",
      "campus_type": "Middle School",
      "grade_span": "Grade 6 - Grade 8",
      "campus_intervention_status": "District confirmation needed",
      "tea_identification_indicators": "District confirmation needed",
      "board_approval_status": "District confirmation needed",
      "submission_local_maintenance_status": "District confirmation needed",
      "metric_applicability": {}
    },
    {
      "campus_name": "Odom MS",
      "campus_id": "123910047",
      "campus_type": "Middle School",
      "grade_span": "Grade 6 - Grade 8",
      "campus_intervention_status": "District confirmation needed",
      "tea_identification_indicators": "District confirmation needed",
      "board_approval_status": "District confirmation needed",
      "submission_local_maintenance_status": "District confirmation needed",
      "metric_applicability": {}
    },
    {
      "campus_name": "Smith MS",
      "campus_id": "123910042",
      "campus_type": "Middle School",
      "grade_span": "Grade 6 - Grade 8",
      "campus_intervention_status": "District confirmation needed",
      "tea_identification_indicators": "District confirmation needed",
      "board_approval_status": "District confirmation needed",
      "submission_local_maintenance_status": "District confirmation needed",
      "metric_applicability": {}
    },
    {
      "campus_name": "Vincent MS",
      "campus_id": "123910048",
      "campus_type": "Middle School",
      "grade_span": "Grade 6 - Grade 8",
      "campus_intervention_status": "District confirmation needed",
      "tea_identification_indicators": "District confirmation needed",
      "board_approval_status": "District confirmation needed",
      "submission_local_maintenance_status": "District confirmation needed",
      "metric_applicability": {}
    },
    {
      "campus_name": "West Brook Sr HS",
      "campus_id": "123910008",
      "campus_type": "High School",
      "grade_span": "Grade 9 - Grade 12",
      "campus_intervention_status": "District confirmation needed",
      "tea_identification_indicators": "District confirmation needed",
      "board_approval_status": "District confirmation needed",
      "submission_local_maintenance_status": "District confirmation needed",
      "metric_applicability": {}
    }
  ],
  "campus_review": [
    {
      "campus_name": "South Park Middle",
      "campus_id": "123910045",
      "reason": "Confirm current activation/name and reconcile conflicting inclusion notes."
    },
    {
      "campus_name": "Jefferson Co Youth Acad",
      "campus_id": "123910011",
      "reason": "Confirm eligibility, grade/cohort applicability and accountability indicators."
    },
    {
      "campus_name": "Pathways Learning Ctr",
      "campus_id": "123910006",
      "reason": "Confirm eligibility, grade/cohort applicability and accountability indicators."
    },
    {
      "campus_name": "Pietzsch/Mac Arthur Elem",
      "campus_id": "123910125",
      "reason": "Confirm builder assignment for mixed grades and Secondary cohorts."
    }
  ],
  "target_status": "Planning benchmarks - subject to BISD validation",
  "target_notice": "2026-27 Secondary targets are district-controlled planning benchmarks and remain subject to BISD validation.",
  "target_source": "Secondary CIP PDF, Uniform Secondary Target Key, page 16",
  "perception_indicator_name": "District Stakeholder Perception Survey / Indicator",
  "perception_target": "80% favorable",
  "measurement_definitions": {
    "assessment_cohorts": "District confirmation needed",
    "grade_level_readiness": "District confirmation needed",
    "algebra_readiness": "District confirmation needed",
    "ccmr_cohort": "District confirmation needed",
    "pathway_cohort": "District confirmation needed",
    "perception_scale_period": "District confirmation needed",
    "lost_instructional_time": "District confirmation needed",
    "instructional_fidelity": "District confirmation needed",
    "improvement_milestones": "District confirmation needed",
    "cna_readiness_proxy": "District confirmation needed"
  },
  "targets": {
    "rla_meets_target_pct": {
      "label": "RLA / English STAAR-EOC Meets+",
      "value": 50,
      "format": "percentage",
      "suffix": " or higher",
      "applicability": "tested",
      "source_status": "proposed"
    },
    "math_meets_target_pct": {
      "label": "Mathematics / Algebra STAAR-EOC Meets+",
      "value": 45,
      "format": "percentage",
      "suffix": " or higher",
      "applicability": "tested",
      "source_status": "proposed"
    },
    "domain1_target_score": {
      "label": "Domain 1 / Student Achievement",
      "value": 75,
      "format": "number",
      "suffix": " scaled-score points",
      "applicability": "rated",
      "source_status": "proposed"
    },
    "closing_gaps_target_score": {
      "label": "Closing the Gaps",
      "value": 75,
      "format": "number",
      "suffix": " scaled-score points",
      "applicability": "rated",
      "source_status": "proposed"
    },
    "accountability_target_display": {
      "label": "Overall Accountability",
      "value": "75 score / C",
      "format": "text",
      "suffix": "",
      "applicability": "rated",
      "source_status": "proposed"
    },
    "grade_level_readiness_target_pct": {
      "label": "Grade-Level Readiness / On-Track",
      "value": 75,
      "format": "percentage",
      "suffix": " on track",
      "applicability": "grade_level_readiness",
      "source_status": "proposed"
    },
    "algebra_readiness_target_pct": {
      "label": "Algebra I / Advanced Math Readiness",
      "value": 70,
      "format": "percentage",
      "suffix": " ready",
      "applicability": "algebra_readiness",
      "source_status": "proposed"
    },
    "ccmr_target_pct": {
      "label": "CCMR",
      "value": 75,
      "format": "percentage",
      "suffix": "",
      "applicability": "ccmr",
      "source_status": "proposed"
    },
    "attendance_ada_target_pct": {
      "label": "Average Daily Attendance",
      "value": 95,
      "format": "percentage",
      "suffix": " or higher",
      "applicability": "all",
      "source_status": "proposed"
    },
    "chronic_absenteeism_target_pct": {
      "label": "Chronic Absenteeism",
      "value": 15,
      "format": "percentage",
      "suffix": " or lower",
      "applicability": "all",
      "source_status": "proposed"
    },
    "priority_survey_target": {
      "label": "Priority Stakeholder Survey Indicator",
      "configKey": "perception_target",
      "format": "text",
      "suffix": "",
      "applicability": "all",
      "source_status": "proposed"
    },
    "lost_instructional_time_target_pct": {
      "label": "Discipline / Lost Instructional Time",
      "value": 1,
      "format": "percentage",
      "suffix": " or less of student-days",
      "applicability": "all",
      "source_status": "proposed"
    },
    "instructional_fidelity_target_pct": {
      "label": "Instructional Fidelity",
      "value": 90,
      "format": "percentage-plus",
      "suffix": " monitored classrooms",
      "applicability": "all",
      "source_status": "existing"
    },
    "documented_pathway_target_pct": {
      "label": "Documented Next-Step Pathway",
      "value": 100,
      "format": "percentage",
      "suffix": " of identified cohort",
      "applicability": "pathway",
      "source_status": "existing"
    },
    "improvement_milestones_target_pct": {
      "label": "Improvement Milestones On Track",
      "value": 90,
      "format": "percentage-plus",
      "suffix": " each review cycle",
      "applicability": "all",
      "source_status": "existing"
    }
  }
});

const CAMPUS_FIELDS = Object.freeze([
  {
    "id": "enrollment_baseline",
    "sourceId": "B01",
    "group": "demographics",
    "label": "Current enrollment",
    "type": "number",
    "required": true,
    "enabled": true,
    "help": "Enter the current aggregate student count as a whole number. Enrollment has no numerical target.",
    "min": 0,
    "step": 1,
    "sourceTargetNA": true
  },
  {
    "id": "economically_disadvantaged_pct",
    "sourceId": "B02",
    "group": "demographics",
    "label": "Economically Disadvantaged (%)",
    "type": "percentage",
    "required": true,
    "enabled": true,
    "help": "Enter the reported campus percentage from 0 to 100.",
    "sourceTargetNA": true
  },
  {
    "id": "emergent_bilingual_pct",
    "sourceId": "B03",
    "group": "demographics",
    "label": "Emergent Bilingual (%)",
    "type": "percentage",
    "required": true,
    "enabled": true,
    "help": "Enter the reported campus percentage from 0 to 100.",
    "sourceTargetNA": true
  },
  {
    "id": "special_education_pct",
    "sourceId": "B04",
    "group": "demographics",
    "label": "Special Education (%)",
    "type": "percentage",
    "required": true,
    "enabled": true,
    "help": "Enter the reported campus percentage from 0 to 100.",
    "sourceTargetNA": true
  },
  {
    "id": "attendance_ada_baseline_pct",
    "sourceId": "B15",
    "group": "demographics",
    "label": "Attendance / ADA baseline (%)",
    "type": "percentage",
    "required": true,
    "enabled": true,
    "help": "Enter the reported campus attendance percentage for the district reporting period. This value is reused on Review.",
    "targetKey": "attendance_ada_target_pct"
  },
  {
    "id": "mobility_baseline_pct",
    "sourceId": "B05",
    "group": "demographics",
    "label": "Mobility (%)",
    "type": "percentage",
    "required": true,
    "enabled": true,
    "help": "Enter the reported aggregate campus mobility rate for the district reporting period.",
    "sourceTargetNA": true
  },
  {
    "id": "accountability_baseline_display",
    "sourceId": "B06",
    "group": "academic",
    "label": "2026 Overall Accountability rating / score",
    "type": "text",
    "required": true,
    "enabled": true,
    "help": "Copy the official campus rating, scaled score, or combined result. If the campus is not rated, district configuration must mark this indicator not applicable.",
    "maxLength": 40,
    "targetKey": "accountability_target_display",
    "applicabilityKey": "rated"
  },
  {
    "id": "rla_meets_baseline_pct",
    "sourceId": "B07",
    "group": "academic",
    "label": "2026 RLA / English STAAR-EOC Meets+ (%)",
    "type": "percentage",
    "required": true,
    "enabled": true,
    "help": "Enter the reported Meets Grade Level or Above percentage for the approved RLA/English test cohort. Do not average results across different tests.",
    "definitionKey": "assessment_cohorts",
    "targetKey": "rla_meets_target_pct",
    "applicabilityKey": "tested"
  },
  {
    "id": "math_meets_baseline_pct",
    "sourceId": "B08",
    "group": "academic",
    "label": "2026 Mathematics / Algebra STAAR-EOC Meets+ (%)",
    "type": "percentage",
    "required": true,
    "enabled": true,
    "help": "Enter the reported Meets Grade Level or Above percentage for the approved Mathematics/Algebra test cohort. This is separate from math readiness.",
    "definitionKey": "assessment_cohorts",
    "targetKey": "math_meets_target_pct",
    "applicabilityKey": "tested"
  },
  {
    "id": "domain1_baseline_score",
    "sourceId": "B09",
    "group": "academic",
    "label": "2026 Domain 1 / Student Achievement score",
    "type": "number",
    "required": true,
    "enabled": true,
    "help": "Copy the official scaled score; do not calculate a replacement score.",
    "min": 0,
    "max": 100,
    "step": "any",
    "targetKey": "domain1_target_score",
    "applicabilityKey": "rated"
  },
  {
    "id": "closing_gaps_baseline_score",
    "sourceId": "B10",
    "group": "academic",
    "label": "2026 Closing the Gaps score",
    "type": "number",
    "required": true,
    "enabled": true,
    "help": "Copy the official scaled score for this campus.",
    "min": 0,
    "max": 100,
    "step": "any",
    "targetKey": "closing_gaps_target_score",
    "applicabilityKey": "rated"
  },
  {
    "id": "grade_level_readiness_baseline_pct",
    "sourceId": "B11",
    "group": "readiness",
    "label": "Grade-Level Readiness / On-Track baseline (%)",
    "type": "percentage",
    "required": true,
    "enabled": true,
    "help": "Enter the aggregate percentage on track for the district-defined indicator and cohort.",
    "definitionKey": "grade_level_readiness",
    "targetKey": "grade_level_readiness_target_pct",
    "applicabilityKey": "grade_level_readiness"
  },
  {
    "id": "algebra_readiness_baseline_pct",
    "sourceId": "B12",
    "group": "readiness",
    "label": "Algebra I / Advanced Math Readiness baseline (%)",
    "type": "percentage",
    "required": true,
    "enabled": true,
    "help": "Enter the percentage ready on the district-approved criteria for the applicable cohort. This is not the Algebra EOC Meets+ result.",
    "definitionKey": "algebra_readiness",
    "targetKey": "algebra_readiness_target_pct",
    "applicabilityKey": "algebra_readiness"
  },
  {
    "id": "ccmr_baseline_pct",
    "sourceId": "B13",
    "group": "readiness",
    "label": "CCMR baseline (%)",
    "type": "percentage",
    "required": true,
    "enabled": true,
    "help": "Enter the reported percentage attaining CCMR for the approved high-school cohort. Applicability comes from campus configuration.",
    "definitionKey": "ccmr_cohort",
    "targetKey": "ccmr_target_pct",
    "applicabilityKey": "ccmr"
  },
  {
    "id": "documented_pathway_baseline_pct",
    "sourceId": "B14",
    "group": "readiness",
    "label": "Students with Documented Next-Step Pathway baseline (%)",
    "type": "percentage",
    "required": true,
    "enabled": true,
    "help": "Enter the current percentage of the identified cohort with a documented next-step pathway. Do not assume the baseline is 100%.",
    "definitionKey": "pathway_cohort",
    "targetKey": "documented_pathway_target_pct",
    "applicabilityKey": "pathway"
  },
  {
    "id": "chronic_absenteeism_baseline_pct",
    "sourceId": "B16",
    "group": "climate",
    "label": "Chronic Absenteeism baseline (%)",
    "type": "percentage",
    "required": true,
    "enabled": true,
    "help": "Enter the reported aggregate campus chronic absenteeism rate.",
    "targetKey": "chronic_absenteeism_target_pct"
  },
  {
    "id": "perception_baseline_pct",
    "sourceId": "B17",
    "group": "climate",
    "label": "Priority Stakeholder Survey baseline (% favorable)",
    "type": "percentage",
    "required": true,
    "enabled": true,
    "help": "Enter the campus percentage favorable on the district-selected indicator. The district sets the instrument, respondent group, scale and reporting period.",
    "definitionKey": "perception_scale_period",
    "targetKey": "priority_survey_target"
  },
  {
    "id": "lost_instructional_time_baseline_pct",
    "sourceId": "B18",
    "group": "climate",
    "label": "Discipline / Lost Instructional Time baseline (%)",
    "type": "percentage",
    "required": true,
    "enabled": true,
    "help": "Enter lost instructional time as a percentage of student-days using the district-approved definition and period.",
    "definitionKey": "lost_instructional_time",
    "targetKey": "lost_instructional_time_target_pct"
  },
  {
    "id": "instructional_fidelity_baseline_pct",
    "sourceId": "B19",
    "group": "implementation",
    "label": "Instructional Fidelity baseline (%)",
    "type": "percentage",
    "required": true,
    "enabled": true,
    "help": "Enter the percentage of monitored classrooms meeting the district-approved instructional expectations. Use one approved measure.",
    "definitionKey": "instructional_fidelity",
    "targetKey": "instructional_fidelity_target_pct"
  },
  {
    "id": "improvement_milestones_baseline_pct",
    "sourceId": "B20",
    "group": "implementation",
    "label": "Improvement Milestones On Track baseline (%)",
    "type": "percentage",
    "required": true,
    "enabled": true,
    "help": "Enter the percentage of required improvement milestones currently on track in the configured review cycle.",
    "definitionKey": "improvement_milestones",
    "targetKey": "improvement_milestones_target_pct"
  },
  {
    "id": "sce_allocation_amount",
    "sourceId": "B21",
    "group": "program",
    "label": "Total SCE allocation",
    "type": "number",
    "required": true,
    "enabled": true,
    "help": "Enter the confirmed campus allocation in dollars. Use zero only for a confirmed zero allocation; personnel are completed in district systems.",
    "min": 0,
    "step": "any",
    "format": "currency",
    "sourceTargetNA": true
  }
]);

function resolveApplicability(field, campus) {
  if (!campus) return { kind: "pending", reason: "Select a campus first" };
  const overrides = campus.metric_applicability || {};
  if (field.applicabilityKey === "ccmr") {
    if (campus.campus_type === "Middle School") return { kind: "na", reason: "CCMR is high school only" };
    if (campus.campus_type === "High School") {
      if (overrides[field.id] === false || overrides.ccmr === false) return { kind: "na", reason: "No applicable CCMR cohort configured" };
      if (overrides[field.id] !== undefined || overrides.ccmr !== undefined) {
        const override = overrides[field.id] ?? overrides.ccmr;
        if (override !== true) return { kind: "pending", reason: DISTRICT_CONFIG.pending_value };
      }
      return { kind: "applicable", reason: "High-school CCMR cohort" };
    }
    if (campus.campus_type !== "Mixed / Other Secondary" || typeof campus.ccmr_applicable !== "boolean") {
      return { kind: "pending", reason: DISTRICT_CONFIG.pending_value };
    }
    return { kind: campus.ccmr_applicable ? "applicable" : "na", reason: "District-configured CCMR applicability" };
  }
  const override = overrides[field.id] ?? (field.applicabilityKey ? overrides[field.applicabilityKey] : undefined);
  if (override === false) return { kind: "na", reason: "Not applicable for the district-configured campus indicator/cohort" };
  if (override !== undefined && override !== true) return { kind: "pending", reason: DISTRICT_CONFIG.pending_value };
  return { kind: "applicable", reason: "Campus baseline" };
}

// B identifiers correspond to SECONDARY_GAP_ANALYSIS.md. B17 ownership is now
// campus baseline per the conversion instruction; definitions and target stay district-owned.
const SOURCE_BINDINGS = Object.freeze(Object.fromEntries(CAMPUS_FIELDS.map(field => [field.sourceId, {
  input: field.id, target: field.targetKey || null, applicability: field.applicabilityKey || "all"
}])));
window.BISD_CIP_CONFIG = Object.freeze({ DISTRICT_CONFIG, CAMPUS_FIELDS, SOURCE_BINDINGS, resolveApplicability });
