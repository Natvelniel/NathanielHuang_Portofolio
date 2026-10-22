export interface NavItem {
  label: string;
  href: `#${string}`;
}

export interface PersonalInfo {
  name: string;
  role: string;
  institution: string;
  concentration: string;
  positioning: string[];
  tagline: string;
  heroIntro: string;
  about: {
    academic: string;
    approach: string;
    philosophyNote: string;
    collaboration: string;
    interests: string[];
  };
  closingLine: string;
  /** Optional. Rendered only when a real photograph is supplied. */
  portrait?: { src: string; alt: string };
  contact: {
    email: string;
    github: string;
    linkedin: string;
    /** Enabled only after a real file exists in /public (PRD FR-05). */
    cv?: string;
  };
  navigation: NavItem[];
}

export const personalInfo: PersonalInfo = {
  name: "Nathaniel Christian Susanto",
  role: "Information Systems Student, UKDW",
  institution: "Universitas Kristen Duta Wacana (UKDW), Yogyakarta",
  concentration: "Data Analytics",
  positioning: ["Data Analytics", "Software Development", "Leadership & Organization"],
  tagline: "Curious by nature. Building by choice.",
  heroIntro:
    "I am an Information Systems student exploring how data, software, and people work together. I learn by analyzing data, contributing to software projects, and taking responsibility in collaborative environments.",
  about: {
    academic:
      "I study Information Systems at Universitas Kristen Duta Wacana (UKDW) in Yogyakarta, with a concentration in Data Analytics.",
    approach:
      "I value curiosity, structured thinking, and honest progress. I aim to show not only what I have worked on, but also what I am learning and how I contribute.",
    philosophyNote: "Outside of coursework I am drawn to philosophy and critical thinking.",
    collaboration:
      "Alongside coursework I take part in organizational and collaborative work, described under Leadership & Organization.",
    interests: ["Data analysis", "Software development", "Information systems", "Philosophy"],
  },
  closingLine: "Build things. Question assumptions. Keep exploring.",
  contact: {
    email: "nathanielchristian1109@gmail.com",
    github: "https://github.com/Natvelniel",
    linkedin: "https://www.linkedin.com/in/nathaniel-christian-susanto",
  },
  navigation: [
    { label: "Works", href: "#works" },
    { label: "Leadership", href: "#leadership" },
    { label: "About", href: "#about" },
    { label: "Toolkit", href: "#toolkit" },
    { label: "Contact", href: "#contact" },
  ],
};
