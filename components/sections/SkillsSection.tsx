import { skillGroups } from "@/content/skills";
import SectionShell from "@/components/ui/SectionShell";

export default function SkillsSection() {
  return (
    <SectionShell
      id="toolkit"
      eyebrow="Toolkit"
      title="Tools I have used, grouped by what they are for."
      intro="No proficiency ratings. Algorithms marked as coursework were learning exercises, not validated models."
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.category} className="flex flex-col bg-elevated p-6 sm:p-7">
            <h3 className="text-base font-semibold tracking-[-0.01em] text-primary">{group.category}</h3>
            {group.note ? <p className="mt-1 text-sm text-muted">{group.note}</p> : null}
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="inline-flex items-baseline gap-1.5 rounded-md bg-primary/[0.06] px-2.5 py-1 font-mono text-[12.5px] text-primary"
                >
                  {item.name}
                  {item.basis ? <span className="text-muted">· {item.basis.toLowerCase()}</span> : null}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
