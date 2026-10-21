import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#171918",
          surface: "#202322",
          border: "#2E3330",
          muted: "#9EABA4",
          light: "#2A2E2C",
        },
        ivory: {
          DEFAULT: "#F2EFE7",
          surface: "#E8E4DA",
          border: "#D8D2C5",
          muted: "#6B726E",
          hover: "#E2DDCF",
        },
        orange: {
          DEFAULT: "#D97745",
          hover: "#C46535",
          light: "#F5ECE5",
          muted: "#E89B73",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        normal: "0em",
        wide: "0.04em",
        widest: "0.12em",
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};

export default config;
