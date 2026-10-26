import type { ReactNode } from "react";

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

/** External link with an accessible new-tab notice and a smooth directional arrow. */
export default function ExternalLink({
  href,
  children,
  className = "link group inline-flex items-center gap-1.5 font-medium",
}: ExternalLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      <span>{children}</span>
      <span className="sr-only"> (opens in a new tab)</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 12 12"
        className="h-3 w-3 shrink-0 transition-transform duration-200 ease-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M2.5 9.5L9.5 2.5M4 2.5h5.5V8" />
      </svg>
    </a>
  );
}
