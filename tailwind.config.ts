import type { Config } from "tailwindcss";

/**
 * Palette is fixed by the PRD: Charcoal #171918, Warm Ivory #F2EFE7,
 * Burnt Orange #D97745, plus neutral grays. `base` and `primary` are exposed
 * as RGB channels so they can be used with opacity (translucent nav, tints).
 */
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F2EFE7",
        charcoal: "#171918",
        accent: "#D97745",
        canvas: "rgb(var(--base-rgb) / <alpha-value>)",
        primary: "rgb(var(--fg-rgb) / <alpha-value>)",
        elevated: "var(--bg-elevated)",
        muted: "var(--text-muted)",
        rule: "var(--border-subtle)",
        "rule-strong": "var(--border-strong)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        page: "76rem",
        measure: "62ch",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
