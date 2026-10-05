import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import { SiteShell } from "@/components/SiteShell";
import { themeScript } from "@/components/themeScript";

/*
 * Arabic needs its own faces. Fraunces, Inter and JetBrains Mono carry no
 * Arabic glyphs, so reusing them would leave the whole site rendering in a
 * fallback font with wrong line heights.
 *
 * IBM Plex Sans Arabic rather than the Noto pair, for three reasons that
 * matter when the text is study material rather than interface chrome:
 *
 *   - it is drawn for text first. The Noto Kufi face used for headings is a
 *     display face, and its tight spacing breaks up words at body sizes.
 *   - it carries real Latin in the same design, so a chemical symbol or an
 *     inline formula sitting inside an Arabic sentence matches the Arabic
 *     around it instead of falling back to a different family.
 *   - its ascenders and descenders are tall. Arabic has no x-height to hide
 *     behind, and a face designed around Latin proportions leaves the dots
 *     below ya and the marks above sit cramped against the line above.
 *
 * The three custom property names are the same ones app/globals.css already
 * consumes, so no style had to change to make this work - only the fonts
 * behind the variables. The Arabic type *scale* is separate and lives in
 * globals.css under [dir="rtl"], because the same 1rem that reads well in
 * Latin is too small in Arabic.
 */
/* One family serves both headings and body: the separation is by size,
   weight and colour rather than by switching typeface mid-page, which reads
   as calmer on a long study text. The variable is applied to both custom
   properties so globals.css needs no change to pick it up. */
const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

/*
 * Kept Latin-only on purpose: it renders formulae, file names and inline code,
 * all of which stay left-to-right even inside an Arabic sentence.
 */
const code = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-code",
});

export const metadata: Metadata = {
  title: {
    default: "الكيمياء الفيزيائية — دراسات عليا",
    template: "%s · الكيمياء الفيزيائية",
  },
  description:
    "كيمياء فيزيائية لطلاب الدراسات العليا، تُدرَّس في أقسام قصيرة مصوّرة. " +
    "ابدأ من الصفر مع أساسيات الكيمياء الكهربية، ثم تابع المحاضرات من " +
    "تشريح الخلية حتى البطاريات، مع فحص سريع في نهاية كل قسم.",
  authors: [{ name: "يوسف حافظ العطار" }],
  keywords: [
    "الكيمياء الفيزيائية",
    "كيمياء كهربية",
    "معادلة نرنست",
    "باتلر فولمر",
    "قانون فاراداي",
    "دراسات عليا",
  ],
  alternates: {
    canonical: "/ar",
    languages: { "en-GB": "/", "ar": "/ar" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef2f7" },
    { media: "(prefers-color-scheme: dark)", color: "#080e19" },
  ],
};

/**
 * The Arabic tree, at /ar.
 *
 * This is the second root layout. `dir="rtl"` is set once here and everything
 * below inherits it: components use CSS logical properties, so nothing in
 * components/ needs to know which language it is rendering. Formulas opt back
 * into LTR individually, because maths is not bidirectional.
 */
export default function ArabicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`h-full ${arabic.variable} ${code.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full">
        <ServiceWorkerRegister />
        <SiteShell locale="ar">{children}</SiteShell>
      </body>
    </html>
  );
}
