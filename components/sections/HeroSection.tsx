import Image from "next/image";
import { personalInfo } from "@/content/personal";

/** Pillar summaries restate PRD Â§1.3 and link to the section holding the evidence. */
const pillars = [
  {
    title: "Data Analytics",
    body: "Data analysis and visualization in Python, plus coursework exposure to predictive-modeling algorithms.",
    href: "#works",
  },
  {
    title: "Software Development",
    body: "Backend work on EV ChargeHub, a team project that is still in development.",
    href: "#works",
  },
  {
    title: "Leadership & Organization",
    body: "Project leadership, program coordination, and event work in student organizations.",
    href: "#leadership",
  },
];

export default function HeroSection() {
  const { name, role, concentration, tagline, heroIntro, portrait } = personalInfo;
  // "Curious by nature." stays primary; "Building by choice." is set in muted gray.
  const breakAt = tagline.indexOf(". ");
  const firstLine = breakAt < 0 ? tagline : tagline.slice(0, breakAt + 1);
  const secondLine = breakAt < 0 ? "" : tagline.slice(breakAt + 2);

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="mx-auto max-w-page px-5 pb-16 pt-[calc(var(--header-h)+3.5rem)] sm:px-8 md:pb-24 md:pt-[calc(var(--header-h)+6rem)]"
    >
      <div className={portrait ? "grid items-end gap-12 lg:grid-cols-12" : undefined}>
        <div className={portrait ? "lg:col-span-8" : "max-w-4xl"}>
          <p className="inline-flex items-center gap-2 rounded-full border border-rule bg-elevated px-3 py-1 text-[13px] font-medium text-primary/80">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
            {role} Â· {concentration}
          </p>

          <h1 id="hero-heading" className="mt-8">
            <span className="block text-lg font-medium tracking-[-0.01em] text-primary sm:text-xl">{name}</span>
            <span className="mt-4 block text-balance text-[clamp(2.75rem,1.4rem+5.4vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-primary">
              {firstLine}{" "}
              <span className="text-muted">{secondLine}</span>
            </span>
          </h1>

          <p className="mt-8 max-w-measure text-lg leading-relaxed text-muted sm:text-xl">{heroIntro}</p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#works"
              className="group inline-flex h-12 items-center gap-2 rounded-lg bg-accent px-6 text-[15px] font-semibold text-charcoal transition-colors duration-200 ease-smooth hover:bg-primary hover:text-canvas"
            >
              Explore My Work
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="h-4 w-4 transition-transform duration-200 ease-smooth group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            <a
              href="#about"
              className="inline-flex h-12 items-center rounded-lg border border-rule-strong px-6 text-[15px] font-medium text-primary transition-colors duration-200 ease-smooth hover:bg-primary/[0.05]"
            >
              About Me
            </a>
          </div>
        </div>

        {portrait ? (
          <div className="lg:col-span-4">
            <Image
              src={portrait.src}
              alt={portrait.alt}
              width={640}
              height={800}
              priority
              className="h-auto w-full rounded-2xl"
            />
          </div>
        ) : null}
      </div>

      <ul className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-rule bg-rule md:mt-24 md:grid-cols-3">
        {pillars.map((pillar, idx) => (
          <li key={pillar.title} className="bg-canvas">
            <a
              href={pillar.href}
              className="group flex h-full flex-col gap-3 p-6 transition-colors duration-200 ease-smooth hover:bg-elevated sm:p-7"
            >
              <span className="meta">0{idx + 1}</span>
              <span className="flex items-center justify-between gap-3 text-lg font-semibold tracking-[-0.015em] text-primary">
                {pillar.title}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="h-4 w-4 shrink-0 text-muted transition-all duration-200 ease-smooth group-hover:translate-x-0.5 group-hover:text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
              <span className="text-[15px] leading-relaxed text-muted">{pillar.body}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
