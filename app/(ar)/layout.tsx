import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Noto_Kufi_Arabic, Noto_Sans_Arabic } from "next/font/google";
import "../globals.css";
import { SiteShell } from "@/components/SiteShell";
import { themeScript } from "@/components/themeScript";

/*
 * Arabic needs its own faces. Fraunces, Inter and JetBrains Mono carry no
 * Arabic glyphs, so reusing them would leave the whole site rendering in a
 * fallback font with wrong line heights.
 *
 * The three custom property names are the same ones app/globals.css already
 * consumes, so no style had to change to make this work - only the fonts
 * behind the variables.
 */
const display = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-display",
  weight: ["500", "700"],
});

const body = Noto_Sans_Arabic({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-body",
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
      className={`h-full ${display.variable} ${body.variable} ${code.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full">
        <SiteShell locale="ar">{children}</SiteShell>
      </body>
    </html>
  );
}
