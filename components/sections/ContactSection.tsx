"use client";

import { useState } from "react";
import { personalInfo } from "@/content/personal";
import Reveal from "@/components/ui/Reveal";

const arrow = (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    className="h-4 w-4 transition-transform duration-200 ease-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
  >
    <path d="M5 11l6-6M6 5h5v5" />
  </svg>
);

export default function ContactSection() {
  const { email, github, linkedin, cv } = personalInfo.contact;
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked; the mailto button next to it still works.
    }
  };

  const profiles = [
    { label: "GitHub", handle: "Natvelniel", href: github },
    { label: "LinkedIn", handle: "nathaniel-christian-susanto", href: linkedin },
  ];

  return (
    <section id="contact" aria-labelledby="contact-heading" className="mx-auto max-w-page px-5 pb-20 pt-8 sm:px-8 md:pb-28">
      <Reveal>
        {/* Inverted in light mode (charcoal), raised surface in dark mode. Text colors are fixed so contrast holds in both. */}
        <div className="panel-inverse rounded-3xl bg-charcoal px-6 py-12 text-ivory dark:border dark:border-rule dark:bg-elevated sm:px-10 sm:py-16 md:px-14 md:py-20">
          <p className="flex items-center gap-2 font-mono text-[12.5px] text-[#A3ABA6]">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-4 max-w-3xl text-balance text-[clamp(2rem,1.3rem+2.6vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.03em]"
          >
            Open to internships, collaboration, and good questions.
          </h2>
          <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-[#A3ABA6]">
            Email is the most direct way to reach me.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${email}`}
              className="inline-flex h-12 items-center rounded-lg bg-accent px-6 text-[15px] font-semibold text-charcoal transition-colors duration-200 ease-smooth hover:bg-ivory"
            >
              Send an email
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-ivory/20 px-5 font-mono text-[13px] text-ivory transition-colors duration-200 ease-smooth hover:bg-ivory/[0.08]"
            >
              {email}
              <span className="text-[#A3ABA6]">{copied ? "· copied" : "· copy"}</span>
            </button>
            <span role="status" aria-live="polite" className="sr-only">
              {copied ? "Email address copied to clipboard" : ""}
            </span>
          </div>

          <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ivory/10 bg-ivory/10 sm:grid-cols-2">
            {profiles.map((profile) => (
              <li key={profile.label} className="bg-charcoal dark:bg-elevated">
                <a
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 p-5 transition-colors duration-200 ease-smooth hover:bg-ivory/[0.05] sm:p-6"
                >
                  <span>
                    <span className="block font-mono text-[12.5px] text-[#A3ABA6]">{profile.label}</span>
                    <span className="mt-1 block break-all text-base font-medium">{profile.handle}</span>
                  </span>
                  <span className="sr-only">(opens in a new tab)</span>
                  {arrow}
                </a>
              </li>
            ))}
          </ul>

          {cv ? (
            <a href={cv} download className="mt-6 inline-block text-[15px] underline decoration-accent underline-offset-4">
              Download CV
            </a>
          ) : null}
        </div>
      </Reveal>
    </section>
  );
}
