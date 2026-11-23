import type { Project } from "../types";

export const rafdFinance: Project = {
  slug: "rafd-finance",
  order: 5,
  featured: false,
  variant: "internal",
  category: "internal",
  name: { ar: "النظام المالي لرفد", en: "RAFD Financial System" },
  tagline: {
    ar: "منظومة مالية وإدارية داخلية لفريق رفد",
    en: "An internal finance & operations system for the RAFD team",
  },
  summary: {
    ar: "نظام داخلي صممه وطوره محمد ليحوّل العمليات المالية المتكررة لرفد — الطلاب والمدفوعات والمستحقات والأرباح بعدة عملات — إلى منظومة موحدة.",
    en: "An internal system Mohammed designed and built to turn RAFD's recurring finance work — students, payments, payouts and profit-sharing across currencies — into one coherent system.",
  },
  kind: { ar: "نظام داخلي", en: "Internal tool" },
  role: { ar: "التصميم والتطوير", en: "Design & development" },
  status: "internal",
  statusNote: {
    ar: "نظام داخلي غير متاح للعموم؛ لا تُعرض أي بيانات حقيقية.",
    en: "Internal and not public; no real data is shown.",
  },
  stack: [],
  accent: { dark: "#a5bd86", light: "#4b6427" },
  chapter: { bg: "linear-gradient(160deg,#16231a 0%,#22362a 100%)", ink: "#eef5ea", sub: "#b4c7ad", dark: true },
  facts: [
    { label: { ar: "المستخدمون", en: "Users" }, value: { ar: "إدارة رفد", en: "RAFD management" } },
    { label: { ar: "العملات", en: "Currencies" }, value: { ar: "الدولار، الريال، الليرة السورية", en: "USD, SAR, SYP" } },
  ],
  context: {
    ar: [
      "مع نمو رفد أصبحت الجوانب المالية أكثر تشعباً: طلاب بحالات تسجيل واشتراك مختلفة، ومدفوعات تحتاج تفعيلاً، ومستحقات للمدرّسين، ومصاريف، وأرباح توزَّع بين الشركاء — وكل ذلك بأكثر من عملة.",
    ],
    en: [
      "As RAFD grew, its finances branched out: students in different registration and subscription states, payments that need activating, teacher payouts, expenses, and profits split between partners — all in more than one currency.",
    ],
  },
  challenge: {
    ar: [
      "عندما تُدار هذه العمليات يدوياً أو عبر جداول متفرقة، يصبح كل فصل دراسي جديد عبئاً، ويصعب على الإدارة أن ترى الصورة الكاملة: ماذا دخل؟ ماذا خرج؟ لمن المستحق؟ وما الذي تبقّى فعلاً؟",
      "التعامل مع الدولار والريال والليرة السورية معاً يضيف طبقة أخرى من التعقيد في الحساب والتقارير.",
    ],
    en: [
      "Run by hand or across scattered spreadsheets, every new term becomes a burden, and management struggles to see the whole picture: what came in, what went out, who is owed, and what actually remains.",
      "Handling USD, SAR and SYP together adds another layer of complexity to both the arithmetic and the reporting.",
    ],
  },
  strategy: {
    ar: [
      "بناء نظام على مقاس احتياجات الفريق بدل تكييف أداة عامة، لأن منطق المستحقات وتوزيع الأرباح خاص برفد.",
      "التركيز على ما يساعد الإدارة على اتخاذ قرارات الفصول القادمة، لا على تسجيل الأرقام فقط.",
    ],
    en: [
      "Build a system fitted to the team's needs rather than bending a generic tool, because RAFD's payout and profit-sharing logic is its own.",
      "Focus on what helps management decide on upcoming terms — not just on recording numbers.",
    ],
  },
  solution: {
    ar: ["منظومة موحدة تتابع دورة الطالب المالية من التسجيل إلى التفعيل، وتحسب المستحقات والإيرادات والمصاريف وحصص الشركاء، وتولّد تقارير مالية."],
    en: ["A unified system that follows each student's financial cycle from registration to activation, computes payouts, revenue, expenses and partner shares, and produces financial reports."],
  },
  features: [
    { title: { ar: "متابعة عدد الطلاب", en: "Student counts" } },
    { title: { ar: "حالات التسجيل والاشتراك", en: "Registration & subscription states" } },
    { title: { ar: "المدفوعات والتفعيل", en: "Payments & activation" } },
    { title: { ar: "مستحقات المدرّسين", en: "Teacher payouts" } },
    { title: { ar: "إيرادات المنصة", en: "Platform revenue" } },
    { title: { ar: "المصاريف", en: "Expenses" } },
    { title: { ar: "توزيع الأرباح بين الشركاء", en: "Partner profit-sharing" } },
    { title: { ar: "التقارير المالية", en: "Financial reports" } },
    { title: { ar: "عملات متعددة", en: "Multiple currencies" } },
  ],
  engineering: {
    ar: [
      "التقنيات المستخدمة في هذا النظام ستُذكر بعد وصول تقريره التقني، حتى لا يُنسب إليه ما لم يُوثَّق.",
      "على مستوى المنطق، يتبع النظام مساراً واضحاً: المدفوعات تُنتج إيرادات، والإيرادات تُخصم منها المستحقات والمصاريف، وما يتبقى يوزَّع وفق حصص الشركاء — مع الحفاظ على عملة كل حركة.",
    ],
    en: [
      "The technologies behind this system will be listed once its technical report arrives, so nothing undocumented is attributed to it.",
      "At the logic level, the system follows a clear path: payments produce revenue; payouts and expenses are deducted; the remainder is split by partner shares — while keeping each transaction's currency.",
    ],
  },
  decisions: [
    {
      title: { ar: "نظام داخلي مخصص", en: "A bespoke internal system" },
      body: {
        ar: "منطق توزيع الأرباح والمستحقات خاص بالفريق، والنظام المخصص يعكسه بدقة بدل الالتفاف على أداة عامة.",
        en: "The payout and profit logic is specific to the team; a bespoke system mirrors it exactly instead of working around a generic tool.",
      },
    },
    {
      title: { ar: "الخصوصية أولاً", en: "Privacy first" },
      body: {
        ar: "لا تُعرض أسماء طلاب أو رواتب أو أرباح فعلية في أي مكان من هذا الموقع؛ أي صور لاحقة ستكون منقحة أو ببيانات تجريبية.",
        en: "No student names, salaries or real profits appear anywhere on this site; any future screenshots will be redacted or use sample data.",
      },
    },
  ],
  results: {
    ar: ["القيمة الأساسية تشغيلية: تحويل عمليات مالية معقدة ومتكررة إلى منظومة موحدة تساعد الإدارة على فهم النتائج. لا تُنشر أي أرقام مالية."],
    en: ["The core value is operational: turning complex, recurring financial work into one system that helps management understand results. No financial figures are published."],
  },
  currentStatus: {
    ar: ["نظام داخلي مستخدم لدى فريق رفد."],
    en: ["An internal system used by the RAFD team."],
  },
  next: {
    ar: ["إضافة التقرير التقني وصور منقحة ببيانات تجريبية إلى دراسة الحالة."],
    en: ["Add the technical report and redacted, sample-data screenshots to this case study."],
  },
  diagrams: ["rafd-finance-flow"],
  shots: [
    { key: "overview", label: { ar: "النظرة العامة", en: "Overview" } },
    { key: "students", label: { ar: "الطلاب والاشتراكات", en: "Students & subscriptions" } },
    { key: "payouts", label: { ar: "المستحقات", en: "Payouts" } },
    { key: "reports", label: { ar: "التقارير", en: "Reports" } },
  ],
  pendingMedia: {
    ar: "صور هذا النظام ستُضاف لاحقاً بنسخ منقحة أو ببيانات تجريبية فقط.",
    en: "Screenshots will be added later — redacted or with sample data only.",
  },
};
