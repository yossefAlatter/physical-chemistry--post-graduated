/**
 * fund_oxidation_states: the one test that works in both cell types.
 *
 * Watch the oxidation number. Top row: a zinc atom at 0 becomes a zinc ion at
 * +2 and the two electrons leave through the wire, so that is oxidation and
 * that electrode is the anode. Bottom row: the reverse for copper, so that is
 * reduction and that electrode is the cathode. Nothing else in the drawing
 * needs to be read.
 */

import type { Locale } from "@/lib/i18n";
import { ArrowHead, Box, C, Frame, Label, Line, T, en } from "./kit";

const L = {
  oxidation: en("أكسدة — عند المصعد", "oxidation — at the anode"),
  reduction: en("اختزال — عند المهبط", "reduction — at the cathode"),
  atom: en("ذرة", "atom"),
  ion: en("أيون", "ion"),
  loses: en("يفقد إلكترونين", "loses two electrons"),
  gains: en("يكتسب إلكترونين", "gains two electrons"),
  out: en("يخرجان عبر السلك", "leave through the wire"),
  in: en("يصلان عبر السلك", "arrive through the wire"),
  rule: en(
    "القاعدة: زاد عدد التأكسد ← أكسدة. نقص عدد التأكسد ← اختزال.",
    "The rule: oxidation number rises → oxidation. It falls → reduction.",
  ),
};

export function FundOxidationStates({ locale }: { locale: Locale }) {
  const arrowId = `ox-${locale}`;
  return (
    <Frame
      locale={locale}
      height={430}
      title={en(
        "صفان يوضّحان كيف تميَّز القطبان. العلوي: ذرة زنك بعدد تأكسد صفر تصبح أيون زنك بعدد تأكسد زائد اثنين، فتخرج إلكتروناتان عبر السلك، أي أكسدة عند المصعد. السفلي: أيون نحاس بعدد تأكسد زائد اثنين يصبح ذرة نحاس بعدد تأكسد صفر، فيصله إلكترونان عبر السلك، أي اختزال عند المهبط.",
        "Two rows showing how to identify the electrodes. Top: a zinc atom with oxidation number 0 becomes a zinc ion with oxidation number +2, losing two electrons that travel out through the wire, so the row is oxidation at the anode. Bottom: a copper ion with oxidation number +2 becomes a copper atom with oxidation number 0, gaining two electrons that arrive through the wire, so the row is reduction at the cathode.",
      )[locale]}
    >
      <defs>
        <ArrowHead id={arrowId} color={C.inkSoft} />
      </defs>

      {/* ---------------- top row: zinc, oxidation ---------------- */}
      <Box x={30} y={26} w={660} h={168} rx={12} fill="var(--tone-rose-soft, #ffe9ee)" stroke="var(--tone-rose, #e11d48)" />
      <Label t={L.oxidation} locale={locale} x={360} y={50} size={14} weight={700} fill="var(--tone-rose, #e11d48)" />

      {/* atom -> ion */}
      <circle cx={150} cy={118} r={34} fill="var(--c-page, #fff)" stroke="var(--tone-rose, #e11d48)" strokeWidth={2.5} />
      <T x={150} y={118} size={14} weight={700} fill={C.ink}>Zn</T>
      <Label t={L.atom} locale={locale} x={150} y={168} size={11.5} fill={C.inkSoft} />

      <T x={150} y={82} size={12} weight={600} fill={C.inkSoft}>0</T>

      <Line x1={196} y1={118} x2={286} y2={118} stroke={C.inkSoft} strokeWidth={2} markerEnd={`url(#${arrowId})`} />

      <circle cx={330} cy={118} r={34} fill="var(--c-page, #fff)" stroke="var(--tone-rose, #e11d48)" strokeWidth={2.5} />
      <T x={330} y={118} size={14} weight={700} fill={C.ink}>Zn&#178;+</T>
      <Label t={L.ion} locale={locale} x={330} y={168} size={11.5} fill={C.inkSoft} />

      <T x={330} y={82} size={12} weight={600} fill="var(--tone-rose, #e11d48)">+2</T>

      {/* electrons leaving */}
      {[0, 1].map((i) => (
        <g key={i}>
          <circle cx={410 + i * 26} cy={100} r={6} fill="var(--tone-amber, #d97706)" />
          <T x={410 + i * 26} y={100} size={8.5} weight={700} fill="#fff">&#8722;</T>
        </g>
      ))}
      <Label t={L.loses} locale={locale} x={560} y={100} size={12} fill={C.inkSoft} anchor="start" />
      <Label t={L.out} locale={locale} x={560} y={120} size={11.5} fill={C.faint} anchor="start" />

      <Line x1={410} y1={140} x2={470} y2={140} stroke={C.inkSoft} dash="4 3" />
      <T x={478} y={140} size={12} weight={600} fill="var(--tone-rose, #e11d48)" anchor="start">
        {locale === "ar" ? "أكسدة" : "oxidation"}
      </T>

      {/* ---------------- bottom row: copper, reduction ---------------- */}
      <Box x={30} y={212} w={660} h={168} rx={12} fill="var(--tone-emerald-soft, #e6f7ef)" stroke="var(--tone-emerald, #059669)" />
      <Label t={L.reduction} locale={locale} x={360} y={236} size={14} weight={700} fill="var(--tone-emerald, #059669)" />

      <circle cx={330} cy={304} r={34} fill="var(--c-page, #fff)" stroke="var(--tone-emerald, #059669)" strokeWidth={2.5} />
      <T x={330} y={304} size={14} weight={700} fill={C.ink}>Cu&#178;+</T>
      <Label t={L.ion} locale={locale} x={330} y={354} size={11.5} fill={C.inkSoft} />
      <T x={330} y={268} size={12} weight={600} fill="var(--tone-emerald, #059669)">+2</T>

      <Line x1={286} y1={304} x2={196} y2={304} stroke={C.inkSoft} strokeWidth={2} markerEnd={`url(#${arrowId})`} />

      <circle cx={150} cy={304} r={34} fill="var(--c-page, #fff)" stroke="var(--tone-emerald, #059669)" strokeWidth={2.5} />
      <T x={150} y={304} size={14} weight={700} fill={C.ink}>Cu</T>
      <Label t={L.atom} locale={locale} x={150} y={354} size={11.5} fill={C.inkSoft} />
      <T x={150} y={268} size={12} weight={600} fill={C.inkSoft}>0</T>

      {/* electrons arriving */}
      {[0, 1].map((i) => (
        <g key={i}>
          <circle cx={560 + i * 26} cy={286} r={6} fill="var(--tone-amber, #d97706)" />
          <T x={560 + i * 26} y={286} size={8.5} weight={700} fill="#fff">&#8722;</T>
        </g>
      ))}
      <Label t={L.gains} locale={locale} x={430} y={286} size={12} fill={C.inkSoft} anchor="end" />
      <Label t={L.in} locale={locale} x={430} y={306} size={11.5} fill={C.faint} anchor="end" />

      <Line x1={250} y1={326} x2={250} y2={326} stroke={C.inkSoft} dash="4 3" />
      <T x={242} y={326} size={12} weight={600} fill="var(--tone-emerald, #059669)" anchor="end">
        {locale === "ar" ? "اختزال" : "reduction"}
      </T>

      {/* ---------------- the rule ---------------- */}
      <Box x={30} y={392} w={660} h={30} rx={8} fill="var(--tone-amber-soft, #fff6e5)" stroke="var(--tone-amber, #d97706)" />
      <Label t={L.rule} locale={locale} x={360} y={407} size={12.5} weight={600} />
    </Frame>
  );
}
