import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F2EFE7",
        charcoal: "#171918",
        accent: "#D97745",
        base: "var(--bg-base)",
        surface: "var(--bg-surface)",
        primary: "var(--text-primary)",
        muted: "var(--text-muted)",
        rule: "var(--border-subtle)",
        "rule-strong": "var(--border-strong)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        page: "74rem",
        measure: "64ch",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
