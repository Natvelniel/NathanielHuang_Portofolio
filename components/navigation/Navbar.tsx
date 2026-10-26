"use client";

import { useEffect, useRef, useState } from "react";
import { personalInfo } from "@/content/personal";
import ThemeToggle from "@/components/ui/ThemeToggle";

const items = personalInfo.navigation.filter((item) => item.href !== "#contact");

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Transparent at the top, frosted once content scrolls underneath.
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      if (window.scrollY < 160) setActive("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Subtle current-section indicator.
  useEffect(() => {
    const sections = personalInfo.navigation
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Escape closes the mobile menu and returns focus to its button.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const frosted = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ease-smooth ${
        frosted
          ? "border-rule bg-canvas/75 backdrop-blur-xl backdrop-saturate-150"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[var(--header-h)] max-w-page items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="group inline-flex min-h-11 items-center gap-2.5 rounded-lg"
        >
          <span
            aria-hidden="true"
            className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary text-[13px] font-semibold text-canvas transition-colors duration-200 ease-smooth group-hover:bg-accent group-hover:text-charcoal"
          >
            N
          </span>
          <span className="text-[15px] font-semibold tracking-[-0.01em] text-primary">
            The Curious Builder
          </span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {items.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative inline-flex h-9 items-center rounded-lg px-3.5 text-sm font-medium transition-colors duration-200 ease-smooth ${
                      isActive
                        ? "bg-primary/[0.07] text-primary"
                        : "text-primary/65 hover:bg-primary/[0.05] hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden h-9 items-center rounded-lg bg-primary px-4 text-sm font-medium text-canvas transition-colors duration-200 ease-smooth hover:bg-accent hover:text-charcoal sm:inline-flex"
          >
            Get in touch
          </a>
          <button
            ref={buttonRef}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-primary transition-colors duration-200 hover:bg-primary/[0.06] md:hidden"
          >
            <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path
                className={`origin-center transition-transform duration-300 ease-smooth ${open ? "translate-y-[3px] rotate-45" : ""}`}
                d="M4 7h12"
              />
              <path
                className={`origin-center transition-transform duration-300 ease-smooth ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
                d="M4 13h12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu: height animates via grid rows; links leave the tab order when closed. */}
      <div
        id="mobile-nav"
        className={`grid transition-[grid-template-rows] duration-300 ease-smooth md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <nav aria-label="Primary mobile" className="min-h-0 overflow-hidden" inert={!open}>
          <ul className="space-y-1 px-5 pb-5 pt-1 sm:px-8">
            {personalInfo.navigation.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    onClick={() => setOpen(false)}
                    className={`flex min-h-12 items-center justify-between rounded-lg px-3 text-base font-medium transition-colors duration-200 ${
                      isActive ? "bg-primary/[0.07] text-primary" : "text-primary/80 hover:bg-primary/[0.05]"
                    }`}
                  >
                    {item.label}
                    {isActive ? <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" /> : null}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
