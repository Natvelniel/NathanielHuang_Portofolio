import React from "react";
import { experiences } from "@/content/experience";
import { Users, Calendar, ShieldCheck, CheckSquare, Info } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 editorial-border-t">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-[var(--accent-orange)] mb-2">
            Section 03 // Organizational Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            Leadership & Coordination Log
          </h2>
        </div>
        <p className="font-mono text-xs text-[var(--text-muted)] max-w-sm">
          Factual records of committee leadership and program coordination. All metrics reflect official operational scopes without inflated claims.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-[var(--bg-surface)] p-6 sm:p-8 rounded-xs editorial-border-b flex flex-col justify-between space-y-6"
          >
            <div>
              {/* Header meta */}
              <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] border-b border-[var(--border-subtle)] pb-3 mb-4">
                <span className="flex items-center gap-1.5 text-[var(--accent-orange)] font-semibold">
                  <Users size={14} />
                  <span>{exp.organization}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={13} />
                  <span>{exp.period}</span>
                </span>
              </div>

              {/* Role Title */}
              <h3 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] mb-2">
                {exp.role}
              </h3>

              {/* Context */}
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                {exp.context}
              </p>

              {/* Responsibilities */}
              <div className="space-y-3 mb-6">
                <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-semibold flex items-center gap-1.5">
                  <CheckSquare size={13} className="text-[var(--accent-orange)]" />
                  <span>Key Responsibilities & Scope</span>
                </div>
                <ul className="space-y-1.5 pl-4 list-disc marker:text-[var(--accent-orange)] text-xs text-[var(--text-secondary)] leading-relaxed">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>

              {/* Honest Metric Callout */}
              <div className="p-4 bg-[var(--bg-primary)] rounded-xs border border-[var(--border-subtle)] space-y-1 mb-6">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[var(--text-muted)] uppercase tracking-wider text-[10px]">
                    {exp.metricsAndScale.label}
                  </span>
                  <span className="font-bold text-[var(--text-primary)]">
                    {exp.metricsAndScale.value}
                  </span>
                </div>
                <div className="text-[11px] text-[var(--text-secondary)] leading-normal flex items-start gap-1.5 pt-1 border-t border-[var(--border-subtle)]">
                  <Info size={13} className="text-[var(--accent-orange)] shrink-0 mt-0.5" />
                  <span>{exp.metricsAndScale.clarification}</span>
                </div>
              </div>

              {/* Leadership Insights */}
              <div className="space-y-2">
                <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                  Key Learnings
                </div>
                <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
                  {exp.keyLearnings.map((learning, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[var(--accent-orange)] font-mono font-bold">›</span>
                      <span>{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Integrity footer */}
            <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center gap-1.5 font-mono text-[11px] text-[var(--text-muted)]">
              <ShieldCheck size={14} className="text-[var(--accent-orange)]" />
              <span>{exp.integrityNote}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
