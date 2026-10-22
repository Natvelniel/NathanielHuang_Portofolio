import Image from "next/image";
import { personalInfo } from "@/content/personal";

export default function HeroSection() {
  const {
    name,
    role,
    institution,
    concentration,
    positioning,
    tagline,
    heroIntro,
    portrait,
  } = personalInfo;

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="mx-auto max-w-page px-5 pb-20 pt-12 sm:px-8 md:pb-28 md:pt-20"
    >
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Left Column: Primary Identity & Editorial Statement */}
        <div className="lg:col-span-7 xl:col-span-8">
          <div className="inline-flex items-center gap-3 border-l-2 border-accent pl-3">
            <p className="meta-label uppercase tracking-[0.12em]">
              {positioning.join(" · ")}
            </p>
          </div>

          <h1
            id="hero-heading"
            className="mt-6 text-balance text-[clamp(2.5rem,1.4rem+4.6vw,4.5rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-primary"
          >
            {name}
          </h1>

          <p className="mt-5 font-mono text-sm text-muted">
            {role} <span aria-hidden="true">·</span>{" "}
            <span className="text-primary">Concentration: {concentration}</span>
          </p>

          <div className="mt-10 max-w-measure border-t border-rule pt-8">
            <p className="text-xl font-medium leading-snug tracking-[-0.015em] text-primary sm:text-2xl">
              &ldquo;{tagline}&rdquo;
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-[1.0625rem]">
              {heroIntro}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#works"
              className="group inline-flex min-h-12 items-center gap-3 bg-accent px-6 py-3 text-sm font-semibold text-charcoal transition-colors duration-200 ease-editorial hover:bg-charcoal hover:text-ivory dark:hover:bg-ivory dark:hover:text-charcoal"
            >
              <span>Explore My Work</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 14 14"
                className="h-3.5 w-3.5 transition-transform duration-200 ease-editorial group-hover:translate-y-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M7 2v10M3 8l4 4 4-4" />
              </svg>
            </a>

            <a
              href="#about"
              className="inline-flex min-h-12 items-center border border-rule bg-surface px-6 py-3 text-sm font-medium text-primary transition-colors duration-200 ease-editorial hover:border-accent"
            >
              About Me
            </a>
          </div>
        </div>

        {/* Right Column: Optional Portrait or Editorial Identity Ledger */}
        <aside
          aria-label="Profile summary"
          className="lg:col-span-5 xl:col-span-4 lg:mt-2"
        >
          {portrait ? (
            <div className="border border-rule bg-surface p-3">
              <Image
                src={portrait.src}
                alt={portrait.alt}
                width={640}
                height={800}
                priority
                className="h-auto w-full"
              />
            </div>
          ) : null}

          <div className="border border-rule border-t-2 border-t-accent bg-surface p-6 sm:p-7 transition-colors duration-250 ease-editorial">
            <div className="flex items-center justify-between border-b border-rule pb-4">
              <span className="meta-label uppercase tracking-[0.1em]">
                Identity Overview
              </span>
              <span className="font-mono text-xs font-medium text-primary">
                UKDW · IS
              </span>
            </div>

            <dl className="divide-y divide-rule text-sm">
              <div className="py-4">
                <dt className="meta-label">Academic Focus</dt>
                <dd className="mt-1 font-medium text-primary">
                  Information Systems — {concentration}
                </dd>
                <dd className="mt-0.5 text-xs text-muted">{institution}</dd>
              </div>

              <div className="py-4">
                <dt className="meta-label">Core Pillars</dt>
                <dd className="mt-2.5">
                  <ol className="space-y-2">
                    {positioning.map((pillar, idx) => (
                      <li
                        key={pillar}
                        className="flex items-baseline gap-3 text-sm"
                      >
                        <span className="font-mono text-xs text-muted dark:text-accent">
                          0{idx + 1}
                        </span>
                        <span className="font-medium text-primary">
                          {pillar}
                        </span>
                      </li>
                    ))}
                  </ol>
                </dd>
              </div>

              <div className="pt-4">
                <dt className="meta-label">Current Work</dt>
                <dd className="mt-1 flex items-center gap-2 text-sm text-primary">
                  <span
                    aria-hidden="true"
                    className="inline-block h-2 w-2 bg-accent"
                  />
                  <span>EV ChargeHub (Backend — In Development)</span>
                </dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </section>
  );
}
