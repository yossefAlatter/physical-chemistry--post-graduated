/**
 * fund_two_worlds: the galvanic cell above, the electrolytic cell below, with
 * the two columns that differ between them.
 *
 * The point of the figure is that only the signs move. Everything else - which
 * electrode oxidises, which reduces, which way the electrons travel - is
 * identical, so the drawing deliberately keeps the layout the same in both
 * halves and changes only the battery symbol and the plus/minus marks.
 */

import type { Locale } from "@/lib/i18n";
import { ArrowHead, Box, C, Frame, Label, Line, T, en, lines } from "./kit";

const L = {
  anode: en("المصعد", "Anode"),
  cathode: en("المهبط", "Cathode"),
  galvanic: en("جلفانية", "Galvanic"),
  electrolytic: en("تحليلية", "Electrolytic"),
  oxidation: en("أكسدة", "Oxidising"),
  reduction: en("اختزال", "Reducing"),
  neg: en("سالب", "negative"),
  pos: en("موجب", "positive"),
  chemEnergy: en("طاقة كيميائية", "chemical energy"),
  elecEnergy: en("طاقة كهربائية", "electrical energy"),
  powered: en("مصدر طاقة خارجي", "power supply"),
  youDo: en("الخلية هي التي تعمل", "the cell does the work"),
  youPush: en("أنت من يعمل", "you do the work"),
  solution: en("محلول", "solution"),
  saltBridge: en("جسر ملحي", "salt bridge"),
  wire: en("سلك", "wire"),
};

const TAKEAWAY = en(
  "\u0627\u0644\u0627\u0633\u0645\u0627\u0646 \u0644\u0627 \u064a\u062a\u0628\u062f\u0651\u0644\u0627\u0646: \u0627\u0644\u0645\u0635\u0639\u062f \u0645\u0643\u0627\u0646 \u0627\u0644\u0623\u0643\u0633\u062f\u0629 \u062f\u0627\u0626\u0645\u0627\u064b\u060c \u0648\u0627\u0644\u0645\u0647\u0628\u0637 \u0645\u0643\u0627\u0646 \u0627\u0644\u0627\u062e\u062a\u0632\u0627\u0644 \u062f\u0627\u0626\u0645\u0627\u064b. \u0627\u0644\u0625\u0634\u0627\u0631\u0629 \u0648\u062d\u062f\u0647\u0627 \u0647\u064a \u0627\u0644\u062a\u064a \u062a\u0628\u062f\u0651\u0644.",
  "The names never move: the anode is always where oxidation happens, the cathode always where reduction happens. Only the signs swap.",
);

