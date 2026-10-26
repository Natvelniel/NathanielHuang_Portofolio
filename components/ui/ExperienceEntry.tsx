"use client";

import { useState } from "react";
import type { Experience } from "@/content/experience";

interface ExperienceEntryProps {
  experience: Experience;
  defaultOpen?: boolean;
}

function FactList({ facts }: { facts: string[] }) {
  return (
    <ul className="space-y-2.5">
      {facts.map((fact) => (
        <li key={fact} className="flex gap-3 text-[15px] leading-relaxed text-primary">
          <span aria-hidden="true" className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-primary/40" />
          <span>{fact}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ExperienceEntry({ experience, defaultOpen = false }: ExperienceEntryProps) {
  const { id, title, fullName, role, summary, expandable, dates, facts, context } = experience;
  const [open, setOpen] = useState(defaultOpen);
  const panelId = `${id}-details`;

  return (
    <li className="p-6 sm:p-8">
      <div className="grid gap-4 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <h3 className="text-xl font-semibold tracking-[-0.02em] text-primary">{title}</h3>
          {fullName ? <p className="mt-1 text-sm leading-snug text-muted">{fullName}</p> : null}
        </div>

        <div className="md:col-span-8">
          <p className="meta text-primary/80">{role}</p>
          <p className="mt-2 max-w-measure text-base leading-relaxed text-primary">{summary}</p>

          {expandable ? (
            <>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpen((value) => !value)}
                className="group mt-4 inline-flex h-10 items-center gap-2 rounded-lg px-3 -ml-3 text-sm font-medium text-primary transition-colors duration-200 ease-smooth hover:bg-primary/[0.05]"
              >
                {open ? "Hide details" : "Show details"}
                <span className="sr-only"> for {title}</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className={`h-4 w-4 transition-transform duration-300 ease-smooth ${open ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                >
                  <path d="M4 6l4 4 4-4" />
                </svg>
              </button>

              <div
                id={panelId}
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-smooth ${
                  open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="min-h-0 overflow-hidden" inert={!open}>
                  <div className="mt-4 space-y-6 rounded-xl border border-rule bg-canvas p-5 sm:p-6">
                    {dates?.length ? (
                      <dl className="grid gap-4 sm:grid-cols-3">
                        {dates.map((date) => (
                          <div key={date.label}>
                            <dt className="meta">{date.label}</dt>
                            <dd className="mt-1 text-[15px] font-medium text-primary">{date.value}</dd>
                          </div>
                        ))}
                      </dl>
                    ) : null}
                    {facts.length ? <FactList facts={facts} /> : null}
                    {context ? (
                      <p className="border-t border-rule pt-4 text-sm leading-relaxed text-muted">{context}</p>
                    ) : null}
                  </div>
                </div>
              </div>
            </>
          ) : facts.length ? (
            <div className="mt-4">
              <FactList facts={facts} />
            </div>
          ) : null}
        </div>
      </div>
    </li>
  );
}
