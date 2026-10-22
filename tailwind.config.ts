import type { Config } from "tailwindcss";

/**
 * Colors map to CSS variables defined in app/globals.css so there is one
 * source of truth. Contrast ratios (against ivory #F2EFE7 unless noted):
 *   charcoal 15.38:1 | muted 5.13:1 | accent-ink 4.77:1
 *   charcoal text on accent 5.62:1 | accent text on charcoal 5.62:1
 * Pure accent (#D97745) on ivory is only 2.74:1, so it is never used as text there.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "var(--ivory)",
        charcoal: "var(--charcoal)",
        muted: "var(--muted)",
        rule: "var(--rule)",
        accent: "var(--accent)",
        "accent-ink": "var(--accent-ink)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        page: "72rem",
        measure: "65ch",
      },
    },
  },
  plugins: [],
};

export default config;
