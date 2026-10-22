# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Personal Portfolio Website — The Curious Builder

**Versi:** 1.1  
**Status:** Draft, menunggu verifikasi konten akhir  
**Platform:** Responsive personal website  
**Target deployment:** Vercel  
**Primary tools:** Google Antigravity, UI UX Max, GitHub  
**Target audience:** Recruiter, software development teams, mahasiswa, dosen, dan calon kolaborator

---

## 1. Product Overview

### 1.1 Product Vision

Membangun website portofolio personal yang merepresentasikan identitas, kemampuan teknis, pengalaman organisasi, dan rasa ingin tahu intelektual pemiliknya.

Website ini tidak hanya menjadi tempat menampilkan proyek, tetapi juga menunjukkan cara pemiliknya berpikir, belajar, bekerja sama, dan menghadapi masalah. Semua klaim harus sesuai dengan pengalaman nyata dan status pekerjaan terkini.

### 1.2 Core Identity

**Brand name:** The Curious Builder  
**Primary tagline:** Curious by nature. Building by choice.

**Academic background:** Mahasiswa Sistem Informasi, Universitas Kristen Duta Wacana (UKDW), Yogyakarta  
**Concentration:** Data Analytics

**Positioning:** Data Analytics | Software Development | Leadership & Organization

**Brand statement:**

I am an Information Systems student exploring how data, software, and people work together. I learn by analyzing data, contributing to software projects, and taking responsibility in collaborative environments.

I value curiosity, structured thinking, and honest progress. I aim to show not only what I have worked on, but also what I am learning and how I contribute.

### 1.3 Brand Pillars

**Data Analytics**  
Showcase coursework and practical work involving data analysis, visualization, and introductory predictive-modeling exercises. Clearly distinguish analytical work from machine-learning exercises.

**Software Development**  
Show real software contributions, including the owner's current backend work on EV ChargeHub. Clearly label work that is still in development.

**Leadership & Organization**  
Show concrete responsibilities in student organizations, event planning, program coordination, communication, and teamwork.

**Curiosity & Exploration**  
Optionally publish concise notes on technology, information systems, philosophy, and critical thinking. Publish only entries that have actually been written and reviewed.

### 1.4 Product Principles

1. Authenticity over exaggeration.
2. Clear information over decorative complexity.
3. Demonstrated work over self-proclaimed expertise.
4. Distinctive visual identity over generic AI-generated aesthetics.
5. Explicit project status over implied completion.
6. Progressive improvement over premature perfection.

---

## 2. Problem Statement

Many student portfolios focus exclusively on listing technologies, displaying project screenshots, and assigning arbitrary proficiency percentages to skills.

This website should communicate a more complete professional identity. It must answer three questions:

- What kinds of technical work has the owner actually done?
- How does the owner contribute to a team or organization?
- What makes the owner's approach to learning and problem-solving distinctive?

The result should feel like a thoughtfully designed personal publication, not a generic SaaS landing page.

---

## 3. Target Audience

### Primary Audience: Recruiters and Hiring Teams

They need to quickly understand the owner's academic focus, practical technical experience, project contributions, and potential fit for internship or entry-level opportunities.

### Secondary Audience: Developers and Collaborators

They want to explore projects, understand the owner's specific responsibilities, inspect source code where available, and identify potential collaboration opportunities.

### Secondary Audience: Academic Community

Lecturers and fellow students may be interested in coursework, analytical exercises, organizational experiences, and interdisciplinary thinking.

---

## 4. Information Architecture

The first release will use a single-page structure with clearly defined sections and anchor navigation. Detailed case studies may be added when enough verified material is available.

### 4.1 Home / Hero

**Purpose:** Communicate identity and positioning immediately.

Content:
- Name: Nathaniel Christian Susanto.
- Academic role: Information Systems Student, UKDW.
- Concentration: Data Analytics.
- Positioning: Data Analytics | Software Development | Leadership & Organization.
- Tagline: “Curious by nature. Building by choice.”
- Short introduction connecting data, software, and collaborative work.
- Primary CTA: Explore My Work.
- Secondary CTA: About Me.
- Optional portrait or distinctive visual element, only if supplied.

The first screen should communicate personality without requiring visitors to read a long biography.

### 4.2 Selected Works

**Purpose:** Demonstrate practical technical capabilities using accurate descriptions of scope and status.

