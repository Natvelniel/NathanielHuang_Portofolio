export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    level: "Demonstrated in Coursework / Projects" | "Active Academic Study" | "Tooling & Workflow";
    context: string;
  }[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Data Analytics & Machine Learning",
    description: "Methods and frameworks applied in quantitative data modeling, feature extraction, and codebase analysis.",
    skills: [
      {
        name: "Python (Pandas, Scikit-learn)",
        level: "Demonstrated in Coursework / Projects",
        context: "Data manipulation, metric extraction, and classifier pipelines in ML Capstone.",
      },
      {
        name: "Exploratory Data Analysis (EDA)",
        level: "Demonstrated in Coursework / Projects",
        context: "Statistical distribution checks, handling class imbalance, and metric correlation.",
      },
      {
        name: "Machine Learning Classification",
        level: "Demonstrated in Coursework / Projects",
        context: "Supervised classification algorithms, evaluation via Precision, Recall, and F1-Scores.",
      },
      {
        name: "Data-Driven Decision Making",
        level: "Active Academic Study",
        context: "Translating empirical metrics into architectural and organizational actions.",
      },
    ],
  },
  {
    category: "Software Engineering & Web",
    description: "Languages and frameworks used to engineer maintainable, structured applications.",
    skills: [
      {
        name: "PHP & Laravel",
        level: "Demonstrated in Coursework / Projects",
        context: "MVC architecture, relational routing, database migrations, and authentication in EV Platform.",
      },
      {
        name: "C# & .NET",
        level: "Demonstrated in Coursework / Projects",
        context: "Object-oriented software development and mobile client state handling.",
      },
      {
        name: "Web Technologies (HTML, CSS, Modern JS/TS)",
        level: "Demonstrated in Coursework / Projects",
        context: "Standards-compliant responsive markup, semantic structure, and reactive client interfaces.",
      },
      {
        name: "Information Systems Architecture",
        level: "Active Academic Study",
        context: "Business process modeling, requirements traceability, and enterprise system design.",
      },
    ],
  },
  {
    category: "Database Systems",
    description: "Relational data modeling, schema normalization, and querying discipline.",
    skills: [
      {
        name: "MySQL",
        level: "Demonstrated in Coursework / Projects",
        context: "Relational schemas, foreign key constraints, transactional consistency in course apps.",
      },
      {
        name: "Oracle RDBMS",
        level: "Demonstrated in Coursework / Projects",
        context: "Enterprise relational database coursework, structured SQL queries, and administrative concepts.",
      },
      {
        name: "Relational Data Modeling",
        level: "Demonstrated in Coursework / Projects",
        context: "Entity-Relationship (ER) diagrams, 3NF normalization, and query performance optimization.",
      },
    ],
  },
  {
    category: "Development & Product Tooling",
    description: "Environments, version control, and design tools powering daily workflows.",
    skills: [
      {
        name: "Git & GitHub",
        level: "Tooling & Workflow",
        context: "Version control, branching conventions, and collaborative commit workflows.",
      },
      {
        name: "VS Code & Visual Studio",
        level: "Tooling & Workflow",
        context: "Primary development environments for web, scripting, and C# solutions.",
      },
      {
        name: "Figma",
        level: "Tooling & Workflow",
        context: "Wireframing, UI prototyping, and component layout exploration.",
      },
      {
        name: "Antigravity",
        level: "Tooling & Workflow",
        context: "Agentic software engineering, workflow automation, and structured development.",
      },
    ],
  },
];
