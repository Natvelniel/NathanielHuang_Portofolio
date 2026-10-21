export interface Project {
  id: string;
  title: string;
  eyebrow: string;
  category: "Machine Learning & Analytics" | "Software Engineering" | "Mobile Development" | "Academic Research";
  academicContext: string;
  timeline?: string;
  problem: string;
  objective: string;
  contribution: {
    type: "Individual Project" | "Team Project (Lead / Core Role)" | "Academic Coursework";
    details: string[];
  };
  analyticsDimension?: string;
  methodsAndStack: string[];
  challengesAndDecisions: string[];
  outcome: string;
  verifiedStatus: string;
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "ml-code-smell-analysis",
    title: "Machine Learning for Code Smell Detection",
    eyebrow: "CAPSTONE PROJECT · DATA ANALYTICS & ML",
    category: "Machine Learning & Analytics",
    academicContext: "Undergraduate Capstone Project — Information Systems (Data Analytics Concentration)",
    problem:
      "Software repositories accumulate structural flaws ('code smells') that degrade maintainability and increase technical debt over time. Manual code reviews are time-consuming and prone to subjective variance.",
    objective:
      "Formulate a data-driven detection pipeline that extracts structural software metrics and trains machine learning models to identify code smells with measurable evaluation precision.",
    contribution: {
      type: "Academic Coursework",
      details: [
        "Extracted structural source code metrics across targeted repository datasets.",
        "Performed data preprocessing, normalization, and handled class imbalance.",
        "Evaluated model classification performance across precision, recall, and F1-score benchmarks.",
      ],
    },
    analyticsDimension:
      "Exemplifies the intersection of Software Engineering and Data Analytics by applying exploratory data analysis, metric engineering, and statistical classifier evaluation to codebase health.",
    methodsAndStack: ["Python", "Pandas", "Scikit-Learn", "Software Metrics", "Data Preprocessing", "Classification Models"],
    challengesAndDecisions: [
      "Severe class imbalance between healthy code entities and rare code smell instances required deliberate sampling strategies.",
      "Focused on interpretable metrics over opaque black-box approaches to ensure recommendations provide actionable insights for developers.",
    ],
    outcome:
      "Demonstrated that metric-based machine learning classifiers can systematically flag structural degradation, bridging automated analytics with software quality assurance.",
    verifiedStatus: "Verified Academic Capstone Analysis",
  },
  {
    id: "ev-charging-web-app",
    title: "EV Charging Station Management Platform",
    eyebrow: "SOFTWARE ENGINEERING · RPL COURSE",
    category: "Software Engineering",
    academicContext: "Software Engineering (Rekayasa Perangkat Lunak) Coursework",
    problem:
      "As electric vehicle adoption grows, drivers face fragmented booking experiences, while station managers lack unified operational visibility over charger availability and reservation queues.",
    objective:
      "Design and engineer a web-based management system providing slot reservations, session scheduling, and administrative oversight.",
    contribution: {
      type: "Team Project (Lead / Core Role)",
      details: [
        "Architected core relational database schema for station slots, user reservations, and transaction states.",
        "Developed backend controller logic and routing using the Laravel framework.",
        "Collaborated with team peers on interface layouts and usability verification.",
      ],
    },
    methodsAndStack: ["PHP", "Laravel", "MySQL", "Relational Database Modeling", "Tailwind CSS", "Git"],
    challengesAndDecisions: [
      "Preventing reservation collisions for the same charging dock required strict database transaction locks and schedule validation logic.",
      "Structured administrative views to display slot statuses cleanly without unnecessary interface clutter.",
    ],
    outcome:
      "Successfully delivered a functional multi-role platform (Administrator, Station Operator, EV Driver) fulfilling all course software engineering milestones.",
    verifiedStatus: "Verified Course Project",
  },
  {
    id: "pizzablazzing-mobile-app",
    title: "PizzaBlazzing Mobile Ordering System",
    eyebrow: "MOBILE PROGRAMMING · APPLICATION ENGINEERING",
    category: "Mobile Development",
    academicContext: "Mobile Programming Course Project",
    problem:
      "Digital food ordering interfaces often suffer from sluggish responsive state management, clunky item customization, and unoptimized mobile checkout flows.",
    objective:
      "Construct a responsive mobile application delivering rapid catalog browsing, dynamic topping customization, and local cart calculation.",
    contribution: {
      type: "Individual Project",
      details: [
        "Implemented end-to-end mobile user interface and custom interaction components.",
        "Engineered client-side state handling for interactive order configuration and price computations.",
        "Validated touch target standards and layout adaptability across various mobile aspect ratios.",
      ],
    },
    methodsAndStack: ["C#", ".NET / Mobile Framework", "State Management", "UI/UX Mobile Design"],
    challengesAndDecisions: [
      "Designed dynamic pricing logic that recalculates instantly upon topping selection without frame drops.",
      "Maintained a clean, typography-led visual layout that prioritized product visibility and ordering velocity.",
    ],
    outcome:
      "Delivered a responsive, high-performance mobile application showcasing strong client-side application programming and interface discipline.",
    verifiedStatus: "Verified Course Project",
  },
  {
    id: "academic-research-genai-recruitment",
    title: "GenAI Competencies in Software Developer Recruitment",
    eyebrow: "ACADEMIC RESEARCH · SIMULATED THESIS STUDY",
    category: "Academic Research",
    academicContext: "Simulated Thesis Coursework Assignment (Academic Research)",
    problem:
      "The rapid proliferation of Generative AI tools (LLMs, code assistants) is reshaping industry expectations for entry-level developers, yet academic recruitment criteria often lag behind industry reality.",
    objective:
      "Analyze empirical shifts in technical recruitment criteria and delineate the complementary skills (critical review, prompt literacy, architectural verification) demanded of modern software engineers.",
    contribution: {
      type: "Academic Coursework",
      details: [
        "Formulated research questions investigating developer evaluation practices amid AI code generation.",
        "Synthesized secondary literature and qualitative recruitment observations into an analytical framework.",
        "Drafted formal academic paper adhering to rigorous scientific methodology.",
      ],
    },
    analyticsDimension:
      "Investigates the sociotechnical dynamics of how automation shifts human cognitive value in engineering organizations.",
    methodsAndStack: ["Qualitative Research", "Literature Synthesis", "Thematic Analysis", "Academic Writing"],
    challengesAndDecisions: [
      "Distinguished genuine industry hiring trends from hype-driven promotional claims regarding generative AI capabilities.",
      "Explicitly documented as an exploratory academic simulation rather than a finalized undergraduate thesis.",
    ],
    outcome:
      "Produced a comprehensive analytical paper detailing the evolving paradigm from syntax memorization to critical systems verification in developer recruitment.",
    verifiedStatus: "Academic Coursework Simulation (Not a published thesis)",
  },
];
