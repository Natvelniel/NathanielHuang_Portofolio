export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  appointmentDate?: string;
  eventDate?: string;
  context: string;
  responsibilities: string[];
  metricsAndScale: {
    label: string;
    value: string;
    clarification: string;
  };
  keyLearnings: string[];
  integrityNote: string;
}

export const experiences: Experience[] = [
  {
    id: "okap-2026",
    role: "Project Leader",
    organization: "OKAP 2026 (Student Orientation Program)",
    period: "June 2026 – August 2026",
    appointmentDate: "19 June 2026",
    eventDate: "20 August 2026",
    context:
      "First major leadership appointment directing a faculty-level orientation project with compressed preparation timelines and distributed remote coordination.",
    responsibilities: [
      "Assembled and structured the organizing committee within three weeks of appointment.",
      "Defined strategic event milestones, scheduling, and risk mitigation protocols.",
      "Coordinated cross-divisional committee workflows and managed communication with faculty stakeholders.",
      "Conducted comprehensive pre-event briefings and led operational execution on event day.",
    ],
    metricsAndScale: {
      label: "Freshmen Participants",
      value: "40+ Participants",
      clarification:
        "Attendance was part of official university orientation curriculum. Metrics reflect operational coordination scale, not voluntary audience recruitment.",
    },
    keyLearnings: [
      "Transitioned from individual problem-solving to collective enablement and delegation.",
      "Learned to maintain team focus and morale despite remote asynchronous constraints.",
      "Built structured check-in cadences to identify delivery bottlenecks before deadlines.",
    ],
    integrityNote: "Verified leadership role. Participant count reflects official enrollment scale.",
  },
  {
    id: "masasi-2026",
    role: "Program Coordinator (Person in Charge)",
    organization: "MASASI 2026 — HMSI Internship Program",
    period: "September 2026 – October 2026",
    context:
      "Coordinated the student internship onboarding initiative for the Information Systems Student Association (HMSI), bridging prospective student interns with divisional responsibilities.",
    responsibilities: [
      "Published and communicated program guidelines, prerequisites, and timelines to freshmen.",
      "Administered the centralized registration intake process (20–27 September 2026).",
      "Organized and scheduled candidate interview sessions commencing 2 October 2026.",
      "Maintained regular operational alignment with the HMSI Chairperson and divisional leads.",
      "Announced placements and facilitated introductory onboarding.",
    ],
    metricsAndScale: {
      label: "Program Placements",
      value: "6 Placed Applicants",
      clarification:
        "Six prospective applicants registered for the available capacity; all six completed review and were successfully placed across their preferred divisions.",
    },
    keyLearnings: [
      "Balanced high-touch human communication with strict adherence to academic and scheduling constraints.",
      "Managed leadership duties in tandem with concurrent technical coursework deadlines.",
      "Understood that clear procedural transparency creates psychological safety for applicants.",
    ],
    integrityNote: "Verified coordination role. Placement reflects interest-matched onboarding, not competitive elimination.",
  },
];
