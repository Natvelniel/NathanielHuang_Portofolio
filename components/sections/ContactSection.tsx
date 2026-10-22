"use client";

import { useState } from "react";
import { personalInfo } from "@/content/personal";
import SectionShell from "@/components/ui/SectionShell";
import ExternalLink from "@/components/ui/ExternalLink";

export default function ContactSection() {
  const { email, github, linkedin, cv } = personalInfo.contact;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback: mailto link remains right next to the button
    }
  };

  return (
    <SectionShell
      id="contact"
      index="05"
      title="Contact"
      intro="Direct channels for internship opportunities, academic inquiries, and project collaboration."
    >
      <div className="border border-rule border-t-2 border-t-accent bg-surface p-6 sm:p-8 md:p-10">
        <p className="meta-label uppercase tracking-[0.1em]">Direct Email</p>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-4 border-b border-rule pb-8">
          <a
            href={`mailto:${email}`}
            className="editorial-link break-all text-[clamp(1.15rem,0.8rem+1.6vw,1.875rem)] font-semibold leading-tight tracking-[-0.02em]"
          >
            {email}
          </a>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${email}`}
              className="inline-flex min-h-11 items-center bg-accent px-5 py-2.5 font-mono text-xs font-semibold text-charcoal transition-colors duration-200 ease-editorial hover:bg-charcoal hover:text-ivory dark:hover:bg-ivory dark:hover:text-charcoal"
            >
              Send Email
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex min-h-11 items-center border border-rule bg-base px-4 py-2.5 font-mono text-xs font-medium text-primary transition-colors duration-200 ease-editorial hover:border-accent"
            >
              {copied ? "Copied to clipboard" : "Copy address"}
            </button>
          </div>
        </div>

        <dl className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="border border-rule bg-base p-5">
            <dt className="meta-label">GitHub</dt>
            <dd className="mt-2 text-base">
              <ExternalLink href={github}>github.com/Natvelniel</ExternalLink>
            </dd>
          </div>

          <div className="border border-rule bg-base p-5">
            <dt className="meta-label">LinkedIn</dt>
            <dd className="mt-2 text-base">
              <ExternalLink href={linkedin}>
                in/nathaniel-christian-susanto
              </ExternalLink>
            </dd>
          </div>

          {cv ? (
            <div className="border border-rule bg-base p-5 sm:col-span-2">
              <dt className="meta-label">Curriculum Vitae</dt>
              <dd className="mt-2 text-base">
                <a href={cv} download className="editorial-link font-medium">
                  Download CV
                </a>
              </dd>
            </div>
          ) : null}
        </dl>
      </div>
    </SectionShell>
  );
}
