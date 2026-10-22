import { skillGroups } from "@/content/skills";
import SectionShell from "@/components/ui/SectionShell";

export default function SkillsSection() {
  return (
    <SectionShell
      id="toolkit"
      index="04"
      title="Toolkit"
      intro="Grouped by area. No proficiency ratings."
    >
      <dl className="divide-y divide-rule border-y border-rule">
        {skillGroups.map((group) => (
          <div key={group.category} className="grid gap-3 py-5 md:grid-cols-12 md:gap-6">
            <dt className="md:col-span-5">
              <span className="font-medium">{group.category}</span>
              {group.note ? <span className="label mt-1 block">{group.note}</span> : null}
            </dt>
            <dd className="md:col-span-7">
              <ul className="flex flex-wrap gap-x-6 gap-y-1">
                {group.items.map((item) => (
                  <li key={item.name}>
                    {item.name}
                    {item.basis ? <span className="label"> ({item.basis.toLowerCase()})</span> : null}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </SectionShell>
  );
}
