import React from "react";
import { personalInfo } from "@/content/personal";
import { BookOpen, Layers, Lightbulb } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 editorial-border-t">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-[var(--accent-orange)] mb-2">
            Section 01 // Background & Ethos
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            Bridging Data Analytics & Software Systems
          </h2>
        </div>
        <div className="font-mono text-xs text-[var(--text-muted)] max-w-xs">
          Academic foundation at Universitas Kristen Duta Wacana (UKDW), Yogyakarta.
        </div>
      </div>

      {/* Main Editorial Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Key Pillars */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 bg-[var(--bg-surface)] rounded-xs editorial-border-b space-y-3">
            <div className="w-8 h-8 rounded-xs bg-[var(--accent-orange-subtle)] text-[var(--accent-orange)] flex items-center justify-center">
              <Layers size={18} />
            </div>
            <h3 className="font-sans font-semibold text-base text-[var(--text-primary)]">
              The Systems Perspective
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Software applications, relational databases, and organizational processes do not live in silos. I treat codebases as interconnected sociotechnical networks where data loops inform architecture.
            </p>
          </div>

          <div className="p-6 bg-[var(--bg-surface)] rounded-xs editorial-border-b space-y-3">
            <div className="w-8 h-8 rounded-xs bg-[var(--accent-orange-subtle)] text-[var(--accent-orange)] flex items-center justify-center">
              <BookOpen size={18} />
            </div>
            <h3 className="font-sans font-semibold text-base text-[var(--text-primary)]">
              Data Analytics Concentration
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Studying Data Analytics within Information Systems means going beyond aesthetic dashboards. My focus is on feature extraction, class distribution modeling, and evaluating machine learning predictions with statistical rigor.
            </p>
          </div>

          <div className="p-6 bg-[var(--bg-surface)] rounded-xs editorial-border-b space-y-3">
            <div className="w-8 h-8 rounded-xs bg-[var(--accent-orange-subtle)] text-[var(--accent-orange)] flex items-center justify-center">
              <Lightbulb size={18} />
            </div>
            <h3 className="font-sans font-semibold text-base text-[var(--text-primary)]">
              Intellectual Curiosity
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              I am driven by deep questions: How do generative AI tools shift the human role from syntax writer to critical reviewer? How does organizational friction manifest as software technical debt?
            </p>
          </div>
        </div>

        {/* Right Column: In-depth Narrative */}
        <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-sans">
          {personalInfo.detailedAbout.map((paragraph, index) => (
            <p key={index} className="first:text-[var(--text-primary)] first:font-medium">
              {paragraph}
            </p>
          ))}

          {/* Quotation / Callout */}
          <div className="mt-8 p-6 border-l-2 border-[var(--accent-orange)] bg-[var(--bg-surface)] text-[var(--text-primary)]">
            <p className="font-mono text-xs sm:text-sm italic leading-relaxed">
              &ldquo;Curiosity is not merely an affinity for novelty; it is the discipline of investigating the hidden assumptions behind why systems work—and where they break.&rdquo;
            </p>
            <div className="mt-2 font-mono text-[11px] uppercase tracking-wider text-[var(--accent-orange)] font-semibold">
              — The Builder’s Axiom
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
