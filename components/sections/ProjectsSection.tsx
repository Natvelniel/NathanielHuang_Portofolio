"use client";

import React, { useState } from "react";
import { projects, Project } from "@/content/projects";
import ProjectModal from "@/components/ui/ProjectModal";
import { ArrowUpRight, BarChart3, Code2, Smartphone, GraduationCap, CheckCircle } from "lucide-react";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getCategoryIcon = (category: Project["category"]) => {
    switch (category) {
      case "Machine Learning & Analytics":
        return <BarChart3 size={16} className="text-[var(--accent-orange)]" />;
      case "Software Engineering":
        return <Code2 size={16} className="text-[var(--accent-orange)]" />;
      case "Mobile Development":
        return <Smartphone size={16} className="text-[var(--accent-orange)]" />;
      case "Academic Research":
        return <GraduationCap size={16} className="text-[var(--accent-orange)]" />;
    }
  };

  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 editorial-border-t">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-[var(--accent-orange)] mb-2">
            Section 02 // Engineering & Analytics Dossier
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            Selected Technical Projects
          </h2>
        </div>
        <p className="font-mono text-xs text-[var(--text-muted)] max-w-sm">
          Every project reflects demonstrated coursework and verified milestones. Individual contributions are strictly delineated from group efforts.
        </p>
      </div>

      {/* Projects Grid (Asymmetric Editorial Layout) */}
      <div className="space-y-8">
        {/* Flagship Project: ML Code Smell Detection */}
        {projects
          .filter((p) => p.id === "ml-code-smell-analysis")
          .map((project) => (
            <div
              key={project.id}
              className="group bg-[var(--bg-surface)] rounded-xs editorial-border-b p-6 sm:p-8 md:p-10 transition-all hover:border-[var(--accent-orange)] relative"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--accent-orange)] font-semibold">
                  {getCategoryIcon(project.category)}
                  <span>{project.eyebrow}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[var(--text-muted)] bg-[var(--bg-primary)] px-2.5 py-1 rounded-xs border border-[var(--border-subtle)]">
                  <CheckCircle size={12} className="text-[var(--accent-orange)]" />
                  <span>{project.contribution.type}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-orange)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                    {project.problem}
                  </p>

                  {/* Analytics Dimension Callout */}
                  {project.analyticsDimension && (
                    <div className="p-4 bg-[var(--bg-primary)] rounded-xs border-l-2 border-[var(--accent-orange)]">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--accent-orange)] font-semibold block mb-1">
                        Data Analytics Intersection
                      </span>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                        {project.analyticsDimension}
                      </p>
                    </div>
                  )}

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.methodsAndStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-2.5 py-1 bg-[var(--bg-primary)] text-[var(--text-secondary)] rounded-xs border border-[var(--border-subtle)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6 pt-4 lg:pt-0 lg:border-l lg:border-[var(--border-subtle)] lg:pl-8">
                  <div className="space-y-3 text-xs font-mono">
                    <div className="text-[var(--text-muted)] uppercase tracking-wider text-[10px]">
                      Context
                    </div>
                    <div className="text-[var(--text-primary)] font-medium">
                      {project.academicContext}
                    </div>
                    <div className="text-[var(--text-muted)] uppercase tracking-wider text-[10px] pt-2">
                      Verified Status
                    </div>
                    <div className="text-[var(--accent-orange)] font-medium">
                      {project.verifiedStatus}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 font-mono text-xs uppercase tracking-wider bg-[var(--text-primary)] text-[var(--bg-primary)] hover:bg-[var(--accent-orange)] hover:text-white rounded-xs transition-colors font-medium"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}

        {/* Supporting Projects in 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter((p) => p.id !== "ml-code-smell-analysis")
            .map((project) => (
              <div
                key={project.id}
                className="group bg-[var(--bg-surface)] rounded-xs editorial-border-b p-6 flex flex-col justify-between hover:border-[var(--accent-orange)] transition-colors relative"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent-orange)] font-semibold flex items-center gap-1.5">
                      {getCategoryIcon(project.category)}
                      <span>{project.category}</span>
                    </span>
                    <span className="font-mono text-[10px] text-[var(--text-muted)]">
                      {project.contribution.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-orange)] transition-colors mb-3">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4 line-clamp-3">
                    {project.problem}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.methodsAndStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] px-2 py-0.5 bg-[var(--bg-primary)] text-[var(--text-muted)] rounded-xs border border-[var(--border-subtle)]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.methodsAndStack.length > 4 && (
                      <span className="font-mono text-[11px] px-1.5 py-0.5 text-[var(--text-muted)]">
                        +{project.methodsAndStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider truncate max-w-[170px]">
                    {project.verifiedStatus}
                  </span>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-[var(--text-primary)] hover:text-[var(--accent-orange)] font-semibold transition-colors"
                  >
                    <span>Dossier</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Detail Dialog */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
