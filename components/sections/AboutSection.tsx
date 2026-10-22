import { personalInfo } from "@/content/personal";
import SectionShell from "@/components/ui/SectionShell";

export default function AboutSection() {
  const { about, institution, concentration, closingLine } = personalInfo;

  return (
    <SectionShell
      id="about"
      index="03"
      title="About"
      intro="Academic background, problem-solving approach, and areas of inquiry."
    >
      <div className="max-w-measure space-y-5">
        <p className="text-xl font-medium leading-relaxed tracking-[-0.01em] text-primary sm:text-2xl">
          {about.academic}
        </p>
        <p className="text-base leading-relaxed text-primary">
          {about.approach}
        </p>
        <p className="text-base leading-relaxed text-muted">
          {about.philosophyNote} {about.collaboration}
        </p>
      </div>

      {/* Structured Academic & Interest Ledger */}
      <dl className="mt-10 grid gap-px border border-rule bg-rule sm:grid-cols-3">
        <div className="bg-surface p-5">
          <dt className="meta-label">Institution</dt>
          <dd className="mt-1.5 text-sm font-medium leading-snug text-primary">
            {institution}
          </dd>
        </div>

        <div className="bg-surface p-5">
          <dt className="meta-label">Concentration</dt>
          <dd className="mt-1.5 text-sm font-medium text-primary">
            {concentration}
          </dd>
        </div>

        <div className="bg-surface p-5">
          <dt className="meta-label">Interests</dt>
          <dd className="mt-1.5 text-sm font-medium leading-snug text-primary">
            {about.interests.join(" · ")}
          </dd>
        </div>
      </dl>

      {/* Closing Creed (PRD §14) */}
      <blockquote className="mt-12 border-l-2 border-accent bg-surface p-6 sm:p-8">
        <p className="meta-label uppercase tracking-[0.1em]">
          Guiding Principle
        </p>
        <p className="mt-2 text-balance text-xl font-semibold leading-snug tracking-[-0.015em] text-primary sm:text-2xl">
          &ldquo;{closingLine}&rdquo;
        </p>
      </blockquote>
    </SectionShell>
  );
}
