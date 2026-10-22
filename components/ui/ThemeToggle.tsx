"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("cb-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("cb-theme", "light");
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        mounted
          ? `Switch to ${isDark ? "light" : "dark"} mode`
          : "Toggle color theme"
      }
      title={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"}
      className="group inline-flex min-h-11 items-center gap-2 border border-rule bg-surface px-3.5 py-1.5 font-mono text-xs text-primary transition-colors duration-200 ease-editorial hover:border-accent"
    >
      <span className="relative flex h-3.5 w-3.5 items-center justify-center">
        {/* Sun icon (shown in dark mode to switch to light) */}
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          className={`absolute h-3.5 w-3.5 transition-all duration-300 ease-editorial ${
            mounted && isDark
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-45 scale-0 opacity-0"
          }`}
        >
          <circle cx="8" cy="8" r="3" />
          <path d="M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2M3.4 3.4l1.4 1.4M11.2 11.2l1.4 1.4M3.4 12.6l1.4-1.4M11.2 4.8l1.4-1.4" />
        </svg>
        {/* Moon icon (shown in light mode to switch to dark) */}
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          className={`absolute h-3.5 w-3.5 transition-all duration-300 ease-editorial ${
            mounted && isDark
              ? "rotate-45 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }`}
        >
          <path d="M13.5 9.8A5.8 5.8 0 0 1 6.2 2.5a5.8 5.8 0 1 0 7.3 7.3Z" />
        </svg>
      </span>
      <span className="hidden sm:inline">
        {mounted ? (isDark ? "Light" : "Dark") : "Theme"}
      </span>
    </button>
  );
}
