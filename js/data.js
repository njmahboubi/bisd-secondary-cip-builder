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
// Ownership of unresolved measures. Public records carry their own verified
// indicator/cohort year; local measures must never inherit a public proxy.
const DISTRICT_BASELINE_FIELDS = Object.freeze([
  "grade_level_readiness_baseline_pct", "algebra_readiness_baseline_pct",
  "documented_pathway_baseline_pct", "perception_baseline_pct",
  "lost_instructional_time_baseline_pct", "instructional_fidelity_baseline_pct",
  "improvement_milestones_baseline_pct", "sce_allocation_amount"
]);
const CAMPUS_FIELDS = Object.freeze([...ORIGINAL_CAMPUS_FIELDS, ...ADDITIONAL_BASELINE_FIELDS, {
  id: "oss_baseline_pct", sourceId: "B22", group: "baseline", label: "OSS baseline (%)",
  type: "percentage", enabled: true, targetKey: "oss_target", help: "Use the verified 2025-26 aggregate OSS rate. Leave unknown history blank."
}].map(field => Object.freeze({ ...field, label: field.label.replace(/^2026 /, "").replace("(unit/cohort VERIFY)", "(component score)"),
  baselineClassification: DISTRICT_BASELINE_FIELDS.includes(field.id) ? "DISTRICT_REQUIRED" : "VERIFY",
  required: REQUIRED_LOCAL_FIELDS.includes(field.id),
  group: REQUIRED_LOCAL_FIELDS.includes(field.id) ? field.group : "baseline",
  publicBaseline: !REQUIRED_LOCAL_FIELDS.includes(field.id)
})));

