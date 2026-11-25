import type { L, LL, Locale } from "./types";

/**
 * Personal & site-wide content. Edit text here — no component changes needed.
 */
export const person = {
  name: { ar: "محمد خانكان", en: "Mohammed Khankan" } as L,
  initials: { ar: "م.خ", en: "MK" } as L,
  roles: {
    ar: ["مؤسس ومدير تنفيذي — شركة أفق للحلول التقنية والرقمنة", "مؤسس ومدير تنفيذي — منصة رفد التعليمية", "مهندس برمجيات وباني منتجات SaaS"],
    en: ["Founder & CEO — OFOQ Technical Solutions & Digitalization", "Founder & CEO — RAFD Educational Platform", "Software engineer & SaaS product builder"],
  } as LL,
  location: { ar: "المملكة العربية السعودية", en: "Saudi Arabia" } as L,
  education: {
    ar: "هندسة المعلوماتية — الجامعة الافتراضية السورية",
    en: "Informatics Engineering — Syrian Virtual University",
  } as L,
  /**
   * Professional portrait. To replace: put the new photo at
   * assets-src/portrait/original.png (4:5 works best) and run `npm run images`.
   * Set to false to fall back to the typographic monogram.
   */
  portrait: true as boolean,
};

export const links = {
  github: "https://github.com/mohammedkhankan",
  linkedin: "https://www.linkedin.com/in/mohammed-tarek-533a2a214/",
  whatsapp: "https://wa.me/966510371924",
};

export const ui = {
  nav: {
    home: { ar: "الرئيسية", en: "Home" },
    work: { ar: "المشاريع", en: "Work" },
    about: { ar: "نبذة", en: "About" },
    experience: { ar: "القيادة والخبرة", en: "Leadership" },
    contact: { ar: "تواصل", en: "Contact" },
    privacy: { ar: "الخصوصية", en: "Privacy" },
  },
  a11y: {
    skip: { ar: "انتقل إلى المحتوى", en: "Skip to content" },
    menu: { ar: "القائمة", en: "Menu" },
    close: { ar: "إغلاق", en: "Close" },
    theme: { ar: "تبديل الوضع الداكن والفاتح", en: "Toggle dark / light theme" },
    language: { ar: "English", en: "العربية" },
    languageLabel: { ar: "Switch to English", en: "التبديل إلى العربية" },
    prev: { ar: "الصورة السابقة", en: "Previous image" },
    next: { ar: "الصورة التالية", en: "Next image" },
    openImage: { ar: "عرض الصورة بالحجم الكامل", en: "Open image full size" },
    primaryNav: { ar: "التنقل الرئيسي", en: "Primary" },
    breadcrumb: { ar: "مسار التنقل", en: "Breadcrumb" },
    newTab: { ar: "(يفتح في نافذة جديدة)", en: "(opens in a new tab)" },
  },
  cta: {
    viewWork: { ar: "استعرض المشاريع", en: "View the work" },
    contact: { ar: "تواصل معي", en: "Get in touch" },
    readCase: { ar: "اقرأ دراسة الحالة", en: "Read the case study" },
    allProjects: { ar: "كل المشاريع", en: "All projects" },
    visitSite: { ar: "زيارة الموقع", en: "Visit live site" },
    whatsapp: { ar: "راسلني على واتساب", en: "Message on WhatsApp" },
    linkedin: { ar: "LinkedIn", en: "LinkedIn" },
    github: { ar: "GitHub", en: "GitHub" },
    nextProject: { ar: "المشروع التالي", en: "Next project" },
    moreAbout: { ar: "القصة كاملة", en: "The full story" },
    cv: { ar: "تحميل السيرة الذاتية (PDF)", en: "Download CV (PDF)" },
  },
  labels: {
    type: { ar: "نوع المنتج", en: "Product type" },
    role: { ar: "الدور", en: "Role" },
    stack: { ar: "التقنيات", en: "Stack" },
    status: { ar: "الحالة", en: "Status" },
    model: { ar: "النموذج التجاري", en: "Business model" },
    all: { ar: "الكل", en: "All" },
    filter: { ar: "تصفية حسب الفئة", en: "Filter by category" },
    gallery: { ar: "معرض الواجهات", en: "Interface gallery" },
    pendingScreens: { ar: "الشاشات المقرر عرضها", en: "Screens to be shown" },
    awaiting: { ar: "بانتظار الصور الرسمية", en: "Awaiting official screenshots" },
    figure: { ar: "شكل", en: "Fig." },
    projectsCount: { ar: "مشاريع", en: "projects" },
  },
  sections: {
    story: { ar: "القصة", en: "The story" },
    context: { ar: "السياق", en: "Context" },
    challenge: { ar: "التحدي", en: "The challenge" },
    strategy: { ar: "استراتيجية المنتج", en: "Product strategy" },
    solution: { ar: "الحل", en: "The solution" },
    experience: { ar: "تجربة المنتج", en: "Product experience" },
    engineering: { ar: "الهندسة", en: "Engineering" },
    decisions: { ar: "قرارات مفصلية", en: "Key decisions" },
    results: { ar: "النتائج والتحقق", en: "Results & validation" },
    status: { ar: "الحالة الحالية", en: "Current status" },
    next: { ar: "ما التالي", en: "What's next" },
  },
  status: {
    trial: { ar: "منشور للتجربة", en: "Deployed for trial" },
    "in-use": { ar: "مستخدم في مناسبات حقيقية", en: "Used in real events" },
    live: { ar: "منشور", en: "Live" },
    internal: { ar: "نظام داخلي", en: "Internal system" },
    "in-development": { ar: "قيد التطوير", en: "In development" },
  },
  categories: {
    saas: { ar: "منصات SaaS", en: "SaaS Platforms" },
    business: { ar: "أنظمة أعمال", en: "Business Systems" },
    edtech: { ar: "تقنيات تعليمية", en: "Educational Technology" },
    corporate: { ar: "مواقع شركات", en: "Corporate Websites" },
    internal: { ar: "أدوات داخلية", en: "Internal Tools" },
  },
} satisfies Record<string, Record<string, L>>;

export function t(value: L, locale: Locale): string {
  return value[locale];
}
