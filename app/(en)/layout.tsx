import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { SiteShell } from "@/components/SiteShell";
import { themeScript } from "@/components/themeScript";

const display = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  axes: ["SOFT", "WONK", "opsz"],
});

const body = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const code = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-code",
});

export const metadata: Metadata = {
  title: {
    default: "Physical Chemistry — Postgraduate",
    template: "%s · Physical Chemistry",
  },
  description:
    "Postgraduate physical chemistry, taught in short illustrated sections. " +
    "Start from zero with the Fundamentals primer, then work through " +
    "electrochemistry from cell anatomy to batteries, with a quick check at " +
    "the end of every section.",
  authors: [{ name: "Yossef Hafez Alatter" }],
  keywords: [
    "physical chemistry",
    "postgraduate",
    "electrochemistry",
    "Nernst equation",
    "Butler-Volmer",
    "Tafel",
    "Levich",
    "Faraday's laws",
  ],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef2f7" },
    { media: "(prefers-color-scheme: dark)", color: "#080e19" },
  ],
};

/**
 * The English tree of the site. It owns the root <html> element, which is why
 * the Arabic side needs a second root layout under app/(ar): `lang` and `dir`
 * are document-level, so they cannot be set by a nested layout.
 *
 * English is served from the root of the domain, with no /en prefix, so every
 * URL that existed before the Arabic translation was added still resolves here.
 */
export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`h-full ${display.variable} ${body.variable} ${code.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full">
        <SiteShell locale="en">{children}</SiteShell>
      </body>
    </html>
  );
}
