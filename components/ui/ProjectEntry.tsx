import type { Project } from "@/content/projects";
import ExternalLink from "@/components/ui/ExternalLink";

interface ProjectEntryProps {
  project: Project;
  lead?: boolean;
}

function StatusBadge({ label, live }: { label: string; live: boolean }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-rule bg-canvas px-3 py-1 text-[13px] font-medium text-primary">
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${live ? "bg-accent" : "bg-primary/35"}`}
      />
      <span className="sr-only">Status: </span>
      {label}
    </span>
  );
}

function TechList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((tech) => (
        <li key={tech} className="rounded-md bg-primary/[0.06] px-2.5 py-1 font-mono text-[12.5px] text-primary">
          {tech}
        </li>
      ))}
    </ul>
  );
}

export default function ProjectEntry({ project, lead = false }: ProjectEntryProps) {
  const { name, category, context, status, statusLabel, role, responsibilityAreas, confirmedTech, contextNotes, links } =
    project;
  const live = status === "in-development";

  return (
    <article
      className={`rounded-2xl border border-rule bg-elevated transition-colors duration-300 ease-smooth hover:border-rule-strong ${
        lead ? "p-6 sm:p-9 md:p-10" : "p-6 sm:p-8"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="meta">{category}</p>
        <StatusBadge label={statusLabel} live={live} />
      </div>

      <div className={lead ? "mt-8 grid gap-10 lg:grid-cols-12" : "mt-6 grid gap-6 md:grid-cols-12 md:items-end"}>
        <div className={lead ? "lg:col-span-6" : "md:col-span-7"}>
          <h3
            className={`font-semibold tracking-[-0.03em] text-primary ${
              lead ? "text-3xl leading-[1.1] sm:text-4xl" : "text-2xl leading-tight"
            }`}
          >
            {name}
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">{context}</p>

          {lead ? (
            <dl className="mt-8 space-y-6">
              {role ? (
                <div>
                  <dt className="meta">My role</dt>
                  <dd className="mt-1.5 text-lg font-medium text-primary">{role}</dd>
                </div>
              ) : null}
              <div>
                <dt className="meta">Technology I work with</dt>
                <dd className="mt-2.5">
                  <TechList items={confirmedTech} />
                </dd>
              </div>
              {contextNotes?.length ? (
                <div>
                  <dt className="meta">Project context</dt>
                  <dd className="mt-1.5 text-[15px] text-muted">
                    {contextNotes.map((note) => (
                      <p key={note}>{note}</p>
                    ))}
                  </dd>
                </div>
              ) : null}
            </dl>
          ) : null}
        </div>

        {lead && responsibilityAreas?.length ? (
          <div className="lg:col-span-6">
            <div className="rounded-xl border border-rule bg-canvas p-5 sm:p-6">
              <p className="meta">Responsibility areas</p>
              <ol className="mt-4 divide-y divide-rule">
                {responsibilityAreas.map((area, idx) => (
                  <li key={area} className="flex items-baseline gap-4 py-3.5 first:pt-0 last:pb-0">
                    <span className="font-mono text-[12.5px] text-muted">0{idx + 1}</span>
                    <span className="text-[15px] font-medium text-primary sm:text-base">{area}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ) : null}

        {!lead ? (
          <div className="md:col-span-5 md:justify-self-end">
            <p className="meta mb-2.5 md:text-right">Tools</p>
            <TechList items={confirmedTech} />
          </div>
        ) : null}
      </div>

      {links?.repo || links?.demo ? (
        <div className="mt-8 flex flex-wrap gap-6 border-t border-rule pt-6 text-[15px]">
          {links.repo ? <ExternalLink href={links.repo}>View repository</ExternalLink> : null}
          {links.demo ? <ExternalLink href={links.demo}>View demo</ExternalLink> : null}
        </div>
      ) : null}
    </article>
  );
}
