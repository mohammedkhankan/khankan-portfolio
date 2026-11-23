import type { Project } from "../types";

export const altayf: Project = {
  slug: "altayf",
  order: 6,
  featured: true,
  variant: "client",
  category: "corporate",
  name: { ar: "الطيف المعمارية", en: "AL TAYF Architecture" },
  tagline: {
    ar: "هوية رقمية لشركة مقاولات معمارية في المملكة",
    en: "A digital identity for an architectural contractor in Saudi Arabia",
  },
  summary: {
    ar: "موقع شركة الطيف المعمارية: من الاجتماع الأول مع العميل إلى تصميم الهوية الرقمية وتحسين الصور والأداء وSEO والنشر.",
    en: "The website for AL TAYF Architecture — from the first client meeting to digital identity, image optimization, performance, SEO and deployment.",
  },
  kind: { ar: "موقع شركة", en: "Corporate website" },
  role: {
    ar: "التخطيط والتصميم والتطوير والنشر",
    en: "Planning, design, development & deployment",
  },
  status: "live",
  url: "https://altayf-sa.com/",
  stack: [
    { name: "Next.js" },
    { name: "React" },
    { name: "TypeScript" },
    { name: "Tailwind CSS" },
    { name: "next/image", note: { ar: "تحسين الصور", en: "image optimization" } },
    { name: "Lazy loading" },
    { name: "Netlify", note: { ar: "الاستضافة الحالية", en: "current hosting" } },
  ],
  accent: { dark: "#cdb98e", light: "#6f5a2c" },
  facts: [
    { label: { ar: "العميل", en: "Client" }, value: { ar: "الطيف المعمارية للمقاولات", en: "AL TAYF Architecture Contracting" } },
    { label: { ar: "الموقع", en: "Location" }, value: { ar: "المملكة العربية السعودية", en: "Saudi Arabia" } },
    { label: { ar: "الرابط", en: "Live" }, value: { ar: "altayf-sa.com", en: "altayf-sa.com" } },
  ],
  context: {
    ar: [
      "الطيف المعمارية شركة مقاولات في المملكة العربية السعودية تعمل في الزجاج المعشّق والقباب السماوية والتشطيبات، بدأت باسم «ألوان الطيف للديكور» قبل أن تصبح «الطيف المعمارية للمقاولات».",
      "أعمال هذا النوع تُباع بالصورة أولاً: العميل يريد أن يرى جودة التنفيذ قبل أن يتصل. لذلك كان الموقع امتداداً لمعرض أعمال الشركة، لا مجرد صفحة تعريفية.",
    ],
    en: [
      "AL TAYF Architecture is a contracting company in Saudi Arabia working in stained glass, skylight domes and finishes. It began as \"Alwan Al Tayf Decor\" before becoming \"AL TAYF Architecture Contracting\".",
      "Work like this sells through images first: clients want to see execution quality before they call. So the site had to be an extension of the company's portfolio, not just a brochure page.",
    ],
  },
  challenge: {
    ar: [
      "تحويل رؤية العميل إلى هوية رقمية تليق بأعماله، وعرض صور مشاريع معمارية كبيرة وغنية بالتفاصيل دون أن يصبح الموقع بطيئاً — خصوصاً على الجوال، حيث يصل أغلب الزوار.",
    ],
    en: [
      "Turning the client's vision into a digital identity worthy of their work, and showing large, detail-rich architectural photography without making the site slow — especially on mobile, where most visitors arrive.",
    ],
  },
  strategy: {
    ar: [
      "الاجتماع مع العميل وفهم احتياجاته وتحديد الرؤية قبل أي سطر كود.",
      "اختيار توجه تصميمي يترك المساحة للصور، مع طباعة وألوان هادئة تخدم الأعمال ولا تنافسها.",
      "بناء نسخة جديدة على موقع تجريبي منفصل، ليقارن العميل بين النسختين ويقرر بنفسه قبل الاعتماد.",
    ],
    en: [
      "Meet the client, understand their needs and agree on a vision before writing any code.",
      "Choose a design direction that gives the photography room, with calm type and color that serve the work rather than compete with it.",
      "Build the new version on a separate trial site so the client can compare both and decide for themselves before switching.",
    ],
  },
  solution: {
    ar: [
      "موقع يعرض الخدمات والمشاريع المعمارية بصور كبيرة، مع تجربة جوال مصممة بعناية، وصور مُحسَّنة تُحمَّل عند الحاجة، وأساس تقني لمحركات البحث.",
    ],
    en: [
      "A site presenting services and architectural projects through large imagery, with a carefully designed mobile experience, optimized images loaded on demand, and a technical SEO foundation.",
    ],
  },
  features: [
    { title: { ar: "عرض المشاريع المعمارية", en: "Architectural project showcase" } },
    { title: { ar: "صفحات الخدمات", en: "Service pages" } },
    { title: { ar: "تجربة جوال مصممة", en: "Designed mobile experience" } },
    { title: { ar: "تحسين الصور والتحميل الكسول", en: "Image optimization & lazy loading" } },
    { title: { ar: "أساس SEO تقني", en: "Technical SEO foundation" } },
    { title: { ar: "النشر على الاستضافة", en: "Deployment & hosting" } },
  ],
  engineering: {
    ar: [
      "الموقع مبني بـ Next.js وReact وTypeScript وTailwind CSS، مع تحسين الصور عبر next/image والتحميل الكسول، ومنشور حالياً على Netlify.",
      "يتضمن المصدر بعض التكاملات مع Bunny؛ ولا يُعتبر هنا كل ما هو موجود محلياً مستخدماً في النسخة المنشورة.",
    ],
    en: [
      "Built with Next.js, React, TypeScript and Tailwind CSS, with images optimized through next/image and lazy loading, currently deployed on Netlify.",
      "The source includes some Bunny integrations; not everything present locally is assumed to be part of the deployed site.",
    ],
  },
  decisions: [
    {
      title: { ar: "الصورة هي البطل", en: "The photography leads" },
      body: {
        ar: "التصميم يتراجع خطوة ليُبرز الأعمال؛ الزخرفة الزائدة كانت ستنافس الزجاج المعشّق نفسه.",
        en: "The design steps back so the work stands out; heavy ornament would have competed with the stained glass itself.",
      },
    },
    {
      title: { ar: "نسختان للمقارنة", en: "Two versions to compare" },
      body: {
        ar: "إطلاق النسخة الجديدة على موقع تجريبي منفصل منح العميل القرار النهائي دون أي مخاطرة على موقعه القائم.",
        en: "Launching the new version on a separate trial site gave the client the final say without risking the existing site.",
      },
    },
    {
      title: { ar: "استضافة منخفضة التكلفة", en: "Low-cost hosting" },
      body: {
        ar: "موقع ثابت في معظمه يعمل على استضافة منخفضة التكلفة دون خادم دائم.",
        en: "A mostly static site that runs on low-cost hosting without a permanent server.",
      },
    },
  ],
  results: {
    ar: ["الموقع منشور على altayf-sa.com.", "لا تُعرض أرقام تحسّن في الظهور على محركات البحث لعدم وجود قياس منشور بعد."],
    en: ["The site is live at altayf-sa.com.", "No search-visibility improvements are claimed, as none have been measured and published yet."],
  },
  currentStatus: {
    ar: ["منشور ويعمل."],
    en: ["Live."],
  },
  next: {
    ar: ["متابعة العمل على الظهور في محركات البحث، وقياس النتائج قبل عرضها."],
    en: ["Continued search-visibility work, measuring results before presenting them."],
  },
  diagrams: ["altayf-journey"],
  shots: [
    { key: "hero", label: { ar: "صورة Hero", en: "Hero" } },
    { key: "home", label: { ar: "الصفحة الرئيسية", en: "Home page" } },
    { key: "projects", label: { ar: "المشاريع", en: "Projects" } },
    { key: "services", label: { ar: "الخدمات", en: "Services" } },
    { key: "mobile", label: { ar: "الجوال", en: "Mobile" } },
    { key: "tablet", label: { ar: "التابلت", en: "Tablet" } },
  ],
  pendingMedia: {
    ar: "حزمة صور الطيف (ALTAYF_PORTFOLIO_ASSETS) لم تُرفق بعد. يمكن زيارة الموقع المنشور مباشرة.",
    en: "The AL TAYF image set (ALTAYF_PORTFOLIO_ASSETS) hasn't been added yet. You can visit the live site directly.",
  },
};
