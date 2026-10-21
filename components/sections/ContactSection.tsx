import React from "react";
import { personalInfo } from "@/content/personal";
import { Mail, Github, Linkedin, ArrowUpRight, ShieldCheck, Heart } from "lucide-react";

export default function ContactSection() {
  return (
    <footer id="contact" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 editorial-border-t">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-[var(--accent-orange)] mb-2">
            Section 06 // Direct Communications
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            Let’s Build & Explore Together
          </h2>
        </div>
        <p className="font-mono text-xs text-[var(--text-muted)] max-w-sm">
          Open to technical collaborations, academic research inquiries, and discussions on systems thinking.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Left: Contact Information Cards */}
        <div className="lg:col-span-7 bg-[var(--bg-surface)] p-6 sm:p-8 md:p-10 rounded-xs editorial-border-b space-y-6">
          <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
            Initiate a Conversation
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            Whether you want to discuss codebase analytics, software architecture, student initiatives, or philosophical inquiries on technology, feel free to reach out.
          </p>

          <div className="space-y-3 pt-2">
            {/* Email link */}
            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="group flex items-center justify-between p-4 bg-[var(--bg-primary)] rounded-xs border border-[var(--border-subtle)] hover:border-[var(--accent-orange)] transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xs bg-[var(--bg-surface)] flex items-center justify-center text-[var(--accent-orange)]">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                    Electronic Mail
                  </div>
                  <div className="font-mono text-xs sm:text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-orange)] transition-colors">
                    {personalInfo.contact.email}
                  </div>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-[var(--text-muted)] group-hover:text-[var(--accent-orange)] transition-colors" />
            </a>

            {/* GitHub */}
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 bg-[var(--bg-primary)] rounded-xs border border-[var(--border-subtle)] hover:border-[var(--accent-orange)] transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xs bg-[var(--bg-surface)] flex items-center justify-center text-[var(--accent-orange)]">
                  <Github size={16} />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                    Code Repository
                  </div>
                  <div className="font-mono text-xs sm:text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-orange)] transition-colors">
                    {personalInfo.contact.github}
                  </div>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-[var(--text-muted)] group-hover:text-[var(--accent-orange)] transition-colors" />
            </a>

            {/* LinkedIn */}
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 bg-[var(--bg-primary)] rounded-xs border border-[var(--border-subtle)] hover:border-[var(--accent-orange)] transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xs bg-[var(--bg-surface)] flex items-center justify-center text-[var(--accent-orange)]">
                  <Linkedin size={16} />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                    Professional Network
                  </div>
                  <div className="font-mono text-xs sm:text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-orange)] transition-colors">
                    {personalInfo.contact.linkedin}
                  </div>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-[var(--text-muted)] group-hover:text-[var(--accent-orange)] transition-colors" />
            </a>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--text-muted)] pt-2 border-t border-[var(--border-subtle)]">
            <ShieldCheck size={13} className="text-[var(--accent-orange)]" />
            <span>{personalInfo.contact.note}</span>
          </div>
        </div>

        {/* Right: Editorial Colophon & Specification Statement */}
        <div className="lg:col-span-5 bg-[var(--bg-surface)] p-6 sm:p-8 rounded-xs editorial-border-b space-y-6 text-xs font-mono">
          <div className="border-b border-[var(--border-subtle)] pb-3">
            <span className="uppercase tracking-widest text-[var(--text-muted)] text-[10px] block">
              Colophon & Construction
            </span>
            <span className="text-sm font-sans font-bold text-[var(--text-primary)]">
              The Curious Builder Publication
            </span>
          </div>

          <div className="space-y-3">
            <div>
              <div className="text-[var(--text-muted)] uppercase tracking-wider text-[10px]">
                Design Ethos
              </div>
              <div className="text-[var(--text-secondary)] font-sans text-xs pt-0.5">
                Editorial Minimalism with a subtle Developer Aesthetic. Structured layout, generous negative space, and strict absence of generic AI decoration.
              </div>
            </div>

            <div className="pt-2 border-t border-[var(--border-subtle)]">
              <div className="text-[var(--text-muted)] uppercase tracking-wider text-[10px]">
                Typography
              </div>
              <div className="text-[var(--text-secondary)] font-sans text-xs pt-0.5">
                Primary: Inter / Manrope · Metadata: JetBrains Mono
              </div>
            </div>

            <div className="pt-2 border-t border-[var(--border-subtle)]">
              <div className="text-[var(--text-muted)] uppercase tracking-wider text-[10px]">
                Palette Tokens
              </div>
              <div className="flex items-center gap-2 pt-1 font-mono text-[11px]">
                <span className="inline-flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#171918] border border-[var(--border-subtle)]" />
                  <span>#171918</span>
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F2EFE7] border border-[var(--border-subtle)]" />
                  <span>#F2EFE7</span>
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D97745]" />
                  <span>#D97745</span>
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-[var(--border-subtle)]">
              <div className="text-[var(--text-muted)] uppercase tracking-wider text-[10px]">
                Stack Architecture
              </div>
              <div className="text-[var(--text-secondary)] font-sans text-xs pt-0.5">
                Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[var(--text-muted)] gap-4">
        <div>
          © {new Date().getFullYear()} Nathaniel Christian Susanto. All rights reserved.
        </div>
        <div className="flex items-center gap-1">
          <span>Curious by nature. Building by choice.</span>
        </div>
      </div>
    </footer>
  );
}
