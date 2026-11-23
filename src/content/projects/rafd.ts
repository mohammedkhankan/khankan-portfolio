import type { Project } from "../types";

export const rafd: Project = {
  slug: "rafd",
  order: 4,
  featured: true,
  variant: "leadership",
  category: "edtech",
  name: { ar: "رفد التعليمية", en: "RAFD" },
  tagline: {
    ar: "منصة تعليم مساند لطلاب الجامعة الافتراضية السورية",
    en: "A supplementary learning platform for Syrian Virtual University students",
  },
  summary: {
    ar: "منصة تعليمية تجمع خبرة الطلاب في طبيعة المقررات مع خبرة الكفاءات الأكاديمية، وتقدّم شرحاً أكثر تنظيماً عبر تطبيقات سطح المكتب وأندرويد.",
    en: "A learning platform that pairs students' knowledge of how courses really work with academic expertise, delivering structured teaching through desktop and Android apps.",
  },
  kind: { ar: "منصة تعليمية وتطبيقات", en: "Learning platform & apps" },
  role: {
    ar: "المؤسس والمدير التنفيذي",
    en: "Founder & CEO",
  },
  status: "live",
  statusNote: {
    ar: "المنصة تعمل؛ تطبيقا سطح المكتب وأندرويد متاحان، وتطبيق iOS قيد التطوير ضمن فريق رفد.",
    en: "The platform is operating; desktop and Android apps are available, and an iOS app is in development within the RAFD team.",
  },
  stack: [],
  accent: { dark: "#86ade0", light: "#2a5a96" },
  facts: [
    { label: { ar: "الجمهور", en: "Audience" }, value: { ar: "طلاب الجامعة الافتراضية السورية", en: "Syrian Virtual University students" } },
    { label: { ar: "التطبيقات", en: "Apps" }, value: { ar: "سطح المكتب · أندرويد · iOS (قيد التطوير)", en: "Desktop · Android · iOS (in development)" } },
    { label: { ar: "طبيعة العلاقة بالجامعة", en: "Relationship to the university" }, value: { ar: "منصة مستقلة للتعليم المساند", en: "Independent supplementary platform" } },
  ],
  context: {
    ar: [
      "طلاب التعليم الافتراضي يواجهون تحدياً خاصاً: المقررات موجودة، لكن الشرح المنظّم والمتابعة القريبة ليسا دائماً بالقدر الذي يحتاجونه.",
      "تأسست رفد لتحسين تجربة التعليم المساند لطلاب الجامعة الافتراضية السورية، بالجمع بين من يعرف طبيعة المقررات من الداخل — الطلاب — ومن يملك العمق الأكاديمي — الكفاءات التعليمية.",
    ],
    en: [
      "Students in virtual education face a particular challenge: the courses exist, but structured explanation and close follow-up aren't always there in the measure they need.",
      "RAFD was founded to improve supplementary learning for Syrian Virtual University students, by bringing together those who know the courses from the inside — students — and those with academic depth — educators.",
    ],
  },
  challenge: {
    ar: [
      "رفد ليست مشروعاً برمجياً فقط؛ هي مؤسسة تعليمية صغيرة. نجاحها يعتمد على جودة الأكاديميين، ووضوح التعاقدات، وثقة الطلاب، وتقديم المحتوى بطريقة تحمي جهد المدرّسين.",
      "وتقنياً: تقديم الجلسات والمحتوى عبر أجهزة متعددة، مع قيود وصول تحترم الاشتراكات، دون أن تصبح الحماية عائقاً أمام الطالب الملتزم.",
    ],
    en: [
      "RAFD isn't only a software project; it's a small educational organization. Its success depends on the quality of its academics, clear agreements, students' trust, and delivering content in a way that protects teachers' work.",
      "Technically: delivering sessions and content across several devices with access controls that respect subscriptions — without protection getting in the way of a genuine student.",
    ],
  },
  strategy: {
    ar: [
      "الجمع بين خبرة الطلاب في طبيعة المقررات والخبرة الأكاديمية، لإنتاج شرح أكثر تنظيماً وجودة.",
      "بناء منظومة تطبيقات تناسب الأجهزة التي يستخدمها الطلاب فعلاً، بدءاً من سطح المكتب وأندرويد.",
      "حماية المحتوى بوسائل معقولة ومتوازنة، مع الإقرار بأنه لا توجد حماية مطلقة ضد التصوير أو النسخ.",
    ],
    en: [
      "Combine students' knowledge of the courses with academic expertise to produce better-structured teaching.",
      "Build apps for the devices students actually use, starting with desktop and Android.",
      "Protect content with reasonable, balanced measures — acknowledging that no protection against screen capture or copying is absolute.",
    ],
  },
  solution: {
    ar: [
      "تطبيق سطح مكتب لحضور الجلسات ومشاهدة المحتوى، ونسخة مخصصة لأجهزة أندرويد، وتطبيق iOS قيد التطوير ضمن فريق رفد.",
    ],
    en: [
      "A desktop app for attending sessions and watching content, a dedicated Android version, and an iOS app in development within the RAFD team.",
    ],
  },
  features: [
    { title: { ar: "مشاهدة الجلسات", en: "Session playback" } },
    { title: { ar: "تحميل بعض المحتوى للاستخدام دون اتصال وفق الصلاحيات", en: "Offline download for permitted content" } },
    { title: { ar: "التحكم بسرعة التشغيل", en: "Playback speed control" } },
    { title: { ar: "متابعة المحتوى", en: "Progress through content" } },
    { title: { ar: "تقييد الوصول للأجهزة والجلسات", en: "Device & session access limits" } },
    { title: { ar: "وسائل لحماية المحتوى", en: "Content protection measures" } },
  ],
  engineering: {
    ar: [
      "تفاصيل البنية التقنية لتطبيقات رفد ستُضاف بعد وصول التقرير التقني، حتى لا يُعرض هنا ما لم يُوثَّق.",
    ],
    en: [
      "Technical architecture details for the RAFD apps will be added once the technical report arrives, so nothing undocumented is shown here.",
    ],
  },
  decisions: [
    {
      title: { ar: "أكاديميون وطلاب معاً", en: "Academics and students together" },
      body: {
        ar: "الطالب يعرف أين يتعثر زملاؤه، والأكاديمي يعرف كيف يُبنى الفهم. الجمع بينهما هو جوهر رفد.",
        en: "Students know where peers struggle; academics know how understanding is built. Combining the two is the core of RAFD.",
      },
    },
    {
      title: { ar: "التطبيق أولاً", en: "Apps first" },
      body: {
        ar: "تطبيقات مخصصة بدل صفحة ويب فقط، لتوفير تجربة مشاهدة أفضل وضبط أدق للوصول.",
        en: "Dedicated apps rather than a web page alone, for a better viewing experience and finer access control.",
      },
    },
    {
      title: { ar: "حماية واقعية", en: "Realistic protection" },
      body: {
        ar: "طبقات حماية تجعل إساءة الاستخدام أصعب، دون وعود مطلقة لا يمكن الوفاء بها.",
        en: "Layers of protection that make misuse harder — without absolute promises that can't be kept.",
      },
    },
  ],
  results: {
    ar: ["لا تُعرض أعداد طلاب أو مؤشرات هنا قبل توفر بيانات موثقة للنشر."],
    en: ["No student numbers or metrics are shown here until verified data is available for publication."],
  },
  currentStatus: {
    ar: [
      "المنصة تعمل بقيادة محمد كمؤسس ومدير تنفيذي؛ يتولى التخطيط، والتواصل مع الأكاديميين، والتعاقدات، والقرارات الاستراتيجية، وقيادة تطوير الخدمات.",
      "رفد منصة مستقلة، وليست شراكة رسمية مع الجامعة.",
    ],
    en: [
      "The platform operates under Mohammed's leadership as founder and CEO; he handles planning, academic relationships, contracts, strategic decisions and leads service development.",
      "RAFD is an independent platform, not an official partnership with the university.",
    ],
  },
  next: {
    ar: ["إطلاق تطبيق iOS، وإضافة صور التطبيقات وتفاصيل البنية التقنية إلى دراسة الحالة هذه."],
    en: ["Ship the iOS app, and add app screenshots and technical architecture details to this case study."],
  },
  diagrams: ["rafd-ecosystem"],
  shots: [
    { key: "desktop", label: { ar: "تطبيق سطح المكتب", en: "Desktop app" } },
    { key: "android", label: { ar: "تطبيق أندرويد", en: "Android app" } },
    { key: "player", label: { ar: "مشغّل الجلسات", en: "Session player" } },
    { key: "offline", label: { ar: "المحتوى دون اتصال", en: "Offline content" } },
  ],
  pendingMedia: {
    ar: "صور تطبيقات رفد وتقريرها التقني سيُضافان لاحقاً. لن تُعرض واجهات تخيّلية بدلاً منها.",
    en: "RAFD app screenshots and the technical report will be added later. No mock interfaces are shown in their place.",
  },
};
