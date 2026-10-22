import type { ReactNode } from "react";

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

/** External link with an accessible new-tab notice and a decorative inline arrow. */
export default function ExternalLink({ href, children, className = "text-link" }: ExternalLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 12 12"
        className="ml-1 inline-block h-[0.7em] w-[0.7em] align-baseline"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M3 9L9 3M4.5 3H9v4.5" />
      </svg>
    </a>
  );
}
