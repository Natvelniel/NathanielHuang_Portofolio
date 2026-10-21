import React from "react";
import { skillGroups } from "@/content/skills";
import { Wrench, CheckCircle, Compass } from "lucide-react";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 editorial-border-t">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-[var(--accent-orange)] mb-2">
            Section 04 // Capabilities & Disciplines
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            Technical & Analytical Landscape
          </h2>
        </div>
        <p className="font-mono text-xs text-[var(--text-muted)] max-w-sm">
          Skills are organized by practical application context rather than artificial percentage bars. Demonstrating what was actually built and studied.
        </p>
      </div>

      {/* Skill Groups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="bg-[var(--bg-surface)] p-6 sm:p-8 rounded-xs editorial-border-b space-y-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Wrench size={16} className="text-[var(--accent-orange)]" />
                <h3 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
                  {group.category}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {group.description}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-3.5 bg-[var(--bg-primary)] rounded-xs border border-[var(--border-subtle)] space-y-1"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                      {skill.name}
                    </span>
                    <span
                      className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-xs border flex items-center gap-1 ${
                        skill.level === "Demonstrated in Coursework / Projects"
                          ? "bg-[var(--bg-surface)] text-[var(--accent-orange)] border-[var(--border-subtle)]"
                          : "bg-[var(--bg-surface)] text-[var(--text-muted)] border-[var(--border-subtle)]"
                      }`}
                    >
                      {skill.level === "Demonstrated in Coursework / Projects" ? (
                        <CheckCircle size={10} />
                      ) : (
                        <Compass size={10} />
                      )}
                      <span>{skill.level}</span>
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-normal">
                    {skill.context}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
