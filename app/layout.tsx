import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/SiteShell";

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
 * Applied before first paint so a dark-mode reader never sees a white flash.
 * Kept inline and tiny on purpose: it has to run synchronously in <head>.
 */
const themeScript = `(()=>{try{var s=localStorage.getItem("pc-theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d);}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full ${display.variable} ${body.variable} ${code.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}