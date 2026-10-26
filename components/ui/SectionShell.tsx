import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";

interface SectionShellProps {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}

/** Section header (eyebrow, large title, optional intro on the right) followed by full-width content. */
export default function SectionShell({ id, eyebrow, title, intro, children }: SectionShellProps) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className="mx-auto max-w-page px-5 py-20 sm:px-8 md:py-28">
      <Reveal>
        <header className="grid gap-5 md:grid-cols-12 md:items-end md:gap-10">
          <div className="md:col-span-7">
            <p className="meta flex items-center gap-2">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
              {eyebrow}
            </p>
            <h2
              id={headingId}
              className="mt-4 text-balance text-[clamp(2rem,1.3rem+2.4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-primary"
            >
              {title}
            </h2>
          </div>
          {intro ? (
            <p className="max-w-[44ch] text-base leading-relaxed text-muted md:col-span-5 md:justify-self-end">
              {intro}
            </p>
          ) : null}
        </header>
        <div className="mt-12 md:mt-14">{children}</div>
      </Reveal>
    </section>
  );
}
