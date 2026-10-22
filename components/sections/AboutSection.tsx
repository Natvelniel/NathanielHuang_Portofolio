import { personalInfo } from "@/content/personal";
import SectionShell from "@/components/ui/SectionShell";

export default function AboutSection() {
  const { about, institution, concentration, closingLine } = personalInfo;

  return (
    <SectionShell id="about" index="03" title="About">
      <div className="max-w-measure space-y-5">
        <p className="text-xl leading-relaxed">{about.academic}</p>
        <p>{about.approach}</p>
        <p className="text-muted">{about.philosophyNote}</p>
        <p className="text-muted">{about.collaboration}</p>
      </div>

      <dl className="mt-10 divide-y divide-rule border-y border-rule">
        <div className="grid gap-1 py-3 sm:grid-cols-[10rem_1fr] sm:gap-6">
          <dt className="label">Institution</dt>
          <dd>{institution}</dd>
        </div>
        <div className="grid gap-1 py-3 sm:grid-cols-[10rem_1fr] sm:gap-6">
          <dt className="label">Concentration</dt>
          <dd>{concentration}</dd>
        </div>
        <div className="grid gap-1 py-3 sm:grid-cols-[10rem_1fr] sm:gap-6">
          <dt className="label">Interests</dt>
          <dd>{about.interests.join(", ")}</dd>
        </div>
      </dl>

      <div className="mt-16">
        <span aria-hidden="true" className="block h-0.5 w-12 bg-accent" />
        <p className="mt-5 text-balance text-2xl font-medium leading-snug tracking-[-0.01em] md:text-3xl">
          {closingLine}
        </p>
      </div>
    </SectionShell>
  );
}
