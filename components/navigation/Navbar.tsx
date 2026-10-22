"use client";

import { useEffect, useRef, useState } from "react";
import { personalInfo } from "@/content/personal";
import ThemeToggle from "@/components/ui/ThemeToggle";

const items = personalInfo.navigation;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const buttonRef = useRef<HTMLButtonElement>(null);

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
      { rootMargin: "-25% 0px -60% 0px" },
    );
    sections.forEach((el) => observer.observe(el));

    const onScroll = () => {
      if (window.scrollY < 160) setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

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
    <header className="sticky top-0 z-40 border-b border-rule bg-base transition-colors duration-250 ease-editorial">
      <div className="mx-auto flex h-[var(--header-h)] max-w-page items-center justify-between px-5 sm:px-8">
        {/* Identity Mark */}
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="group inline-flex min-h-11 items-center gap-3"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center border border-rule bg-surface font-mono text-xs font-medium tracking-tight text-primary transition-colors duration-200 ease-editorial group-hover:border-accent group-hover:bg-accent group-hover:text-charcoal">
            N
          </span>
          <span className="flex flex-col">
            <span className="text-sm font-semibold leading-none tracking-[-0.01em] text-primary">
              The Curious Builder
            </span>
            <span className="mt-1 hidden font-mono text-[11px] leading-none text-muted lg:inline">
              Nathaniel Christian Susanto
            </span>
          </span>
        </a>

        {/* Primary Desktop Navigation */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1 lg:gap-2">
            {items.map((item, idx) => {
              const id = item.href.slice(1);
              const isActive = active === id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`group relative inline-flex min-h-11 items-center gap-1.5 px-3 text-sm font-medium transition-colors duration-200 ease-editorial ${
                      isActive
                        ? "text-primary"
                        : "text-muted hover:text-primary"
                    }`}
                  >
                    <span className="font-mono text-[11px] text-muted transition-colors duration-200 dark:group-hover:text-accent">
                      0{idx + 1}
                    </span>
                    <span>{item.label}</span>
                    <span
                      aria-hidden="true"
                      className={`absolute bottom-0 left-3 right-3 h-[2px] bg-accent transition-transform duration-250 ease-editorial ${
                        isActive
                          ? "scale-x-100"
                          : "origin-left scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Theme Switcher & Mobile Menu Control */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle />

          <button
            ref={buttonRef}
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center border border-rule bg-surface px-3.5 font-mono text-xs text-primary transition-colors duration-200 ease-editorial hover:border-accent md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Smooth Animated Mobile Drawer */}
      <div
        id="mobile-nav"
        aria-hidden={!open}
        className={`grid overflow-hidden bg-base transition-[grid-template-rows,border-color] duration-300 ease-editorial md:hidden ${
          open ? "grid-rows-[1fr] border-t border-rule" : "grid-rows-[0fr]"
        }`}
      >
        <nav aria-label="Primary mobile" className="min-h-0">
          <ul className="divide-y divide-rule px-5 py-2 sm:px-8">
            {items.map((item, idx) => {
              const id = item.href.slice(1);
              const isActive = active === id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    tabIndex={open ? 0 : -1}
                    aria-current={isActive ? "true" : undefined}
                    className="flex min-h-12 items-center justify-between py-2 text-base font-medium text-primary transition-colors dark:hover:text-accent"
                    onClick={() => setOpen(false)}
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-xs text-muted">
                        0{idx + 1}
                      </span>
                      <span>{item.label}</span>
                    </span>
                    {isActive ? (
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-primary dark:text-accent">
                        <span aria-hidden="true" className="h-1.5 w-1.5 bg-accent" />
                        <span>Active</span>
                      </span>
                    ) : null}
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
