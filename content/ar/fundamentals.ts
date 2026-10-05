import type { Lecture } from "../types";
import { fundamentalsMcqAr } from "./fundamentals.mcq";

/**
 * Arabic translation of the Fundamentals lecture.
 *
 * Structure mirrors content/fundamentals.ts: same slug, same section ids in
 * the same order, same tones, same minutes, same figures, formulas and tables.
 * Only reader-facing text differs. Question ids and answer indices come from
 * fundamentals.mcq.ts unchanged, because the quick-check and topic filters are
 * built on them.
 */
export const fundamentalsAr: Partial<Lecture> = {
  label: "الأسس",
  title: "الأسس: من الصفر إلى الكيمياء الكهربية",
  summary:
    "المفردات، والوحدات، والعلاقات الأربع التي يقوم عليها كل ما في هذه المادة. " +
    "لا يُفترض أي معرفة كيمياء سابقة.",
  minutes: 45,
  mcq: fundamentalsMcqAr,
  intro: [
    {
      kind: "para",
      text:
        "هذه المقدمة بطيئة عن قصد. تبدأ من فكرةتين تملكهما بالفعل، وهما الشحنة والتيار، " +
        "ثم تبني فوقهما مفردات الكيمياء الكهربية. لا شيء هنا يحتاج إلى.course كيمياء " +
        "جامعي، بينما كل ما يأتي لاحقًا يحتاج إليها.",
    },
    {
      kind: "para",
      text:
        "الأقسام السبعة أدناه مرتّبة بحيث لا يستخدم كل قسم إلا الأفكار التي سبقته. " +
        "لا يوجد أي سبب للقفز إلى الأمام، وكل قسم يذكر ما يعتمد عليه.",
    },
    {
      kind: "list",
      ordered: true,
      items: [
        "**ما هي الكيمياء الكهربية فعليًا** - الفكرة الواحدة التي تقوم عليها المادة كلها. لا تحتاج معرفة سابقة.",
        "**تشريح الخلية** - الأجزاء الأربعة المتحركة. يحتاج القسم 1 فقط.",
        "**الشحنة والتيار والمقاومة** - الكميات الثلاث وكيف تختلف. يحتاج القسم 1.",
        "**قوانين فاراداي** - تحويل الشحنة إلى كتلة فلز. يحتاج القسم 3.",
        "**الطاقة والقوة** - معنى الأرقام المدوّنة على بطارية. يحتاج القسم 3.",
        "**قراءة خلية حقيقية في المختبر** - المنظومة ثلاثية الأقطاب. يحتاج القسمين 2 و4.",
        "**الوحدات والرموز والكلمات التي ستصادفها** - ورقة مرجعية تُبقيها مفتوحة.",
      ],
    },
    {
      kind: "callout",
      variant: "key",
      title: "كيف تستخدم هذا",
      body:
        "كل قسم صفحة قصيرة. اقرأها، ثم أجب عن الأسئلة الثلاثة في أسفلها دون النظر " +
        "إلى الخلف. إن أخطأت في أحدها فسيخبرك الشرح أي فقرة تعيد قراءتها. وحين " +
        "تنتهي من القسم الأخير ستعرف المواضيع التي يمكنك البدء بها.",
    },
  ],
  sections: [],
};
