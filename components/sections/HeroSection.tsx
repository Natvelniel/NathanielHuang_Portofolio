import React from "react";
import { personalInfo } from "@/content/personal";
import { ArrowDown, Database, Terminal, GitBranch, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
      {/* Eyebrow Label */}
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--bg-surface)] editorial-border-b text-xs font-mono uppercase tracking-widest text-[var(--accent-orange)] mb-6 rounded-xs">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-orange)] animate-pulse" />
        <span>{personalInfo.eyebrow}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        {/* Left Column: Headline and Positioning */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.08] mb-6">
            Nathaniel Christian{" "}
            <span className="text-[var(--text-secondary)] font-normal block sm:inline">
              Susanto.
            </span>
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-[var(--accent-orange)] italic tracking-tight mb-6">
            &ldquo;{personalInfo.tagline}&rdquo;
          </p>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-10">
            {personalInfo.positioningStatement}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent-orange)] hover:bg-[var(--accent-orange-hover)] text-white font-mono text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors shadow-xs"
            >
              <span>Explore Selected Work</span>
              <ArrowDown size={15} />
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] editorial-border-b font-mono text-xs uppercase tracking-wider font-medium rounded-xs transition-colors"
            >
              <span>Academic Context & Philosophy</span>
            </a>
          </div>
        </div>

        {/* Right Column: Editorial Metadata Matrix */}
        <div className="lg:col-span-4 bg-[var(--bg-surface)] p-6 sm:p-7 rounded-xs editorial-border-b space-y-6">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--text-muted)]">
              Academic Dossier
            </span>
            <span className="font-mono text-[11px] text-[var(--accent-orange)] font-semibold">
              UKDW · IS
            </span>
          </div>

          <div className="space-y-4 text-xs font-mono">
            <div>
              <div className="text-[var(--text-muted)] uppercase tracking-wider text-[10px] mb-1">
                Institution
              </div>
              <div className="text-[var(--text-primary)] font-sans font-medium text-sm">
                Universitas Kristen Duta Wacana
              </div>
              <div className="text-[var(--text-secondary)] text-[11px]">
                Faculty of Information Technology
              </div>
            </div>

            <div className="pt-2 border-t border-[var(--border-subtle)]">
              <div className="text-[var(--text-muted)] uppercase tracking-wider text-[10px] mb-1">
                Concentration
              </div>
              <div className="inline-flex items-center gap-1.5 text-[var(--accent-orange)] font-semibold">
                <Database size={13} />
                <span>Data Analytics</span>
              </div>
            </div>

            <div className="pt-2 border-t border-[var(--border-subtle)]">
              <div className="text-[var(--text-muted)] uppercase tracking-wider text-[10px] mb-1">
                Core Inquiry Areas
              </div>
              <ul className="space-y-1 text-[var(--text-secondary)] font-sans text-xs">
                <li className="flex items-center gap-1.5">
                  <Terminal size={12} className="text-[var(--accent-orange)] shrink-0" />
                  <span>Software Systems Engineering</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <GitBranch size={12} className="text-[var(--accent-orange)] shrink-0" />
                  <span>Quantitative Code Health Analysis</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Sparkles size={12} className="text-[var(--accent-orange)] shrink-0" />
                  <span>Systems Thinking & Tech Philosophy</span>
                </li>
              </ul>
            </div>

            <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] text-[var(--text-muted)]">
              <span>Location</span>
              <span className="text-[var(--text-primary)]">Yogyakarta, ID</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
