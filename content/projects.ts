export type ProjectStatus = "in-development" | "writeup-in-progress";

export interface Project {
  id: string;
  name: string;
  category: string;
  /** Where the work happened (course, team or individual). */
  context: string;
  status: ProjectStatus;
  statusLabel: string;
  /** The owner's role only. Never a claim about the whole team's output. Omit when unconfirmed. */
  role?: string;
  responsibilityAreas?: string[];
  /** Technologies the owner confirmed for their own part of the work. */
  confirmedTech: string[];
  /** Neutral context that must not be read as the owner's own contribution. */
  contextNotes?: string[];
  /** Add only when valid and approved for public sharing. */
  links?: { repo?: string; demo?: string };
}

export const projects: Project[] = [
  {
    id: "ev-chargehub",
    name: "EV ChargeHub",
    category: "Software Development",
    context: "Team project for a Rekayasa Perangkat Lunak (RPL) course",
    status: "in-development",
    statusLabel: "In development with the team",
    role: "Backend development",
    responsibilityAreas: [
      "Business logic",
      "Authentication and authorization",
      "Database operations and queries",
    ],
    confirmedTech: ["Laravel", "PHP"],
    contextNotes: ["The project's frontend uses Vue.js."],
  },
  {
    id: "business-data-analysis",
    name: "Business Data Analysis",
    category: "Data Analytics",
    context: "Python used for business data analysis",
    status: "writeup-in-progress",
    statusLabel: "Write-up in progress",
    confirmedTech: ["Python", "SciPy", "Pandas", "Matplotlib"],
  },
];