Each project entry should include, when available:
- Project name and context.
- Objective or problem being addressed.
- Owner's role and specific contribution.
- Confirmed technologies.
- Current status.
- Implementation details, challenges, and lessons learned.
- Repository, demo, screenshots, or other evidence only when available and valid.

#### Project A: EV ChargeHub

**Category:** Software Development  
**Context:** Team project for a Rekayasa Perangkat Lunak (RPL) course.  
**Status:** In development with the team.  
**Owner's focus:** Backend development.  
**Confirmed backend technologies:** Laravel and PHP.  
**Confirmed responsibility areas:**
- Business logic.
- Authentication and authorization.
- Database operations and queries.

**Frontend context:** The project uses Vue.js on the frontend. Do not imply that the owner personally implemented the frontend unless confirmed.

**Content rules:**
- Label the project as “In Development” or an equivalent status.
- Describe the owner as responsible for backend work, not as the sole creator of the entire application.
- Do not claim that authentication, authorization, APIs, database schema, or other features are completed until their implementation and status are confirmed.
- Do not invent project requirements, user counts, performance metrics, deployment status, repository links, or screenshots.

**Still to confirm before publication:**
- Exact backend features already implemented versus planned.
- Database engine and current schema/relationship work.
- Whether APIs are being developed and how the frontend integrates with the backend.
- Team composition and the owner's exact division of work.
- Repository URL and whether it is public.
- Screenshots or a demo that may be shared publicly.

#### Project B: Data Analytics — Business Data Analysis

**Category:** Data Analytics  
**Context:** The owner has used Python for business data analysis.  
**Confirmed tools/libraries:** Python, SciPy, Pandas, and Matplotlib.

The project card or case study should describe the actual business question, dataset, analysis steps, visualization, and findings only after those details are verified. At present, the dataset, business problem, analysis output, and conclusions are not yet known.

**Still to confirm before publication:**
- Dataset and business context.
- Main question or objective.
- Specific use of SciPy, Pandas, and Matplotlib.
- Key findings or visualizations.
- Whether the work was an individual or group assignment.
- Whether the data and resulting work can be shown publicly.

Do not invent findings, business impact, model accuracy, or decision outcomes.

#### Project C: Data Mining Coursework Exercise

**Category:** Data Analytics / Learning Exercise  
**Context:** Coursework using a dataset whose topic still needs to be checked.  
**Confirmed tool:** Microsoft Excel was used for the Data Mining work.  
**Confirmed learning topics:** Decision Tree, Naive Bayes, and K-Nearest Neighbors (KNN).  
**Confirmed scope:** Learning about or implementing algorithms as an exercise.

This should initially appear as a coursework or learning exercise, not as a completed predictive system or a validated machine-learning project. Do not claim algorithm comparison, model evaluation, prediction accuracy, or successful deployment unless verified.

**Still to confirm before publication:**
- Dataset topic and source.
- Prediction target or problem being explored.
- Which algorithms were actually implemented, rather than only studied.
- Whether Excel was used for all steps or alongside another tool.
- Evaluation method and results, if any.
- Whether the assignment permits public sharing.

If the topic and concrete output cannot be verified, omit the project from the featured-project section for the first release. The skills may still be mentioned as coursework exposure.

### 4.3 Leadership & Organization

**Purpose:** Demonstrate responsibility, coordination, event execution, communication, and learning through real organizational work.

#### OKAP 2026 — Project Leadership

- OKAP means Orientasi Kehidupan Akademik Program Studi Sistem Informasi and is a required orientation for new students in the program.
- The owner was appointed chair/project lead on 19 June 2026.
- The committee was assembled by 11 July 2026.
- The event took place on 20 August 2026.
- More than 40 new students attended.
- This was the owner's first experience leading a project.
- Preparation involved a limited timeline, remote coordination with committee members in different locations, timeline planning, delegation, and coordination with BPM regarding faculty-level orientation.
- The owner focused on defining the event's purpose as a short introduction and guide to the Information Systems program, coordinating the team, and conducting a final briefing before the event.

The narrative should focus on goal-setting, responsibility, coordination, and learning by doing. Attendance is context only; it must not be described as voluntary recruitment or proof of attracting attendees.

#### MASASI 2026 — Program Coordination

- MASASI means Magang Bareng HMSI.
- The owner was the person in charge of the program.
- Registration was open from 20 to 27 September 2026.
- Six applicants registered for the limited internship capacity.
- Interviews began on 2 October 2026.
- All six applicants were accepted and placed according to the distribution of their preferred divisions.
- Responsibilities included sharing program information, managing the registration form, coordinating interviews, communicating announcements, and maintaining alignment with the HMSI Chair.
- The program ran alongside the owner's academic responsibilities.

