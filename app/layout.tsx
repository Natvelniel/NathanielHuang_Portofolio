import type { Metadata, Viewport } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Curious Builder — Nathaniel Christian Susanto",
  description:
    "Nathaniel Christian Susanto is an Information Systems student at UKDW (Data Analytics concentration) working across data analytics, software development, and leadership & organization.",
  authors: [{ name: "Nathaniel Christian Susanto" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

/**
 * Prevents flash of wrong theme before hydration.
 * Defaults to Light Mode (Warm Ivory #F2EFE7) unless user saved "dark" or OS prefers dark.
 */
const themeInitScript = `
(function() {
  try {
    var saved = localStorage.getItem('cb-theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen bg-base text-primary selection:bg-accent selection:text-charcoal">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-charcoal focus:px-4 focus:py-2.5 focus:font-mono focus:text-xs focus:text-ivory dark:focus:bg-ivory dark:focus:text-charcoal"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