export function FundTwoWorlds({ locale }: { locale: Locale }) {
  const arrowId = `arw-${locale}`;
  return (
    <Frame
      locale={locale}
      height={620}
      title={en(
        "لوحتان: الخلية الجلفانية في الأعلى، والخلية التحليلية في الأسفل. في الخلية الجلفانية المصعد سالب والمهبط موجب، والطاقة الكيميائية تتحول إلى كهربائية. في الخلية التحليلية المصعد موجب والمهبط سالب، ويقودها مصدر طاقة خارجي.",
        "Two panels: a galvanic cell above and an electrolytic cell below. In the galvanic cell the anode is negative and the cathode positive, and chemical energy becomes electrical. In the electrolytic cell the anode is positive and the cathode negative, and an external supply drives it.",
      )[locale]}
    >
      <defs>
        <ArrowHead id={arrowId} color={C.ink} />
      </defs>

      {/* ---------------- top: galvanic ---------------- */}
      <Label t={L.galvanic} locale={locale} x={360} y={28} size={16} weight={700} />
      <T x={360} y={50} size={12.5} fill={C.faint} weight={500}>
        {locale === "ar" ? "طاقة كيميائية ← كهربائية" : "chemical → electrical"}
      </T>

      {/* electrolyte trough */}
      <Box x={120} y={92} w={480} h={104} rx={10} fill="var(--tone-azure-soft, #eef4ff)" stroke="var(--tone-azure, #3b82f6)" />
      <Label t={L.solution} locale={locale} x={360} y={186} size={12} fill={C.inkSoft} />

      {/* electrodes */}
      <Box x={196} y={104} w={22} h={80} rx={4} fill="var(--tone-rose-soft, #ffe9ee)" stroke="var(--tone-rose, #e11d48)" strokeWidth={2} />
      <Box x={502} y={104} w={22} h={80} rx={4} fill="var(--tone-emerald-soft, #e6f7ef)" stroke="var(--tone-emerald, #059669)" strokeWidth={2} />

      {/* external circuit */}
      <Line x1={207} y1={104} x2={207} y2={62} stroke={C.inkSoft} />
      <Line x1={513} y1={104} x2={513} y2={62} stroke={C.inkSoft} />
      <Line x1={207} y1={62} x2={513} y2={62} stroke={C.inkSoft} />

      {/* the load, standing in for whatever the cell is driving */}
      <circle cx={360} cy={62} r={22} fill="var(--c-page, #fff)" stroke={C.inkSoft} strokeWidth={2} />
      <T x={360} y={62} size={13} weight={700} fill={C.ink}>
        e&#8722;
      </T>

      {/* electron flow: anode -> cathode */}
      <Line x1={228} y1={62} x2={492} y2={62} stroke={C.ink} strokeWidth={2} markerEnd={`url(#${arrowId})`} />
      <T x={360} y={38} size={12} weight={600} fill={C.ink}>
        {locale === "ar" ? "الإلكترونات" : "electrons"}
      </T>

      {/* signs and roles */}
      <T x={207} y={80} size={17} weight={700} fill="var(--tone-rose, #e11d48)">&#8722;</T>
      <T x={513} y={80} size={17} weight={700} fill="var(--tone-emerald, #059669)">+</T>
      <Label t={L.anode} locale={locale} x={166} y={126} size={13.5} weight={700} fill="var(--tone-rose, #e11d48)" anchor="end" />
      <Label t={L.oxidation} locale={locale} x={166} y={146} size={12} fill={C.inkSoft} anchor="end" />
      <Label t={L.cathode} locale={locale} x={554} y={126} size={13.5} weight={700} fill="var(--tone-emerald, #059669)" anchor="start" />
      <Label t={L.reduction} locale={locale} x={554} y={146} size={12} fill={C.inkSoft} anchor="start" />

      <Label
        t={locale === "ar" ? L.youDo : L.youDo}
        locale={locale}
        x={360}
        y={222}
        size={12.5}
        fill={C.faint}
      />

      <Line x1={60} y1={252} x2={660} y2={252} stroke={C.rule} strokeWidth={1} />

      {/* ---------------- bottom: electrolytic ---------------- */}
      <Label t={L.electrolytic} locale={locale} x={360} y={284} size={16} weight={700} />
      <T x={360} y={306} size={12.5} fill={C.faint} weight={500}>
        {locale === "ar" ? "طاقة كهربائية ← كيميائية" : "electrical → chemical"}
      </T>

      <Box x={120} y={348} w={480} h={104} rx={10} fill="var(--tone-violet-soft, #f3eeff)" stroke="var(--tone-violet, #7c3aed)" />
      <Label t={L.solution} locale={locale} x={360} y={442} size={12} fill={C.inkSoft} />

      <Box x={196} y={360} w={22} h={80} rx={4} fill="var(--tone-rose-soft, #ffe9ee)" stroke="var(--tone-rose, #e11d48)" strokeWidth={2} />
      <Box x={502} y={360} w={22} h={80} rx={4} fill="var(--tone-emerald-soft, #e6f7ef)" stroke="var(--tone-emerald, #059669)" strokeWidth={2} />

      <Line x1={207} y1={360} x2={207} y2={318} stroke={C.inkSoft} />
      <Line x1={513} y1={360} x2={513} y2={318} stroke={C.inkSoft} />
      <Line x1={207} y1={318} x2={513} y2={318} stroke={C.inkSoft} />

      {/* the supply: long plate, short plate, the standard cell symbol */}
      <Line x1={330} y1={300} x2={330} y2={336} stroke={C.inkSoft} strokeWidth={3} />
      <Line x1={390} y1={306} x2={390} y2={330} stroke={C.inkSoft} strokeWidth={3} />
      <Label t={L.powered} locale={locale} x={470} y={318} size={11.5} fill={C.faint} anchor="start" />

      <Line x1={228} y1={318} x2={492} y2={318} stroke={C.ink} strokeWidth={2} markerEnd={`url(#${arrowId})`} />
      <T x={360} y={296} size={12} weight={600} fill={C.ink}>
        {locale === "ar" ? "الإلكترونات" : "electrons"}
      </T>

      {/* signs flipped, roles identical */}
      <T x={207} y={336} size={17} weight={700} fill="var(--tone-rose, #e11d48)">+</T>
      <T x={513} y={336} size={17} weight={700} fill="var(--tone-emerald, #059669)">&#8722;</T>
      <Label t={L.anode} locale={locale} x={166} y={382} size={13.5} weight={700} fill="var(--tone-rose, #e11d48)" anchor="end" />
      <Label t={L.oxidation} locale={locale} x={166} y={402} size={12} fill={C.inkSoft} anchor="end" />
      <Label t={L.cathode} locale={locale} x={554} y={382} size={13.5} weight={700} fill="var(--tone-emerald, #059669)" anchor="start" />
      <Label t={L.reduction} locale={locale} x={554} y={402} size={12} fill={C.inkSoft} anchor="start" />

      <Label t={L.youPush} locale={locale} x={360} y={478} size={12.5} fill={C.faint} />

      {/* the one-line takeaway, wrapped so a longer translation stays inside the box */}
      <Box x={60} y={508} w={600} h={82} rx={10} fill="var(--tone-amber-soft, #fff6e5)" stroke="var(--tone-amber, #d97706)" />
      {lines(TAKEAWAY, locale, locale === "ar" ? 40 : 54).map((line, i) => (
        <Label
          key={i}
          t={en(line, line)}
          locale={locale}
          x={360}
          y={539 + i * 21}
          size={13}
          weight={600}
        />
      ))}
    </Frame>
  );
}
