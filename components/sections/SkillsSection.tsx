import { skillGroups } from "@/content/skills";
import SectionShell from "@/components/ui/SectionShell";

export default function SkillsSection() {
  return (
    <SectionShell
      id="toolkit"
      index="04"
      title="Toolkit"
      intro="Categorized by practical domain. Confirmed hands-on work is distinguished from coursework exposure."
    >
      <div className="grid gap-px border border-rule bg-rule sm:grid-cols-2">
        {skillGroups.map((group, idx) => (
          <div
            key={group.category}
            className="flex flex-col justify-between bg-base p-6 transition-colors duration-200 ease-editorial hover:bg-surface sm:p-7"
          >
            <div>
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold tracking-[-0.01em] text-primary">
                  {group.category}
                </h3>
                <span className="font-mono text-xs text-muted">
                  0{idx + 1}
                </span>
              </div>

              {group.note ? (
                <p className="mt-1 text-xs text-muted">{group.note}</p>
              ) : null}
            </div>

            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="inline-flex items-baseline gap-1.5 border border-rule bg-surface px-3 py-1.5 font-mono text-xs text-primary"
                >
                  <span className="font-medium">{item.name}</span>
                  {item.basis ? (
                    <span className="text-[11px] text-muted">
                      ({item.basis.toLowerCase()})
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
