import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/SiteShell";

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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}