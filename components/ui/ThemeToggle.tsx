"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const next = !root.classList.contains("dark");

    // Let colors glide during the switch only, so normal hovers stay snappy.
    root.classList.add("theme-transition");
    root.classList.toggle("dark", next);
    window.setTimeout(() => root.classList.remove("theme-transition"), 320);

    try {
      localStorage.setItem("cb-theme", next ? "dark" : "light");
    } catch {
      // Storage can be unavailable (private mode); the switch still works for this visit.
    }
    setIsDark(next);
  };

  const label = isDark === null ? "Toggle color theme" : `Switch to ${isDark ? "light" : "dark"} mode`;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg text-primary/70 transition-colors duration-200 ease-smooth hover:bg-primary/[0.06] hover:text-primary"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className={`absolute h-[18px] w-[18px] transition-all duration-300 ease-smooth ${
          isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"
        }`}
      >
        <circle cx="10" cy="10" r="3.5" />
        <path d="M10 2.5v1.5M10 16v1.5M2.5 10H4M16 10h1.5M4.7 4.7l1 1M14.3 14.3l1 1M4.7 15.3l1-1M14.3 5.7l1-1" />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        className={`absolute h-[18px] w-[18px] transition-all duration-300 ease-smooth ${
          isDark ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
      >
        <path d="M16.5 12.2A6.8 6.8 0 0 1 7.8 3.5a6.8 6.8 0 1 0 8.7 8.7Z" />
      </svg>
    </button>
  );
}
