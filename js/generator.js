"use strict";

(() => {
  // Secondary source: reference/Beaumont_ISD_2026-27_Secondary_CIP_Targets_Prefilled.pdf.
  // Fixed narratives/actions transcribed from pages 1-15; only layout wraps and
  // district-neutral/browser-workflow wording are normalized. Targets resolve from
  // DISTRICT_CONFIG. Both output modes share the same resolved section model.
  const SOURCE = {
  "provenance": "Secondary CIP source PDF, physical pages 1-15; targets from configuration based on page 16.",
  "purpose": "This document is designed to function as the campus working source for Plan4Learning. BISD pre-populates the common CNA narrative, strengths, problem statements, root causes, goals, strategies, action steps, owners, evidence, and review cadence. Before the plan is sent to the campus, the district should also pre-populate campus identifiers and any metrics already available from confirmed TEA or district sources. Campus leaders should update the remaining campus metric fields, review the completed plan for accuracy, and then COPY AND PASTE the finished content into the matching Plan4Learning fields.",
  "campus_task": "Complete the remaining campus metric fields, review the district-provided language for accuracy, and copy and paste the completed content section-by-section into Plan4Learning.",
  "demographics": {
    "title": "Demographics",
    "summary": "This secondary campus serves students within Beaumont ISD and operates within a districtwide transformation model centered on instructional excellence, leadership density, and operational coherence. The campus community includes students from multiple racial/ethnic groups and special populations, including economically disadvantaged students, emergent bilingual students, students receiving special education services, mobile students, and students requiring accelerated academic or postsecondary readiness support. Campus planning will disaggregate academic, attendance, behavior, course completion, readiness, and implementation outcomes by student group so that supports can be differentiated while maintaining a common instructional model.",
    "strengths": [
      "The campus is supported by a coherent districtwide instructional and school-effectiveness model rather than a collection of disconnected campus initiatives.",
      "District systems provide common expectations for curriculum, lesson preparation, formative assessment, observation, coaching, attendance, student support, and leadership routines.",
      "Campus leaders have access to district and campus data that can be disaggregated by student group and used to identify students requiring additional academic, attendance, or behavioral support."
    ],
    "problems": [
      [
        "Student needs vary across demographic and special-population groups, requiring differentiated support while maintaining consistent access to strong Tier 1 instruction.",
        "Variation in attendance, mobility, academic readiness, language needs, disability status, and other student factors increases the need for consistent progress monitoring and rapid assignment of targeted supports."
      ],
      [
        "Staffing stability and adult capacity can constrain sustained improvement at high-need campuses.",
        "Vacancies, certification gaps, variation in teacher experience/effectiveness, and inconsistent access to differentiated coaching can limit reliable implementation of the BISD instructional model."
      ]
    ]
  },
  "studentLearning": {
    "title": "Student Learning",
    "summary": "Student learning priorities are anchored in grade-level mastery, growth, Closing the Gaps performance, and preparation for the next educational transition. The campus will use STAAR/EOC, district/local assessments, course performance, Demonstrations of Learning, student work, subgroup outcomes, and readiness indicators to identify strengths, gaps, and required instructional responses. Secondary campuses will also monitor Algebra I/advanced-course readiness, course completion, and, where applicable, CCMR pathway progress.",
    "strengths": [
      "The district has established a common instructional model with clear expectations for curriculum, lesson preparation, gradual release, engagement, DOL use, differentiation, and teacher feedback.",
      "PLC and Demo Day structures provide recurring opportunities to internalize lessons, anticipate misconceptions, rehearse delivery, and calibrate student evidence before instruction.",
      "District and campus performance reviews create a recurring structure for identifying off-trajectory grades, student groups, classrooms, and individual students and assigning follow-up actions."
    ],
    "problems": [
      [
        "Secondary academic performance requires stronger consistency in grade-level Tier 1 instruction and timely intervention.",
        "Variation in curriculum implementation, lesson internalization, DOL use, differentiation, and teacher coaching creates uneven student access to grade-level learning."
      ],
      [
        "Too many students enter key transition points without a clear, monitored academic or postsecondary readiness pathway.",
        "Student-level readiness data and next actions are not yet consistently owned, monitored, and escalated across teachers, counselors, campus leaders, and district support teams."
      ]
    ]
  },
  "processes": {
    "title": "School Processes & Programs",
    "summary": "The campus will implement the Beaumont ISD instructional and operational model as the primary structure for improvement rather than treating the CIP as a separate initiative. Instructional work will be organized through the Accelerated Instructional Excellence Framework (AIEF), district-provided curriculum, weekly PLC preparation, Demo Day rehearsal, gradual release, intentional engagement, daily Demonstrations of Learning, purposeful differentiation, same-day second teach/acceleration, Coaching in the Moment, and scored spot observations. Campus leadership will use recurring administrative huddles, performance reviews, attendance routines, and student-support systems to protect instructional time and address implementation barriers. Where the campus is subject to LIP, TIP, or TAP requirements, those requirements will be integrated into this same improvement architecture.",
    "strengths": [
      "A common district instructional framework provides clear, observable expectations for classroom practice and adult development.",
      "Campus leaders have structured routines for PLCs, Demo Day, classroom observation, coaching, administrative huddles, and performance monitoring.",
      "District support can be differentiated by campus need without requiring campuses to design separate improvement systems."
    ],
    "problems": [
      [
        "Campus improvement depends on consistent implementation of the district instructional model across classrooms, grade levels, and content areas.",
        "Required routines are not yet implemented with consistent fidelity, frequency, and follow-through in every classroom."
      ],
      [
        "Improvement planning, intervention requirements, and daily campus work can become fragmented if managed as separate compliance processes.",
        "CIP/LIP/TIP/TAP requirements, academic monitoring, staffing, attendance, and instructional implementation have not always been managed through one integrated performance-management routine."
      ]
    ]
  },
  "perceptions": {
    "title": "Perceptions",
    "summary": "The campus will use student, family, and staff feedback; attendance and engagement indicators; discipline and safety data; family communication records; and available climate/perception measures to understand the experience of the campus community. The district expectation is that students are safe, supported, engaged in learning, and able to develop self-management skills. Family communication should connect directly to attendance, academic progress, behavior expectations, student support, and intervention needs.",
    "strengths": [
      "The district has established common expectations for student behavior, family communication, attendance support, and protection of instructional time.",
      "Campus leaders have multiple channels for gathering student, family, and staff input and for communicating expectations and supports.",
      "Attendance, behavior, and perception data can be incorporated into recurring campus performance reviews rather than treated as isolated measures."
    ],
    "problems": [
      [
        "Attendance, student engagement, school climate, and stakeholder perception can reduce instructional time and weaken connection to school when concerns are not addressed quickly.",
        "Attendance outreach, behavior supports, family communication, and student-support follow-up are not yet implemented with sufficient consistency for every student requiring intervention."
      ]
    ]
  },
  "prioritized": [
    [
      "Academic achievement is below the trajectory required to meet district and campus performance expectations.",
      "Inconsistent fidelity to the district instructional model creates variability in Tier 1 instruction and student response.",
      "Goal 1"
    ],
    [
      "Students need stronger, earlier ownership of readiness pathways and transition outcomes.",
      "Readiness data, course/pathway planning, and student-level next actions are not yet consistently monitored from early secondary grades through graduation.",
      "Goal 2"
    ],
    [
      "Attendance and chronic absenteeism reduce learning time and contribute to academic and enrollment challenges.",
      "Campus attendance ownership, intervention, communication, and follow-up are not yet consistently embedded in daily campus systems.",
      "Goal 3"
    ],
    [
      "The campus must improve overall accountability performance and reduce performance gaps among student groups.",
      "Instructional implementation, staffing, leadership routines, attendance, and performance monitoring require greater consistency and intensity.",
      "Goal 4"
    ]
  ],
  "goals": [
    {
      "number": 1,
      "title": "Academic Achievement and Instructional Excellence",
      "campusGoal": "The campus will improve secondary Reading/ELA and Mathematics outcomes by strengthening consistent Tier 1 instruction, formative response, intervention, and student mastery.",
      "alignment": "Supports Beaumont ISD Board Outcome Goals 1, 2, and 5 by extending coherent literacy/mathematics instruction and improving overall campus performance.",
      "problem": "Secondary Reading/ELA and Mathematics performance require stronger consistency in core instruction and timely response to student evidence.",
      "causes": [
        "Implementation of AIEF, district-provided curriculum, lesson internalization, DOL use, and purposeful differentiation is not yet sufficiently consistent across classrooms.",
        "DOL/common-assessment evidence does not always result in timely re-teach, acceleration, or student-specific intervention.",
        "Coaching in the Moment, scored spot observations, PLC preparation, and Demo Day rehearsal are not yet fully embedded as one adult-development cycle.",
        "Student performance gaps require more precise monitoring by grade, content, teacher, and student group."
      ],
      "actions": [
        [
          "1.1",
          "Implement AIEF and district-provided curriculum in secondary RLA/English and Mathematics with common objectives, gradual release, intentional engagement, and daily evidence of mastery.",
          "Principal / Content Teams",
          "2026-27",
          "Curriculum evidence; DOL artifacts; observations",
          "Quarterly"
        ],
        [
          "1.2",
          "Use weekly PLCs to internalize upcoming lessons, anticipate misconceptions, review student work/DOLs, and determine re-teach/extension before first delivery.",
          "Principal / Teachers",
          "Weekly",
          "PLC agendas; lesson artifacts",
          "Quarterly"
        ],
        [
          "1.3",
          "Conduct Demo Day rehearsal and micro at-bats to strengthen explanations, modeling, pacing, questioning, and student engagement.",
          "Principal / Leadership Team",
          "Weekly",
          "Demo Day/rehearsal evidence",
          "Quarterly"
        ],
        [
          "1.4",
          "Use DOL/common-assessment results to drive same-day or immediate differentiation, intervention, second teach, and extension.",
          "Teachers / Campus Leaders",
          "Daily / Weekly",
          "DOL data; intervention rosters",
          "Quarterly"
        ],
        [
          "1.5",
          "Implement Coaching in the Moment and scored spot observations with differentiated support based on teacher and content-area need.",
          "Principal / APs",
          "2026-27",
          "Observation tracker; coaching records",
          "Quarterly"
        ],
        [
          "1.6",
          "Review academic, subgroup, classroom-implementation, and intervention evidence through recurring campus performance reviews and assign corrective actions when off trajectory.",
          "Principal / Campus Team",
          "Monthly / Quarterly",
          "Campus scorecard; action tracker",
          "Quarterly"
        ]
      ]
    },
    {
      "number": 2,
      "title": "Student Readiness and Postsecondary Pathways",
      "campusGoal": "The campus will strengthen student readiness for the next educational transition by ensuring each student has a monitored academic and postsecondary pathway appropriate to grade level.",
      "alignment": "Supports Beaumont ISD Board Outcome Goal 3 (CCMR) and Project Acceleration priorities for middle/high school readiness.",
      "problem": "Students need earlier, more coherent ownership of accelerated academics, course completion, and postsecondary readiness pathways.",
      "causes": [
        "Readiness is not yet consistently developed as a multi-year pipeline with explicit student-level monitoring and next actions.",
        "Ownership for pathway planning can be fragmented across teachers, counselors, CTE/CCMR staff, campus leadership, and district support teams.",
        "Students need earlier access to accelerated mathematics, rigorous reading/writing, advanced coursework, dual credit, CTE/IBC, and targeted readiness supports."
      ],
      "actions": [
        [
          "2.1",
          "Maintain a student-level readiness/pathway tracker identifying current status, next action, owner, and expected completion date.",
          "Counselors / Campus Team",
          "2026-27",
          "Active tracker; student action lists",
          "Quarterly"
        ],
        [
          "2.2",
          "For middle school, strengthen math acceleration and readiness so more students are prepared for Algebra I before or by ninth grade.",
          "Principal / Math Team",
          "2026-27",
          "Readiness criteria; course sequence",
          "Quarterly"
        ],
        [
          "2.3",
          "For high school, conduct monthly CCMR reviews focused on students without an earned indicator or who are off pathway and assign specific next actions.",
          "Principal / CCMR Team",
          "Monthly",
          "CCMR tracker; action lists",
          "Quarterly"
        ],
        [
          "2.4",
          "Strengthen TSI/college readiness through multi-year reading, writing, and mathematics preparation rather than senior-year remediation.",
          "Academics / Counselors",
          "2026-27",
          "Readiness data; intervention rosters",
          "Quarterly"
        ],
        [
          "2.5",
          "Expand and monitor equitable access to high-value pathways, including advanced coursework, dual credit, CTE/IBC, OnRamps, Early College planning, military readiness, and other qualifying options as applicable.",
          "Counselors / CTE / CCMR",
          "Ongoing",
          "Participation and attainment data",
          "Quarterly"
        ]
      ]
    },
    {
      "number": 3,
      "title": "Safe, Supportive, and Engaging Schools",
      "campusGoal": "The campus will increase student attendance, reduce chronic absenteeism, protect instructional time, and strengthen student/family engagement and support.",
      "alignment": "Beaumont ISD Board Outcome Goal 4: improve stakeholder perception by ensuring students are safe, supported, and able to develop self-management skills.",
      "problem": "Attendance, chronic absenteeism, behavior, and inconsistent support can reduce instructional time and weaken student connection to school.",
      "causes": [
        "Attendance outreach, intervention, and escalation are not yet implemented with sufficient consistency for all students requiring support.",
        "Behavior and operational routines do not always protect the learning environment and preserve instructional minutes consistently.",
        "Family communication is not always connected to attendance, academic progress, behavior expectations, and available supports.",
        "Campus leadership routines require consistent evidence review and rapid follow-through on identified barriers."
      ],
      "actions": [
        [
          "3.1",
          "Implement the district attendance/truancy workflow with campus ownership for threshold identification, outreach, notices, intervention, and follow-through.",
          "Principal / Attendance Team",
          "2026-27",
          "Attendance reports; outreach logs",
          "Quarterly"
        ],
        [
          "3.2",
          "Use weekly attendance reviews to identify students requiring escalating support and connect attendance interventions to academic, behavior, and family-support needs.",
          "Attendance Team / Counselor",
          "Weekly",
          "Intervention roster; contact notes",
          "Quarterly"
        ],
        [
          "3.3",
          "Implement BISD student behavior expectations consistently and protect instructional time through classroom-management, operational routines, and prompt support for disruption.",
          "Principal / Staff",
          "2026-27",
          "Discipline trends; walkthrough evidence",
          "Quarterly"
        ],
        [
          "3.4",
          "Implement morning/end-of-day administrative huddles to align priorities, review evidence, identify gaps, and assign immediate follow-up actions.",
          "Campus Leadership Team",
          "Daily",
          "Huddle notes; assigned actions",
          "Quarterly"
        ],
        [
          "3.5",
          "Coordinate clear family communication around attendance, academic progress, behavior expectations, student support, and intervention options.",
          "Principal / Staff",
          "Ongoing",
          "ParentSquare/outreach evidence",
          "Quarterly"
        ],
        [
          "3.6",
          "Monitor attendance, chronic absenteeism, discipline, student support, and perception data during recurring campus performance reviews and adjust supports based on evidence.",
          "Principal / Campus Team",
          "Monthly / Quarterly",
          "Campus performance materials",
          "Quarterly"
        ]
      ]
    },
    {
      "number": 4,
      "title": "Improve Overall Campus Performance",
      "campusGoal": "The campus will improve overall accountability performance by strengthening instructional quality, adult capacity, attendance, readiness, and disciplined implementation of the BISD improvement model.",
      "alignment": "Beaumont ISD Board Outcome Goal 5: increase the percentage of students attending A- or B-rated schools from 15% to 50% by August 2030.",
      "problem": "The campus must improve overall accountability performance and sustain a trajectory toward C-or-better and ultimately A/B performance.",
      "causes": [
        "Instructional implementation is not yet sufficiently consistent across classrooms and content areas.",
        "Staffing stability, certification, adult effectiveness, and leadership density can constrain the speed and sustainability of improvement.",
        "Campus monitoring has not always integrated academics, readiness, attendance, staffing, leadership, and intervention milestones into one performance-management routine.",
        "Compliance requirements must reinforce rather than compete with daily instructional improvement."
      ],
      "actions": [
        [
          "4.1",
          "Implement district instructional systems with fidelity, including curriculum, DOL/LEAD, second teach, acceleration, protected instructional time, and aligned schedules.",
          "Principal / Campus Team",
          "2026-27",
          "Walkthroughs; DOL/intervention evidence",
          "Quarterly"
        ],
        [
          "4.2",
          "Use differentiated observation, Coaching in the Moment, spot observations, and job-embedded support to strengthen teacher practice.",
          "Principal / APs",
          "2026-27",
          "Observation/coaching evidence",
          "Quarterly"
        ],
        [
          "4.3",
          "Monitor staffing stability, certification, vacancies, and support assignments and escalate gaps that threaten instructional continuity.",
          "Principal / Schools / HR",
          "Monthly",
          "Staffing dashboard; support plan",
          "Quarterly"
        ],
        [
          "4.4",
          "Conduct differentiated campus performance reviews using academics, readiness, implementation, attendance, staffing, leadership, and intervention-plan milestones.",
          "Principal / EDSO",
          "Monthly / Quarterly",
          "Campus scorecard; assigned actions",
          "Quarterly"
        ],
        [
          "4.5",
          "Integrate CIP/LIP/TIP/TAP requirements into one campus improvement architecture and maintain required evidence in Plan4Learning.",
          "Principal / District Support",
          "Per required timeline",
          "Completed entries; milestone evidence",
          "Quarterly"
        ]
      ]
    }
  ],
  "sceSummary": "SCE resources will supplement the regular education program by providing allowable academic intervention, acceleration, attendance/dropout-prevention support, targeted staffing, tutoring, progress monitoring, and other services for students who are at risk of dropping out or who have not performed satisfactorily on required assessments. SCE-funded supports will be aligned to the campus CNA and the goals/strategies in this CIP. Finance/Federal Programs will validate final program coding, personnel allocations, and supplement-not-supplant requirements.",
  "scePersonnel": "District HR/Finance will pre-populate the final personnel roster in Plan4Learning. Campus leaders should validate that assigned SCE-funded personnel are accurately reflected.",
  "titleI": [
    {
      "title": "1.1 Description of CNA Process",
      "text": "The campus comprehensive needs assessment (CNA) is developed through review of current and historical campus data, including student achievement and growth, attendance, discipline, demographics, staffing, special-program participation, implementation evidence, and stakeholder feedback. Campus leadership reviews multiple measures of data, identifies strengths and problem statements, determines root causes, and prioritizes needs aligned to Beaumont ISD Board Outcome Goals, Elevate Beaumont, and the BISD Instructional Playbook. The CNA informs the campus goals, strategies, resource alignment, and intervention priorities in this plan. Progress is reviewed during quarterly formative reviews and the CNA is refreshed annually using the most current available evidence."
    },
    {
      "title": "1.2 Location for Evidence of Multiple Meetings Held",
      "text": "Evidence of campus planning and stakeholder meetings, including agendas, dates, notes/minutes, and sign-in or attendance documentation, will be maintained in the district-approved Title I documentation repository (Title1Crate, if applicable) and/or the campus improvement-plan evidence folder. The campus principal will ensure documentation is available for district or TEA review upon request."
    },
    {
      "title": "2.1 Timeline for Schoolwide Program / CIP Development",
      "text": "The campus plan is developed during the fall planning cycle using district-provided templates, current TEA/accountability data, local campus evidence, and district priorities. District and campus leaders validate campus-specific baselines and targets, review problem statements and root causes, confirm strategies and resources, and complete required stakeholder review before final approval. Quarterly formative reviews are used throughout the year to document implementation status, student progress, barriers, and required adjustments."
    },
    {
      "title": "2.2 Stakeholders",
      "text": "Campus staff, families, community members, and other required stakeholders participate in the campus planning process through the campus-level planning and decision-making structure, public/stakeholder meetings, surveys or feedback opportunities, and review of campus data and proposed improvement priorities. Feedback is used to validate needs, strengthen strategies, and identify barriers to implementation. Required stakeholder lists, roles, and evidence of participation are maintained with campus planning documentation."
    },
    {
      "title": "2.3 Description of Plan Availability, Format, and Language",
      "text": "The approved Campus Improvement Plan will be made available to staff, families, and the public through district/campus communication channels and the district website, as applicable. The campus will provide the plan or key information in an understandable and accessible format and will coordinate translation or language access when needed so families can meaningfully understand campus priorities and planned supports."
    },
    {
      "title": "2.4 Description of Plan Coordination (if applicable)",
      "text": "The CIP coordinates campus improvement work with applicable federal, state, and local programs and resources, including Title I, State Compensatory Education, Title II, Title III, IDEA, school-improvement funds, student-support services, attendance interventions, and other district initiatives. Where the campus is identified for LIP, TIP, or TAP requirements, those requirements are integrated into the same campus improvement architecture so that compliance activities reinforce rather than compete with daily instructional improvement."
    },
    {
      "title": "2.5 Statutorily Required Descriptions",
      "text": "The strategies in this CIP address the required Title I schoolwide elements through standards-aligned instruction, student progress monitoring, targeted academic intervention and acceleration, teacher/principal quality and development, parent/family engagement, transition supports, services for special populations, discipline monitoring, and coordination of federal/state/local resources. Plan4Learning strategy-level statutory descriptors should be selected to align each strategy with the applicable Title I requirement."
    },
    {
      "title": "3.1 Evaluation of Program Effectiveness",
      "text": "Program effectiveness will be evaluated through quarterly formative reviews and an annual summative review. Campus leadership will examine student achievement and growth, attendance, discipline, implementation evidence, subgroup outcomes, staffing, stakeholder perception, and other measures aligned to the goals in this plan. Review notes, progress ratings, and assigned follow-up actions will be maintained in Plan4Learning and/or the campus evidence repository. Findings will inform adjustments during the year and the next annual CNA cycle."
    }
  ],
  "titlePersonnel": "District Federal Programs/HR will pre-populate the final Title I-funded personnel roster in Plan4Learning. Campus leaders should validate assigned personnel, program, position, and FTE.",
  "interventionOverview": "This campus will use the same goals, root causes, strategies, and evidence in this CIP to satisfy applicable local or state/federal intervention requirements. Separate compliance fields should not create a different improvement strategy. The campus and district will maintain a single coherent improvement architecture aligned to Board goals, Elevate Beaumont, and the BISD Instructional Playbook.",
  "interventionStrategy": "The campus will implement intensive curriculum and instruction improvements through the BISD instructional model, including district-provided curriculum, AIEF, structured PLC preparation, Demo Day rehearsal, DOL-driven differentiation, same-day second teach/acceleration, frequent classroom observation and coaching, attendance/student-support routines, and recurring campus performance reviews. These evidence-based interventions are expected to improve identified academic and accountability indicators by strengthening the quality and consistency of Tier 1 instruction, accelerating response to student evidence, and ensuring leaders intervene when implementation or outcomes are off trajectory.",
  "interventionMonitoring": "Progress will be monitored through quarterly formative reviews in Plan4Learning and through more frequent campus operational routines, including weekly PLCs, DOL/common-assessment reviews, classroom observations, attendance/intervention reviews, and campus leadership huddles. Campus and district leaders will review student outcomes, implementation evidence, staffing/attendance indicators, and intervention milestones, document assigned actions, and escalate differentiated support when the campus is off trajectory.",
  "moduleNote": "TIP/TAP-specific assurances, public meeting/hearing documentation, stakeholder evidence, cost/funding information, and final TEA identification indicators will be entered in the dedicated Plan4Learning TIP/TAP module when required.",
  "entryNote": "The following Plan4Learning areas are completed directly in the application and do not require separate narrative in this working draft: Plan Checklist, Committees page, and read-only Policies page. The campus should use this document as the copy/paste source for narrative sections and goals, then complete application-only fields and checklists directly in Plan4Learning.",
  "entryChecklist": [
    "Enrollment and student-group percentages",
    "Attendance / chronic absenteeism",
    "2026 accountability rating and domain scores",
    "Campus academic baselines and 2026-27 targets",
    "Survey/perception baseline and target",
    "SCE allocation and funded personnel",
    "Title I-funded personnel",
    "Campus intervention status and TEA identification",
    "Board approval date / required compliance dates",
    "CCMR/readiness baseline and target, as applicable"
  ]
};

  const MARKER = "District confirmation needed";
  const EXTERNAL = "External personnel completion in Plan4Learning / district systems";
  const INVALID = /\b(?:XX(?: TARGET)?|undefined|null|NaN|Elementary|MGT|consultant|consulting team)\b|\bGrade\s*3\b|\bPK[- ]?2\b|_{3,}/i;
  const para = text => ({ type: "paragraph", text });
  const heading = text => ({ type: "heading", text });
  const list = items => ({ type: "list", items });
  const table = (caption, rows, hasHeader = true) => ({ type: "table", caption, rows, hasHeader });
  const section = (id, title, blocks = [], destination = "", children = []) => ({ id, title, blocks, destination, children });

  function build(state, config) {
    const district = config.DISTRICT_CONFIG;
    // Resolve identity only from the configured roster, never from caller-supplied campus properties.
    const selected = district.campuses.find(campus => campus.campus_id === state.campus_id);
    if (!selected) throw new Error("Select a configured Secondary campus before generation.");
    const fields = config.CAMPUS_FIELDS;
    const byId = new Map(fields.map(field => [field.id, field]));
    const pending = new Map();
    const applicability = Object.fromEntries(fields.map(field => [field.id, config.resolveApplicability(field, selected)]));
    const values = Object.create(null);
    const questionValues = Object.create(null);
    const targetValues = Object.create(null);
    const districtValues = Object.create(null);
    const definitionValues = Object.create(null);
    const externalValues = Object.create(null);
    const missing = raw => raw === undefined || raw === null || String(raw).trim() === "" ||
      String(raw).trim().toLowerCase() === MARKER.toLowerCase() || INVALID.test(String(raw));
    const notePending = (key, label, category) => pending.set(key, { key, label, category });
    function configured(key, raw, label, category, track = true) {
      const value = missing(raw) ? MARKER : String(raw).trim();
      if (value === MARKER && track) notePending(key, label, category);
      values[key] = value;
      return value;
    }
    const currency = amount => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);

    fields.forEach(field => {
      const status = applicability[field.id];
      let display;
      if (status.kind === "na") display = "Not applicable";
      else if (status.kind === "pending") {
        display = MARKER;
        notePending(field.id + ".applicability", field.label + " applicability", "applicability");
      } else {
        const raw = state.optional && state.optional[field.id];
        if (missing(raw)) throw new Error("Complete the campus baseline: " + field.label);
        if (field.type === "text") {
          display = String(raw).trim();
          if (display.length > field.maxLength || /^(?:n\/a|not applicable)$/i.test(display)) throw new Error("Enter the official campus result: " + field.label);
        } else {
          const number = Number(raw);
          if (!Number.isFinite(number) || (field.type === "percentage" && (number < 0 || number > 100)) ||
              (field.min !== undefined && number < field.min) || (field.max !== undefined && number > field.max) ||
              (field.step === 1 && !Number.isInteger(number))) throw new Error("Invalid campus baseline: " + field.label);
          display = field.format === "currency" ? currency(number) : String(number) + (field.type === "percentage" ? "%" : "");
        }
      }
      questionValues[field.id] = display;
      values[field.id] = display;
    });
    Object.entries(district.targets).forEach(([key, target]) => {
      const raw = target.configKey ? district[target.configKey] : target.value;
      const relevant = fields.some(field => field.targetKey === key && applicability[field.id].kind === "applicable");
      let display = configured(key, raw, target.label, "target", relevant);
      if (display !== MARKER) {
        if (target.format === "percentage") display += "%";
        if (target.format === "percentage-plus") display += "%+";
        display += target.suffix || "";
      }
      targetValues[key] = display;
      values[key] = display;
    });
    const campusProperties = [
      ["campus_name", "Campus Name"], ["campus_id", "TEA Campus ID"],
      ["campus_type", "Campus Type"], ["grade_span", "Grade Span"],
      ["campus_intervention_status", "Campus intervention status"],
      ["tea_identification_indicators", "TEA identification / accountability indicators"],
      ["board_approval_status", "Board approval status"],
      ["submission_local_maintenance_status", "Submission / local maintenance status"]
    ];
    campusProperties.forEach(([key, label]) => {
      districtValues[key] = configured(key, selected[key], label, "campus configuration");
    });
    districtValues.school_year = configured("school_year", district.school_year, "School year", "district configuration");
    districtValues.perception_indicator_name = configured("perception_indicator_name", district.perception_indicator_name, "Stakeholder survey indicator", "district configuration");
    const definitionLabels = {
      assessment_cohorts: "Assessment / test cohorts and aggregation",
      grade_level_readiness: "Grade-level readiness indicator, cohort and period",
      algebra_readiness: "Algebra / advanced math readiness criteria and cohort",
      ccmr_cohort: "CCMR cohort and reporting period",
      pathway_cohort: "Documented pathway cohort and documentation standard",
      perception_scale_period: "Stakeholder survey respondents, favorable definition and period",
      lost_instructional_time: "Lost instructional time / student-day definition and period",
      instructional_fidelity: "Instructional fidelity rubric and monitored classrooms",
      improvement_milestones: "Required improvement milestones and review cycle",
      cna_readiness_proxy: "CNA readiness indicator mapping"
    };
    Object.entries(definitionLabels).forEach(([key, label]) => {
      const related = fields.filter(field => field.definitionKey === key);
      const applies = !related.length || related.some(field => applicability[field.id].kind !== "na");
      const raw = selected.measurement_definitions && selected.measurement_definitions[key] !== undefined
        ? selected.measurement_definitions[key] : (district.measurement_definitions || {})[key];
      // An approved field-ID binding displays its human-readable indicator, not an implementation key.
      const displayRaw = key === "cna_readiness_proxy" && byId.has(raw) ? byId.get(raw).label : raw;
      const value = applies ? configured("definition." + key, displayRaw, label, "measurement definition") : "Not applicable";
      definitionValues[key] = value;
      values["definition." + key] = value;
    });
    ["principal", "sce_name", "sce_position", "sce_fte", "title1_name", "title1_position", "title1_program", "title1_fte"].forEach(key => {
      externalValues[key] = EXTERNAL;
      values["external." + key] = EXTERNAL;
    });
    if (district.campus_list_is_temporary) notePending("roster_validation", "Final Secondary campus roster / eligibility validation", "district validation");
    if (/subject to|planning|proposed/i.test(String(district.target_status || ""))) notePending("target_validation", "BISD validation of district-controlled planning benchmarks", "district validation");

    const value = key => {
      if (!(key in values)) throw new Error("Unmapped Secondary value: " + key);
      return values[key];
    };
    const baseline = id => value(id);
    const targetFor = id => {
      const status = applicability[id];
      if (status.kind === "na") return "Not applicable";
      if (status.kind === "pending") return MARKER;
      return byId.get(id).targetKey ? value(byId.get(id).targetKey) : "N/A";
    };
    const year = districtValues.school_year;
    const baselineYear = String(district.baseline_year);
    const endYear = Number.isInteger(Number(district.baseline_year)) ? String(Number(district.baseline_year) + 1) : year;
    function metricRows(ids) {
      return [["Campus Metric", "Current / Baseline", year + " Target"], ...ids.map(id => [byId.get(id).label, baseline(id), targetFor(id)])];
    }
    function metricNarrative(id, label, period = "") {
      const status = applicability[id];
      if (status.kind === "na") return label + " is not applicable to this campus.";
      if (status.kind === "pending") return label + " applicability: " + MARKER + ".";
      const target = targetFor(id);
      return (period ? period + ", the campus" : "The campus") + " has " + (/^[aeiou]/i.test(label) ? "an " : "a ") + label + " baseline of " + baseline(id) +
        (target === "N/A" ? "." : "; the " + year + " target is " + target + ".");
    }
    const narrative = (items, period = "") => para(items.map(([id, label]) => metricNarrative(id, label, period)).join(" "));
    const demographicsIds = ["enrollment_baseline", "economically_disadvantaged_pct", "emergent_bilingual_pct", "special_education_pct", "attendance_ada_baseline_pct", "mobility_baseline_pct", "accountability_baseline_display"];
    const learningIds = ["rla_meets_baseline_pct", "math_meets_baseline_pct", "domain1_baseline_score", "closing_gaps_baseline_score", "ccmr_baseline_pct", "grade_level_readiness_baseline_pct"];
    const climateIds = ["perception_baseline_pct", "chronic_absenteeism_baseline_pct", "lost_instructional_time_baseline_pct"];
    const demoNarrative = para("The campus serves " + baseline("enrollment_baseline") + " students. " + baseline("economically_disadvantaged_pct") +
      " of students are economically disadvantaged, " + baseline("emergent_bilingual_pct") + " are emergent bilingual, and " + baseline("special_education_pct") +
      " receive special education services. The campus attendance/ADA rate is " + baseline("attendance_ada_baseline_pct") + ", and the mobility rate is " + baseline("mobility_baseline_pct") +
      ". " + metricNarrative("accountability_baseline_display", "overall accountability rating / score", "In " + baselineYear) +
      " These data will be reviewed alongside achievement, readiness, attendance, and implementation evidence to identify groups requiring differentiated support.");
    const learningNarrative = narrative([
      ["rla_meets_baseline_pct", "Reading/ELA Meets+"], ["math_meets_baseline_pct", "Mathematics/Algebra Meets+"],
      ["domain1_baseline_score", "Domain 1 / Student Achievement"], ["closing_gaps_baseline_score", "Closing the Gaps"],
      ["grade_level_readiness_baseline_pct", "grade-level readiness / on-track"], ["ccmr_baseline_pct", "CCMR"]
    ], "In " + baselineYear);
    const surveyContext = para("District-selected stakeholder survey indicator: " + value("perception_indicator_name") + ".");
    const climateNarrative = narrative([
      ["attendance_ada_baseline_pct", "attendance / ADA"], ["perception_baseline_pct", "priority stakeholder survey favorability"],
      ["chronic_absenteeism_baseline_pct", "chronic absenteeism"], ["lost_instructional_time_baseline_pct", "lost instructional time as a percentage of student-days"]
    ], "For spring " + endYear + " planning");
    function cnaGroup(id, source, summary) {
      const destination = "Comprehensive Needs Assessment > " + source.title + " > ";
      return section(id, source.title, [], "", [
        section(id + "-summary", "Summary", summary, destination + "Summary"),
        section(id + "-strengths", "Strengths", [list(source.strengths)], destination + "Strengths"),
        section(id + "-problems", "Problem Statements / Root Causes", source.problems.flatMap(([problem, cause]) => [heading("Problem Statement"), para(problem), heading("Root Cause"), para(cause)]), destination + "Problem Statements / Root Causes")
      ]);
    }
    const cna = section("cna", "Comprehensive Needs Assessment", [], "", [
      cnaGroup("demographics", SOURCE.demographics, [para(SOURCE.demographics.summary), table("Demographics campus metrics", metricRows(demographicsIds)), demoNarrative]),
      cnaGroup("student-learning", SOURCE.studentLearning, [para(SOURCE.studentLearning.summary), table("Student Learning campus metrics", metricRows(learningIds)), learningNarrative,
        para("CNA readiness indicator mapping: " + definitionValues.cna_readiness_proxy + ". Grade-level readiness and applicable CCMR are reported separately above; no unconfirmed combined indicator is calculated.")]),
      cnaGroup("school-processes", SOURCE.processes, [para(SOURCE.processes.summary)]),
      cnaGroup("perceptions", SOURCE.perceptions, [para(SOURCE.perceptions.summary), surveyContext, table("Perceptions campus metrics", metricRows(climateIds)), climateNarrative]),
      section("prioritized-problems", "Prioritized Problem Statements", [table("Prioritized problem statements, root causes and goal alignment", [["Priority Problem Statement", "Draft Root Cause", "Goal Alignment"], ...SOURCE.prioritized])], "Comprehensive Needs Assessment > Prioritized Problem Statements")
    ]);
    const goalMetrics = [
      ["rla_meets_baseline_pct", "math_meets_baseline_pct", "domain1_baseline_score", "instructional_fidelity_baseline_pct"],
      ["grade_level_readiness_baseline_pct", "algebra_readiness_baseline_pct", "ccmr_baseline_pct", "documented_pathway_baseline_pct"],
      ["attendance_ada_baseline_pct", "chronic_absenteeism_baseline_pct", "perception_baseline_pct", "lost_instructional_time_baseline_pct"],
      ["accountability_baseline_display", "domain1_baseline_score", "closing_gaps_baseline_score", "improvement_milestones_baseline_pct"]
    ];
    const goalLabels = [
      ["Reading/ELA Meets+", "Mathematics/Algebra Meets+", "Domain 1 / Student Achievement", "instructional fidelity"],
      ["grade-level readiness / on-track", "Algebra I / advanced mathematics readiness", "CCMR", "documented next-step pathway coverage for the identified cohort"],
      ["attendance / ADA", "chronic absenteeism", "priority stakeholder survey favorability", "lost instructional time as a percentage of student-days"],
      ["overall accountability rating / score", "Domain 1 / Student Achievement", "Closing the Gaps", "required improvement milestones on track"]
    ];
    const goals = SOURCE.goals.map((source, index) => {
      const n = source.number, id = "goal-" + n, destination = "Goals > Goal " + n;
      const actionNotes = [];
      if (n === 2) {
        if (selected.campus_type === "Middle School") actionNotes.push(para("Applicability: the middle-school mathematics acceleration strategy applies. The high-school-only monthly CCMR review strategy does not apply to this campus. The source action rows and numbering are retained for district alignment."));
        else if (selected.campus_type === "High School") actionNotes.push(para("Applicability: the middle-school-specific mathematics acceleration strategy does not apply to this campus. High-school CCMR review follows the configured CCMR cohort applicability. The source action rows and numbering are retained for district alignment."));
        else actionNotes.push(para("Applicability: middle-school mathematics acceleration and high-school pathway strategies apply only to the grade configurations and cohorts confirmed by BISD. CCMR follows campus configuration."));
      }
      return section(id, "Goal " + n + ": " + source.title, [], "", [
        section(id + "-statement", "Campus Goal", [para(source.campusGoal)], destination),
        section(id + "-alignment", "District / Board Alignment", [para(source.alignment)], destination),
        section(id + "-problem", "Problem Statement", [para(source.problem)], destination),
        section(id + "-causes", "Standard Root Causes", [list(source.causes)], destination),
        section(id + "-objectives", "Performance Objectives and Campus Metrics", [table("Goal " + n + " performance objectives and campus metrics", metricRows(goalMetrics[index])),
          ...(n === 3 ? [surveyContext] : []), narrative(goalMetrics[index].map((key, i) => [key, goalLabels[index][i]]), "For spring " + endYear + " planning")], destination),
        section(id + "-strategies", "Strategies and Action Steps", [table("Goal " + n + " action steps, owners, timelines, evidence and review", [["#", "Action Step", "Owner(s)", "Timeline", "Evidence / Measure", "Review"], ...source.actions]), ...actionNotes], destination)
      ]);
    });
    const titleSections = SOURCE.titleI.map((item, i) => section("title1-" + item.title.slice(0, 3), item.title, [para(item.text)], "Title I > " + item.title));
    const sections = [
      section("identification", "Campus Identification", [
        table("Campus identification", [
          ["Campus Name", value("campus_name")], ["TEA Campus ID", value("campus_id")], ["School Year", year],
          ["Campus Type", value("campus_type")], ["Grade Span", value("grade_span")],
          [baselineYear + " Accountability Rating / Score", baseline("accountability_baseline_display")],
          ["Principal", externalValues.principal]
        ], false),
        para(district.target_notice), para(SOURCE.purpose), para(SOURCE.campus_task)
      ], "Campus Identification"),
      cna, ...goals,
      section("sce", "State Compensatory Education", [para("Total SCE Funds: " + baseline("sce_allocation_amount") + "."), para(SOURCE.sceSummary)], "State Compensatory Education", [
        section("sce-personnel", "State Compensatory Education Personnel", [para(SOURCE.scePersonnel), table("SCE personnel completion", [["Name", "Position", "FTE"], [externalValues.sce_name, externalValues.sce_position, externalValues.sce_fte]])], "State Compensatory Education")
      ]),
      section("title1", "Title I / Schoolwide Program Requirements", [], "", [...titleSections,
        section("title1-personnel", year + " Title I Personnel", [para(SOURCE.titlePersonnel), table("Title I personnel completion", [["Name", "Position", "Program", "FTE"], [externalValues.title1_name, externalValues.title1_position, externalValues.title1_program, externalValues.title1_fte]])], "Title I")
      ]),
      section("intervention", "LIP / TIP / TAP Alignment", [para(SOURCE.interventionOverview), table("Intervention status and identification", campusProperties.slice(4).map(([key, label]) => [label, value(key)]), false)], "LIP / TIP / TAP Alignment", [
        section("intervention-strategy", "Standard Intervention Strategy Narrative", [para(SOURCE.interventionStrategy)], "LIP / TIP / TAP Alignment"),
        section("intervention-monitoring", "Standard Progress-Monitoring Narrative", [para(SOURCE.interventionMonitoring), para(SOURCE.moduleNote)], "LIP / TIP / TAP Alignment")
      ]),
      section("entry-notes", "Plan4Learning Entry Notes", [para(SOURCE.entryNote), heading("Metric fields to validate before final entry"), list(SOURCE.entryChecklist),
        para("Principal and funded-personnel details are completed directly in district systems. Student-level pathway trackers and actual meeting, stakeholder, hearing and compliance evidence are maintained in the authorized district systems and required Plan4Learning modules."),
        table("District measurement definitions and indicator mapping", [["District-controlled definition", "Configured information"], ...Object.entries(definitionLabels).map(([key, label]) => [label, definitionValues[key]])])
      ], "Plan4Learning Entry Notes")
    ];
    const blockText = block => block.type === "list" ? block.items.map(item => "- " + item).join("\n")
      : block.type === "table" ? block.caption + "\n" + block.rows.map(row => row.join("\t")).join("\n") : block.text;
    const nodeText = item => item.title + "\n\n" + item.blocks.map(blockText).join("\n\n") +
      (item.children.length ? "\n\n" + item.children.map(nodeText).join("\n\n") : "");
    const flattened = [];
    function finalize(item) {
      item.text = item.blocks.map(blockText).join("\n\n");
      flattened.push(item); item.children.forEach(finalize);
    }
    sections.forEach(finalize);
    const guide = [];
    function guideItem(item, title = item.title, includeChildren = false) {
      const blocks = includeChildren ? item.children.flatMap(child => [heading(child.title), ...child.blocks]) : item.blocks;
      guide.push({ id: item.id, title, destination: item.destination || "Goals > " + item.title.split(":")[0], blocks, text: blocks.map(blockText).join("\n\n") });
    }
    guideItem(sections[0]);
    cna.children.forEach(domain => {
      if (domain.id === "prioritized-problems") guideItem(domain);
      else domain.children.forEach(child => guideItem(child, domain.title + " - " + child.title));
    });
    goals.forEach(goal => guideItem(goal, goal.title, true));
    sections.slice(6).forEach(item => {
      if (item.blocks.length) guideItem(item);
      item.children.forEach(child => guideItem(child));
    });
    const fullText = sections.map(nodeText).join("\n\n");
    if (INVALID.test(fullText) || guide.some(item => INVALID.test(item.text))) throw new Error("Generated content contains an invalid source token. Review district configuration.");
    const sourceValues = Object.fromEntries(Object.entries(config.SOURCE_BINDINGS).map(([id, binding]) => [id, baseline(binding.input)]));
    const actionCounts = SOURCE.goals.map(goal => goal.actions.length);
    return {
      campus: value("campus_name"), campusId: value("campus_id"), schoolYear: year,
      sections, guide, fullText, values, sourceValues, questionValues, targetValues, districtValues, definitionValues, externalValues,
      pendingItems: Array.from(pending.values()), unresolvedFields: Array.from(pending.keys()),
      counts: { mainSections: sections.length, subsections: flattened.length - sections.length, totalSections: flattened.length,
        guideSections: guide.length, questionnaireValues: fields.length, districtTargets: Object.keys(targetValues).length,
        campusAndDistrictValues: Object.keys(districtValues).length, definitionValues: Object.keys(definitionValues).length,
        externalValues: Object.keys(externalValues).length, totalMappedValues: Object.keys(values).length,
        sourceDefinitions: Object.keys(sourceValues).length, actionSteps: actionCounts.reduce((sum, count) => sum + count, 0), goalActionCounts: actionCounts },
      status: pending.size ? "Working Draft — District confirmation remains for selected district-controlled fields." : "Working Draft — Review campus entries and required external completion before use.",
      marker: MARKER
    };
  }
  window.BISD_CIP_GENERATOR = Object.freeze({ build });
})();
