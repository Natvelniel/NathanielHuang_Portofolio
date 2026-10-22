import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";

interface SectionShellProps {
  id: string;
  index: string;
  title: string;
  intro?: string;
  children: ReactNode;
}

/**
 * Shared architectural editorial frame:
 * Left column holds the section number, accent rule, sticky heading, and concise intro.
 * Right column presents section-specific content with smooth viewport reveal.
 */
export default function SectionShell({
  id,
  index,
  title,
  intro,
  children,
}: SectionShellProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="border-t border-rule transition-colors duration-250 ease-editorial"
    >
      <div className="mx-auto grid max-w-page gap-10 px-5 py-20 sm:px-8 md:grid-cols-12 md:gap-12 md:py-28">
        <header className="md:col-span-4">
          <div className="md:sticky md:top-[calc(var(--header-h)+2.25rem)]">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="inline-flex h-6 items-center border border-rule bg-surface px-2 font-mono text-xs font-medium text-primary"
              >
                {index}
              </span>
              <span aria-hidden="true" className="h-[1px] w-8 bg-accent" />
            </div>

            <h2
              id={headingId}
              className="mt-4 text-balance text-[clamp(1.75rem,1.25rem+1.8vw,2.375rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-primary"
            >
              {title}
            </h2>

            {intro ? (
              <p className="mt-3 max-w-[30ch] text-sm leading-relaxed text-muted">
                {intro}
              </p>
            ) : null}
          </div>
        </header>

        <Reveal className="md:col-span-8">{children}</Reveal>
      </div>
    </section>
  );
}
