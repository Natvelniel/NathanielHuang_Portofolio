import type { Project } from "@/content/projects";
import ExternalLink from "@/components/ui/ExternalLink";

interface ProjectEntryProps {
  project: Project;
  /** The lead entry gets a larger heading and the full detail rows. */
  lead?: boolean;
}

function Row({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1 py-3 sm:grid-cols-[10rem_1fr] sm:gap-6">
      <dt className="label">{term}</dt>
      <dd>{children}</dd>
    </div>
  );
}

export default function ProjectEntry({ project, lead = false }: ProjectEntryProps) {
  const { name, category, context, statusLabel, role, responsibilityAreas, confirmedTech, contextNotes, links } =
    project;

  return (
    <article>
      <p className="label">
        {category} · {context}
      </p>
      <h3
        className={`mt-3 font-semibold tracking-[-0.02em] ${
          lead ? "text-3xl leading-tight md:text-4xl" : "text-2xl leading-tight"
        }`}
      >
        {name}
      </h3>
      <p className="label mt-3">
        <span className="font-medium text-charcoal">Status:</span> {statusLabel}
      </p>

      <dl className="mt-6 divide-y divide-rule border-y border-rule">
        {role ? <Row term="My role">{role}</Row> : null}
        {responsibilityAreas?.length ? (
          <Row term="Responsibility areas">
            <ul className="list-disc space-y-1 pl-5 marker:text-muted">
              {responsibilityAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </Row>
        ) : null}
        <Row term="Technology">
          <ul className="label flex flex-wrap gap-x-4 gap-y-1 text-charcoal">
            {confirmedTech.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </Row>
        {contextNotes?.length ? (
          <Row term="Context">
            {contextNotes.map((note) => (
              <p key={note} className="text-muted">
                {note}
              </p>
            ))}
          </Row>
        ) : null}
        {links?.repo ? (
          <Row term="Repository">
            <ExternalLink href={links.repo}>View repository</ExternalLink>
          </Row>
        ) : null}
        {links?.demo ? (
          <Row term="Demo">
            <ExternalLink href={links.demo}>View demo</ExternalLink>
          </Row>
        ) : null}
      </dl>
    </article>
  );
}
