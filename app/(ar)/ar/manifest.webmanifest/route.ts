/**
 * Arabic web-app manifest, served from /ar/manifest.webmanifest.
 *
 * This is a route handler rather than a manifest.ts metadata file because
 * Next only emits one manifest route, and the English one already owns
 * /manifest.webmanifest. The payload is otherwise the same shape, so an
 * install launched from an Arabic page gets an Arabic name, start URL and
 * direction instead of bouncing the reader into the English tree.
 */
export const dynamic = "force-static";

const manifest = {
  id: "/ar",
  name: "الكيمياء الفيزيائية — دراسات عليا",
  short_name: "كيمياء فيزيائية",
  description:
    "كيمياء فيزيائية لدراسات العليا في أقسام قصيرة مصوّرة، تبدأ من أساسيات " +
    "الكيمياء الكهربية. تعمل دون اتصال بعد التثبيت.",
  lang: "ar",
  dir: "rtl",
  start_url: "/ar",
  scope: "/ar",
  display: "standalone",
  display_override: ["standalone", "minimal-ui", "browser"],
  orientation: "any",
  background_color: "#eef2f7",
  theme_color: "#0B6E99",
  categories: ["education", "books", "science"],
  prefer_related_applications: false,
  icons: [
    { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    {
      src: "/icons/icon-512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "maskable",
    },
  ],
  shortcuts: [
    {
      name: "ابدأ من الصفر",
      short_name: "الأسس",
      description: "افتح أساسيات الكيمياء الكهربية",
      url: "/ar/lectures/fundamentals",
    },
    {
      name: "المحاضرة الأولى",
      short_name: "المحاضرة ١",
      description: "افتح المحاضرة الأولى وبنك أسئلتها",
      url: "/ar/lectures/lecture-1",
    },
  ],
};

export function GET() {
  return Response.json(manifest, {
    headers: {
      "Content-Type": "application/manifest+json; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