// Verified public values supplied in the current user request, matched by CDCN.
// Publication years and unconfirmed underlying years/units are labeled separately.
// Record shape: { [CDCN]: { [fieldId]: { value, year, source, url } } }.
const PUBLIC_BASELINES = Object.freeze({
  "123910008": {
    "enrollment_baseline": {
      "value": 2166,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2025-26, # of Students",
      "source_cdcn": "123910008",
      "source_campus_name": "WEST BROOK SR H S",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "economically_disadvantaged_pct": {
      "value": 55.3,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2025-26, % Econ Disadv",
      "source_cdcn": "123910008",
      "source_campus_name": "WEST BROOK SR H S",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "emergent_bilingual_pct": {
      "value": 11,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2025-26, % EB",
      "source_cdcn": "123910008",
      "source_campus_name": "WEST BROOK SR H S",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "special_education_pct": {
      "value": 10.7,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2025-26, % Special Ed",
      "source_cdcn": "123910008",
      "source_campus_name": "WEST BROOK SR H S",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "mobility_baseline_pct": {
      "value": 14.9,
      "year": "2024-25",
      "report_year": 2026,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2024-25, % Mobility (Campus Only)",
      "source_cdcn": "123910008",
      "source_campus_name": "WEST BROOK SR H S",
      "note": "Prior-year mobility, as explicitly labeled in the 2026 download.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "domain1_baseline_score": {
      "value": 79,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 Student Achievement Domain - Scaled Score",
      "source_cdcn": "123910008",
      "source_campus_name": "WEST BROOK SR H S",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "domain1_rating": {
      "value": "C",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 Student Achievement Domain - Rating",
      "source_cdcn": "123910008",
      "source_campus_name": "WEST BROOK SR H S",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "academic_growth_baseline_score": {
      "value": 75,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 School Progress Domain - Academic Growth Scaled Score",
      "source_cdcn": "123910008",
      "source_campus_name": "WEST BROOK SR H S",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "academic_growth_rating": {
      "value": "C",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 School Progress Domain - Academic Growth Rating",
      "source_cdcn": "123910008",
      "source_campus_name": "WEST BROOK SR H S",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "relative_performance_baseline_score": {
      "value": 83,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 School Progress Domain - Relative Performance Scaled Score",
      "source_cdcn": "123910008",
      "source_campus_name": "WEST BROOK SR H S",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "relative_performance_rating": {
      "value": "B",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 School Progress Domain - Relative Performance Rating",
      "source_cdcn": "123910008",
      "source_campus_name": "WEST BROOK SR H S",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "closing_gaps_baseline_score": {
      "value": 83,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 Closing the Gaps Domain - Scaled Score",
      "source_cdcn": "123910008",
      "source_campus_name": "WEST BROOK SR H S",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "closing_gaps_rating": {
      "value": "B",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 Closing the Gaps Domain - Rating",
      "source_cdcn": "123910008",
      "source_campus_name": "WEST BROOK SR H S",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "accountability_baseline_display": {
      "value": "B / 83",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": [
        "2026 Overall Rating",
        "2026 Overall Scaled Score"
      ],
      "source_cdcn": "123910008",
      "source_campus_name": "WEST BROOK SR H S",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "ccmr_accountability_value": {
      "value": 88,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 CCMR, Component Score",
      "source_cdcn": "123910008",
      "source_campus_name": "WEST BROOK SR H S",
      "note": "Published accountability component score; annual-graduate percent is reported separately.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "rla_meets_baseline_pct": {
      "value": 47,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / D1_STAAR1",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=D1_STAAR1&key=C0022&key=C0S22&key=C0222&key=C0322&key=CR022&key=CRS22&key=CR222&key=CR322&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "STAAR Performance, Reading/Language Arts, SY 2025-26, All Students, % At Meets GL Standard or Above",
      "source_cdcn": "123910008",
      "source_campus_name": "WEST BROOK SR H S",
      "note": "TEA-reported subject aggregate/accountability subset; not an average of courses or grade percentages. Confirm comparability to any locally specified cohort.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "math_meets_baseline_pct": {
      "value": 35,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / D1_STAAR2",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=D1_STAAR2&key=CM022&key=CMS22&key=CM222&key=CM322&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "STAAR Performance, Mathematics, SY 2025-26, All Students, % At Meets GL Standard or Above",
      "source_cdcn": "123910008",
      "source_campus_name": "WEST BROOK SR H S",
      "note": "TEA-reported subject aggregate/accountability subset; not an average of courses or grade percentages. Confirm comparability to any locally specified cohort.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "ccmr_baseline_pct": {
      "value": 88,
      "year": "2024-25",
      "report_year": 2026,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2026 Accountability Data Downloads / D1_CCMR",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=D1_CCMR&key=CCMR1&key=CCMR2&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "CCMR, Annual Graduates, SY 2024-25, All Students, % Meeting",
      "source_cdcn": "123910008",
      "source_campus_name": "WEST BROOK SR H S",
      "note": "Annual graduates; published percent meeting CCMR, not an inferred component conversion.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "graduation_baseline_pct": {
      "value": 92,
      "year": "Class of 2025",
      "report_year": 2026,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2026 Accountability Data Downloads / D1_GRAD1",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=D1_GRAD1&key=COMP4&key=COMP5&key=COMP6&key=GRADSNA&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "Longitudinal Graduation Rate, 4-Year, Class of 2025, All Students, % Graduated",
      "source_cdcn": "123910008",
      "source_campus_name": "WEST BROOK SR H S",
      "note": "4-Year graduation cohort. Cohorts differ across campuses; no graduation target is inferred.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "attendance_ada_baseline_pct": {
      "value": 90.4,
      "year": "2024-25",
      "report_year": 2025,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2024-25 TPRS / TPRS_ATTENDANCE_123910008",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2025&lev=C&id=123910008&prgopt=reports/tapr/attendgrad.sas",
      "source_variable": "Attendance Rate, 2024-25, Campus",
      "source_cdcn": "123910008",
      "source_campus_name": "WEST BROOK SR H S",
      "note": "2024-25 school-year attendance rate from the updated 2024-25 TPRS. Attendance percentage, not funded ADA count. ",
      "verification_basis": "Direct official TPRS campus column; updated 2024-25 indicator, not district/state or publication-year substitution."
    },
    "chronic_absenteeism_baseline_pct": {
      "value": 34.0,
      "year": "2024-25",
      "report_year": 2025,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2024-25 TPRS / TPRS_ATTENDANCE_123910008",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2025&lev=C&id=123910008&prgopt=reports/tapr/attendgrad.sas",
      "source_variable": "Chronic Absenteeism, 2024-25, Campus",
      "source_cdcn": "123910008",
      "source_campus_name": "WEST BROOK SR H S",
      "note": "2024-25 school-year chronic absenteeism from the updated 2024-25 TPRS. ",
      "verification_basis": "Direct official TPRS campus column; updated 2024-25 indicator, not district/state or publication-year substitution."
    },
    "english_i_eoc_meets_baseline_pct": {
      "value": 35,
      "year": "2024-25",
      "report_year": 2025,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2024-25 TAPR / STAAR_EOC",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2025&tapr=c_d&step=5&level=Campus&sumlev=C&id=123910014&id=123910013&id=123910046&id=123910047&id=123910042&id=123910048&id=123910008&id=123910125&dsname=STAAR_EOC&key=00AR11S%7C00AR110&key=00ABI1S%7C00ABI10&key=00AR112%7C00AR110&key=00ABI12%7C00ABI10&key=00AR113%7C00AR110&key=00ABI13%7C00ABI10&key=00AR21S%7C00AR210&key=00AUS1S%7C00AUS1%29&key=00AR212%7C00AR210&key=00AUS12%7C00AUS1%29&key=00AR213%7C00AR210&key=00AUS13%7C00AUS1%29&key=00AA11S%7C00AA110&key=00AA01S%7C00AA010&key=00AA112%7C00AA110&key=00AA012%7C00AA010&key=00AA113%7C00AA110&key=00AA013%7C00AA010&var_type=N&var_type=D&var_type=R&datafmt=csv&prgopt=reports%2Ftapr%2Fdd%2Fdd_tapr_step_7.sas",
      "source_variable": "STAAR Performance, EOC English I, SY 2024-25, All Students, % At Meets GL Standard or Above",
      "source_cdcn": "123910008",
      "source_campus_name": "WEST BROOK SR H S",
      "note": "TEA-reported course-specific historical result; not the 2026 subject aggregate.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "english_ii_eoc_meets_baseline_pct": {
      "value": 49,
      "year": "2024-25",
      "report_year": 2025,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2024-25 TAPR / STAAR_EOC",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2025&tapr=c_d&step=5&level=Campus&sumlev=C&id=123910014&id=123910013&id=123910046&id=123910047&id=123910042&id=123910048&id=123910008&id=123910125&dsname=STAAR_EOC&key=00AR11S%7C00AR110&key=00ABI1S%7C00ABI10&key=00AR112%7C00AR110&key=00ABI12%7C00ABI10&key=00AR113%7C00AR110&key=00ABI13%7C00ABI10&key=00AR21S%7C00AR210&key=00AUS1S%7C00AUS1%29&key=00AR212%7C00AR210&key=00AUS12%7C00AUS1%29&key=00AR213%7C00AR210&key=00AUS13%7C00AUS1%29&key=00AA11S%7C00AA110&key=00AA01S%7C00AA010&key=00AA112%7C00AA110&key=00AA012%7C00AA010&key=00AA113%7C00AA110&key=00AA013%7C00AA010&var_type=N&var_type=D&var_type=R&datafmt=csv&prgopt=reports%2Ftapr%2Fdd%2Fdd_tapr_step_7.sas",
      "source_variable": "STAAR Performance, EOC English II, SY 2024-25, All Students, % At Meets GL Standard or Above",
      "source_cdcn": "123910008",
      "source_campus_name": "WEST BROOK SR H S",
      "note": "TEA-reported course-specific historical result; not the 2026 subject aggregate.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "algebra_i_eoc_meets_baseline_pct": {
      "value": 21,
      "year": "2024-25",
      "report_year": 2025,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2024-25 TAPR / STAAR_EOC",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2025&tapr=c_d&step=5&level=Campus&sumlev=C&id=123910014&id=123910013&id=123910046&id=123910047&id=123910042&id=123910048&id=123910008&id=123910125&dsname=STAAR_EOC&key=00AR11S%7C00AR110&key=00ABI1S%7C00ABI10&key=00AR112%7C00AR110&key=00ABI12%7C00ABI10&key=00AR113%7C00AR110&key=00ABI13%7C00ABI10&key=00AR21S%7C00AR210&key=00AUS1S%7C00AUS1%29&key=00AR212%7C00AR210&key=00AUS12%7C00AUS1%29&key=00AR213%7C00AR210&key=00AUS13%7C00AUS1%29&key=00AA11S%7C00AA110&key=00AA01S%7C00AA010&key=00AA112%7C00AA110&key=00AA012%7C00AA010&key=00AA113%7C00AA110&key=00AA013%7C00AA010&var_type=N&var_type=D&var_type=R&datafmt=csv&prgopt=reports%2Ftapr%2Fdd%2Fdd_tapr_step_7.sas",
      "source_variable": "STAAR Performance, EOC Algebra I, SY 2024-25, All Students, % At Meets GL Standard or Above",
      "source_cdcn": "123910008",
      "source_campus_name": "WEST BROOK SR H S",
      "note": "TEA-reported course-specific historical result; not the 2026 subject aggregate.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "biology_eoc_meets_baseline_pct": {
      "value": 42,
      "year": "2024-25",
      "report_year": 2025,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2024-25 TAPR / STAAR_EOC",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2025&tapr=c_d&step=5&level=Campus&sumlev=C&id=123910014&id=123910013&id=123910046&id=123910047&id=123910042&id=123910048&id=123910008&id=123910125&dsname=STAAR_EOC&key=00AR11S%7C00AR110&key=00ABI1S%7C00ABI10&key=00AR112%7C00AR110&key=00ABI12%7C00ABI10&key=00AR113%7C00AR110&key=00ABI13%7C00ABI10&key=00AR21S%7C00AR210&key=00AUS1S%7C00AUS1%29&key=00AR212%7C00AR210&key=00AUS12%7C00AUS1%29&key=00AR213%7C00AR210&key=00AUS13%7C00AUS1%29&key=00AA11S%7C00AA110&key=00AA01S%7C00AA010&key=00AA112%7C00AA110&key=00AA012%7C00AA010&key=00AA113%7C00AA110&key=00AA013%7C00AA010&var_type=N&var_type=D&var_type=R&datafmt=csv&prgopt=reports%2Ftapr%2Fdd%2Fdd_tapr_step_7.sas",
      "source_variable": "STAAR Performance, EOC Biology, SY 2024-25, All Students, % At Meets GL Standard or Above",
      "source_cdcn": "123910008",
      "source_campus_name": "WEST BROOK SR H S",
      "note": "TEA-reported course-specific historical result; not the 2026 subject aggregate.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "us_history_eoc_meets_baseline_pct": {
      "value": 66,
      "year": "2024-25",
      "report_year": 2025,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2024-25 TAPR / STAAR_EOC",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2025&tapr=c_d&step=5&level=Campus&sumlev=C&id=123910014&id=123910013&id=123910046&id=123910047&id=123910042&id=123910048&id=123910008&id=123910125&dsname=STAAR_EOC&key=00AR11S%7C00AR110&key=00ABI1S%7C00ABI10&key=00AR112%7C00AR110&key=00ABI12%7C00ABI10&key=00AR113%7C00AR110&key=00ABI13%7C00ABI10&key=00AR21S%7C00AR210&key=00AUS1S%7C00AUS1%29&key=00AR212%7C00AR210&key=00AUS12%7C00AUS1%29&key=00AR213%7C00AR210&key=00AUS13%7C00AUS1%29&key=00AA11S%7C00AA110&key=00AA01S%7C00AA010&key=00AA112%7C00AA110&key=00AA012%7C00AA010&key=00AA113%7C00AA110&key=00AA013%7C00AA010&var_type=N&var_type=D&var_type=R&datafmt=csv&prgopt=reports%2Ftapr%2Fdd%2Fdd_tapr_step_7.sas",
      "source_variable": "STAAR Performance, EOC US History, SY 2024-25, All Students, % At Meets GL Standard or Above",
      "source_cdcn": "123910008",
      "source_campus_name": "WEST BROOK SR H S",
      "note": "TEA-reported course-specific historical result; not the 2026 subject aggregate.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    }
  },
  "123910013": {
    "enrollment_baseline": {
      "value": 334,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2025-26, # of Students",
      "source_cdcn": "123910013",
      "source_campus_name": "DR MARTIN LUTHER KING COLLEGIATE ACADEMY",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "economically_disadvantaged_pct": {
      "value": 71.6,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2025-26, % Econ Disadv",
      "source_cdcn": "123910013",
      "source_campus_name": "DR MARTIN LUTHER KING COLLEGIATE ACADEMY",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "emergent_bilingual_pct": {
      "value": 12,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2025-26, % EB",
      "source_cdcn": "123910013",
      "source_campus_name": "DR MARTIN LUTHER KING COLLEGIATE ACADEMY",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "special_education_pct": {
      "value": 2.7,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2025-26, % Special Ed",
      "source_cdcn": "123910013",
      "source_campus_name": "DR MARTIN LUTHER KING COLLEGIATE ACADEMY",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "mobility_baseline_pct": {
      "value": 3.4,
      "year": "2024-25",
      "report_year": 2026,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2024-25, % Mobility (Campus Only)",
      "source_cdcn": "123910013",
      "source_campus_name": "DR MARTIN LUTHER KING COLLEGIATE ACADEMY",
      "note": "Prior-year mobility, as explicitly labeled in the 2026 download.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "domain1_baseline_score": {
      "value": 97,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 Student Achievement Domain - Scaled Score",
      "source_cdcn": "123910013",
      "source_campus_name": "DR MARTIN LUTHER KING COLLEGIATE ACADEMY",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "domain1_rating": {
      "value": "A",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 Student Achievement Domain - Rating",
      "source_cdcn": "123910013",
      "source_campus_name": "DR MARTIN LUTHER KING COLLEGIATE ACADEMY",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "academic_growth_baseline_score": {
      "value": 85,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 School Progress Domain - Academic Growth Scaled Score",
      "source_cdcn": "123910013",
      "source_campus_name": "DR MARTIN LUTHER KING COLLEGIATE ACADEMY",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "academic_growth_rating": {
      "value": "B",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 School Progress Domain - Academic Growth Rating",
      "source_cdcn": "123910013",
      "source_campus_name": "DR MARTIN LUTHER KING COLLEGIATE ACADEMY",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "relative_performance_baseline_score": {
      "value": 97,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 School Progress Domain - Relative Performance Scaled Score",
      "source_cdcn": "123910013",
      "source_campus_name": "DR MARTIN LUTHER KING COLLEGIATE ACADEMY",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "relative_performance_rating": {
      "value": "A",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 School Progress Domain - Relative Performance Rating",
      "source_cdcn": "123910013",
      "source_campus_name": "DR MARTIN LUTHER KING COLLEGIATE ACADEMY",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "closing_gaps_baseline_score": {
      "value": 98,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 Closing the Gaps Domain - Scaled Score",
      "source_cdcn": "123910013",
      "source_campus_name": "DR MARTIN LUTHER KING COLLEGIATE ACADEMY",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "closing_gaps_rating": {
      "value": "A",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 Closing the Gaps Domain - Rating",
      "source_cdcn": "123910013",
      "source_campus_name": "DR MARTIN LUTHER KING COLLEGIATE ACADEMY",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "accountability_baseline_display": {
      "value": "A / 97",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": [
        "2026 Overall Rating",
        "2026 Overall Scaled Score"
      ],
      "source_cdcn": "123910013",
      "source_campus_name": "DR MARTIN LUTHER KING COLLEGIATE ACADEMY",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "ccmr_accountability_value": {
      "value": 100,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 CCMR, Component Score",
      "source_cdcn": "123910013",
      "source_campus_name": "DR MARTIN LUTHER KING COLLEGIATE ACADEMY",
      "note": "Published accountability component score; annual-graduate percent is reported separately.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "rla_meets_baseline_pct": {
      "value": 88,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / D1_STAAR1",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=D1_STAAR1&key=C0022&key=C0S22&key=C0222&key=C0322&key=CR022&key=CRS22&key=CR222&key=CR322&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "STAAR Performance, Reading/Language Arts, SY 2025-26, All Students, % At Meets GL Standard or Above",
      "source_cdcn": "123910013",
      "source_campus_name": "DR MARTIN LUTHER KING COLLEGIATE ACADEMY",
      "note": "TEA-reported subject aggregate/accountability subset; not an average of courses or grade percentages. Confirm comparability to any locally specified cohort.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "math_meets_baseline_pct": {
      "value": 54,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / D1_STAAR2",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=D1_STAAR2&key=CM022&key=CMS22&key=CM222&key=CM322&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "STAAR Performance, Mathematics, SY 2025-26, All Students, % At Meets GL Standard or Above",
      "source_cdcn": "123910013",
      "source_campus_name": "DR MARTIN LUTHER KING COLLEGIATE ACADEMY",
      "note": "TEA-reported subject aggregate/accountability subset; not an average of courses or grade percentages. Confirm comparability to any locally specified cohort.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "ccmr_baseline_pct": {
      "value": 100,
      "year": "2024-25",
      "report_year": 2026,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2026 Accountability Data Downloads / D1_CCMR",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=D1_CCMR&key=CCMR1&key=CCMR2&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "CCMR, Annual Graduates, SY 2024-25, All Students, % Meeting",
      "source_cdcn": "123910013",
      "source_campus_name": "DR MARTIN LUTHER KING COLLEGIATE ACADEMY",
      "note": "Annual graduates; published percent meeting CCMR, not an inferred component conversion.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "graduation_baseline_pct": {
      "value": 100,
      "year": "Class of 2025",
      "report_year": 2026,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2026 Accountability Data Downloads / D1_GRAD1",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=D1_GRAD1&key=COMP4&key=COMP5&key=COMP6&key=GRADSNA&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "Longitudinal Graduation Rate, 4-Year, Class of 2025, All Students, % Graduated",
      "source_cdcn": "123910013",
      "source_campus_name": "DR MARTIN LUTHER KING COLLEGIATE ACADEMY",
      "note": "4-Year graduation cohort. Cohorts differ across campuses; no graduation target is inferred.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "attendance_ada_baseline_pct": {
      "value": 96.8,
      "year": "2024-25",
      "report_year": 2025,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2024-25 TPRS / TPRS_ATTENDANCE_123910013",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2025&lev=C&id=123910013&prgopt=reports/tapr/attendgrad.sas",
      "source_variable": "Attendance Rate, 2024-25, Campus",
      "source_cdcn": "123910013",
      "source_campus_name": "DR MARTIN LUTHER KING COLLEGIATE ACADEMY",
      "note": "2024-25 school-year attendance rate from the updated 2024-25 TPRS. Attendance percentage, not funded ADA count. ",
      "verification_basis": "Direct official TPRS campus column; updated 2024-25 indicator, not district/state or publication-year substitution."
    },
    "chronic_absenteeism_baseline_pct": {
      "value": 1.9,
      "year": "2024-25",
      "report_year": 2025,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2024-25 TPRS / TPRS_ATTENDANCE_123910013",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2025&lev=C&id=123910013&prgopt=reports/tapr/attendgrad.sas",
      "source_variable": "Chronic Absenteeism, 2024-25, Campus",
      "source_cdcn": "123910013",
      "source_campus_name": "DR MARTIN LUTHER KING COLLEGIATE ACADEMY",
      "note": "2024-25 school-year chronic absenteeism from the updated 2024-25 TPRS. ",
      "verification_basis": "Direct official TPRS campus column; updated 2024-25 indicator, not district/state or publication-year substitution."
    },
    "english_i_eoc_meets_baseline_pct": {
      "value": 87,
      "year": "2024-25",
      "report_year": 2025,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2024-25 TAPR / STAAR_EOC",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2025&tapr=c_d&step=5&level=Campus&sumlev=C&id=123910014&id=123910013&id=123910046&id=123910047&id=123910042&id=123910048&id=123910008&id=123910125&dsname=STAAR_EOC&key=00AR11S%7C00AR110&key=00ABI1S%7C00ABI10&key=00AR112%7C00AR110&key=00ABI12%7C00ABI10&key=00AR113%7C00AR110&key=00ABI13%7C00ABI10&key=00AR21S%7C00AR210&key=00AUS1S%7C00AUS1%29&key=00AR212%7C00AR210&key=00AUS12%7C00AUS1%29&key=00AR213%7C00AR210&key=00AUS13%7C00AUS1%29&key=00AA11S%7C00AA110&key=00AA01S%7C00AA010&key=00AA112%7C00AA110&key=00AA012%7C00AA010&key=00AA113%7C00AA110&key=00AA013%7C00AA010&var_type=N&var_type=D&var_type=R&datafmt=csv&prgopt=reports%2Ftapr%2Fdd%2Fdd_tapr_step_7.sas",
      "source_variable": "STAAR Performance, EOC English I, SY 2024-25, All Students, % At Meets GL Standard or Above",
      "source_cdcn": "123910013",
      "source_campus_name": "DR MARTIN LUTHER KING COLLEGIATE ACADEMY",
      "note": "TEA-reported course-specific historical result; not the 2026 subject aggregate.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "english_ii_eoc_meets_baseline_pct": {
      "value": 89,
      "year": "2024-25",
      "report_year": 2025,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2024-25 TAPR / STAAR_EOC",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2025&tapr=c_d&step=5&level=Campus&sumlev=C&id=123910014&id=123910013&id=123910046&id=123910047&id=123910042&id=123910048&id=123910008&id=123910125&dsname=STAAR_EOC&key=00AR11S%7C00AR110&key=00ABI1S%7C00ABI10&key=00AR112%7C00AR110&key=00ABI12%7C00ABI10&key=00AR113%7C00AR110&key=00ABI13%7C00ABI10&key=00AR21S%7C00AR210&key=00AUS1S%7C00AUS1%29&key=00AR212%7C00AR210&key=00AUS12%7C00AUS1%29&key=00AR213%7C00AR210&key=00AUS13%7C00AUS1%29&key=00AA11S%7C00AA110&key=00AA01S%7C00AA010&key=00AA112%7C00AA110&key=00AA012%7C00AA010&key=00AA113%7C00AA110&key=00AA013%7C00AA010&var_type=N&var_type=D&var_type=R&datafmt=csv&prgopt=reports%2Ftapr%2Fdd%2Fdd_tapr_step_7.sas",
      "source_variable": "STAAR Performance, EOC English II, SY 2024-25, All Students, % At Meets GL Standard or Above",
      "source_cdcn": "123910013",
      "source_campus_name": "DR MARTIN LUTHER KING COLLEGIATE ACADEMY",
      "note": "TEA-reported course-specific historical result; not the 2026 subject aggregate.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "algebra_i_eoc_meets_baseline_pct": {
      "value": 47,
      "year": "2024-25",
      "report_year": 2025,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2024-25 TAPR / STAAR_EOC",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2025&tapr=c_d&step=5&level=Campus&sumlev=C&id=123910014&id=123910013&id=123910046&id=123910047&id=123910042&id=123910048&id=123910008&id=123910125&dsname=STAAR_EOC&key=00AR11S%7C00AR110&key=00ABI1S%7C00ABI10&key=00AR112%7C00AR110&key=00ABI12%7C00ABI10&key=00AR113%7C00AR110&key=00ABI13%7C00ABI10&key=00AR21S%7C00AR210&key=00AUS1S%7C00AUS1%29&key=00AR212%7C00AR210&key=00AUS12%7C00AUS1%29&key=00AR213%7C00AR210&key=00AUS13%7C00AUS1%29&key=00AA11S%7C00AA110&key=00AA01S%7C00AA010&key=00AA112%7C00AA110&key=00AA012%7C00AA010&key=00AA113%7C00AA110&key=00AA013%7C00AA010&var_type=N&var_type=D&var_type=R&datafmt=csv&prgopt=reports%2Ftapr%2Fdd%2Fdd_tapr_step_7.sas",
      "source_variable": "STAAR Performance, EOC Algebra I, SY 2024-25, All Students, % At Meets GL Standard or Above",
      "source_cdcn": "123910013",
      "source_campus_name": "DR MARTIN LUTHER KING COLLEGIATE ACADEMY",
      "note": "TEA-reported course-specific historical result; not the 2026 subject aggregate.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "biology_eoc_meets_baseline_pct": {
      "value": 86,
      "year": "2024-25",
      "report_year": 2025,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2024-25 TAPR / STAAR_EOC",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2025&tapr=c_d&step=5&level=Campus&sumlev=C&id=123910014&id=123910013&id=123910046&id=123910047&id=123910042&id=123910048&id=123910008&id=123910125&dsname=STAAR_EOC&key=00AR11S%7C00AR110&key=00ABI1S%7C00ABI10&key=00AR112%7C00AR110&key=00ABI12%7C00ABI10&key=00AR113%7C00AR110&key=00ABI13%7C00ABI10&key=00AR21S%7C00AR210&key=00AUS1S%7C00AUS1%29&key=00AR212%7C00AR210&key=00AUS12%7C00AUS1%29&key=00AR213%7C00AR210&key=00AUS13%7C00AUS1%29&key=00AA11S%7C00AA110&key=00AA01S%7C00AA010&key=00AA112%7C00AA110&key=00AA012%7C00AA010&key=00AA113%7C00AA110&key=00AA013%7C00AA010&var_type=N&var_type=D&var_type=R&datafmt=csv&prgopt=reports%2Ftapr%2Fdd%2Fdd_tapr_step_7.sas",
      "source_variable": "STAAR Performance, EOC Biology, SY 2024-25, All Students, % At Meets GL Standard or Above",
      "source_cdcn": "123910013",
      "source_campus_name": "DR MARTIN LUTHER KING COLLEGIATE ACADEMY",
      "note": "TEA-reported course-specific historical result; not the 2026 subject aggregate.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "us_history_eoc_meets_baseline_pct": {
      "value": 90,
      "year": "2024-25",
      "report_year": 2025,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2024-25 TAPR / STAAR_EOC",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2025&tapr=c_d&step=5&level=Campus&sumlev=C&id=123910014&id=123910013&id=123910046&id=123910047&id=123910042&id=123910048&id=123910008&id=123910125&dsname=STAAR_EOC&key=00AR11S%7C00AR110&key=00ABI1S%7C00ABI10&key=00AR112%7C00AR110&key=00ABI12%7C00ABI10&key=00AR113%7C00AR110&key=00ABI13%7C00ABI10&key=00AR21S%7C00AR210&key=00AUS1S%7C00AUS1%29&key=00AR212%7C00AR210&key=00AUS12%7C00AUS1%29&key=00AR213%7C00AR210&key=00AUS13%7C00AUS1%29&key=00AA11S%7C00AA110&key=00AA01S%7C00AA010&key=00AA112%7C00AA110&key=00AA012%7C00AA010&key=00AA113%7C00AA110&key=00AA013%7C00AA010&var_type=N&var_type=D&var_type=R&datafmt=csv&prgopt=reports%2Ftapr%2Fdd%2Fdd_tapr_step_7.sas",
      "source_variable": "STAAR Performance, EOC US History, SY 2024-25, All Students, % At Meets GL Standard or Above",
      "source_cdcn": "123910013",
      "source_campus_name": "DR MARTIN LUTHER KING COLLEGIATE ACADEMY",
      "note": "TEA-reported course-specific historical result; not the 2026 subject aggregate.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    }
  },
  "123910014": {
    "enrollment_baseline": {
      "value": 1864,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2025-26, # of Students",
      "source_cdcn": "123910014",
      "source_campus_name": "BEAUMONT UNITED H S",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "economically_disadvantaged_pct": {
      "value": 90.9,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2025-26, % Econ Disadv",
      "source_cdcn": "123910014",
      "source_campus_name": "BEAUMONT UNITED H S",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "emergent_bilingual_pct": {
      "value": 17,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2025-26, % EB",
      "source_cdcn": "123910014",
      "source_campus_name": "BEAUMONT UNITED H S",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "special_education_pct": {
      "value": 12.1,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2025-26, % Special Ed",
      "source_cdcn": "123910014",
      "source_campus_name": "BEAUMONT UNITED H S",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "mobility_baseline_pct": {
      "value": 23.6,
      "year": "2024-25",
      "report_year": 2026,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2024-25, % Mobility (Campus Only)",
      "source_cdcn": "123910014",
      "source_campus_name": "BEAUMONT UNITED H S",
      "note": "Prior-year mobility, as explicitly labeled in the 2026 download.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "domain1_baseline_score": {
      "value": 75,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 Student Achievement Domain - Scaled Score",
      "source_cdcn": "123910014",
      "source_campus_name": "BEAUMONT UNITED H S",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "domain1_rating": {
      "value": "C",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 Student Achievement Domain - Rating",
      "source_cdcn": "123910014",
      "source_campus_name": "BEAUMONT UNITED H S",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "academic_growth_baseline_score": {
      "value": 79,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 School Progress Domain - Academic Growth Scaled Score",
      "source_cdcn": "123910014",
      "source_campus_name": "BEAUMONT UNITED H S",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "academic_growth_rating": {
      "value": "C",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 School Progress Domain - Academic Growth Rating",
      "source_cdcn": "123910014",
      "source_campus_name": "BEAUMONT UNITED H S",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "relative_performance_baseline_score": {
      "value": 83,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 School Progress Domain - Relative Performance Scaled Score",
      "source_cdcn": "123910014",
      "source_campus_name": "BEAUMONT UNITED H S",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "relative_performance_rating": {
      "value": "B",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 School Progress Domain - Relative Performance Rating",
      "source_cdcn": "123910014",
      "source_campus_name": "BEAUMONT UNITED H S",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "closing_gaps_baseline_score": {
      "value": 70,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 Closing the Gaps Domain - Scaled Score",
      "source_cdcn": "123910014",
      "source_campus_name": "BEAUMONT UNITED H S",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "closing_gaps_rating": {
      "value": "C",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 Closing the Gaps Domain - Rating",
      "source_cdcn": "123910014",
      "source_campus_name": "BEAUMONT UNITED H S",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "accountability_baseline_display": {
      "value": "C / 79",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": [
        "2026 Overall Rating",
        "2026 Overall Scaled Score"
      ],
      "source_cdcn": "123910014",
      "source_campus_name": "BEAUMONT UNITED H S",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "ccmr_accountability_value": {
      "value": 90,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 CCMR, Component Score",
      "source_cdcn": "123910014",
      "source_campus_name": "BEAUMONT UNITED H S",
      "note": "Published accountability component score; annual-graduate percent is reported separately.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "rla_meets_baseline_pct": {
      "value": 34,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / D1_STAAR1",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=D1_STAAR1&key=C0022&key=C0S22&key=C0222&key=C0322&key=CR022&key=CRS22&key=CR222&key=CR322&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "STAAR Performance, Reading/Language Arts, SY 2025-26, All Students, % At Meets GL Standard or Above",
      "source_cdcn": "123910014",
      "source_campus_name": "BEAUMONT UNITED H S",
      "note": "TEA-reported subject aggregate/accountability subset; not an average of courses or grade percentages. Confirm comparability to any locally specified cohort.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "math_meets_baseline_pct": {
      "value": 25,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / D1_STAAR2",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=D1_STAAR2&key=CM022&key=CMS22&key=CM222&key=CM322&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "STAAR Performance, Mathematics, SY 2025-26, All Students, % At Meets GL Standard or Above",
      "source_cdcn": "123910014",
      "source_campus_name": "BEAUMONT UNITED H S",
      "note": "TEA-reported subject aggregate/accountability subset; not an average of courses or grade percentages. Confirm comparability to any locally specified cohort.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "ccmr_baseline_pct": {
      "value": 90,
      "year": "2024-25",
      "report_year": 2026,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2026 Accountability Data Downloads / D1_CCMR",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=D1_CCMR&key=CCMR1&key=CCMR2&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "CCMR, Annual Graduates, SY 2024-25, All Students, % Meeting",
      "source_cdcn": "123910014",
      "source_campus_name": "BEAUMONT UNITED H S",
      "note": "Annual graduates; published percent meeting CCMR, not an inferred component conversion.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "graduation_baseline_pct": {
      "value": 82.4,
      "year": "Class of 2023",
      "report_year": 2026,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2026 Accountability Data Downloads / D1_GRAD1",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=D1_GRAD1&key=COMP4&key=COMP5&key=COMP6&key=GRADSNA&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "Longitudinal Graduation Rate, 6-Year Extended, Class of 2023, All Students, % Graduated",
      "source_cdcn": "123910014",
      "source_campus_name": "BEAUMONT UNITED H S",
      "note": "6-Year Extended graduation cohort. Cohorts differ across campuses; no graduation target is inferred.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "attendance_ada_baseline_pct": {
      "value": 86.3,
      "year": "2024-25",
      "report_year": 2025,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2024-25 TPRS / TPRS_ATTENDANCE_123910014",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2025&lev=C&id=123910014&prgopt=reports/tapr/attendgrad.sas",
      "source_variable": "Attendance Rate, 2024-25, Campus",
      "source_cdcn": "123910014",
      "source_campus_name": "BEAUMONT UNITED H S",
      "note": "2024-25 school-year attendance rate from the updated 2024-25 TPRS. Attendance percentage, not funded ADA count. ",
      "verification_basis": "Direct official TPRS campus column; updated 2024-25 indicator, not district/state or publication-year substitution."
    },
    "chronic_absenteeism_baseline_pct": {
      "value": 50.5,
      "year": "2024-25",
      "report_year": 2025,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2024-25 TPRS / TPRS_ATTENDANCE_123910014",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2025&lev=C&id=123910014&prgopt=reports/tapr/attendgrad.sas",
      "source_variable": "Chronic Absenteeism, 2024-25, Campus",
      "source_cdcn": "123910014",
      "source_campus_name": "BEAUMONT UNITED H S",
      "note": "2024-25 school-year chronic absenteeism from the updated 2024-25 TPRS. ",
      "verification_basis": "Direct official TPRS campus column; updated 2024-25 indicator, not district/state or publication-year substitution."
    },
    "english_i_eoc_meets_baseline_pct": {
      "value": 22,
      "year": "2024-25",
      "report_year": 2025,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2024-25 TAPR / STAAR_EOC",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2025&tapr=c_d&step=5&level=Campus&sumlev=C&id=123910014&id=123910013&id=123910046&id=123910047&id=123910042&id=123910048&id=123910008&id=123910125&dsname=STAAR_EOC&key=00AR11S%7C00AR110&key=00ABI1S%7C00ABI10&key=00AR112%7C00AR110&key=00ABI12%7C00ABI10&key=00AR113%7C00AR110&key=00ABI13%7C00ABI10&key=00AR21S%7C00AR210&key=00AUS1S%7C00AUS1%29&key=00AR212%7C00AR210&key=00AUS12%7C00AUS1%29&key=00AR213%7C00AR210&key=00AUS13%7C00AUS1%29&key=00AA11S%7C00AA110&key=00AA01S%7C00AA010&key=00AA112%7C00AA110&key=00AA012%7C00AA010&key=00AA113%7C00AA110&key=00AA013%7C00AA010&var_type=N&var_type=D&var_type=R&datafmt=csv&prgopt=reports%2Ftapr%2Fdd%2Fdd_tapr_step_7.sas",
      "source_variable": "STAAR Performance, EOC English I, SY 2024-25, All Students, % At Meets GL Standard or Above",
      "source_cdcn": "123910014",
      "source_campus_name": "BEAUMONT UNITED H S",
      "note": "TEA-reported course-specific historical result; not the 2026 subject aggregate.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "english_ii_eoc_meets_baseline_pct": {
      "value": 31,
      "year": "2024-25",
      "report_year": 2025,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2024-25 TAPR / STAAR_EOC",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2025&tapr=c_d&step=5&level=Campus&sumlev=C&id=123910014&id=123910013&id=123910046&id=123910047&id=123910042&id=123910048&id=123910008&id=123910125&dsname=STAAR_EOC&key=00AR11S%7C00AR110&key=00ABI1S%7C00ABI10&key=00AR112%7C00AR110&key=00ABI12%7C00ABI10&key=00AR113%7C00AR110&key=00ABI13%7C00ABI10&key=00AR21S%7C00AR210&key=00AUS1S%7C00AUS1%29&key=00AR212%7C00AR210&key=00AUS12%7C00AUS1%29&key=00AR213%7C00AR210&key=00AUS13%7C00AUS1%29&key=00AA11S%7C00AA110&key=00AA01S%7C00AA010&key=00AA112%7C00AA110&key=00AA012%7C00AA010&key=00AA113%7C00AA110&key=00AA013%7C00AA010&var_type=N&var_type=D&var_type=R&datafmt=csv&prgopt=reports%2Ftapr%2Fdd%2Fdd_tapr_step_7.sas",
      "source_variable": "STAAR Performance, EOC English II, SY 2024-25, All Students, % At Meets GL Standard or Above",
      "source_cdcn": "123910014",
      "source_campus_name": "BEAUMONT UNITED H S",
      "note": "TEA-reported course-specific historical result; not the 2026 subject aggregate.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "algebra_i_eoc_meets_baseline_pct": {
      "value": 27,
      "year": "2024-25",
      "report_year": 2025,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2024-25 TAPR / STAAR_EOC",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2025&tapr=c_d&step=5&level=Campus&sumlev=C&id=123910014&id=123910013&id=123910046&id=123910047&id=123910042&id=123910048&id=123910008&id=123910125&dsname=STAAR_EOC&key=00AR11S%7C00AR110&key=00ABI1S%7C00ABI10&key=00AR112%7C00AR110&key=00ABI12%7C00ABI10&key=00AR113%7C00AR110&key=00ABI13%7C00ABI10&key=00AR21S%7C00AR210&key=00AUS1S%7C00AUS1%29&key=00AR212%7C00AR210&key=00AUS12%7C00AUS1%29&key=00AR213%7C00AR210&key=00AUS13%7C00AUS1%29&key=00AA11S%7C00AA110&key=00AA01S%7C00AA010&key=00AA112%7C00AA110&key=00AA012%7C00AA010&key=00AA113%7C00AA110&key=00AA013%7C00AA010&var_type=N&var_type=D&var_type=R&datafmt=csv&prgopt=reports%2Ftapr%2Fdd%2Fdd_tapr_step_7.sas",
      "source_variable": "STAAR Performance, EOC Algebra I, SY 2024-25, All Students, % At Meets GL Standard or Above",
      "source_cdcn": "123910014",
      "source_campus_name": "BEAUMONT UNITED H S",
      "note": "TEA-reported course-specific historical result; not the 2026 subject aggregate.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "biology_eoc_meets_baseline_pct": {
      "value": 30,
      "year": "2024-25",
      "report_year": 2025,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2024-25 TAPR / STAAR_EOC",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2025&tapr=c_d&step=5&level=Campus&sumlev=C&id=123910014&id=123910013&id=123910046&id=123910047&id=123910042&id=123910048&id=123910008&id=123910125&dsname=STAAR_EOC&key=00AR11S%7C00AR110&key=00ABI1S%7C00ABI10&key=00AR112%7C00AR110&key=00ABI12%7C00ABI10&key=00AR113%7C00AR110&key=00ABI13%7C00ABI10&key=00AR21S%7C00AR210&key=00AUS1S%7C00AUS1%29&key=00AR212%7C00AR210&key=00AUS12%7C00AUS1%29&key=00AR213%7C00AR210&key=00AUS13%7C00AUS1%29&key=00AA11S%7C00AA110&key=00AA01S%7C00AA010&key=00AA112%7C00AA110&key=00AA012%7C00AA010&key=00AA113%7C00AA110&key=00AA013%7C00AA010&var_type=N&var_type=D&var_type=R&datafmt=csv&prgopt=reports%2Ftapr%2Fdd%2Fdd_tapr_step_7.sas",
      "source_variable": "STAAR Performance, EOC Biology, SY 2024-25, All Students, % At Meets GL Standard or Above",
      "source_cdcn": "123910014",
      "source_campus_name": "BEAUMONT UNITED H S",
      "note": "TEA-reported course-specific historical result; not the 2026 subject aggregate.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "us_history_eoc_meets_baseline_pct": {
      "value": 44,
      "year": "2024-25",
      "report_year": 2025,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2024-25 TAPR / STAAR_EOC",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2025&tapr=c_d&step=5&level=Campus&sumlev=C&id=123910014&id=123910013&id=123910046&id=123910047&id=123910042&id=123910048&id=123910008&id=123910125&dsname=STAAR_EOC&key=00AR11S%7C00AR110&key=00ABI1S%7C00ABI10&key=00AR112%7C00AR110&key=00ABI12%7C00ABI10&key=00AR113%7C00AR110&key=00ABI13%7C00ABI10&key=00AR21S%7C00AR210&key=00AUS1S%7C00AUS1%29&key=00AR212%7C00AR210&key=00AUS12%7C00AUS1%29&key=00AR213%7C00AR210&key=00AUS13%7C00AUS1%29&key=00AA11S%7C00AA110&key=00AA01S%7C00AA010&key=00AA112%7C00AA110&key=00AA012%7C00AA010&key=00AA113%7C00AA110&key=00AA013%7C00AA010&var_type=N&var_type=D&var_type=R&datafmt=csv&prgopt=reports%2Ftapr%2Fdd%2Fdd_tapr_step_7.sas",
      "source_variable": "STAAR Performance, EOC US History, SY 2024-25, All Students, % At Meets GL Standard or Above",
      "source_cdcn": "123910014",
      "source_campus_name": "BEAUMONT UNITED H S",
      "note": "TEA-reported course-specific historical result; not the 2026 subject aggregate.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    }
  },
  "123910042": {
    "enrollment_baseline": {
      "value": 501,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2025-26, # of Students",
      "source_cdcn": "123910042",
      "source_campus_name": "SMITH MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "economically_disadvantaged_pct": {
      "value": 95.2,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2025-26, % Econ Disadv",
      "source_cdcn": "123910042",
      "source_campus_name": "SMITH MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "emergent_bilingual_pct": {
      "value": 18,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2025-26, % EB",
      "source_cdcn": "123910042",
      "source_campus_name": "SMITH MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "special_education_pct": {
      "value": 18.4,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2025-26, % Special Ed",
      "source_cdcn": "123910042",
      "source_campus_name": "SMITH MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "mobility_baseline_pct": {
      "value": 27.1,
      "year": "2024-25",
      "report_year": 2026,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2024-25, % Mobility (Campus Only)",
      "source_cdcn": "123910042",
      "source_campus_name": "SMITH MIDDLE",
      "note": "Prior-year mobility, as explicitly labeled in the 2026 download.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "domain1_baseline_score": {
      "value": 49,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 Student Achievement Domain - Scaled Score",
      "source_cdcn": "123910042",
      "source_campus_name": "SMITH MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "domain1_rating": {
      "value": "F",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 Student Achievement Domain - Rating",
      "source_cdcn": "123910042",
      "source_campus_name": "SMITH MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "academic_growth_baseline_score": {
      "value": 51,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 School Progress Domain - Academic Growth Scaled Score",
      "source_cdcn": "123910042",
      "source_campus_name": "SMITH MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "academic_growth_rating": {
      "value": "F",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 School Progress Domain - Academic Growth Rating",
      "source_cdcn": "123910042",
      "source_campus_name": "SMITH MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "relative_performance_baseline_score": {
      "value": 52,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 School Progress Domain - Relative Performance Scaled Score",
      "source_cdcn": "123910042",
      "source_campus_name": "SMITH MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "relative_performance_rating": {
      "value": "F",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 School Progress Domain - Relative Performance Rating",
      "source_cdcn": "123910042",
      "source_campus_name": "SMITH MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "closing_gaps_baseline_score": {
      "value": 32,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 Closing the Gaps Domain - Scaled Score",
      "source_cdcn": "123910042",
      "source_campus_name": "SMITH MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "closing_gaps_rating": {
      "value": "F",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 Closing the Gaps Domain - Rating",
      "source_cdcn": "123910042",
      "source_campus_name": "SMITH MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "accountability_baseline_display": {
      "value": "F / 46",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": [
        "2026 Overall Rating",
        "2026 Overall Scaled Score"
      ],
      "source_cdcn": "123910042",
      "source_campus_name": "SMITH MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "rla_meets_baseline_pct": {
      "value": 20,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / D1_STAAR1",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=D1_STAAR1&key=C0022&key=C0S22&key=C0222&key=C0322&key=CR022&key=CRS22&key=CR222&key=CR322&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "STAAR Performance, Reading/Language Arts, SY 2025-26, All Students, % At Meets GL Standard or Above",
      "source_cdcn": "123910042",
      "source_campus_name": "SMITH MIDDLE",
      "note": "TEA-reported subject aggregate/accountability subset; not an average of courses or grade percentages. Confirm comparability to any locally specified cohort.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "math_meets_baseline_pct": {
      "value": 9,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / D1_STAAR2",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=D1_STAAR2&key=CM022&key=CMS22&key=CM222&key=CM322&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "STAAR Performance, Mathematics, SY 2025-26, All Students, % At Meets GL Standard or Above",
      "source_cdcn": "123910042",
      "source_campus_name": "SMITH MIDDLE",
      "note": "TEA-reported subject aggregate/accountability subset; not an average of courses or grade percentages. Confirm comparability to any locally specified cohort.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "attendance_ada_baseline_pct": {
      "value": 83.6,
      "year": "2024-25",
      "report_year": 2025,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2024-25 TPRS / TPRS_ATTENDANCE_123910042",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2025&lev=C&id=123910042&prgopt=reports/tapr/attendgrad.sas",
      "source_variable": "Attendance Rate, 2024-25, Campus",
      "source_cdcn": "123910042",
      "source_campus_name": "SMITH MIDDLE",
      "note": "2024-25 school-year attendance rate from the updated 2024-25 TPRS. Attendance percentage, not funded ADA count. ",
      "verification_basis": "Direct official TPRS campus column; updated 2024-25 indicator, not district/state or publication-year substitution."
    },
    "chronic_absenteeism_baseline_pct": {
      "value": 60.8,
      "year": "2024-25",
      "report_year": 2025,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2024-25 TPRS / TPRS_ATTENDANCE_123910042",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2025&lev=C&id=123910042&prgopt=reports/tapr/attendgrad.sas",
      "source_variable": "Chronic Absenteeism, 2024-25, Campus",
      "source_cdcn": "123910042",
      "source_campus_name": "SMITH MIDDLE",
      "note": "2024-25 school-year chronic absenteeism from the updated 2024-25 TPRS. ",
      "verification_basis": "Direct official TPRS campus column; updated 2024-25 indicator, not district/state or publication-year substitution."
    }
  },
  "123910046": {
    "enrollment_baseline": {
      "value": 766,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2025-26, # of Students",
      "source_cdcn": "123910046",
      "source_campus_name": "MARSHALL MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "economically_disadvantaged_pct": {
      "value": 81.3,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2025-26, % Econ Disadv",
      "source_cdcn": "123910046",
      "source_campus_name": "MARSHALL MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "emergent_bilingual_pct": {
      "value": 6.9,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2025-26, % EB",
      "source_cdcn": "123910046",
      "source_campus_name": "MARSHALL MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "special_education_pct": {
      "value": 18.3,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2025-26, % Special Ed",
      "source_cdcn": "123910046",
      "source_campus_name": "MARSHALL MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "mobility_baseline_pct": {
      "value": 18.8,
      "year": "2024-25",
      "report_year": 2026,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2024-25, % Mobility (Campus Only)",
      "source_cdcn": "123910046",
      "source_campus_name": "MARSHALL MIDDLE",
      "note": "Prior-year mobility, as explicitly labeled in the 2026 download.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "domain1_baseline_score": {
      "value": 69,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 Student Achievement Domain - Scaled Score",
      "source_cdcn": "123910046",
      "source_campus_name": "MARSHALL MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "domain1_rating": {
      "value": "D",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 Student Achievement Domain - Rating",
      "source_cdcn": "123910046",
      "source_campus_name": "MARSHALL MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "academic_growth_baseline_score": {
      "value": 64,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 School Progress Domain - Academic Growth Scaled Score",
      "source_cdcn": "123910046",
      "source_campus_name": "MARSHALL MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "academic_growth_rating": {
      "value": "D",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 School Progress Domain - Academic Growth Rating",
      "source_cdcn": "123910046",
      "source_campus_name": "MARSHALL MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "relative_performance_baseline_score": {
      "value": 77,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 School Progress Domain - Relative Performance Scaled Score",
      "source_cdcn": "123910046",
      "source_campus_name": "MARSHALL MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "relative_performance_rating": {
      "value": "C",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 School Progress Domain - Relative Performance Rating",
      "source_cdcn": "123910046",
      "source_campus_name": "MARSHALL MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "closing_gaps_baseline_score": {
      "value": 64,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 Closing the Gaps Domain - Scaled Score",
      "source_cdcn": "123910046",
      "source_campus_name": "MARSHALL MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "closing_gaps_rating": {
      "value": "D",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 Closing the Gaps Domain - Rating",
      "source_cdcn": "123910046",
      "source_campus_name": "MARSHALL MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "accountability_baseline_display": {
      "value": "D / 69",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": [
        "2026 Overall Rating",
        "2026 Overall Scaled Score"
      ],
      "source_cdcn": "123910046",
      "source_campus_name": "MARSHALL MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "rla_meets_baseline_pct": {
      "value": 45,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / D1_STAAR1",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=D1_STAAR1&key=C0022&key=C0S22&key=C0222&key=C0322&key=CR022&key=CRS22&key=CR222&key=CR322&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "STAAR Performance, Reading/Language Arts, SY 2025-26, All Students, % At Meets GL Standard or Above",
      "source_cdcn": "123910046",
      "source_campus_name": "MARSHALL MIDDLE",
      "note": "TEA-reported subject aggregate/accountability subset; not an average of courses or grade percentages. Confirm comparability to any locally specified cohort.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "math_meets_baseline_pct": {
      "value": 31,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / D1_STAAR2",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=D1_STAAR2&key=CM022&key=CMS22&key=CM222&key=CM322&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "STAAR Performance, Mathematics, SY 2025-26, All Students, % At Meets GL Standard or Above",
      "source_cdcn": "123910046",
      "source_campus_name": "MARSHALL MIDDLE",
      "note": "TEA-reported subject aggregate/accountability subset; not an average of courses or grade percentages. Confirm comparability to any locally specified cohort.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "attendance_ada_baseline_pct": {
      "value": 93.3,
      "year": "2024-25",
      "report_year": 2025,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2024-25 TPRS / TPRS_ATTENDANCE_123910046",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2025&lev=C&id=123910046&prgopt=reports/tapr/attendgrad.sas",
      "source_variable": "Attendance Rate, 2024-25, Campus",
      "source_cdcn": "123910046",
      "source_campus_name": "MARSHALL MIDDLE",
      "note": "2024-25 school-year attendance rate from the updated 2024-25 TPRS. Attendance percentage, not funded ADA count. ",
      "verification_basis": "Direct official TPRS campus column; updated 2024-25 indicator, not district/state or publication-year substitution."
    },
    "chronic_absenteeism_baseline_pct": {
      "value": 22.3,
      "year": "2024-25",
      "report_year": 2025,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2024-25 TPRS / TPRS_ATTENDANCE_123910046",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2025&lev=C&id=123910046&prgopt=reports/tapr/attendgrad.sas",
      "source_variable": "Chronic Absenteeism, 2024-25, Campus",
      "source_cdcn": "123910046",
      "source_campus_name": "MARSHALL MIDDLE",
      "note": "2024-25 school-year chronic absenteeism from the updated 2024-25 TPRS. ",
      "verification_basis": "Direct official TPRS campus column; updated 2024-25 indicator, not district/state or publication-year substitution."
    }
  },
  "123910047": {
    "enrollment_baseline": {
      "value": 828,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2025-26, # of Students",
      "source_cdcn": "123910047",
      "source_campus_name": "ODOM MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "economically_disadvantaged_pct": {
      "value": 73.1,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2025-26, % Econ Disadv",
      "source_cdcn": "123910047",
      "source_campus_name": "ODOM MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "emergent_bilingual_pct": {
      "value": 15.7,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2025-26, % EB",
      "source_cdcn": "123910047",
      "source_campus_name": "ODOM MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "special_education_pct": {
      "value": 8.3,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2025-26, % Special Ed",
      "source_cdcn": "123910047",
      "source_campus_name": "ODOM MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "mobility_baseline_pct": {
      "value": 7.7,
      "year": "2024-25",
      "report_year": 2026,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2024-25, % Mobility (Campus Only)",
      "source_cdcn": "123910047",
      "source_campus_name": "ODOM MIDDLE",
      "note": "Prior-year mobility, as explicitly labeled in the 2026 download.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "domain1_baseline_score": {
      "value": 69,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 Student Achievement Domain - Scaled Score",
      "source_cdcn": "123910047",
      "source_campus_name": "ODOM MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "domain1_rating": {
      "value": "D",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 Student Achievement Domain - Rating",
      "source_cdcn": "123910047",
      "source_campus_name": "ODOM MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "academic_growth_baseline_score": {
      "value": 60,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 School Progress Domain - Academic Growth Scaled Score",
      "source_cdcn": "123910047",
      "source_campus_name": "ODOM MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "academic_growth_rating": {
      "value": "D",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 School Progress Domain - Academic Growth Rating",
      "source_cdcn": "123910047",
      "source_campus_name": "ODOM MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "relative_performance_baseline_score": {
      "value": 72,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 School Progress Domain - Relative Performance Scaled Score",
      "source_cdcn": "123910047",
      "source_campus_name": "ODOM MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "relative_performance_rating": {
      "value": "C",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 School Progress Domain - Relative Performance Rating",
      "source_cdcn": "123910047",
      "source_campus_name": "ODOM MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "closing_gaps_baseline_score": {
      "value": 55,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 Closing the Gaps Domain - Scaled Score",
      "source_cdcn": "123910047",
      "source_campus_name": "ODOM MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "closing_gaps_rating": {
      "value": "F",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 Closing the Gaps Domain - Rating",
      "source_cdcn": "123910047",
      "source_campus_name": "ODOM MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "accountability_baseline_display": {
      "value": "D / 67",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": [
        "2026 Overall Rating",
        "2026 Overall Scaled Score"
      ],
      "source_cdcn": "123910047",
      "source_campus_name": "ODOM MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "rla_meets_baseline_pct": {
      "value": 46,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / D1_STAAR1",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=D1_STAAR1&key=C0022&key=C0S22&key=C0222&key=C0322&key=CR022&key=CRS22&key=CR222&key=CR322&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "STAAR Performance, Reading/Language Arts, SY 2025-26, All Students, % At Meets GL Standard or Above",
      "source_cdcn": "123910047",
      "source_campus_name": "ODOM MIDDLE",
      "note": "TEA-reported subject aggregate/accountability subset; not an average of courses or grade percentages. Confirm comparability to any locally specified cohort.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "math_meets_baseline_pct": {
      "value": 33,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / D1_STAAR2",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=D1_STAAR2&key=CM022&key=CMS22&key=CM222&key=CM322&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "STAAR Performance, Mathematics, SY 2025-26, All Students, % At Meets GL Standard or Above",
      "source_cdcn": "123910047",
      "source_campus_name": "ODOM MIDDLE",
      "note": "TEA-reported subject aggregate/accountability subset; not an average of courses or grade percentages. Confirm comparability to any locally specified cohort.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "attendance_ada_baseline_pct": {
      "value": 95.1,
      "year": "2024-25",
      "report_year": 2025,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2024-25 TPRS / TPRS_ATTENDANCE_123910047",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2025&lev=C&id=123910047&prgopt=reports/tapr/attendgrad.sas",
      "source_variable": "Attendance Rate, 2024-25, Campus",
      "source_cdcn": "123910047",
      "source_campus_name": "ODOM MIDDLE",
      "note": "2024-25 school-year attendance rate from the updated 2024-25 TPRS. Attendance percentage, not funded ADA count. ",
      "verification_basis": "Direct official TPRS campus column; updated 2024-25 indicator, not district/state or publication-year substitution."
    },
    "chronic_absenteeism_baseline_pct": {
      "value": 13.0,
      "year": "2024-25",
      "report_year": 2025,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2024-25 TPRS / TPRS_ATTENDANCE_123910047",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2025&lev=C&id=123910047&prgopt=reports/tapr/attendgrad.sas",
      "source_variable": "Chronic Absenteeism, 2024-25, Campus",
      "source_cdcn": "123910047",
      "source_campus_name": "ODOM MIDDLE",
      "note": "2024-25 school-year chronic absenteeism from the updated 2024-25 TPRS. ",
      "verification_basis": "Direct official TPRS campus column; updated 2024-25 indicator, not district/state or publication-year substitution."
    }
  },
  "123910048": {
    "enrollment_baseline": {
      "value": 581,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2025-26, # of Students",
      "source_cdcn": "123910048",
      "source_campus_name": "VINCENT MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "economically_disadvantaged_pct": {
      "value": 81.6,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2025-26, % Econ Disadv",
      "source_cdcn": "123910048",
      "source_campus_name": "VINCENT MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "emergent_bilingual_pct": {
      "value": 20.3,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2025-26, % EB",
      "source_cdcn": "123910048",
      "source_campus_name": "VINCENT MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "special_education_pct": {
      "value": 13.8,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2025-26, % Special Ed",
      "source_cdcn": "123910048",
      "source_campus_name": "VINCENT MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "mobility_baseline_pct": {
      "value": 27.9,
      "year": "2024-25",
      "report_year": 2026,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2024-25, % Mobility (Campus Only)",
      "source_cdcn": "123910048",
      "source_campus_name": "VINCENT MIDDLE",
      "note": "Prior-year mobility, as explicitly labeled in the 2026 download.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "domain1_baseline_score": {
      "value": 54,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 Student Achievement Domain - Scaled Score",
      "source_cdcn": "123910048",
      "source_campus_name": "VINCENT MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "domain1_rating": {
      "value": "F",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 Student Achievement Domain - Rating",
      "source_cdcn": "123910048",
      "source_campus_name": "VINCENT MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "academic_growth_baseline_score": {
      "value": 57,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 School Progress Domain - Academic Growth Scaled Score",
      "source_cdcn": "123910048",
      "source_campus_name": "VINCENT MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "academic_growth_rating": {
      "value": "F",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 School Progress Domain - Academic Growth Rating",
      "source_cdcn": "123910048",
      "source_campus_name": "VINCENT MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "relative_performance_baseline_score": {
      "value": 56,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 School Progress Domain - Relative Performance Scaled Score",
      "source_cdcn": "123910048",
      "source_campus_name": "VINCENT MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "relative_performance_rating": {
      "value": "F",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 School Progress Domain - Relative Performance Rating",
      "source_cdcn": "123910048",
      "source_campus_name": "VINCENT MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "closing_gaps_baseline_score": {
      "value": 61,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 Closing the Gaps Domain - Scaled Score",
      "source_cdcn": "123910048",
      "source_campus_name": "VINCENT MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "closing_gaps_rating": {
      "value": "D",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 Closing the Gaps Domain - Rating",
      "source_cdcn": "123910048",
      "source_campus_name": "VINCENT MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "accountability_baseline_display": {
      "value": "F / 58",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": [
        "2026 Overall Rating",
        "2026 Overall Scaled Score"
      ],
      "source_cdcn": "123910048",
      "source_campus_name": "VINCENT MIDDLE",
      "note": "",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "rla_meets_baseline_pct": {
      "value": 31,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / D1_STAAR1",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=D1_STAAR1&key=C0022&key=C0S22&key=C0222&key=C0322&key=CR022&key=CRS22&key=CR222&key=CR322&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "STAAR Performance, Reading/Language Arts, SY 2025-26, All Students, % At Meets GL Standard or Above",
      "source_cdcn": "123910048",
      "source_campus_name": "VINCENT MIDDLE",
      "note": "TEA-reported subject aggregate/accountability subset; not an average of courses or grade percentages. Confirm comparability to any locally specified cohort.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "math_meets_baseline_pct": {
      "value": 18,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / D1_STAAR2",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=D1_STAAR2&key=CM022&key=CMS22&key=CM222&key=CM322&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "STAAR Performance, Mathematics, SY 2025-26, All Students, % At Meets GL Standard or Above",
      "source_cdcn": "123910048",
      "source_campus_name": "VINCENT MIDDLE",
      "note": "TEA-reported subject aggregate/accountability subset; not an average of courses or grade percentages. Confirm comparability to any locally specified cohort.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "attendance_ada_baseline_pct": {
      "value": 88.9,
      "year": "2024-25",
      "report_year": 2025,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2024-25 TPRS / TPRS_ATTENDANCE_123910048",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2025&lev=C&id=123910048&prgopt=reports/tapr/attendgrad.sas",
      "source_variable": "Attendance Rate, 2024-25, Campus",
      "source_cdcn": "123910048",
      "source_campus_name": "VINCENT MIDDLE",
      "note": "2024-25 school-year attendance rate from the updated 2024-25 TPRS. Attendance percentage, not funded ADA count. ",
      "verification_basis": "Direct official TPRS campus column; updated 2024-25 indicator, not district/state or publication-year substitution."
    },
    "chronic_absenteeism_baseline_pct": {
      "value": 42.1,
      "year": "2024-25",
      "report_year": 2025,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2024-25 TPRS / TPRS_ATTENDANCE_123910048",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2025&lev=C&id=123910048&prgopt=reports/tapr/attendgrad.sas",
      "source_variable": "Chronic Absenteeism, 2024-25, Campus",
      "source_cdcn": "123910048",
      "source_campus_name": "VINCENT MIDDLE",
      "note": "2024-25 school-year chronic absenteeism from the updated 2024-25 TPRS. ",
      "verification_basis": "Direct official TPRS campus column; updated 2024-25 indicator, not district/state or publication-year substitution."
    }
  },
  "123910125": {
    "enrollment_baseline": {
      "value": 1179,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2025-26, # of Students",
      "source_cdcn": "123910125",
      "source_campus_name": "PIETZSCH/MAC ARTHUR EL",
      "note": "Campus-wide EE-8 context; not a grades 6-8-only result.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "economically_disadvantaged_pct": {
      "value": 94.8,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2025-26, % Econ Disadv",
      "source_cdcn": "123910125",
      "source_campus_name": "PIETZSCH/MAC ARTHUR EL",
      "note": "Campus-wide EE-8 context; not a grades 6-8-only result.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "emergent_bilingual_pct": {
      "value": 28.5,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2025-26, % EB",
      "source_cdcn": "123910125",
      "source_campus_name": "PIETZSCH/MAC ARTHUR EL",
      "note": "Campus-wide EE-8 context; not a grades 6-8-only result.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "special_education_pct": {
      "value": 13.5,
      "year": "2025-26",
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2025-26, % Special Ed",
      "source_cdcn": "123910125",
      "source_campus_name": "PIETZSCH/MAC ARTHUR EL",
      "note": "Campus-wide EE-8 context; not a grades 6-8-only result.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "mobility_baseline_pct": {
      "value": 26.1,
      "year": "2024-25",
      "report_year": 2026,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "SY 2024-25, % Mobility (Campus Only)",
      "source_cdcn": "123910125",
      "source_campus_name": "PIETZSCH/MAC ARTHUR EL",
      "note": "Prior-year mobility, as explicitly labeled in the 2026 download. Campus-wide EE-8 context; not a grades 6-8-only result.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "domain1_baseline_score": {
      "value": 47,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 Student Achievement Domain - Scaled Score",
      "source_cdcn": "123910125",
      "source_campus_name": "PIETZSCH/MAC ARTHUR EL",
      "note": "Campus-wide EE-8 context; not a grades 6-8-only result.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "domain1_rating": {
      "value": "F",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 Student Achievement Domain - Rating",
      "source_cdcn": "123910125",
      "source_campus_name": "PIETZSCH/MAC ARTHUR EL",
      "note": "Campus-wide EE-8 context; not a grades 6-8-only result.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "academic_growth_baseline_score": {
      "value": 55,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 School Progress Domain - Academic Growth Scaled Score",
      "source_cdcn": "123910125",
      "source_campus_name": "PIETZSCH/MAC ARTHUR EL",
      "note": "Campus-wide EE-8 context; not a grades 6-8-only result.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "academic_growth_rating": {
      "value": "F",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 School Progress Domain - Academic Growth Rating",
      "source_cdcn": "123910125",
      "source_campus_name": "PIETZSCH/MAC ARTHUR EL",
      "note": "Campus-wide EE-8 context; not a grades 6-8-only result.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "relative_performance_baseline_score": {
      "value": 49,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 School Progress Domain - Relative Performance Scaled Score",
      "source_cdcn": "123910125",
      "source_campus_name": "PIETZSCH/MAC ARTHUR EL",
      "note": "Campus-wide EE-8 context; not a grades 6-8-only result.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "relative_performance_rating": {
      "value": "F",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 School Progress Domain - Relative Performance Rating",
      "source_cdcn": "123910125",
      "source_campus_name": "PIETZSCH/MAC ARTHUR EL",
      "note": "Campus-wide EE-8 context; not a grades 6-8-only result.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "closing_gaps_baseline_score": {
      "value": 67,
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 Closing the Gaps Domain - Scaled Score",
      "source_cdcn": "123910125",
      "source_campus_name": "PIETZSCH/MAC ARTHUR EL",
      "note": "Campus-wide EE-8 context; not a grades 6-8-only result.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "closing_gaps_rating": {
      "value": "D",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": "2026 Closing the Gaps Domain - Rating",
      "source_cdcn": "123910125",
      "source_campus_name": "PIETZSCH/MAC ARTHUR EL",
      "note": "Campus-wide EE-8 context; not a grades 6-8-only result.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "accountability_baseline_display": {
      "value": "F / 59",
      "year": 2026,
      "report_year": 2026,
      "status": "PUBLIC_VERIFIED",
      "source": "TEA 2026 Accountability Data Downloads / RATE",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2026&sumlev=C&dsname=RATE&key=RATE&key=D1&key=D2&key=D3&key=PE&key=GRD&datafmt=C&prgopt=reports%2Facct%2Fdd%2Fdd_get_data.sas",
      "source_variable": [
        "2026 Overall Rating",
        "2026 Overall Scaled Score"
      ],
      "source_cdcn": "123910125",
      "source_campus_name": "PIETZSCH/MAC ARTHUR EL",
      "note": "Campus-wide EE-8 context; not a grades 6-8-only result.",
      "verification_basis": "Direct authoritative public download, exact campus CDCN and named source column; no estimated or combined measure."
    },
    "attendance_ada_baseline_pct": {
      "value": 89.2,
      "year": "2024-25",
      "report_year": 2025,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2024-25 TPRS / TPRS_ATTENDANCE_123910125",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2025&lev=C&id=123910125&prgopt=reports/tapr/attendgrad.sas",
      "source_variable": "Attendance Rate, 2024-25, Campus",
      "source_cdcn": "123910125",
      "source_campus_name": "PIETZSCH/MAC ARTHUR EL",
      "note": "2024-25 school-year attendance rate from the updated 2024-25 TPRS. Attendance percentage, not funded ADA count. Campus-wide EE-8 context; not a grades 6-8-only result.",
      "verification_basis": "Direct official TPRS campus column; updated 2024-25 indicator, not district/state or publication-year substitution."
    },
    "chronic_absenteeism_baseline_pct": {
      "value": 39.9,
      "year": "2024-25",
      "report_year": 2025,
      "status": "PUBLIC_HISTORICAL",
      "source": "TEA 2024-25 TPRS / TPRS_ATTENDANCE_123910125",
      "url": "https://rptsvr1.tea.texas.gov/cgi/sas/broker?_service=marykay&_program=perfrept.perfmast.sas&_debug=0&ccyy=2025&lev=C&id=123910125&prgopt=reports/tapr/attendgrad.sas",
      "source_variable": "Chronic Absenteeism, 2024-25, Campus",
      "source_cdcn": "123910125",
      "source_campus_name": "PIETZSCH/MAC ARTHUR EL",
      "note": "2024-25 school-year chronic absenteeism from the updated 2024-25 TPRS. Campus-wide EE-8 context; not a grades 6-8-only result.",
      "verification_basis": "Direct official TPRS campus column; updated 2024-25 indicator, not district/state or publication-year substitution."
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
  const publicLabel = record ? (record.year ? record.year + " source year" : "VERIFY — source year not supplied") + " · " + (record.status || "PUBLIC_VERIFIED") + " · " + record.source + (record.note ? " · " + record.note : "") : "";
  const local = localValues[fieldId];
  if (local !== null && local !== undefined && String(local).trim() !== "" && localSources[fieldId]) return {
    text: format(local), value: local, kind: "local", sourceLabel: "Local override · " + localSources[fieldId] + (record ? " · Public reference: " + format(record.value) + " (" + publicLabel + ")" : "")
  };
  if (record) return { text: format(record.value), value: record.value, kind: "public", status: record.status || "PUBLIC_VERIFIED", sourceLabel: publicLabel, url: record.url };
  const localRequired = field.baselineClassification === "DISTRICT_REQUIRED";
  return { text: localRequired ? "DISTRICT REQUIRED — Local baseline not provided" : field.publicBaseline ? VERIFY_BASELINE : "VERIFY — local/current measure not entered",
    kind: "verify", status: localRequired ? "DISTRICT_REQUIRED" : "VERIFY",
    sourceLabel: localRequired ? "Requires the BISD measure definition/current campus record; no public proxy substituted" : "Exact public measure/source year not yet verified" };
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
