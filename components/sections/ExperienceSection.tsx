import { experiences } from "@/content/experience";
import SectionShell from "@/components/ui/SectionShell";
import ExperienceEntry from "@/components/ui/ExperienceEntry";

export default function ExperienceSection() {
  return (
    <SectionShell
      id="leadership"
      index="02"
      title="Leadership & Organization"
      intro="Concrete responsibilities in student organizations, event planning, and program coordination."
    >
      <ul className="border-b border-rule">
        {experiences.map((experience, idx) => (
          <ExperienceEntry
            key={experience.id}
            experience={experience}
            index={`0${idx + 1}`}
            defaultOpen={idx === 0}
          />
        ))}
      </ul>
    </SectionShell>
  );
}
