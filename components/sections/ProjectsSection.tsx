import { projects } from "@/content/projects";
import SectionShell from "@/components/ui/SectionShell";
import ProjectEntry from "@/components/ui/ProjectEntry";

export default function ProjectsSection() {
  const [lead, ...rest] = projects;

  return (
    <SectionShell
      id="works"
      index="01"
      title="Selected Works"
      intro="Real technical contributions with explicit scope and current development status."
    >
      <div className="space-y-8">
        <ProjectEntry project={lead} index="01" lead />
        {rest.map((project, idx) => (
          <ProjectEntry
            key={project.id}
            project={project}
            index={`0${idx + 2}`}
          />
        ))}
      </div>
    </SectionShell>
  );
}
