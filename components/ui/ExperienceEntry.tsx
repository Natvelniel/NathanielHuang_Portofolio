"use client";

import { useState } from "react";
import type { Experience } from "@/content/experience";

interface ExperienceEntryProps {
  experience: Experience;
  index: string;
  defaultOpen?: boolean;
}

export default function ExperienceEntry({
  experience,
  index,
  defaultOpen = false,
}: ExperienceEntryProps) {
  const { title, fullName, role, summary, expandable, dates, facts, context } =
    experience;
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const panelId = `exp-panel-${experience.id}`;

  return (
    <li className="border-t border-rule py-8 first:border-t-0 first:pt-0">
      <div className="grid gap-4 md:grid-cols-12 md:gap-8">
        {/* Left: Index, Title & Full Name */}
        <div className="md:col-span-4">
          <div className="flex items-baseline gap-2.5">
            <span className="font-mono text-xs font-medium text-muted dark:text-accent">
              {index}
            </span>
            <h3 className="text-xl font-semibold leading-snug tracking-[-0.015em] text-primary">
              {title}
            </h3>
          </div>
          {fullName ? (
            <p className="mt-1.5 text-xs leading-relaxed text-muted">
              {fullName}
            </p>
          ) : null}
        </div>

        {/* Right: Role, Summary & Smooth Disclosure */}
        <div className="md:col-span-8">
          <div className="inline-flex items-center border border-rule bg-surface px-2.5 py-0.5 font-mono text-xs font-medium text-primary">
            {role}
          </div>

          <p className="mt-3 max-w-measure text-base leading-relaxed text-primary">
            {summary}
          </p>

          {expandable ? (
            <div className="mt-4">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setIsOpen((prev) => !prev)}
                className="group inline-flex min-h-10 items-center gap-2 font-mono text-xs font-medium text-primary transition-colors duration-200 ease-editorial dark:hover:text-accent"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center border border-rule bg-surface transition-colors duration-200 group-hover:border-accent">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 12 12"
                    className={`h-2.5 w-2.5 transition-transform duration-300 ease-editorial ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M2.5 4.5L6 8l3.5-3.5" />
                  </svg>
                </span>
                <span className="underline decoration-accent decoration-1 underline-offset-4">
                  {isOpen ? "Hide case study details" : "Read case study details"}
                </span>
                <span className="sr-only"> for {title}</span>
              </button>

              {/* Smooth CSS Grid Height Interpolation */}
              <div
                id={panelId}
                className={`grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-300 ease-editorial ${
                  isOpen
                    ? "mt-5 grid-rows-[1fr] opacity-100"
                    : "mt-0 grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="min-h-0">
                  <div className="space-y-5 border border-rule bg-surface p-5 sm:p-6">
                    {dates?.length ? (
                      <dl className="grid gap-4 border-b border-rule pb-4 sm:grid-cols-3">
                        {dates.map((date) => (
                          <div key={date.label}>
                            <dt className="meta-label">{date.label}</dt>
                            <dd className="mt-0.5 font-mono text-xs font-medium text-primary">
                              {date.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    ) : null}

                    {facts.length ? (
                      <div>
                        <p className="meta-label mb-2.5">
                          Responsibilities &amp; Actions
                        </p>
                        <ul className="space-y-2 text-sm leading-relaxed text-primary">
                          {facts.map((fact) => (
                            <li key={fact} className="flex items-baseline gap-3">
                              <span
                                aria-hidden="true"
                                className="font-mono text-xs text-accent"
                              >
                                —
                              </span>
                              <span>{fact}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    {context ? (
                      <p className="border-t border-rule pt-4 text-xs leading-relaxed text-muted">
                        <span className="font-mono font-medium text-primary">
                          Context:{" "}
                        </span>
                        {context}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          ) : facts.length ? (
            <ul className="mt-4 space-y-2 border-l border-rule pl-4 text-sm leading-relaxed text-muted">
              {facts.map((fact) => (
                <li key={fact} className="flex items-baseline gap-3">
                  <span
                    aria-hidden="true"
                    className="font-mono text-xs text-accent"
                  >
                    —
                  </span>
                  <span className="text-primary">{fact}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </li>
  );
}