Do not describe MASASI as a competitive selection process or imply that applicants were rejected.

#### ISCD — Event Division and Master of Ceremonies

**Context:** Information Systems Creative Day, an event associated with the Information Systems program anniversary.

**Confirmed contributions:**
- Participated in the event division.
- Contributed to planning the overall event, including the rundown.
- Served as MC.
- Coordinated and synchronized delivery with the MC partner.
- Prepared cue cards and their content.
- Used the role to practice public speaking.

The write-up should show that the contribution included event planning as well as stage delivery. Do not invent event dates, audience size, attendance figures, or outcomes.

**Still to confirm:** Event date/year, exact official event title, and any event materials or photographs that can be shared.

#### Sosial Mahasiswa, HMSI — Organizational Membership

Sosial Mahasiswa is the HMSI division in which the owner participates. The Student Committee responsibility falls under this organizational context.

Do not present Sosial Mahasiswa and Student Committee as unrelated standalone positions without explaining their relationship.

#### Student Committee — Oversight Responsibility

The owner has responsibility for Student Committee within Sosial Mahasiswa. The exact scope of duties, activities, and examples of contributions still needs to be documented.

**Still to confirm before writing a detailed case study:**
- What the Student Committee monitors or evaluates in practice.
- Specific work programs or events handled.
- Concrete actions taken by the owner.
- Examples of issues identified, coordination performed, or recommendations made.
- Any results that can be stated accurately.

Until then, show this as a role with a brief, factual description or leave it in the experience list without claiming unverified outcomes.

### 4.4 Curiosity Archive

**Purpose:** Express the owner's exploratory nature and intellectual interests.

This section is optional for the first release. It may contain short, independently readable notes on:
- Programming fundamentals and AI-assisted development.
- Information systems and business processes.
- Technology, human behavior, and ethical reasoning.
- Philosophy and critical thinking.

Each published entry should distinguish the initial question, what was learned, relevant counterarguments, and the author's current conclusion. Do not populate the archive with placeholder articles presented as published work. Two or three thoughtful entries are preferable to a large collection of empty categories.

### 4.5 About

**Purpose:** Explain the person behind the projects.

Content:
- Academic background in Information Systems at Universitas Kristen Duta Wacana (UKDW), Yogyakarta.
- Concentration in Data Analytics.
- Interests in data analysis, software development, information systems, and philosophy.
- Personal approach to problem-solving: curiosity, structured thinking, and learning through practice.
- Organizational experience and collaborative work.

Philosophy should be presented as an intellectual interest, not as a professional qualification. Avoid exaggerated claims such as “expert,” “visionary,” or “industry-leading.”

### 4.6 Toolkit / Technical Skills

Display skills by category without arbitrary percentages or proficiency progress bars. Distinguish confirmed hands-on use from coursework exposure.

**Programming & Backend Development**
- PHP.
- Laravel.
- C#.

**Data Analytics**
- Python.
- Pandas.
- SciPy.
- Matplotlib.
- Microsoft Excel.

**Data Mining / Predictive Modeling Coursework**
- Decision Tree.
- Naive Bayes.
- K-Nearest Neighbors (KNN).

These algorithm names should be presented as learning or coursework exposure until the dataset, implementation details, and evaluation work are verified.

**Databases**
- MySQL.
- Oracle Database.

**Development Tools**
- Git.
- GitHub.
- Visual Studio Code.
- Visual Studio.
- Google Antigravity.

**Design**
- Figma.

**Project context, not automatically an individual skill claim**
- Vue.js is used by the EV ChargeHub frontend. Do not list Vue.js as a confirmed personal skill until the owner's own hands-on experience with it is confirmed.

Only include technologies the owner can reasonably explain or demonstrate. If confidence or experience level is unclear, use neutral labels such as “Used in coursework” rather than proficiency ratings.

### 4.7 Contact

Provide:
- Email: nathanielchristian1109@gmail.com
- GitHub: https://github.com/Natvelniel
- LinkedIn: https://www.linkedin.com/in/nathaniel-christian-susanto
- Downloadable CV, only after an actual file is supplied.

All external links must be functional. Do not expose private information.

---

## 5. Functional Requirements

