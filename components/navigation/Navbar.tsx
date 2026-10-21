"use client";

import React, { useState, useEffect } from "react";
import { personalInfo } from "@/content/personal";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Initial theme check
    const savedTheme = localStorage.getItem("cb-theme") as "light" | "dark" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
    setTheme(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("cb-theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--bg-primary)]/90 backdrop-blur-md editorial-border-b py-3 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Brand Monogram */}
        <a
          href="#"
          className="group flex items-baseline gap-2 text-[var(--text-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-orange)] rounded-xs"
          aria-label="The Curious Builder — Home"
        >
          <span className="font-mono text-xs font-semibold uppercase tracking-widest px-2 py-0.5 bg-[var(--bg-surface)] editorial-border-b text-[var(--text-primary)] rounded-xs">
            NCS
          </span>
          <span className="font-sans font-semibold tracking-tight text-sm sm:text-base group-hover:text-[var(--accent-orange)] transition-colors">
            The Curious Builder
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
          {personalInfo.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[var(--accent-orange)] hover:after:w-full after:transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Controls & CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className="p-2 rounded-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--accent-orange)]"
          >
            {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider bg-[var(--text-primary)] text-[var(--bg-primary)] hover:bg-[var(--accent-orange)] hover:text-white transition-all rounded-xs font-medium"
          >
            <span>Connect</span>
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-[var(--text-primary)] hover:bg-[var(--bg-surface)] rounded-xs focus-visible:ring-2 focus-visible:ring-[var(--accent-orange)]"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--bg-primary)] editorial-border-b px-6 py-6 transition-all animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-4">
            <div className="font-mono text-[11px] uppercase tracking-widest text-[var(--text-muted)] pb-1 border-b border-[var(--border-subtle)]">
              Navigation
            </div>
            {personalInfo.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[var(--text-primary)] hover:text-[var(--accent-orange)] transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[var(--border-subtle)]">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between w-full px-4 py-2.5 text-xs font-mono uppercase tracking-wider bg-[var(--accent-orange)] text-white font-medium rounded-xs text-center"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
