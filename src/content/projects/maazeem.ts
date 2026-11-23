import type { Project } from "../types";

export const maazeem: Project = {
  slug: "maazeem",
  order: 3,
  featured: true,
  variant: "workflow",
  category: "saas",
  name: { ar: "معازيم", en: "MAAZEEM" },
  tagline: {
    ar: "دعوات إلكترونية وإدارة المدعوين من التصميم حتى باب القاعة",
    en: "Digital invitations and guest management, from design to the door",
  },
  summary: {
    ar: "منصة SaaS لإنشاء الدعوات الإلكترونية وإدارة المناسبات والمدعوين والإرسال ومتابعة الردود وتسجيل الحضور عبر QR.",
    en: "A SaaS platform for digital invitations: events, guest lists, sending, RSVP tracking and QR check-in at the venue.",
  },
  kind: { ar: "منصة SaaS متعددة العملاء", en: "Multi-tenant SaaS platform" },
  role: {
    ar: "المؤسس — المنتج والمعمارية والتطوير",
    en: "Founder — product, architecture & engineering",
  },
  status: "in-use",
  statusNote: {
    ar: "استُخدمت في مناسبات حقيقية.",
    en: "Used for real events.",
  },
  stack: [
    { name: "Next.js 16" },
    { name: "React 19" },
    { name: "TypeScript" },
    { name: "PostgreSQL" },
    { name: "Drizzle ORM" },
    { name: "Sharp" },
    { name: "Docker" },
    { name: "WhatsApp Cloud API", note: { ar: "تكامل قيد العمل", en: "integration in progress" } },
  ],
  accent: { dark: "#d394b9", light: "#8d3a6a" },
  facts: [
    { label: { ar: "الأسواق", en: "Markets" }, value: { ar: "السعودية، سوريا، مصر، الإمارات وغيرها", en: "Saudi Arabia, Syria, Egypt, UAE and more" } },
    { label: { ar: "اللغات", en: "Languages" }, value: { ar: "العربية والإنجليزية", en: "Arabic & English" } },
    { label: { ar: "النموذج التجاري", en: "Business model" }, value: { ar: "اشتراكات شهرية وسنوية، وتجربة مجانية 3 أيام", en: "Monthly & yearly plans, 3-day free trial" } },
  ],
  context: {
    ar: [
      "بدأت معازيم من احتياج فعلي: أشخاص وشركات يعملون في مجال الدعوات والمناسبات طلبوا أنظمة لإدارة المدعوين والإرسال والحضور، وكانت تكلفة بناء نظام مستقل لكل عميل مرتفعة على الطرفين.",
      "الحل المنطقي كان منصة واحدة يستخدمها كل هؤلاء العملاء، كلٌّ بحسابه ومناسباته وهويته.",
    ],
    en: [
      "MAAZEEM started from real demand: people and companies working in invitations and events were asking for systems to manage guests, sending and attendance — and building a separate system for each client was too expensive for everyone involved.",
      "The logical answer was one platform shared by all of them, each with their own account, events and branding.",
    ],
  },
  challenge: {
    ar: [
      "دورة المناسبة طويلة ومتعددة الأطراف: مصمم الدعوة، وصاحب المناسبة، وفريق الاستقبال عند الباب. لكل منهم ما يحتاج رؤيته، ولا يجب أن يرى أكثر منه.",
      "والإرسال عبر واتساب تحديداً يحتاج إلى صدق مع العميل: هناك طرق مختلفة لكل منها حدودها، ولا يوجد طريق يضمن شيئاً خارج سيطرة المنصة.",
    ],
    en: [
      "An event's lifecycle is long and involves several parties: the invitation designer, the host, and the reception team at the door. Each needs to see certain things — and nothing more.",
      "Sending over WhatsApp in particular calls for honesty with clients: there are different routes, each with its own limits, and none can guarantee what's outside the platform's control.",
    ],
  },
  strategy: {
    ar: [
      "استهداف مقدّمي الخدمة — مصممي الدعوات ومنظمي الأعراس وشركات تنظيم المناسبات — لا صاحب المناسبة فقط؛ فهم من يستخدم المنصة بشكل متكرر.",
      "عدم حصر المنصة بسوريا: دعم العربية والإنجليزية واستهداف عدة أسواق منها السعودية وسوريا ومصر والإمارات.",
      "مرونة في شكل الدعوة: قوالب جاهزة أو رفع تصميم خاص، مع باركود شخصي أو عام أو دون باركود.",
      "ثلاث قنوات إرسال بحسب حاجة العميل: يدوي، أو بمساعدة بوت، أو عبر تكامل Meta الرسمي الذي ما زال قيد العمل.",
      "اشتراكات شهرية وسنوية، مع تجربة مجانية مدتها 3 أيام ضمن نموذج الخدمة المحدد.",
    ],
    en: [
      "Target service providers — invitation designers, wedding planners, event companies — not just hosts; they are the repeat users.",
      "Don't limit it to Syria: support Arabic and English and target several markets including Saudi Arabia, Syria, Egypt and the UAE.",
      "Flexible invitation formats: ready templates or an uploaded design, with a personal QR, a shared QR, or none.",
      "Three sending routes depending on the client: manual, bot-assisted, or the official Meta integration, which is still in progress.",
      "Monthly and yearly subscriptions, with a 3-day free trial under the defined service model.",
    ],
  },
  solution: {
    ar: [
      "مسار واحد متصل: إنشاء المناسبة ← تصميم الدعوة ← إضافة المدعوين ← الإرسال ← متابعة القبول والرفض ← تسجيل الحضور بمسح QR عند الباب.",
      "ولكل طرف رابطه: رابط متابعة لصاحب المناسبة يرى فيه الردود، ورابط مسح لفريق الاستقبال لتسجيل الحضور.",
    ],
    en: [
      "One connected path: create the event → design the invitation → add guests → send → track accepts and declines → check guests in by QR scan at the door.",
      "Each party gets its own link: a follow-up link for the host to see responses, and a scanning link for the reception team to record attendance.",
    ],
  },
  features: [
    { title: { ar: "إنشاء المناسبات وتفاصيلها وموقعها", en: "Events, details & location" } },
    { title: { ar: "قوالب جاهزة ورفع التصاميم", en: "Templates & uploaded designs" } },
    { title: { ar: "تخصيص الدعوة", en: "Invitation customization" } },
    { title: { ar: "باركود شخصي أو عام أو بدونه", en: "Personal, shared or no QR" } },
    { title: { ar: "إضافة يدوية واستيراد Excel", en: "Manual entry & Excel import" } },
    { title: { ar: "بيانات المدعو وعدد المرافقين", en: "Guest details & companions" } },
    { title: { ar: "إرسال الدعوات ومتابعة حالة الإرسال", en: "Sending & delivery status" } },
    { title: { ar: "متابعة القبول والرفض", en: "Accept / decline tracking" } },
    { title: { ar: "روابط متابعة لأصحاب المناسبات", en: "Host follow-up links" } },
    { title: { ar: "روابط مسح QR وتسجيل الحضور", en: "QR scan & check-in links" } },
  ],
  engineering: {
    ar: [
      "المنصة مبنية بـ Next.js 16 وReact 19 وTypeScript مع PostgreSQL وDrizzle ORM، وتُعالَج صور الدعوات بمكتبة Sharp، والتشغيل في Docker.",
      "يوجد عمل على تكامل WhatsApp Cloud API؛ ويُميَّز بوضوح بين ما هو موجود في الكود وما هو مفعّل فعلياً في الإنتاج.",
      "تصميم الروابط العامة (متابعة صاحب المناسبة، ومسح الحضور) يعتمد على أن يمنح كل رابط أقل قدر من الوصول يكفي مهمته.",
    ],
    en: [
      "Built with Next.js 16, React 19 and TypeScript on PostgreSQL with Drizzle ORM; invitation images are processed with Sharp; runtime is Docker.",
      "There is integration work on the WhatsApp Cloud API, with a clear line drawn between what exists in code and what is actually enabled in production.",
      "Public links (host follow-up, door check-in) are designed so each grants the least access its job requires.",
    ],
  },
  engineeringTopics: [
    {
      title: { ar: "عزل بيانات العملاء", en: "Tenant isolation" },
      body: { ar: "كل مقدم خدمة يرى مناسباته ومدعويه فقط.", en: "Each service provider sees only their own events and guests." },
    },
    {
      title: { ar: "روابط بصلاحيات محدودة", en: "Least-privilege links" },
      body: { ar: "رابط الاستقبال يسجّل الحضور ولا يكشف قائمة المدعوين كاملة لغير المخولين.", en: "The door link records attendance without exposing the full guest list to anyone else." },
    },
    {
      title: { ar: "استيراد القوائم", en: "List import" },
      body: { ar: "إدخال القوائم الكبيرة دفعة واحدة من ملفات Excel بدل الإدخال اليدوي لكل مدعو.", en: "Bringing large lists in at once from Excel instead of typing each guest by hand." },
    },
  ],
  decisions: [
    {
      title: { ar: "منصة لمقدمي الخدمة", en: "Built for service providers" },
      body: {
        ar: "العميل الأساسي هو من يدير مناسبات كثيرة، فالمنصة تُبنى لإدارة عدة مناسبات بهويات مختلفة من حساب واحد.",
        en: "The core customer runs many events, so the platform is built for managing multiple events under different identities from one account.",
      },
    },
    {
      title: { ar: "الصدق في قنوات الإرسال", en: "Honest sending channels" },
      body: {
        ar: "الإرسال بمساعدة البوت أداة مساعدة وليس وسيلة لتجاوز حماية واتساب، ولا يضمن عدم الحظر. والتكامل الرسمي مع Meta يُعرض كقيد العمل حتى يكتمل.",
        en: "Bot-assisted sending is an aid, not a way around WhatsApp's protections, and it doesn't guarantee against blocking. The official Meta integration is presented as in progress until it's complete.",
      },
    },
    {
      title: { ar: "باركود مرن", en: "Flexible QR" },
      body: {
        ar: "ليست كل مناسبة تحتاج باركوداً شخصياً؛ إتاحة الخيارات الثلاثة تجعل المنصة مناسبة لمناسبات بأحجام وطبائع مختلفة.",
        en: "Not every event needs a personal QR; offering all three options fits events of very different sizes and styles.",
      },
    },
  ],
  results: {
    ar: ["استُخدمت معازيم في مناسبات حقيقية.", "لا تُعرض أعداد مناسبات أو مدعوين لعدم توفر أرقام موثقة للنشر."],
    en: ["MAAZEEM has been used for real events.", "Event and guest counts aren't shown because no verified figures are available for publication."],
  },
  currentStatus: {
    ar: ["المنصة مستخدمة، وتكامل Meta الرسمي ما زال قيد العمل."],
    en: ["The platform is in use; the official Meta integration is still in progress."],
  },
  next: {
    ar: ["استكمال تكامل WhatsApp Cloud API الرسمي وتفعيله، وتوسيع القوالب وأدوات المتابعة لمقدمي الخدمة."],
    en: ["Complete and enable the official WhatsApp Cloud API integration, and expand templates and follow-up tools for providers."],
  },
  diagrams: ["maazeem-workflow", "maazeem-checkin", "maazeem-architecture"],
  shots: [
    { key: "dashboard", label: { ar: "لوحة التحكم", en: "Dashboard" } },
    { key: "create-event", label: { ar: "إنشاء المناسبة", en: "Create event" } },
    { key: "editor", label: { ar: "محرر الدعوات", en: "Invitation editor" } },
    { key: "templates", label: { ar: "القوالب", en: "Templates" } },
    { key: "guests", label: { ar: "المدعوون", en: "Guests" } },
    { key: "qr", label: { ar: "QR", en: "QR" } },
    { key: "sending", label: { ar: "إرسال الدعوات", en: "Sending" } },
    { key: "host", label: { ar: "متابعة العميل", en: "Host follow-up" } },
    { key: "checkin", label: { ar: "تسجيل الحضور", en: "Check-in" } },
    { key: "mobile", label: { ar: "تجربة الجوال", en: "Mobile" } },
  ],
  pendingMedia: {
    ar: "حزمة صور معازيم (maazeem-portfolio) لم تُرفق بعد. بمجرد إضافتها تظهر هنا تلقائياً.",
    en: "The MAAZEEM image set (maazeem-portfolio) hasn't been added yet. Once it is, it appears here automatically.",
  },
};
