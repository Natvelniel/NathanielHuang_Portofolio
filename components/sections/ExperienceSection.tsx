import { experiences } from "@/content/experience";
import SectionShell from "@/components/ui/SectionShell";
import ExperienceEntry from "@/components/ui/ExperienceEntry";

export default function ExperienceSection() {
  return (
    <SectionShell
      id="leadership"
      eyebrow="Leadership & organization"
      title="Responsibility, learned by doing."
      intro="Roles in student organizations and events: what I was responsible for and what I actually did."
    >
      <ul className="divide-y divide-rule overflow-hidden rounded-2xl border border-rule bg-elevated">
        {experiences.map((experience, idx) => (
          <ExperienceEntry key={experience.id} experience={experience} defaultOpen={idx === 0} />
        ))}
      </ul>
    </SectionShell>
  );
}
