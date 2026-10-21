"use client";

import React, { useEffect } from "react";
import { Project } from "@/content/projects";
import { X, CheckCircle2, AlertCircle, Cpu, FileText } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[var(--bg-primary)] text-[var(--text-primary)] w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xs shadow-2xl editorial-border-b p-6 sm:p-8 md:p-10 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project details dialog"
          className="absolute top-5 right-5 p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] rounded-xs transition-colors focus-visible:ring-2 focus-visible:ring-[var(--accent-orange)]"
        >
          <X size={20} />
        </button>

        {/* Header Metadata */}
        <div className="font-mono text-[11px] uppercase tracking-widest text-[var(--accent-orange)] mb-2 font-semibold">
          {project.eyebrow}
        </div>

        <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
          {project.title}
        </h3>

        <div className="text-xs font-mono text-[var(--text-muted)] mb-6 flex items-center gap-2">
          <span>{project.academicContext}</span>
          <span>·</span>
          <span className="text-[var(--accent-orange)]">{project.verifiedStatus}</span>
        </div>

        {/* Content Body */}
        <div className="space-y-6 text-sm leading-relaxed border-t border-[var(--border-subtle)] pt-6">
          {/* Problem & Objective */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[var(--bg-surface)] p-5 rounded-xs">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-1">
                Context & Challenge
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)]">{project.problem}</p>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-[var(--accent-orange)] font-semibold mb-1">
                Target Objective
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)]">{project.objective}</p>
            </div>
          </div>

          {/* Personal Contribution */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 size={16} className="text-[var(--accent-orange)]" />
              <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-[var(--text-primary)]">
                Personal Contribution & Scope ({project.contribution.type})
              </h4>
            </div>
            <ul className="space-y-2 pl-4 list-disc marker:text-[var(--accent-orange)] text-xs sm:text-sm text-[var(--text-secondary)]">
              {project.contribution.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>

          {/* Analytics Dimension if applicable */}
          {project.analyticsDimension && (
            <div className="p-4 bg-[var(--accent-orange-subtle)] border-l-2 border-[var(--accent-orange)] rounded-xs">
              <div className="font-mono text-xs uppercase tracking-wider text-[var(--accent-orange)] font-semibold mb-1 flex items-center gap-1.5">
                <Cpu size={14} />
                <span>Data Analytics & Intelligence Dimension</span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                {project.analyticsDimension}
              </p>
            </div>
          )}

          {/* Challenges and Architectural Decisions */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle size={16} className="text-[var(--text-muted)]" />
              <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-[var(--text-primary)]">
                Key Technical Challenges & Decisions
              </h4>
            </div>
            <ul className="space-y-2 pl-4 list-disc marker:text-[var(--text-muted)] text-xs sm:text-sm text-[var(--text-secondary)]">
              {project.challengesAndDecisions.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Methods and Tech Stack */}
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-2">
              Methods, Frameworks & Tooling
            </div>
            <div className="flex flex-wrap gap-2">
              {project.methodsAndStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-2.5 py-1 bg-[var(--bg-surface)] text-[var(--text-primary)] rounded-xs border border-[var(--border-subtle)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Outcome & Integrity Statement */}
          <div className="p-4 bg-[var(--bg-surface)] rounded-xs border-t border-[var(--border-subtle)] text-xs space-y-1">
            <div className="font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold flex items-center gap-1.5">
              <FileText size={13} />
              <span>Project Outcome & Verification</span>
            </div>
            <p className="text-[var(--text-secondary)]">{project.outcome}</p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 font-mono text-xs uppercase tracking-wider bg-[var(--text-primary)] text-[var(--bg-primary)] hover:bg-[var(--accent-orange)] hover:text-white rounded-xs transition-colors"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
}
