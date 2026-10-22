import type { Project } from "@/content/projects";
import ExternalLink from "@/components/ui/ExternalLink";

interface ProjectEntryProps {
  project: Project;
  index: string;
  lead?: boolean;
}

export default function ProjectEntry({
  project,
  index,
  lead = false,
}: ProjectEntryProps) {
  const {
    name,
    category,
    context,
    statusLabel,
    role,
    responsibilityAreas,
    confirmedTech,
    contextNotes,
    links,
  } = project;

  if (lead) {
    return (
      <article className="border border-rule border-t-2 border-t-accent bg-surface p-6 transition-colors duration-250 ease-editorial hover:border-rule-strong sm:p-8 md:p-10">
        {/* Top Metadata Ledger */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rule pb-5">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-medium text-muted dark:text-accent">
              {index}
            </span>
            <span aria-hidden="true" className="text-rule-strong">
              /
            </span>
            <span className="meta-label text-primary">{category}</span>
          </div>

          <span className="inline-flex items-center gap-2 border border-rule bg-base px-3 py-1 font-mono text-xs font-medium text-primary">
            <span aria-hidden="true" className="h-1.5 w-1.5 bg-accent" />
            <span>Status: {statusLabel}</span>
          </span>
        </div>

        {/* Title & Context */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold tracking-[-0.02em] text-primary sm:text-3xl">
            {name}
          </h3>
          <p className="mt-2 text-sm text-muted">{context}</p>
        </div>

        {/* Two-Column Architectural Breakdown */}
        <div className="mt-8 grid gap-8 border-t border-rule pt-6 lg:grid-cols-12">
          {/* Left: Role, Confirmed Stack & Context */}
          <dl className="space-y-6 lg:col-span-5">
            {role ? (
              <div>
                <dt className="meta-label">Owner&apos;s Role</dt>
                <dd className="mt-1 text-base font-medium text-primary">
                  {role}
                </dd>
              </div>
            ) : null}

            <div>
              <dt className="meta-label">Confirmed Technologies</dt>
              <dd className="mt-2.5">
                <ul className="flex flex-wrap gap-2">
                  {confirmedTech.map((tech) => (
                    <li
                      key={tech}
                      className="border border-rule bg-base px-3 py-1 font-mono text-xs font-medium text-primary"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>

            {contextNotes?.length ? (
              <div>
                <dt className="meta-label">Project Context</dt>
                <dd className="mt-1 space-y-1 text-sm text-muted">
                  {contextNotes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </dd>
              </div>
            ) : null}
          </dl>

          {/* Right: Confirmed Responsibility Areas */}
          {responsibilityAreas?.length ? (
            <div className="lg:col-span-7 lg:border-l lg:border-rule lg:pl-8">
              <p className="meta-label">Confirmed Responsibility Areas</p>
              <ol className="mt-3 divide-y divide-rule border-y border-rule">
                {responsibilityAreas.map((area, idx) => (
                  <li
                    key={area}
                    className="flex items-baseline gap-4 py-3.5 text-sm sm:text-base"
                  >
                    <span className="font-mono text-xs text-muted dark:text-accent">
                      0{idx + 1}
                    </span>
                    <span className="font-medium text-primary">{area}</span>
                  </li>
                ))}
              </ol>
            </div>
          ) : null}
        </div>

        {/* Optional Public Links */}
        {links?.repo || links?.demo ? (
          <div className="mt-6 flex flex-wrap gap-6 border-t border-rule pt-5 text-sm">
            {links.repo ? (
              <ExternalLink href={links.repo}>View repository</ExternalLink>
            ) : null}
            {links.demo ? (
              <ExternalLink href={links.demo}>View demo</ExternalLink>
            ) : null}
          </div>
        ) : null}
      </article>
    );
  }

  /* Secondary Project Entry: Compact Editorial Specification */
  return (
    <article className="border border-rule bg-base p-6 transition-colors duration-250 ease-editorial hover:border-rule-strong sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rule pb-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-medium text-accent">
            {index}
          </span>
          <span aria-hidden="true" className="text-rule-strong">
            /
          </span>
          <span className="meta-label text-primary">{category}</span>
        </div>

        <span className="inline-flex items-center gap-2 border border-rule bg-surface px-3 py-1 font-mono text-xs text-muted">
          <span aria-hidden="true" className="h-1.5 w-1.5 bg-muted" />
          <span>Status: {statusLabel}</span>
        </span>
      </div>

      <div className="mt-5 grid gap-6 md:grid-cols-12 md:items-end">
        <div className="md:col-span-6">
          <h3 className="text-xl font-semibold tracking-[-0.015em] text-primary sm:text-2xl">
            {name}
          </h3>
          <p className="mt-1.5 text-sm text-muted">{context}</p>
        </div>

        <div className="md:col-span-6">
          <p className="meta-label">Confirmed Tools &amp; Libraries</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {confirmedTech.map((tech) => (
              <li
                key={tech}
                className="border border-rule bg-surface px-3 py-1 font-mono text-xs font-medium text-primary"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
