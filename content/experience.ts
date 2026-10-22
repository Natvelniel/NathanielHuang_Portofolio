export interface KeyDate {
  label: string;
  value: string;
}

export interface Experience {
  id: string;
  title: string;
  /** Short expansion of the name, shown only when the PRD states it. */
  fullName?: string;
  role: string;
  summary: string;
  dates?: KeyDate[];
  /** Verified facts only. */
  facts: string[];
  /** Context the reader needs to interpret a fact correctly. */
  context?: string;
  /** Rendered as an expandable case study when true (PRD FR-03). */
  expandable: boolean;
}

export const experiences: Experience[] = [
  {
    id: "okap-2026",
    title: "OKAP 2026",
    fullName: "Orientasi Kehidupan Akademik Program Studi Sistem Informasi",
    role: "Chair / project lead",
    summary:
      "First experience leading a project: a required orientation for new Information Systems students, prepared on a limited timeline with a remotely coordinated committee.",
    dates: [
      { label: "Appointed", value: "19 June 2026" },
      { label: "Committee assembled", value: "by 11 July 2026" },
      { label: "Event", value: "20 August 2026" },
    ],
    facts: [
      "Defined the event's purpose as a short introduction and guide to the Information Systems program.",
      "Planned the timeline and delegated responsibilities.",
      "Coordinated committee members working from different locations.",
      "Coordinated with BPM regarding the faculty-level orientation.",
      "Ran a final briefing before the event.",
    ],
    context:
      "More than 40 new students attended. OKAP is a required orientation, so attendance is context only and not a measure of audience acquisition.",
    expandable: true,
  },
  {
    id: "masasi-2026",
    title: "MASASI 2026",
    fullName: "Magang Bareng HMSI",
    role: "Person in charge of the program",
    summary:
      "Coordinated a recruitment program for a limited internship capacity, alongside academic responsibilities.",
    dates: [
      { label: "Registration", value: "20–27 September 2026" },
      { label: "Interviews began", value: "2 October 2026" },
    ],
    facts: [
      "Shared program information.",
      "Managed the registration form.",
      "Coordinated interviews and communicated announcements.",
      "Kept the program aligned with the HMSI Chair.",
      "Six applicants registered for the limited capacity; all six were accepted and placed according to the distribution of their preferred divisions.",
    ],
    expandable: true,
  },
  {
    id: "iscd",
    title: "ISCD",
    fullName: "Information Systems Creative Day",
    role: "Event division member and Master of Ceremonies",
    summary:
      "An event associated with the Information Systems program anniversary. The contribution covered planning as well as stage delivery.",
    facts: [
      "Participated in the event division.",
      "Contributed to planning the overall event, including the rundown.",
      "Served as MC and coordinated delivery with the MC partner.",
      "Prepared cue cards and their content.",
      "Used the role to practice public speaking.",
    ],
    expandable: false,
  },
  {
    id: "sosial-mahasiswa",
    title: "Sosial Mahasiswa, HMSI",
    role: "Division member; responsible for Student Committee",
    summary:
      "Sosial Mahasiswa is the HMSI division I participate in. The Student Committee responsibility falls within this division.",
    facts: [],
    expandable: false,
  },
];
