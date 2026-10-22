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
      intro="Scope and status are stated as they are."
    >
      <div className="space-y-16">
        <ProjectEntry project={lead} lead />
        {rest.map((project) => (
          <ProjectEntry key={project.id} project={project} />
        ))}
      </div>
    </SectionShell>
  );
}
