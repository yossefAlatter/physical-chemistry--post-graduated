/**
 * A p-n junction: an n-type region (loose electrons) and a p-type region
 * (holes), with the depletion layer of the seam left empty because electrons
 * and holes cancel where they meet. One seam, no free carriers, so one-way
 * behaviour.
 */

import { ArrowHead, C, Line, T, Frame } from "./kit";

export function PnJunction() {
  return (
    <Frame height={280} title="A p-n junction: two regions and an empty seam">
      <defs>
        <ArrowHead id="pj-r" />
        <ArrowHead id="pj-l" flip />
      </defs>

      {/* n-type box */}
      <rect x="48" y="90" width="244" height="110" rx="10" fill="#3b82f62e" stroke={C.rule} strokeWidth="1.5" />
      {/* p-type box */}
      <rect x="428" y="90" width="244" height="110" rx="10" fill="#ef44442e" stroke={C.rule} strokeWidth="1.5" />
      {/* depletion seam */}
      <rect x="292" y="90" width="136" height="110" fill="#9ca3af33" stroke={C.rule} strokeWidth="1.5" />

      {/* region labels */}
      <T x={170} y={70} size={17} weight={650}>n-type</T>
      <T x={550} y={70} size={17} weight={650}>p-type</T>
      <T x={170} y={128} size={12} fill={C.inkSoft}>loose electrons</T>
      <T x={550} y={128} size={12} fill={C.inkSoft}>holes (empty spots)</T>

      {/* electrons: filled dots */}
      <circle cx="90" cy="150" r="5" fill="var(--tone)" />
      <circle cx="128" cy="168" r="5" fill="var(--tone)" />
      <circle cx="168" cy="150" r="5" fill="var(--tone)" />
      <circle cx="206" cy="170" r="5" fill="var(--tone)" />
      <circle cx="246" cy="148" r="5" fill="var(--tone)" />

      {/* holes: open circles */}
      <circle cx="474" cy="150" r="5.5" fill="white" stroke="#dc2626" strokeWidth="1.8" />
      <circle cx="512" cy="168" r="5.5" fill="white" stroke="#dc2626" strokeWidth="1.8" />
      <circle cx="552" cy="150" r="5.5" fill="white" stroke="#dc2626" strokeWidth="1.8" />
      <circle cx="592" cy="170" r="5.5" fill="white" stroke="#dc2626" strokeWidth="1.8" />

      {/* the seam label */}
      <text x="360" y="145" fontSize="13" fontWeight="600" fill={C.ink} textAnchor="middle" dominantBaseline="middle">
        depletion layer
      </text>
      <T x={360} y={170} size={11} fill={C.inkSoft}>no free carriers</T>

      {/* electrons drift right, holes drift left, they cancel */}
      <Line x1={250} y1={150} x2={330} y2={150} stroke="#2563eb" strokeWidth={2} markerEnd="url(#pj-r)" />
      <Line x1={470} y1={150} x2={390} y2={150} stroke="#dc2626" strokeWidth={2} markerEnd="url(#pj-l)" />
      <T x={360} y={120} size={20} fill="#dc2626" weight={700}>✕</T>

      {/* diode / one-way gate */}
      <Line x1={250} y1={238} x2={300} y2={238} strokeWidth={2} />
      <path d="M 300 226 L 300 250 L 342 238 Z" fill="var(--c-ink)" />
      <Line x1={342} y1={226} x2={342} y2={250} strokeWidth={2.4} />
      <Line x1={342} y1={238} x2={470} y2={238} strokeWidth={2} />
      <T x={360} y={266} size={12} fill={C.inkSoft}>a one-way gate: a diode</T>
    </Frame>
  );
}
