import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: {
    default: "Electrochemistry Lectures",
    template: "%s · Electrochemistry Lectures",
  },
  description:
    "Lecture notes and multiple-choice questions for an undergraduate " +
    "electrochemistry course, from cell anatomy through to batteries.",
  authors: [{ name: "Yossef Hafez Alatter" }],
  keywords: [
    "electrochemistry",
    "Nernst equation",
    "Butler-Volmer",
    "Tafel",
    "Levich",
    "lecture notes",
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