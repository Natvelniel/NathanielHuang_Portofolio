import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Curious Builder — Nathaniel Christian Susanto",
  description:
    "Personal portfolio of Nathaniel Christian Susanto. Information Systems undergraduate at UKDW concentrating in Data Analytics and Software Development. Curious by nature. Building by choice.",
  keywords: [
    "Nathaniel Christian Susanto",
    "The Curious Builder",
    "Information Systems",
    "Data Analytics",
    "Software Development",
    "UKDW",
    "Machine Learning",
  ],
  authors: [{ name: "Nathaniel Christian Susanto" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F2EFE7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased">
        {children}
      </body>
    </html>
  );
}
