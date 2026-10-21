import React from "react";
import { reflections } from "@/content/curiosity";
import { Sparkles, Quote, Compass } from "lucide-react";

export default function CuriositySection() {
  return (
    <section id="curiosity" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 editorial-border-t">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-[var(--accent-orange)] mb-2">
            Section 05 // Intellectual Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            Systems, Philosophy & The Mindset
          </h2>
        </div>
        <p className="font-mono text-xs text-[var(--text-muted)] max-w-sm">
          Essays and reflections on how software systems interact with human organizations, critical thinking, and the shifting nature of engineering in the AI era.
        </p>
      </div>

      {/* Essay Dossiers */}
      <div className="space-y-10">
        {reflections.map((essay, index) => (
          <article
            key={essay.id}
            className="bg-[var(--bg-surface)] p-6 sm:p-8 md:p-10 rounded-xs editorial-border-b space-y-6"
          >
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-4">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--accent-orange)] font-semibold">
                <Compass size={14} />
                <span>Theme // {essay.theme}</span>
              </div>
              <div className="font-mono text-xs text-[var(--text-muted)]">
                Essay {String(index + 1).padStart(2, "0")} · {essay.dateOrEpoch}
              </div>
            </div>

            {/* Title and premise */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] mb-3">
                {essay.title}
              </h3>
              <p className="text-base text-[var(--accent-orange)] italic font-medium">
                &ldquo;{essay.summary}&rdquo;
              </p>
            </div>

            {/* Body Paragraphs */}
            <div className="space-y-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-subtle)] pt-6">
              {essay.content.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            {/* Key Takeaway Callout */}
            <div className="p-4 bg-[var(--bg-primary)] rounded-xs border-l-2 border-[var(--accent-orange)] flex items-start gap-3">
              <Quote size={18} className="text-[var(--accent-orange)] shrink-0 mt-0.5" />
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent-orange)] font-bold block mb-1">
                  Synthesized Axiom
                </span>
                <p className="text-xs sm:text-sm font-medium text-[var(--text-primary)]">
                  {essay.keyTakeaway}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
