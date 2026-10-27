"use strict";

// District-owned Secondary configuration. Sole content reference: reference/Beaumont_ISD_2026-27_Secondary_CIP_Builder_Reference_Stakeholder_Updated (1).docx
// Districtwide targets are confirmed by DOCX P201/P204/T205; baselines are separate.
// Roster: data/Beaumont_ISD_Campuses_TEA_2026.xlsx, "Campus List" worksheet.
// Seven standard Secondary records plus the matched EE-8 campus (Secondary scope).
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
  "pending_value": "VERIFY — District confirmation needed",
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
      "campus_intervention_status": "No assigned TIP/TAP/LIP intervention in the supplied 2026 ESC5 intervention list",
      "tea_identification_indicators": "VERIFY — District confirmation needed",
      "board_approval_status": "VERIFY — District confirmation needed",
      "submission_local_maintenance_status": "VERIFY — District confirmation needed",
      "metric_applicability": {},
      "intervention_type": "None",
      "intervention_status": "not listed",
      "roster_source": "Current builder and supplied campus workbook: Secondary/Yes. Official district school navigation corroborates active campus identity; final project eligibility remains subject to review.",
      "intervention_source": "District-supplied authoritative ESC5 School Improvement Interventions/Requirements communication, August 28, 2026. Campus is not listed; this is limited to the supplied intervention list and is not a broader legal determination."
    },
    {
      "campus_name": "Dr Martin Luther King Collegiate Academy",
      "campus_id": "123910013",
      "campus_type": "High School",
      "grade_span": "Grade 9 - Grade 12",
      "campus_intervention_status": "No assigned TIP/TAP/LIP intervention in the supplied 2026 ESC5 intervention list",
      "tea_identification_indicators": "VERIFY — District confirmation needed",
      "board_approval_status": "VERIFY — District confirmation needed",
      "submission_local_maintenance_status": "VERIFY — District confirmation needed",
      "metric_applicability": {},
      "intervention_type": "None",
      "intervention_status": "not listed",
      "roster_source": "Current builder and supplied campus workbook: Secondary/Yes. Official district school navigation corroborates active campus identity; final project eligibility remains subject to review.",
      "intervention_source": "District-supplied authoritative ESC5 School Improvement Interventions/Requirements communication, August 28, 2026. Campus is not listed; this is limited to the supplied intervention list and is not a broader legal determination."
    },
    {
      "campus_name": "Marshall MS",
      "campus_id": "123910046",
      "campus_type": "Middle School",
      "grade_span": "Grade 6 - Grade 8",
      "campus_intervention_status": "LIP - Local Improvement Plan",
      "tea_identification_indicators": "2026 state rating: D; federal identification: TSI",
      "board_approval_status": "VERIFY — District confirmation needed",
      "submission_local_maintenance_status": "VERIFY — District confirmation needed",
      "metric_applicability": {},
      "intervention_type": "LIP",
      "intervention_status": "assigned",
      "roster_source": "Current builder and supplied campus workbook: Secondary/Yes. Official district school navigation corroborates active campus identity; final project eligibility remains subject to review.",
      "intervention_source": "District-supplied authoritative ESC5 School Improvement Interventions/Requirements communication, August 28, 2026.",
      "state_rating_2026": "D",
      "federal_identification_2026": "TSI"
    },
    {
      "campus_name": "Odom MS",
      "campus_id": "123910047",
      "campus_type": "Middle School",
      "grade_span": "Grade 6 - Grade 8",
      "campus_intervention_status": "TIP - Targeted Improvement Plan",
      "tea_identification_indicators": "2026 state rating: D; federal identification: CSI - Newly Identified",
      "board_approval_status": "VERIFY — District confirmation needed",
      "submission_local_maintenance_status": "VERIFY — District confirmation needed",
      "metric_applicability": {},
      "intervention_type": "TIP",
      "intervention_status": "assigned",
      "roster_source": "Current builder and supplied campus workbook: Secondary/Yes. Official district school navigation corroborates active campus identity; final project eligibility remains subject to review.",
      "intervention_source": "District-supplied authoritative ESC5 School Improvement Interventions/Requirements communication, August 28, 2026.",
      "state_rating_2026": "D",
      "federal_identification_2026": "CSI - Newly Identified"
    },
    {
      "campus_name": "Smith MS",
      "campus_id": "123910042",
      "campus_type": "Middle School",
      "grade_span": "Grade 6 - Grade 8",
      "campus_intervention_status": "TAP - Turnaround Plan",
      "tea_identification_indicators": "2026 state rating: F; federal identification: CSI - Re-Identified",
      "board_approval_status": "VERIFY — District confirmation needed",
      "submission_local_maintenance_status": "VERIFY — District confirmation needed",
      "metric_applicability": {},
      "intervention_type": "TAP",
      "intervention_status": "new",
      "roster_source": "Current builder and supplied campus workbook: Secondary/Yes. Official district school navigation corroborates active campus identity; final project eligibility remains subject to review.",
      "intervention_source": "District-supplied authoritative ESC5 School Improvement Interventions/Requirements communication, August 28, 2026. Independently confirmed by TEA Deputy Commissioner correspondence, August 26, 2026.",
      "state_rating_2026": "F",
      "federal_identification_2026": "CSI - Re-Identified",
      "turnaround_plan_due_date": "2026-11-20",
      "intervention_note": "Develop and submit the campus turnaround plan by November 20, 2026, as independently confirmed by the August 26 TEA Deputy Commissioner correspondence."
    },
    {
      "campus_name": "Vincent MS",
      "campus_id": "123910048",
      "campus_type": "Middle School",
      "grade_span": "Grade 6 - Grade 8",
      "campus_intervention_status": "TAP - Continuing to Implement a TAP",
      "tea_identification_indicators": "2026 state rating: F; federal identification: ATS",
      "board_approval_status": "VERIFY — District confirmation needed",
      "submission_local_maintenance_status": "VERIFY — District confirmation needed",
      "metric_applicability": {},
      "intervention_type": "TAP",
      "intervention_status": "continuing",
      "roster_source": "Current builder and supplied campus workbook: Secondary/Yes. Official district school navigation corroborates active campus identity; final project eligibility remains subject to review.",
      "intervention_source": "District-supplied authoritative ESC5 School Improvement Interventions/Requirements communication, August 28, 2026.",
      "state_rating_2026": "F",
      "federal_identification_2026": "ATS"
    },
    {
      "campus_name": "West Brook Sr HS",
      "campus_id": "123910008",
      "campus_type": "High School",
      "grade_span": "Grade 9 - Grade 12",
      "campus_intervention_status": "No assigned TIP/TAP/LIP intervention in the supplied 2026 ESC5 intervention list",
      "tea_identification_indicators": "VERIFY — District confirmation needed",
      "board_approval_status": "VERIFY — District confirmation needed",
      "submission_local_maintenance_status": "VERIFY — District confirmation needed",
      "metric_applicability": {},
      "intervention_type": "None",
      "intervention_status": "not listed",
      "roster_source": "Current builder and supplied campus workbook: Secondary/Yes. Official district school navigation corroborates active campus identity; final project eligibility remains subject to review.",
      "intervention_source": "District-supplied authoritative ESC5 School Improvement Interventions/Requirements communication, August 28, 2026. Campus is not listed; this is limited to the supplied intervention list and is not a broader legal determination."
    },
    {
      "campus_name": "Pietzsch/Mac Arthur Elem",
      "campus_id": "123910125",
      "campus_type": "Mixed / Other Secondary",
      "grade_span": "Early Education - Grade 8",
      "secondary_grade_bands": [
        "6-8"
      ],
      "ccmr_applicable": false,
      "metric_applicability": {},
      "board_approval_status": "VERIFY — District confirmation needed",
      "submission_local_maintenance_status": "VERIFY — District confirmation needed",
      "roster_source": "Existing mixed-grade record matched by CDCN 123910125 to the supplied ESC5 assignment and current workbook Mixed EE-8 / Yes row; activated for Secondary grades 6-8. Name retained.",
      "intervention_note": "Campus serves Early Education through Grade 8; this builder covers the Secondary grade band.",
      "intervention_type": "TAP",
      "intervention_status": "continuing",
      "campus_intervention_status": "TAP - Continuing to Implement a TAP",
      "state_rating_2026": "F",
      "federal_identification_2026": "CSI - Progress",
      "tea_identification_indicators": "2026 state rating: F; federal identification: CSI - Progress",
      "intervention_source": "District-supplied authoritative ESC5 School Improvement Interventions/Requirements communication, August 28, 2026."
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
    }
  ],
  "target_status": "Confirmed districtwide Secondary targets from authoritative reference",
  "target_notice": "2026-27 districtwide Secondary targets are confirmed by the updated Secondary reference. Targets apply only to comparable indicators/cohorts; historical baselines remain separate.",
  "target_source": "reference/Beaumont_ISD_2026-27_Secondary_CIP_Builder_Reference_Stakeholder_Updated (1).docx · P201/P204/T205",
  "perception_indicator_name": "District Stakeholder Perception Survey / Indicator",
  "perception_target": "80% favorable",
  "measurement_definitions": {
    "assessment_cohorts": "VERIFY — District confirmation needed",
    "grade_level_readiness": "VERIFY — District confirmation needed",
    "algebra_readiness": "VERIFY — District confirmation needed",
    "ccmr_cohort": "VERIFY — District confirmation needed",
    "pathway_cohort": "VERIFY — District confirmation needed",
    "perception_scale_period": "VERIFY — District confirmation needed",
    "lost_instructional_time": "VERIFY — District confirmation needed",
    "instructional_fidelity": "District Spot Observation Form: percentage of monitored classrooms meeting AIM implementation expectations; use the current campus monitoring period and verified denominator.",
    "improvement_milestones": "Percentage of applicable improvement milestones currently on track in the campus review cycle; TIP: nine milestones over one year; TAP: eighteen over two years. Confirm the current progress value locally.",
    "cna_readiness_proxy": "Grade-level readiness and high-school CCMR are separate measures; no combined score is calculated."
  },
  "targets": {
    "oss_target": {
      "label": "OSS",
      "value": "Decrease from 2025-26 baseline.",
      "format": "text",
      "source_status": "confirmed"
    },
    "rla_meets_target_pct": {
      "label": "RLA / English STAAR-EOC Meets+",
      "value": 50,
      "format": "percentage",
      "suffix": " or higher",
      "applicability": "tested",
      "source_status": "confirmed",
      "source": "DOCX P201/P204/T205"
    },
    "math_meets_target_pct": {
      "label": "Mathematics / Algebra STAAR-EOC Meets+",
      "value": 45,
      "format": "percentage",
      "suffix": " or higher",
      "applicability": "tested",
      "source_status": "confirmed",
      "source": "DOCX P201/P204/T205"
    },
    "domain1_target_score": {
      "label": "Domain 1 / Student Achievement",
      "value": 75,
      "format": "number",
      "suffix": " scaled-score points",
      "applicability": "rated",
      "source_status": "confirmed",
      "source": "DOCX P201/P204/T205"
    },
    "closing_gaps_target_score": {
      "label": "Closing the Gaps",
      "value": 75,
      "format": "number",
      "suffix": " scaled-score points",
      "applicability": "rated",
      "source_status": "confirmed",
      "source": "DOCX P201/P204/T205"
    },
    "accountability_target_display": {
      "label": "Overall Accountability",
      "value": "75 score / C",
      "format": "text",
      "suffix": "",
      "applicability": "rated",
      "source_status": "confirmed",
      "source": "DOCX P201/P204/T205"
    },
    "grade_level_readiness_target_pct": {
      "label": "Grade-Level Readiness / On-Track",
      "value": 75,
      "format": "percentage",
      "suffix": " on track",
      "applicability": "grade_level_readiness",
      "source_status": "confirmed",
      "source": "DOCX P201/P204/T205"
    },
    "algebra_readiness_target_pct": {
      "label": "Algebra I / Advanced Math Readiness",
      "value": 70,
      "format": "percentage",
      "suffix": " ready",
      "applicability": "algebra_readiness",
      "source_status": "confirmed",
      "source": "DOCX P201/P204/T205"
    },
    "ccmr_target_pct": {
      "label": "CCMR",
      "value": 75,
      "format": "percentage",
      "suffix": " attaining CCMR",
      "applicability": "ccmr",
      "source_status": "confirmed",
      "source": "DOCX P201/P204/T205"
    },
    "attendance_ada_target_pct": {
      "label": "Average Daily Attendance",
      "value": 95,
      "format": "percentage",
      "suffix": " or higher",
      "applicability": "all",
      "source_status": "confirmed",
      "source": "DOCX P201/P204/T205"
    },
    "chronic_absenteeism_target_pct": {
      "label": "Chronic Absenteeism",
      "value": 15,
      "format": "percentage",
      "suffix": " or lower",
      "applicability": "all",
      "source_status": "confirmed",
      "source": "DOCX P201/P204/T205"
    },
    "priority_survey_target": {
      "label": "Priority Stakeholder Survey Indicator",
      "format": "text",
      "suffix": "",
      "applicability": "all",
      "source_status": "confirmed",
      "value": "80% favorable",
      "source": "DOCX P201/P204/T205"
    },
    "lost_instructional_time_target_pct": {
      "label": "Discipline / Lost Instructional Time",
      "value": 1,
      "format": "percentage",
      "suffix": " or less of student-days",
      "applicability": "all",
      "source_status": "confirmed",
      "source": "DOCX P201/P204/T205"
    },
    "instructional_fidelity_target_pct": {
      "label": "Instructional Fidelity",
      "value": 90,
      "format": "percentage-plus",
      "suffix": " monitored classrooms",
      "applicability": "all",
      "source_status": "confirmed",
      "source": "DOCX P201/P204/T205"
    },
    "documented_pathway_target_pct": {
      "label": "Documented Next-Step Pathway",
      "value": 100,
      "format": "percentage",
      "suffix": " of identified cohort",
      "applicability": "pathway",
      "source_status": "confirmed",
      "source": "DOCX P201/P204/T205"
    },
    "improvement_milestones_target_pct": {
      "label": "Improvement Milestones On Track",
      "value": 90,
      "format": "percentage-plus",
      "suffix": " each review cycle",
      "applicability": "all",
      "source_status": "confirmed",
      "source": "DOCX P201/P204/T205"
    }
  },
  "content_reference": "reference/Beaumont_ISD_2026-27_Secondary_CIP_Builder_Reference_Stakeholder_Updated (1).docx",
  "reference_sha256": "c10b1e92051bc6c1a3495ff7a13d3e08d7d9e6276f9fe0241c8dee9da0c94c90"
});

