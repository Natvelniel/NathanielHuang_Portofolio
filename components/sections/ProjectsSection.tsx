import { projects } from "@/content/projects";
import SectionShell from "@/components/ui/SectionShell";
import ProjectEntry from "@/components/ui/ProjectEntry";

export default function ProjectsSection() {
  const [lead, ...rest] = projects;

  return (
    <SectionShell
      id="works"
      eyebrow="Selected works"
      title="Real work, with scope and status stated plainly."
      intro="What I contributed, the tools I used for my part, and where each project stands today."
    >
      <div className="space-y-5">
        <ProjectEntry project={lead} lead />
        {rest.map((project) => (
          <ProjectEntry key={project.id} project={project} />
        ))}
      </div>
    </SectionShell>
  );
}
