"use client";

import { useEffect, useRef, useState } from "react";
import { personalInfo } from "@/content/personal";

const items = personalInfo.navigation;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Subtle current-section indicator.
  useEffect(() => {
    const sections = items
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

    const onScroll = () => {
      if (window.scrollY < 200) setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
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

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-ivory">
      <div className="relative mx-auto flex h-[var(--header-h)] max-w-page items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="inline-flex min-h-11 items-center font-semibold tracking-[-0.01em]"
          onClick={() => setOpen(false)}
        >
          The Curious Builder
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {items.map((item) => {
              const id = item.href.slice(1);
              const isActive = active === id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`inline-flex min-h-11 items-center border-b-2 text-sm font-medium transition-colors duration-150 hover:border-charcoal ${
                      isActive ? "border-accent" : "border-transparent"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center px-3 text-sm font-medium md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
          <span className="sr-only"> navigation</span>
        </button>

        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          hidden={!open}
          className="absolute left-0 right-0 top-full border-b border-rule bg-ivory md:hidden"
        >
          <ul className="px-5 pb-3 sm:px-8">
            {items.map((item) => {
              const id = item.href.slice(1);
              return (
                <li key={item.href} className="border-t border-rule first:border-t-0">
                  <a
                    href={item.href}
                    aria-current={active === id ? "true" : undefined}
                    className="flex min-h-12 items-center text-base font-medium"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                    {active === id ? <span className="label ml-3">current section</span> : null}
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