const ORIGINAL_CAMPUS_FIELDS = Object.freeze([
  {
    "id": "enrollment_baseline",
    "sourceId": "B01",
    "group": "demographics",
    "label": "Enrollment baseline",
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

// Local/current measures required to generate the working CIP. All historical
// measures and unresolved cohort measures remain optional review entries.
const REQUIRED_LOCAL_FIELDS = Object.freeze([
  "instructional_fidelity_baseline_pct", "improvement_milestones_baseline_pct", "sce_allocation_amount"
]);
const ADDITIONAL_BASELINE_FIELDS = Object.freeze([
  {
    "id": "domain1_rating",
    "sourceId": "P01",
    "group": "baseline",
    "label": "2026 Student Achievement rating",
    "type": "text",
    "enabled": true,
    "required": false,
    "min": 0,
    "max": 100,
    "step": "any",
    "help": "Public/history review only. Leave unknown data blank; use a verified source/year for an optional override.",
    "maxLength": 100
  },
  {
    "id": "academic_growth_baseline_score",
    "sourceId": "P02",
    "group": "baseline",
    "label": "2026 Academic Growth score",
    "type": "number",
    "enabled": true,
    "required": false,
    "min": 0,
    "max": 100,
    "step": "any",
    "help": "Public/history review only. Leave unknown data blank; use a verified source/year for an optional override."
  },
  {
    "id": "academic_growth_rating",
    "sourceId": "P03",
    "group": "baseline",
    "label": "2026 Academic Growth rating",
    "type": "text",
    "enabled": true,
    "required": false,
    "min": 0,
    "max": 100,
    "step": "any",
    "help": "Public/history review only. Leave unknown data blank; use a verified source/year for an optional override.",
    "maxLength": 100
  },
  {
    "id": "relative_performance_baseline_score",
    "sourceId": "P04",
    "group": "baseline",
    "label": "2026 Relative Performance score",
    "type": "number",
    "enabled": true,
    "required": false,
    "min": 0,
    "max": 100,
    "step": "any",
    "help": "Public/history review only. Leave unknown data blank; use a verified source/year for an optional override."
  },
  {
    "id": "relative_performance_rating",
    "sourceId": "P05",
    "group": "baseline",
    "label": "2026 Relative Performance rating",
    "type": "text",
    "enabled": true,
    "required": false,
    "min": 0,
    "max": 100,
    "step": "any",
    "help": "Public/history review only. Leave unknown data blank; use a verified source/year for an optional override.",
    "maxLength": 100
  },
  {
    "id": "closing_gaps_rating",
    "sourceId": "P06",
    "group": "baseline",
    "label": "2026 Closing the Gaps rating",
    "type": "text",
    "enabled": true,
    "required": false,
    "min": 0,
    "max": 100,
    "step": "any",
    "help": "Public/history review only. Leave unknown data blank; use a verified source/year for an optional override.",
    "maxLength": 100
  },
  {
    "id": "graduation_baseline_pct",
    "sourceId": "P07",
    "group": "baseline",
    "label": "Published graduation rate (%)",
    "type": "percentage",
    "enabled": true,
    "required": false,
    "min": 0,
    "max": 100,
    "step": "any",
    "help": "Public/history review only. Leave unknown data blank; use a verified source/year for an optional override.",
    "applicabilityKey": "high_school"
  },
  {
    "id": "ccmr_accountability_value",
    "sourceId": "P08",
    "group": "baseline",
    "label": "Published CCMR accountability indicator (unit/cohort VERIFY)",
    "type": "number",
    "enabled": true,
    "required": false,
    "min": 0,
    "max": 100,
    "step": "any",
    "help": "Public/history review only. Leave unknown data blank; use a verified source/year for an optional override.",
    "applicabilityKey": "high_school"
  },
  {
    "id": "english_i_eoc_meets_baseline_pct",
    "sourceId": "P09",
    "group": "baseline",
    "label": "English I EOC Meets+ historical result (%)",
    "type": "percentage",
    "enabled": true,
    "required": false,
    "min": 0,
    "max": 100,
    "step": "any",
    "help": "Public/history review only. Leave unknown data blank; use a verified source/year for an optional override.",
    "applicabilityKey": "high_school"
  },
  {
    "id": "english_ii_eoc_meets_baseline_pct",
    "sourceId": "P10",
    "group": "baseline",
    "label": "English II EOC Meets+ historical result (%)",
    "type": "percentage",
    "enabled": true,
    "required": false,
    "min": 0,
    "max": 100,
    "step": "any",
    "help": "Public/history review only. Leave unknown data blank; use a verified source/year for an optional override.",
    "applicabilityKey": "high_school"
  },
  {
    "id": "algebra_i_eoc_meets_baseline_pct",
    "sourceId": "P11",
    "group": "baseline",
    "label": "Algebra I EOC Meets+ historical result (%)",
    "type": "percentage",
    "enabled": true,
    "required": false,
    "min": 0,
    "max": 100,
    "step": "any",
    "help": "Public/history review only. Leave unknown data blank; use a verified source/year for an optional override.",
    "applicabilityKey": "high_school"
  },
  {
    "id": "biology_eoc_meets_baseline_pct",
    "sourceId": "P12",
    "group": "baseline",
    "label": "Biology EOC Meets+ historical result (%)",
    "type": "percentage",
    "enabled": true,
    "required": false,
    "min": 0,
    "max": 100,
    "step": "any",
    "help": "Public/history review only. Leave unknown data blank; use a verified source/year for an optional override.",
    "applicabilityKey": "high_school"
  },
  {
    "id": "us_history_eoc_meets_baseline_pct",
    "sourceId": "P13",
    "group": "baseline",
    "label": "US History EOC Meets+ historical result (%)",
    "type": "percentage",
    "enabled": true,
    "required": false,
    "min": 0,
    "max": 100,
    "step": "any",
    "help": "Public/history review only. Leave unknown data blank; use a verified source/year for an optional override.",
    "applicabilityKey": "high_school"
  },
  {
    "id": "middle_rla_staar_meets_baseline_pct",
    "sourceId": "P14",
    "group": "baseline",
    "label": "Grades 6-8 RLA STAAR Meets+ historical result (%)",
    "type": "percentage",
    "enabled": true,
    "required": false,
    "min": 0,
    "max": 100,
    "step": "any",
    "help": "Public/history review only. Leave unknown data blank; use a verified source/year for an optional override.",
    "applicabilityKey": "middle_school"
  },
  {
    "id": "middle_math_staar_meets_baseline_pct",
    "sourceId": "P15",
    "group": "baseline",
    "label": "Grades 6-8 Math STAAR Meets+ historical result (%)",
    "type": "percentage",
    "enabled": true,
    "required": false,
    "min": 0,
    "max": 100,
    "step": "any",
    "help": "Public/history review only. Leave unknown data blank; use a verified source/year for an optional override.",
    "applicabilityKey": "middle_school"
  }
]);
const CAMPUS_FIELDS = Object.freeze([...ORIGINAL_CAMPUS_FIELDS, ...ADDITIONAL_BASELINE_FIELDS, {
  id: "oss_baseline_pct", sourceId: "B22", group: "baseline", label: "OSS baseline (%)",
  type: "percentage", enabled: true, targetKey: "oss_target", help: "Use the verified 2025-26 aggregate OSS rate. Leave unknown history blank."
}].map(field => Object.freeze({ ...field, required: REQUIRED_LOCAL_FIELDS.includes(field.id),
  group: REQUIRED_LOCAL_FIELDS.includes(field.id) ? field.group : "baseline",
  publicBaseline: !REQUIRED_LOCAL_FIELDS.includes(field.id)
})));

// Verified public values supplied in the current user request, matched by CDCN.
// Publication years and unconfirmed underlying years/units are labeled separately.
// Record shape: { [CDCN]: { [fieldId]: { value, year, source, url } } }.
const PUBLIC_BASELINES = Object.freeze({
  "123910014": {
    "enrollment_baseline": {
      "value": 1864,
      "year": 2026,
      "source": "TEA campus comparison/profile",
      "url": "https://txschools.gov/?id=123910014&lng=en&view=school",
      "note": "",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    },
    "economically_disadvantaged_pct": {
      "value": 90.9,
      "year": 2026,
      "source": "TEA campus comparison/profile",
      "url": "https://txschools.gov/?id=123910014&lng=en&view=school",
      "note": "",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    },
    "emergent_bilingual_pct": {
      "value": 17.0,
      "year": 2026,
      "source": "TEA campus comparison/profile",
      "url": "https://txschools.gov/?id=123910014&lng=en&view=school",
      "note": "",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    },
    "mobility_baseline_pct": {
      "value": 23.6,
      "year": 2026,
      "source": "TEA campus comparison/profile",
      "url": "https://txschools.gov/?id=123910014&lng=en&view=school",
      "note": "",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    },
    "special_education_pct": {
      "value": 12.1,
      "year": 2026,
      "source": "TEA campus comparison/profile",
      "url": "https://txschools.gov/?id=123910014&lng=en&view=school",
      "note": "",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    },
    "accountability_baseline_display": {
      "value": "C / 79",
      "year": 2026,
      "source": "TEA accountability publication",
      "url": "https://txschools.gov/?id=123910014&lng=en&view=school",
      "note": "",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    },
    "domain1_baseline_score": {
      "value": 75,
      "year": 2026,
      "source": "TEA accountability publication",
      "url": "https://txschools.gov/?id=123910014&lng=en&view=school",
      "note": "",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    },
    "domain1_rating": {
      "value": "C",
      "year": 2026,
      "source": "TEA accountability publication",
      "url": "https://txschools.gov/?id=123910014&lng=en&view=school",
      "note": "",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    },
    "academic_growth_baseline_score": {
      "value": 79,
      "year": 2026,
      "source": "TEA accountability publication",
      "url": "https://txschools.gov/?id=123910014&lng=en&view=school",
      "note": "",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    },
    "academic_growth_rating": {
      "value": "C",
      "year": 2026,
      "source": "TEA accountability publication",
      "url": "https://txschools.gov/?id=123910014&lng=en&view=school",
      "note": "",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    },
    "relative_performance_baseline_score": {
      "value": 83,
      "year": 2026,
      "source": "TEA accountability publication",
      "url": "https://txschools.gov/?id=123910014&lng=en&view=school",
      "note": "",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    },
    "relative_performance_rating": {
      "value": "B",
      "year": 2026,
      "source": "TEA accountability publication",
      "url": "https://txschools.gov/?id=123910014&lng=en&view=school",
      "note": "",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    },
    "closing_gaps_baseline_score": {
      "value": 70,
      "year": 2026,
      "source": "TEA accountability publication",
      "url": "https://txschools.gov/?id=123910014&lng=en&view=school",
      "note": "",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    },
    "closing_gaps_rating": {
      "value": "C",
      "year": 2026,
      "source": "TEA accountability publication",
      "url": "https://txschools.gov/?id=123910014&lng=en&view=school",
      "note": "",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    },
    "graduation_baseline_pct": {
      "value": 82.4,
      "year": 2026,
      "source": "TEA accountability publication",
      "url": "https://txschools.gov/?id=123910014&lng=en&view=school",
      "note": "2026 publication; VERIFY underlying graduation cohort/year. Historical rate is not a graduation target.",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    },
    "ccmr_accountability_value": {
      "value": 90,
      "year": 2026,
      "source": "TEA accountability publication",
      "url": "https://txschools.gov/?id=123910014&lng=en&view=school",
      "note": "VERIFY unit and cohort before mapping this published indicator to percent attaining CCMR. Do not append a percent sign or replace the percent baseline without confirmation.",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    }
  },
  "123910008": {
    "accountability_baseline_display": {
      "value": "B / 83",
      "year": 2026,
      "source": "TEA accountability publication",
      "url": "https://txschools.gov/?id=123910008&lng=en&view=school",
      "note": "",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    },
    "domain1_baseline_score": {
      "value": 79,
      "year": 2026,
      "source": "TEA accountability publication",
      "url": "https://txschools.gov/?id=123910008&lng=en&view=school",
      "note": "",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    },
    "domain1_rating": {
      "value": "C",
      "year": 2026,
      "source": "TEA accountability publication",
      "url": "https://txschools.gov/?id=123910008&lng=en&view=school",
      "note": "",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    },
    "academic_growth_baseline_score": {
      "value": 75,
      "year": 2026,
      "source": "TEA accountability publication",
      "url": "https://txschools.gov/?id=123910008&lng=en&view=school",
      "note": "",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    },
    "academic_growth_rating": {
      "value": "C",
      "year": 2026,
      "source": "TEA accountability publication",
      "url": "https://txschools.gov/?id=123910008&lng=en&view=school",
      "note": "",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    },
    "relative_performance_baseline_score": {
      "value": 83,
      "year": 2026,
      "source": "TEA accountability publication",
      "url": "https://txschools.gov/?id=123910008&lng=en&view=school",
      "note": "",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    },
    "relative_performance_rating": {
      "value": "B",
      "year": 2026,
      "source": "TEA accountability publication",
      "url": "https://txschools.gov/?id=123910008&lng=en&view=school",
      "note": "",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    },
    "closing_gaps_baseline_score": {
      "value": 83,
      "year": 2026,
      "source": "TEA accountability publication",
      "url": "https://txschools.gov/?id=123910008&lng=en&view=school",
      "note": "",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    },
    "closing_gaps_rating": {
      "value": "B",
      "year": 2026,
      "source": "TEA accountability publication",
      "url": "https://txschools.gov/?id=123910008&lng=en&view=school",
      "note": "",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    },
    "graduation_baseline_pct": {
      "value": 92.0,
      "year": 2026,
      "source": "TEA accountability publication",
      "url": "https://txschools.gov/?id=123910008&lng=en&view=school",
      "note": "2026 publication; VERIFY underlying graduation cohort/year. Historical rate is not a graduation target.",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    },
    "ccmr_accountability_value": {
      "value": 88,
      "year": 2026,
      "source": "TEA accountability publication",
      "url": "https://txschools.gov/?id=123910008&lng=en&view=school",
      "note": "VERIFY unit and cohort before mapping this published indicator to percent attaining CCMR. Do not append a percent sign or replace the percent baseline without confirmation.",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    }
  },
  "123910048": {
    "enrollment_baseline": {
      "value": 581,
      "year": 2026,
      "source": "TEA campus comparison/profile",
      "url": "https://txschools.gov/?id=123910048&lng=en&view=school",
      "note": "",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    },
    "economically_disadvantaged_pct": {
      "value": 81.6,
      "year": 2026,
      "source": "TEA campus comparison/profile",
      "url": "https://txschools.gov/?id=123910048&lng=en&view=school",
      "note": "",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    },
    "emergent_bilingual_pct": {
      "value": 20.3,
      "year": 2026,
      "source": "TEA campus comparison/profile",
      "url": "https://txschools.gov/?id=123910048&lng=en&view=school",
      "note": "",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    },
    "mobility_baseline_pct": {
      "value": 27.9,
      "year": 2026,
      "source": "TEA campus comparison/profile",
      "url": "https://txschools.gov/?id=123910048&lng=en&view=school",
      "note": "",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    },
    "special_education_pct": {
      "value": 13.8,
      "year": 2026,
      "source": "TEA campus comparison/profile",
      "url": "https://txschools.gov/?id=123910048&lng=en&view=school",
      "note": "",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    }
  },
  "123910046": {
    "enrollment_baseline": {
      "value": 766,
      "year": null,
      "source": "TEA campus profile",
      "url": "https://txschools.gov/?id=123910046&lng=en&view=school",
      "note": "VERIFY source year — not supplied with these verified values.",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    },
    "economically_disadvantaged_pct": {
      "value": 81.3,
      "year": null,
      "source": "TEA campus profile",
      "url": "https://txschools.gov/?id=123910046&lng=en&view=school",
      "note": "VERIFY source year — not supplied with these verified values.",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    },
    "emergent_bilingual_pct": {
      "value": 6.9,
      "year": null,
      "source": "TEA campus profile",
      "url": "https://txschools.gov/?id=123910046&lng=en&view=school",
      "note": "VERIFY source year — not supplied with these verified values.",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    },
    "mobility_baseline_pct": {
      "value": 18.8,
      "year": null,
      "source": "TEA campus profile",
      "url": "https://txschools.gov/?id=123910046&lng=en&view=school",
      "note": "VERIFY source year — not supplied with these verified values.",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    },
    "special_education_pct": {
      "value": 18.3,
      "year": null,
      "source": "TEA campus profile",
      "url": "https://txschools.gov/?id=123910046&lng=en&view=school",
      "note": "VERIFY source year — not supplied with these verified values.",
      "verification_basis": "Verified public value supplied by the user for this update; not independently extracted from the live TEA application."
    }
  }
});
const VERIFY_BASELINE = "VERIFY — Public baseline not yet loaded";
const NA_GRADE_SPAN = "Not Applicable — campus grade span";
function getPublishedBaseline(cdcn, fieldId) {
  const record = PUBLIC_BASELINES[cdcn]?.[fieldId];
  return record && record.value !== null && record.value !== undefined && record.source ? record : undefined;
}
function getBaselineReview(cdcn, fieldId, localValues = {}, localSources = {}) {
  const field = CAMPUS_FIELDS.find(item => item.id === fieldId);
  const campus = DISTRICT_CONFIG.campuses.find(item => item.campus_id === cdcn);
  const applicability = resolveApplicability(field, campus);
  if (applicability.kind === "na") return { text: NA_GRADE_SPAN, kind: "na", sourceLabel: applicability.reason };
  if (applicability.kind === "pending") return { text: "VERIFY — campus measure applicability", kind: "verify", sourceLabel: applicability.reason };
  const record = getPublishedBaseline(cdcn, fieldId);
  const format = value => String(value) + (field.type === "percentage" ? "%" : "");
  const publicLabel = record ? (record.year ? record.year + " publication / report" : "VERIFY — source year not supplied") + " · Verified public baseline · " + record.source + (record.note ? " · " + record.note : "") : "";
  const local = localValues[fieldId];
  if (local !== null && local !== undefined && String(local).trim() !== "" && localSources[fieldId]) return {
    text: format(local), value: local, kind: "local", sourceLabel: "Local override · " + localSources[fieldId] + (record ? " · Public reference: " + format(record.value) + " (" + publicLabel + ")" : "")
  };
  if (record) return { text: format(record.value), value: record.value, kind: "public", sourceLabel: publicLabel, url: record.url };
  return { text: field.publicBaseline ? VERIFY_BASELINE : "VERIFY — local/current measure not entered", kind: "verify", sourceLabel: "Underlying source year not yet verified" };
}
function publicBaselineRows(cdcn, localValues = {}, localSources = {}) {
  return CAMPUS_FIELDS.filter(field => field.publicBaseline).map(field => {
    const value = getBaselineReview(cdcn, field.id, localValues, localSources);
    return [field.label, value.text, value.sourceLabel];
  });
}
function gradeBands(campus) {
  if (campus.campus_type === "Middle School") return ["6-8"];
  if (campus.campus_type === "High School") return ["9-12"];
  return Array.isArray(campus.secondary_grade_bands) ? campus.secondary_grade_bands.filter(band => ["6-8", "9-12"].includes(band)) : [];
}
function secondaryCurriculumRows(campus) {
  const bands = gradeBands(campus);
  return ["6-8", "9-12"].flatMap(band => ["math", "rla"].map(subject => {
    const label = band + " " + (subject === "math" ? "Math" : "RLA");
    if (!bands.includes(band)) return [label, campus.campus_type === "Mixed / Other Secondary" && !bands.length ? "VERIFY — campus grade span" : NA_GRADE_SPAN];
    if (band === "6-8" && subject === "math") return [label, "Bluebonnet Learning Math Grades 6 through 8"];
    if (subject === "rla") return [label, "Other · " + (campus.curriculum?.[band]?.rla || "VERIFY — specific RLA curriculum name")];
    return [label, "VERIFY — Grades 9-12 Math curriculum"];
  }));
}

function resolveApplicability(field, campus) {
  if (!campus) return { kind: "pending", reason: "Select a campus first" };
  if (["high_school", "middle_school"].includes(field.applicabilityKey)) {
    const bands = gradeBands(campus);
    if (!bands.length) return { kind: "pending", reason: "VERIFY — campus grade span" };
    const applies = bands.includes(field.applicabilityKey === "high_school" ? "9-12" : "6-8");
    return { kind: applies ? "applicable" : "na", reason: applies ? "Applicable grade band; verify course/cohort" : NA_GRADE_SPAN };
  }
  const overrides = campus.metric_applicability || {};
  if (field.applicabilityKey === "ccmr") {
    if (campus.campus_type === "Middle School") return { kind: "na", reason: NA_GRADE_SPAN };
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
window.BISD_CIP_CONFIG = Object.freeze({ DISTRICT_CONFIG, CAMPUS_FIELDS, SOURCE_BINDINGS, resolveApplicability, REQUIRED_LOCAL_FIELDS, ADDITIONAL_BASELINE_FIELDS, PUBLIC_BASELINES, VERIFY_BASELINE, NA_GRADE_SPAN, getPublishedBaseline, getBaselineReview, publicBaselineRows, gradeBands, secondaryCurriculumRows });
