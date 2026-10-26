import { personalInfo } from "@/content/personal";
import SectionShell from "@/components/ui/SectionShell";

export default function AboutSection() {
  const { about, institution, concentration, closingLine } = personalInfo;

  const facts = [
    { term: "Studying", value: "Information Systems" },
    { term: "Institution", value: institution },
    { term: "Concentration", value: concentration },
    { term: "Interests", value: about.interests.join(", ") },
  ];

  return (
    <SectionShell id="about" eyebrow="About" title="The person behind the projects.">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="space-y-5 lg:col-span-7">
          <p className="text-xl leading-relaxed tracking-[-0.01em] text-primary sm:text-2xl sm:leading-relaxed">
            {about.academic}
          </p>
          <p className="max-w-measure text-base leading-relaxed text-primary">{about.approach}</p>
          <p className="max-w-measure text-base leading-relaxed text-muted">
            {about.philosophyNote} {about.collaboration}
          </p>
        </div>

        <dl className="divide-y divide-rule self-start rounded-2xl border border-rule bg-elevated px-6 lg:col-span-5">
          {facts.map((fact) => (
            <div key={fact.term} className="grid grid-cols-[7.5rem_1fr] gap-4 py-4">
              <dt className="meta pt-0.5">{fact.term}</dt>
              <dd className="text-[15px] font-medium leading-snug text-primary">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <figure className="mt-16 border-t border-rule pt-10 md:mt-20">
        <blockquote className="text-balance text-[clamp(1.75rem,1.2rem+2vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-primary">
          {closingLine}
        </blockquote>
        <figcaption className="meta mt-4">The direction this portfolio follows</figcaption>
      </figure>
    </SectionShell>
  );
}
