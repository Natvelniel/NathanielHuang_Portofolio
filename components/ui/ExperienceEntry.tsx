import type { Experience } from "@/content/experience";

function Details({ experience }: { experience: Experience }) {
  const { dates, facts, context } = experience;

  return (
    <div className="mt-4 space-y-5">
      {dates?.length ? (
        <dl className="grid gap-x-8 gap-y-3 sm:grid-cols-3">
          {dates.map((date) => (
            <div key={date.label}>
              <dt className="label">{date.label}</dt>
              <dd className="font-medium">{date.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
      {facts.length ? (
        <ul className="list-disc space-y-2 pl-5 marker:text-muted">
          {facts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      ) : null}
      {context ? <p className="text-muted">{context}</p> : null}
    </div>
  );
}

export default function ExperienceEntry({ experience }: { experience: Experience }) {
  const { title, fullName, role, summary, expandable, facts } = experience;

  return (
    <li className="grid gap-4 border-t border-rule py-8 first:border-t-0 first:pt-0 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-4">
        <h3 className="text-xl font-semibold leading-snug tracking-[-0.01em]">{title}</h3>
        {fullName ? <p className="label mt-1">{fullName}</p> : null}
      </div>

      <div className="md:col-span-8">
        <p className="label text-charcoal">{role}</p>
        <p className="mt-3 max-w-measure">{summary}</p>

        {expandable ? (
          <details className="group mt-4">
            <summary className="inline-flex min-h-11 list-none items-center text-link font-medium [&::-webkit-details-marker]:hidden">
              <span className="group-open:hidden">Show details</span>
              <span className="hidden group-open:inline">Hide details</span>
              <span className="sr-only"> for {title}</span>
            </summary>
            <Details experience={experience} />
          </details>
        ) : facts.length ? (
          <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-muted">
            {facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </li>
  );
}