### FR-01: Navigation
- Navigation links scroll to their corresponding sections.
- The active section may be indicated subtly.
- Mobile navigation remains usable on narrow screens.
- Navigation must not obscure section headings.

### FR-02: Project Exploration
- Visitors can browse selected projects.
- Each project has a clear summary, role, technology list, and status.
- In-progress work is clearly labeled.
- Repository and demo links appear only when valid and approved for public sharing.
- Project data is maintainable without rewriting the entire page.

### FR-03: Experience Details
- Visitors can distinguish organizational roles and project responsibilities.
- Featured experiences may open a dedicated detail page or expandable case study.
- Case studies communicate context, actual actions, and verified outcomes.
- No metrics or results may be invented to make an experience look more impressive.

### FR-04: Curiosity Archive
- Visitors can browse published notes if the archive is included in the first release.
- Each note has a title, category, date, and readable content.
- Static content is sufficient for the initial version.

### FR-05: Contact Links
- Email uses a valid email link.
- GitHub and LinkedIn link to the correct profiles.
- CV download is enabled only after a real file is supplied.

### FR-06: Responsive Layout
- The website works on desktop, tablet, and mobile.
- Navigation, typography, media, and project layouts adapt to screen size.
- No horizontal overflow is permitted at common viewport widths.

### FR-07: Accessibility
- Use semantic HTML.
- Maintain readable text contrast.
- Provide meaningful alternative text for informative images.
- Ensure keyboard navigation and visible focus states.
- Respect reduced-motion preferences.

---

## 6. Visual Design Requirements

### 6.1 Art Direction

**Style:** Editorial minimalism with a subtle developer aesthetic.

The design should combine the clarity of an editorial publication with the precision of a technical portfolio. It should feel personal, restrained, and deliberately composed.

### 6.2 Color Palette
- Charcoal: `#171918`
- Warm ivory: `#F2EFE7`
- Burnt orange: `#D97745`
- Muted gray for secondary text and dividers.

Charcoal and ivory establish the main contrast. Burnt orange is reserved for selected highlights, links, and important actions.

Avoid excessive gradients, neon colors, and glassmorphism.

### 6.3 Typography
- Primary font: Manrope or Inter.
- Monospaced accent: JetBrains Mono.

Use expressive but restrained headings, readable body text, and monospaced labels for metadata such as project categories, dates, and technologies.

### 6.4 Layout
- Strong typographic hierarchy.
- Generous but purposeful whitespace.
- Consistent grid and spacing system.
- Asymmetric editorial compositions where appropriate.
- Use project cards only where they improve scanning and comparison.
- Separate technical work, organizational experience, and personal exploration clearly.

### 6.5 Motion

Motion should clarify interaction rather than decorate the page.

Allowed:
- Subtle section reveal.
- Small hover transitions.
- Smooth scrolling where appropriate.
- Minimal image or typography transitions.

Avoid:
- Constantly moving elements.
- Excessive parallax.
- Long intro animations.
- Fake terminal windows.
- Animation that delays access to content.

---

## 7. Technical Requirements

### Recommended Stack
- Next.js.
- TypeScript.
- Tailwind CSS, only if appropriate after inspecting the existing workspace.
- Git and GitHub.
- Vercel deployment.

This is a recommendation, not an instruction to replace an existing working stack blindly.

### Architecture
- Reusable components for navigation, project entries, experience entries, and article previews.
- Content stored in typed TypeScript objects or structured local data.
- Shared design tokens for colors, typography, spacing, and borders.
- Separate routes for detailed case studies only if justified.

### Backend
No backend or database is required for the portfolio's first version.

A contact form must not be presented as functional unless an actual submission service has been configured. A direct email link is sufficient for the initial release.

### Deployment
- Source code stored in GitHub.
- Deployment through Vercel.
- Production build must pass before release.
- Environment variables must never contain public credentials or be committed to the repository.

---

## 8. UI UX Max and Antigravity Workflow

UI UX Max is a design-support tool, while Antigravity is the primary development environment. Verify the actual UI UX Max installation and documentation before assuming specific commands or capabilities.

Workflow:
1. Finalize this PRD and verify the initial content.
2. Inspect the current project structure, framework, package manager, dependencies, existing instructions, and assets.
3. Read `PRD.md` and `AGENTS.md` if present.
4. Inspect UI UX Max documentation and identify relevant design guidance.
5. Establish design tokens and a consistent visual system.
6. Propose the implementation plan before coding.
7. Implement in small, verifiable stages after approval.
8. Review desktop and mobile layouts.
9. Test links, navigation, accessibility, and production build.
10. Commit verified work to GitHub and deploy to Vercel.

