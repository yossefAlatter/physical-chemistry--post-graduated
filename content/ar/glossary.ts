// The Arabic glossary, and the single source of truth for bilingual terms.
//
// The brief was that an Arabic reader should meet the English name of a
// chemical term alongside the Arabic one, so المصعد((anode)) reads as
// "المصعد (anode)". That only stays consistent if somebody owns the mapping,
// so the pairs live here rather than being retyped into the prose, and
// tools/check_glossary.ts fails the build if the content glosses something
// that is not in this table.
//
// The rule for content: gloss a term on its *first* mention in a section and
// leave it plain Arabic after that. Repeating the English on every mention
// makes the sentence read as a foreign phrase wrapped in Arabic, which is
// exactly the texture to avoid. check_glossary.ts warns when a term is
// glossed twice in the same section.
//
// Every value here must equal the spelling used in the English tree, because
// that is the string the reader will meet next door on /.

/** Arabic term -> the English name used in the English content. */
export const GLOSSARY: Record<string, string> = {
  // The two electrodes and the two processes. These four carry the opening
  // section, so they are the ones glossed in nearly every section.
  المصعد: "anode",
  المهبط: "cathode",
  الأكسدة: "oxidation",
  الاختزال: "reduction",
  "تفاعل كهروكيميائي": "electrochemical reaction",

  // Cell families and their parts.
  "الخلية الجلفانية": "galvanic cell",
  "الخلية الفولتاوية": "voltaic cell",
  "الخلية التحليلية": "electrolytic cell",
  "الخلية الكهربية": "electrochemical cell",
  القطب: "electrode",
  "قطب العمل": "working electrode",
  "القطب المرجعي": "reference electrode",
  "القطب المساعد": "counter electrode",
  "جهد القطب": "electrode potential",
  المحلول: "solution",
  "المحلول الكهربائي": "electrolyte",
  المتفاعل: "reactant",
  المتفاعلات: "reactants",
  "نواتج التفاعل": "products",
  "التفاعل العكسي": "reverse reaction",

  // Quantities.
  الشحنة: "charge",
  التيار: "current",
  المقاومة: "resistance",
  الجهد: "potential",
  "قوة الدفع": "electromotive force",
  القدرة: "power",
  الطاقة: "energy",
  السعة: "capacity",
  "التيار النوعي": "current density",
  "الكثافة التيارية": "current density",
  "معامل الانتشار": "diffusion coefficient",
  "معامل النشاط": "activity coefficient",
  "ثابت فاراداي": "Faraday constant",
  "ثابت الغاز": "gas constant",

  // Thermodynamics. The Fundamentals rewrite is pitched at a reader who
  // already knows what ΔG is, so these carry the framing of the whole primer.
  "الطاقة الحرة": "free energy",
  "درجة التفاعل": "extent of reaction",
  تلقائي: "spontaneous",
  الشغل: "work",
  "الشغل غير التوسيعي": "non-expansion work",
  "تفاعل نصفي": "half-reaction",

  // Transport, layers and electrode kinetics.
  "نقل الكتلة": "mass transport",
  "الانتقال الثنائي": "diffusion",
  "الهجرة": "migration",
  "التمركز": "convection",
  "الطبقة المنتشرة": "diffusion layer",
  "الطبقة المزدوجة": "double layer",
  "التقويم": "rectification",
  "الاستقطاب": "polarisation",
  "الجهد الزائد": "overpotential",
  "جهد الفعل": "activation overpotential",
  "جهد التلوث": "concentration overpotential",

  // Named laws, equations and methods.
  "قانون فاراداي": "Faraday's law",
  "قانونا فاراداي": "Faraday's two laws",
  "معادلة نيرنست": "Nernst equation",
  "معادلة بتلر فولمر": "Butler-Volmer equation",
  "معادلة تافل": "Tafel equation",
  "معادلة ليفتش": "Levich equation",
  "منحنى الاستقطاب": "polarisation curve",
  "مخطط تافل": "Tafel plot",
  "مسح الجهد": "potential sweep",
  "جهد مرجعي": "reference potential",
  "جهد سالب": "negative potential",
  "جهد موجب": "positive potential",

  // Specific cells, processes and materials.
  "خلية دانيال": "Daniell cell",
  "خلية الوقود": "fuel cell",
  "خلية وقود": "fuel cell",
  "التآكل": "corrosion",
  "الطلاء الكهربائي": "electroplating",
  "التنقية الكهربية": "electrorefining",
  "النيكل": "nickel",
  "الزنك": "zinc",
  "النحاس": "copper",
  "الفضة": "silver",
  "الذهب": "gold",
  "الحديد": "iron",
  "ثاني أكسيد المنغنيز": "manganese dioxide",

  // Instrumentation.
  "جهاز ضبط الجهد": "potentiostat",
  "جهاز قياس الجهد": "potentiostat",
  الجلفانومتر: "galvanometer",
  "مقياس الجهد": "voltmeter",
  "مخطط زمن-جهد": "chronopotentiogram",
  "مسبار الأقطاب الدوّارة": "rotating disk electrode",
  "الأقطاب الدوّارة": "rotating disk electrode",

  // Formalities of the language itself.
  "عدد التأكسد": "oxidation number",
  "حالة التأكسد": "oxidation state",
  "الجهد القياسي": "standard potential",
  قطبية: "polarity",

  // Ways of measuring and of driving a cell.
  "القياس الكمّي الكهربائي": "coulometry",
  "تيار التبادل": "exchange current",
  "وقود متجدد": "regenerative fuel",
};

/**
 * Names that are already Latin inside the Arabic text, so glossing them
 * would produce "خلية ((galvanic cell))". The checker uses this to explain a
 * failure rather than only report one.
 */
export const SELF_ENGLISH = new Set([
  "Nernst",
  "Butler-Volmer",
  "Tafel",
  "Levich",
  "Randles",
  "Red Cat",
  "An Ox",
  "butler-volmer",
]);

/** Reverse lookup, for checking that a gloss matches the English source. */
export function englishFor(arabic: string): string | undefined {
  return GLOSSARY[arabic];
}
