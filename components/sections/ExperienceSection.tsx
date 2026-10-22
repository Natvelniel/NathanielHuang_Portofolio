import { experiences } from "@/content/experience";
import SectionShell from "@/components/ui/SectionShell";
import ExperienceEntry from "@/components/ui/ExperienceEntry";

export default function ExperienceSection() {
  return (
    <SectionShell
      id="leadership"
      index="02"
      title="Leadership & Organization"
      intro="Responsibilities held in student organizations and events."
    >
      <ul>
        {experiences.map((experience) => (
          <ExperienceEntry key={experience.id} experience={experience} />
        ))}
      </ul>
    </SectionShell>
  );
}