Do not replace the existing project structure blindly or introduce dependencies without a reason.

---

## 9. Non-Functional Requirements

### Performance
- Avoid unnecessary libraries and oversized assets.
- Optimize images.
- Minimize unnecessary client-side JavaScript.
- Prioritize fast access to the main content.

### Maintainability
- Use reusable components.
- Keep content separate from layout where practical.
- Use clear naming conventions.
- Avoid a monolithic page component.

### Reliability
- No broken navigation or external links.
- No browser console errors in the primary user journey.
- Production build must complete successfully.

### Privacy
- Publish only intended contact information.
- Obtain permission before publishing photos of other people or internal organizational material.
- Do not expose credentials, private documents, or personal data.
- Confirm that coursework datasets and project screenshots are permitted for public display.

---

## 10. Success Criteria

Version 1.0 is complete when:
1. A visitor can understand the owner's identity and focus within the first few seconds.
2. Featured technical projects communicate real work, the owner's role, and project status.
3. EV ChargeHub is clearly labeled as in development and does not imply that all features are complete.
4. Data analytics and data-mining content distinguish verified analysis from learning exercises.
5. OKAP, MASASI, and ISCD accurately represent their responsibilities and contributions.
6. The website communicates Data Analytics, Software Development, and Leadership & Organization as coherent parts of one identity.
7. All primary navigation and contact links work.
8. The layout remains usable on desktop and mobile.
9. The production build succeeds and the deployed website is accessible.
10. No fabricated metrics, project results, testimonials, or skill ratings are presented.

---

## 11. Out of Scope for Version 1.0

- User authentication for the portfolio.
- Admin dashboard.
- Database-backed content management.
- Blog CMS.
- Backend contact form unless a clear need and actual service are established.
- Complex 3D effects.
- AI chatbot.
- Analytics infrastructure beyond basic deployment diagnostics.

These features may be considered later if a clear need emerges.

---

## 12. Open Content Items / Verification Checklist

The following information must be verified or supplied before the relevant content is published.

### Data Analytics
- [ ] Business-analysis dataset and business question.
- [ ] Specific analysis performed with Python, SciPy, Pandas, and Matplotlib.
- [ ] Findings, visualizations, and conclusions that can be stated accurately.
- [ ] Data Mining coursework dataset topic.
- [ ] Which algorithms were implemented versus only studied.
- [ ] Tools used in the Data Mining exercise beyond the confirmed use of Excel, if any.
- [ ] Evaluation method/results, if any.
- [ ] Permission to publish the dataset, outputs, or screenshots.

### EV ChargeHub
- [ ] Exact backend features already implemented versus planned.
- [ ] Database engine and specific database/query responsibilities.
- [ ] API design and frontend-backend integration details, if applicable.
- [ ] Team roles and exact individual contribution.
- [ ] Public repository URL, screenshots, or demo if available.
- [ ] Confirmation of what may be shared publicly.

### Leadership & Organization
- [ ] Exact Student Committee duties and examples of contributions.
- [ ] Specific activities under Sosial Mahasiswa.
- [ ] ISCD event date/year and official event title.
- [ ] Photos or event materials that can be shared publicly.
- [ ] CV file, if available.

### Site Content
- [ ] Professional portrait or preferred personal visual.
- [ ] Initial Curiosity Archive entries, if the section launches in version 1.0.
- [ ] Confirm all external links before deployment.

Until details are verified, use clearly marked placeholders during development or omit the relevant claim. Do not fill gaps with plausible-sounding assumptions.

---

## 13. Excluded Portfolio Content

The following items are explicitly excluded from the current portfolio scope:
- Machine-learning/code-smell capstone project.
- PizzaBlazzing mobile programming project.
- Bahasa Indonesia simulated thesis/research assignment about generative AI recruitment skills.

Do not add these projects to the homepage, featured work, skills evidence, or future-content suggestions in this PRD unless the owner explicitly changes this decision.

---

## 14. Final Product Direction

The portfolio should not attempt to portray its owner as someone who already knows everything. It should demonstrate someone who analyzes, builds, contributes, asks meaningful questions, and learns through experience.

**Build things. Question assumptions. Keep exploring.**

That is the central identity the website must communicate.
