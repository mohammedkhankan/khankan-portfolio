import type { Project } from "../types";

export const ofoq: Project = {
  slug: "ofoq",
  order: 2,
  featured: true,
  variant: "operations",
  category: "saas",
  name: { ar: "أفق لإدارة المطاعم", en: "OFOQ Restaurant OS" },
  tagline: {
    ar: "نظام تشغيل للمطاعم — من الطاولة إلى المطبخ إلى الحساب",
    en: "An operating system for restaurants — table to kitchen to bill",
  },
  summary: {
    ar: "نظام SaaS لإدارة عمليات المطعم اليومية: الطاولات والطلبات والنادل والكاشير ومحطات التحضير والحجوزات والمنيو الإلكتروني.",
    en: "A SaaS system for daily restaurant operations: tables, orders, waiters, cashier, prep stations, reservations and a digital menu.",
  },
  kind: { ar: "نظام SaaS تشغيلي", en: "Operational SaaS" },
  role: {
    ar: "المؤسس — المنتج والمعمارية والتطوير والاختبار الميداني",
    en: "Founder — product, architecture, engineering & field testing",
  },
  status: "trial",
  statusNote: {
    ar: "منشور للتجربة، وجرى اختباره في مطعم فعلي.",
    en: "Deployed for trial and tested in a working restaurant.",
  },
  stack: [
    { name: "Next.js 16" },
    { name: "React 19" },
    { name: "TypeScript" },
    { name: "Prisma 7" },
    { name: "PostgreSQL" },
    { name: "Supabase Auth" },
    { name: "Docker" },
    { name: "Bunny" },
  ],
  accent: { dark: "#e3a944", light: "#8a5a07" },
  facts: [
    { label: { ar: "النموذج التجاري", en: "Business model" }, value: { ar: "اشتراكات شهرية وسنوية بباقات متعددة", en: "Monthly & yearly plans, multiple tiers" } },
    { label: { ar: "التجربة المجانية", en: "Free trial" }, value: { ar: "30 يوماً", en: "30 days" } },
    { label: { ar: "الاختبار", en: "Field test" }, value: { ar: "مطعم فعلي", en: "A working restaurant" } },
  ],
  context: {
    ar: [
      "كثير من الأنظمة المعروضة للمطاعم تتوقف عند المنيو الإلكتروني أو نقطة البيع. لكن المطعم في ساعة الذروة منظومة كاملة: طاولات تُفتح وتُغلق، نُدُل يضيفون طلبات، مطبخ يحضّر، وكاشير يحاسب — وكل ذلك في الوقت نفسه.",
      "أفق صُمم ليقدم أدوات تشغيل احترافية للمطاعم بتكلفة مناسبة، مع تركيز خاص على المطاعم ذات الضغط التشغيلي المرتفع.",
    ],
    en: [
      "Many restaurant products stop at a digital menu or a point of sale. But a restaurant at peak hour is a whole system: tables opening and closing, waiters adding items, a kitchen preparing, a cashier settling — all at once.",
      "OFOQ was designed to give restaurants professional operating tools at a fair price, with particular attention to high-pressure service.",
    ],
  },
  challenge: {
    ar: [
      "الخطأ الشائع في أنظمة المطاعم هو اعتبار الطاولة والحساب شيئاً واحداً. عندها يصبح تحرير الطاولة لزبون جديد مخاطرة بفقدان حساب الزبون السابق، أو خلط زيارتين في فاتورة واحدة.",
      "وفوق ذلك، الحالات الحدّية في المطعم ليست نادرة: دفعة تُضغط مرتين، حجزان على الطاولة نفسها، موظف تتغير صلاحياته أثناء الوردية، طبق ما زال يُحضَّر بعد أن دُفع الحساب.",
    ],
    en: [
      "The classic mistake in restaurant software is treating a table and a bill as the same thing. Then freeing a table for new guests risks losing the previous party's bill, or merging two visits into one invoice.",
      "And edge cases in a restaurant aren't rare: a payment tapped twice, two reservations for the same table, a staff member whose permissions change mid-shift, a dish still being prepared after the bill is paid.",
    ],
  },
  strategy: {
    ar: [
      "تصميم النظام حول تدفق الخدمة الفعلي في الصالة والمطبخ، لا حول شاشات منفصلة.",
      "واجهة مخصصة لكل دور — النادل، الكاشير، محطة التحضير، الإدارة — بدل شاشة واحدة مزدحمة تخدم الجميع.",
      "اشتراكات شهرية وسنوية بباقات مختلفة وتجربة مجانية لمدة 30 يوماً، وتخصيص المظهر والثيمات ليحمل النظام هوية كل مطعم.",
      "اختباره في مطعم فعلي قبل أي توسع.",
    ],
    en: [
      "Design around the real flow of service across floor and kitchen, not around isolated screens.",
      "A dedicated interface per role — waiter, cashier, prep station, management — instead of one crowded screen for everyone.",
      "Monthly and yearly plans in several tiers with a 30-day free trial, plus themes so the system carries each restaurant's identity.",
      "Test it in a working restaurant before scaling.",
    ],
  },
  solution: {
    ar: [
      "منظومة تغطي دورة الخدمة كاملة: من الحجز أو مسح رمز QR على الطاولة، مروراً بالطلب وتذاكر التحضير في المطبخ، وصولاً إلى الحساب والدفع والتقارير.",
    ],
    en: [
      "A system covering the full service cycle: from a reservation or a QR scan at the table, through ordering and kitchen prep tickets, to the bill, payment and reporting.",
    ],
  },
  features: [
    { title: { ar: "إدارة الطاولات", en: "Table management" } },
    { title: { ar: "إدارة الطلبات", en: "Order management" } },
    { title: { ar: "واجهة النادل", en: "Waiter app" } },
    { title: { ar: "الكاشير", en: "Cashier" } },
    { title: { ar: "محطات التحضير", en: "Prep stations" } },
    { title: { ar: "الحجوزات", en: "Reservations" } },
    { title: { ar: "المنيو الإلكتروني وQR", en: "Digital menu & QR" } },
    { title: { ar: "الموظفون والصلاحيات", en: "Staff & permissions" } },
    { title: { ar: "التقارير", en: "Reports" } },
    { title: { ar: "الثيمات وتخصيص المظهر", en: "Themes & branding" } },
    { title: { ar: "الفواتير والمدفوعات", en: "Bills & payments" } },
    { title: { ar: "إدارة الحسابات", en: "Account management" } },
  ],
  engineering: {
    ar: [
      "التطبيق مبني بـ Next.js 16 وReact 19 وTypeScript، مع Prisma 7 فوق PostgreSQL، والمصادقة عبر Supabase Auth، والتشغيل في Docker، والوسائط عبر Bunny.",
      "القرار المحوري هو نموذج البيانات: الطاولة، وجلسة الطاولة، والطلب، وتذكرة التحضير، والحساب، والدفعة — ستة كيانات منفصلة لكل منها دورة حياة خاصة.",
    ],
    en: [
      "Built with Next.js 16, React 19 and TypeScript, Prisma 7 over PostgreSQL, Supabase Auth for authentication, Docker for runtime and Bunny for media.",
      "The pivotal decision is the data model: table, table session, order, prep ticket, bill and payment — six separate entities, each with its own lifecycle.",
    ],
  },
  engineeringTopics: [
    {
      title: { ar: "منع تكرار الدفع", en: "Duplicate-payment protection" },
      body: { ar: "معالجة حالة إرسال الدفعة نفسها مرتين بحيث لا تُسجَّل مرتين.", en: "Handling the same payment being submitted twice so it isn't recorded twice." },
    },
    {
      title: { ar: "تعارض الحجوزات", en: "Reservation conflicts" },
      body: { ar: "التحقق من عدم تداخل حجزين على الطاولة نفسها في الوقت نفسه.", en: "Preventing two reservations from overlapping on the same table." },
    },
    {
      title: { ar: "تغيّر الصلاحيات", en: "Changing permissions" },
      body: { ar: "التعامل مع موظف تتغير صلاحياته أثناء العمل، بحيث يُطبَّق التغيير على العمليات التالية.", en: "Applying a staff member's changed permissions to the very next operation, mid-shift." },
    },
    {
      title: { ar: "التحضير بعد الدفع", en: "Prep continues after payment" },
      body: { ar: "إغلاق الحساب لا يلغي تذاكر التحضير المفتوحة؛ المطبخ يكمل عمله.", en: "Settling the bill doesn't cancel open prep tickets — the kitchen finishes its work." },
    },
    {
      title: { ar: "إعادة التحقق من الأسعار", en: "Price re-validation" },
      body: { ar: "تُعاد قراءة الأسعار من الخادم لحظة تأكيد الطلب، فلا يُعتمد على سعر ظهر في واجهة قديمة.", en: "Prices are re-read on the server when an order is confirmed, never trusted from a stale screen." },
    },
  ],
  decisions: [
    {
      title: { ar: "فصل الطاولة عن جلسة الطاولة", en: "Separate the table from the table session" },
      body: {
        ar: "الطاولة مكان ثابت، والجلسة زيارة. بهذا يمكن تحرير الطاولة وإعادة استخدامها فوراً دون فقدان الحساب السابق أو خلط زيارتين.",
        en: "A table is a place; a session is a visit. The table can be freed and reused immediately without losing the previous bill or mixing two visits.",
      },
    },
    {
      title: { ar: "تذكرة التحضير كيان مستقل", en: "Prep tickets as their own entity" },
      body: {
        ar: "المطبخ يعمل على تذاكر، لا على الطلبات مباشرة، فيمكن توجيه الأصناف لمحطات مختلفة ومتابعة كل منها على حدة.",
        en: "The kitchen works on tickets, not raw orders, so items can be routed to different stations and tracked independently.",
      },
    },
    {
      title: { ar: "الاختبار الميداني قبل التوسع", en: "Field-test before scaling" },
      body: {
        ar: "تشغيل النظام في مطعم حقيقي يكشف ما لا تكشفه بيئة التطوير: سرعة الإدخال، وضوح الشاشات تحت الضغط، وحالات الاستخدام غير المتوقعة.",
        en: "Running in a real restaurant reveals what a dev environment can't: input speed, screen clarity under pressure, and unexpected usage.",
      },
    },
  ],
  results: {
    ar: [
      "النظام منشور للتجربة، وجرى اختباره في مطعم فعلي.",
      "لا تُعرض هنا أرقام أداء أو قدرة تحمّل محددة لأنها لم تُقَس بعد بشكل موثق.",
    ],
    en: [
      "The system is deployed for trial and has been tested in a working restaurant.",
      "No performance or load figures are shown here because none have been formally measured yet.",
    ],
  },
  currentStatus: {
    ar: ["منشور للتجربة ومتاح للمطاعم ضمن فترة تجربة مجانية."],
    en: ["Deployed for trial and available to restaurants on a free trial."],
  },
  next: {
    ar: ["قياس الأداء بصورة موثقة تحت أحمال تشغيلية واقعية، وتوسيع التقارير، وتطوير التجربة بناءً على ملاحظات المطاعم المستخدمة."],
    en: ["Formal performance measurement under realistic load, richer reporting, and refinements driven by feedback from restaurants using it."],
  },
  diagrams: ["ofoq-state", "ofoq-flow", "ofoq-architecture"],
  shots: [
    { key: "hero", label: { ar: "النظام على اللابتوب والجوال", en: "Laptop & mobile" } },
    { key: "dashboard", label: { ar: "لوحة المطعم", en: "Restaurant dashboard" } },
    { key: "cashier", label: { ar: "الكاشير", en: "Cashier" } },
    { key: "tables", label: { ar: "الطاولات", en: "Tables" } },
    { key: "waiter", label: { ar: "النادل", en: "Waiter" } },
    { key: "stations", label: { ar: "محطات التحضير", en: "Prep stations" } },
    { key: "menu", label: { ar: "المنيو", en: "Menu" } },
    { key: "themes", label: { ar: "الثيمات", en: "Themes" } },
    { key: "reports", label: { ar: "التقارير", en: "Reports" } },
    { key: "reservations", label: { ar: "الحجوزات", en: "Reservations" } },
  ],
  pendingMedia: {
    ar: "حزمة صور أفق (OFOQ_PORTFOLIO_VISUAL_ASSETS) لم تُرفق بعد. بمجرد إضافتها تظهر هنا تلقائياً.",
    en: "The OFOQ image set (OFOQ_PORTFOLIO_VISUAL_ASSETS) hasn't been added yet. Once it is, it appears here automatically.",
  },
};
