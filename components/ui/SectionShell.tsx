import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";

interface SectionShellProps {
  id: string;
  index: string;
  title: string;
  intro?: string;
  /** Charcoal band. Text and focus colors switch via the `on-dark` class. */
  dark?: boolean;
  children: ReactNode;
}

/**
 * Shared editorial frame: a narrow left column (index, title) and a wide
 * right column. Each section fills the right column with a different form.
 */
export default function SectionShell({ id, index, title, intro, dark = false, children }: SectionShellProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={dark ? "on-dark bg-charcoal text-ivory" : "border-t border-rule"}
    >
      <div className="mx-auto grid max-w-page gap-10 px-5 py-20 sm:px-8 md:grid-cols-12 md:gap-12 md:py-28">
        <header className="md:col-span-4">
          <div className="md:sticky md:top-[calc(var(--header-h)+2rem)]">
            <p className="label" aria-hidden="true">
              {index}
            </p>
            <h2
              id={headingId}
              className="mt-3 text-balance text-[clamp(1.75rem,1.2rem+2vw,2.5rem)] font-semibold leading-tight tracking-[-0.02em]"
            >
              {title}
            </h2>
            {intro ? <p className="label mt-4 max-w-[32ch]">{intro}</p> : null}
          </div>
        </header>
        <Reveal className="md:col-span-8">{children}</Reveal>
      </div>
    </section>
  );
}
