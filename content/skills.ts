export interface SkillItem {
  name: string;
  /** Only set where the PRD gives explicit context. Never a proficiency rating. */
  basis?: "Coursework";
}

export interface SkillGroup {
  category: string;
  note?: string;
  items: SkillItem[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming & Backend Development",
    items: [{ name: "PHP" }, { name: "Laravel" }, { name: "C#" }],
  },
  {
    category: "Data Analytics",
    items: [
      { name: "Python" },
      { name: "Pandas" },
      { name: "SciPy" },
      { name: "Matplotlib" },
      { name: "Microsoft Excel" },
    ],
  },
  {
    category: "Data Mining / Predictive Modeling",
    note: "Learning exposure from coursework.",
    items: [
      { name: "Decision Tree", basis: "Coursework" },
      { name: "Naive Bayes", basis: "Coursework" },
      { name: "K-Nearest Neighbors (KNN)", basis: "Coursework" },
    ],
  },
  {
    category: "Databases",
    items: [{ name: "MySQL" }, { name: "Oracle Database" }],
  },
  {
    category: "Development Tools",
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Visual Studio Code" },
      { name: "Visual Studio" },
      { name: "Google Antigravity" },
    ],
  },
  {
    category: "Design",
    items: [{ name: "Figma" }],
  },
];
