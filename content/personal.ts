export interface PersonalInfo {
  name: string;
  eyebrow: string;
  tagline: string;
  positioningStatement: string;
  institution: string;
  faculty: string;
  major: string;
  academicConcentration: string;
  shortBio: string;
  detailedAbout: string[];
  contact: {
    email: string;
    github: string;
    linkedin: string;
    note: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
}

export const personalInfo: PersonalInfo = {
  name: "Nathaniel Christian Susanto",
  eyebrow: "INFORMATION SYSTEMS · DATA ANALYTICS · SOFTWARE DEVELOPMENT",
  tagline: "Curious by nature. Building by choice.",
  positioningStatement:
    "I explore the intersection of data, technology, and human thinking, turning questions into systems, insights, and meaningful projects.",
  institution: "Universitas Kristen Duta Wacana (UKDW)",
  faculty: "Faculty of Information Technology",
  major: "Information Systems",
  academicConcentration: "Data Analytics",
  shortBio:
    "An Information Systems undergraduate at UKDW concentrating in Data Analytics. I build software systems, explore quantitative code intelligence, and study how digital technology reshapes human organizations.",
  detailedAbout: [
    "My academic journey in Information Systems at Universitas Kristen Duta Wacana (UKDW) is anchored by a formal concentration in Data Analytics. Rather than viewing software engineering and data analytics as disjoint disciplines, I treat them as a continuous feedback loop: software creates data, data reveals system behavior, and analytical insights drive better architectural decisions.",
    "Through coursework in software engineering, mobile development, and machine learning, I have worked on web platforms, mobile client applications, and quantitative codebase smell classification. I care deeply about writing maintainable code, structuring normalized database schemas, and understanding the statistical validity of analytical models.",
    "Beyond technical artifacts, I value organizational coordination and intellectual curiosity. Leading student initiatives like OKAP 2026 and coordinating the MASASI internship program taught me that the hardest challenges in technology are frequently organizational—requiring clear communication, empathy, and disciplined execution.",
    "When I am not coding or analyzing datasets, I spend time thinking about the philosophy of technology, systems thinking, and how artificial intelligence will alter human knowledge work.",
  ],
  contact: {
    email: "nathaniel.christian@example.com", // Verified placeholder awaiting official public address
    github: "https://github.com/nathaniel-cs", // Verified placeholder
    linkedin: "https://linkedin.com/in/nathaniel-christian-susanto", // Verified placeholder
    note: "Official social profile links and email address will be finalized upon production release.",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Leadership", href: "#experience" },
    { label: "Capabilities", href: "#skills" },
    { label: "Curiosity", href: "#curiosity" },
    { label: "Contact", href: "#contact" },
  ],
};
