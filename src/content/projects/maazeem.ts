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
    ar: "دعوة إلكترونية باسم كل ضيف وباركود خاص ترسلها على واتساب، وتستقبل الضيوف بمسح الباركود من الجوال.",
    en: "A personal invitation with its own QR code for every guest, sent on WhatsApp, with check-in by scanning from a phone.",
  },
  kind: { ar: "منصة SaaS متعددة العملاء", en: "Multi-tenant SaaS platform" },
  role: {
    ar: "المؤسس — المنتج والمعمارية والتطوير",
    en: "Founder — product, architecture & engineering",
  },
  status: "in-use",
  url: "https://maazeem.ofoqsy.com/",
  statusNote: {
    ar: "استُخدمت في مناسبات حقيقية.",
    en: "Used for real events.",
  },
  stack: [
    { name: "Next.js 16" },
    { name: "React 19" },
    { name: "TypeScript" },
    { name: "PostgreSQL 17" },
    { name: "Drizzle ORM" },
    { name: "Tailwind CSS 4" },
    { name: "Zod" },
    { name: "Sharp + Pango" },
    { name: "Baileys" },
    { name: "Docker Compose" },
    { name: "WhatsApp Cloud API", note: { ar: "الكود جاهز، التفعيل بانتظار موافقة Meta", en: "code complete, awaiting Meta approval" } },
  ],
  accent: { dark: "#c9a6ec", light: "#5b2f84" },
  chapter: { bg: "linear-gradient(160deg,#221434 0%,#362248 45%,#553473 100%)", ink: "#f4ecfb", sub: "#cbb8de", dark: true },
  proof: [
    { value: { ar: "Meta أو بوت", en: "Meta or bot" }, label: { ar: "إرسال رسمي عبر واتساب Meta، أو عبر بوت خاص بمعازيم", en: "Official WhatsApp sending through Meta, or through MAAZEEM's own bot" } },
    { value: { ar: "QR مخصص", en: "Custom QR" }, label: { ar: "باركود يُضبط حسب المناسبة: يظهر دائماً أو بعد قبول الدعوة فقط", en: "A QR code set per event: always visible, or shown only after the guest accepts" } },
    { value: { ar: "تقويم", en: "Calendar" }, label: { ar: "تنبيهات للضيوف تُضاف إلى التقويم قبل المناسبة", en: "Guest reminders added to their calendar ahead of the event" } },
  ],
  mediaNote: { ar: "لقطات من المنصة ببيانات تجريبية.", en: "Screens from the platform with demo data." },
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
      "قاعدة كود TypeScript واحدة تعمل كأربع عمليات — الويب والعامل الخلفي وبوت واتساب والترحيل — فوق PostgreSQL 17 بـ 32 جدولاً، ومنشورة بـ Docker Compose.",
      "كل النماذج تعمل عبر Next.js Server Actions بلا REST منفصل، وكل المدخلات ومتغيرات البيئة يُتحقق منها بـ Zod. وتُرسم الدعوة العربية على الخادم بـ Sharp وPango بنفس خطوط المحرر، فيطابق التصدير ما يراه المستخدم.",
      "التحقق: 52 اختبار وحدة وتكامل ناجحاً على PostgreSQL حقيقي معزول، وTypeScript بلا أخطاء، وبناء إنتاجي ناجح.",
    ],
    en: [
      "One TypeScript codebase running as four processes — web, worker, WhatsApp bot and migrations — on PostgreSQL 17 with 32 tables, deployed with Docker Compose.",
      "Every form runs through Next.js Server Actions with no separate REST layer, and all input and environment variables are validated with Zod. Arabic invitations are rendered on the server with Sharp and Pango using the editor's own fonts, so the export matches what the user designed.",
      "Verified: 52 passing unit and integration tests on an isolated real PostgreSQL, a clean TypeScript build and a successful production build.",
    ],
  },
  engineeringTopics: [
    {
      title: { ar: "عزل صارم لبيانات كل عميل", en: "Strict tenant isolation" },
      body: { ar: "كل استعلام مقيّد بمساحة التاجر المأخوذة من الجلسة، ولا يُقبل معرّف المستأجر من المتصفح. وعليه اختبار آلي مخصص.", en: "Every query is scoped to the workspace from the session; tenant IDs from the browser are never trusted. Covered by a dedicated test." },
    },
    {
      title: { ar: "تسجيل حضور بلا تجاوز", en: "Race-free check-in" },
      body: { ar: "UPDATE شرطي واحد مع قيد CHECK. في الاختبار، 30 مسحاً متزامناً على دعوة لخمسة أشخاص أدخلت 5 بالضبط.", en: "A single conditional UPDATE plus a CHECK constraint. In testing, 30 concurrent scans on a 5-person invite admitted exactly 5." },
    },
    {
      title: { ar: "توليد آلاف الدعوات في الخلفية", en: "Background generation at scale" },
      body: { ar: "طابور مهام داخل PostgreSQL بـ SKIP LOCKED بلا Redis، ومنع تكرار المهام، وبصمة لكل دعوة حتى يُعاد توليد ما تغيّر فقط.", en: "A Postgres-native job queue with SKIP LOCKED and no Redis, de-duplicated jobs, and a render hash per invitation so only what changed is regenerated." },
    },
    {
      title: { ar: "استيراد Excel متين", en: "Robust Excel import" },
      body: { ar: "10,000 ضيف في 1.84 ثانية، مع معالجة الأرقام العربية والمحارف الخفية، وكشف المكرر، واحترام حدود الباقة تحت التزامن.", en: "10,000 guests in 1.84 s, handling Arabic-Indic digits and invisible marks, catching duplicates and keeping plan limits under concurrency." },
    },
    {
      title: { ar: "محفظة رسائل لا تخطئ", en: "Messaging billing that adds up" },
      body: { ar: "محفظتان لا يصبح رصيدهما سالباً، وخصم قبل الإرسال واسترجاع تلقائي عند الفشل، ولا رسائل مكررة بعد انهيار مفاجئ.", en: "Two wallets that never go negative, charge-before-send with automatic refunds on failure, and no duplicate sends after a crash." },
    },
    {
      title: { ar: "أمان من الداخل", en: "Secure by design" },
      body: { ar: "scrypt بمعاملات OWASP، وجلسات مخزنة كبصمة، وحدود محاولات في قاعدة البيانات، وCSP وHSTS، ورموز دعوات عشوائية 128 بت، وسجل تدقيق للعمليات الحساسة.", en: "OWASP-grade scrypt, hashed session tokens, DB-backed rate limits, CSP and HSTS, 128-bit invitation tokens and an audit log of sensitive actions." },
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
        ar: "إرسال يدوي مجاني؛ وبوت برقم التاجر مع ضبط وتيرة لحماية الرقم، دون ادعاء تجاوز حماية واتساب أو ضمان عدم الحظر؛ وتكامل رسمي مع WhatsApp Cloud API مكتمل في الكود ومختبر بإشعارات محاكاة، وتفعيله ينتظر موافقة Meta على القالب.",
        en: "Free manual sending; a bot on the merchant's own number with pacing to protect it — no claim to bypass WhatsApp's protections or guarantee against blocking; and an official WhatsApp Cloud API integration that is complete in code and tested with simulated webhooks, with activation awaiting Meta's template approval.",
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
    ar: ["مستخدمة في مناسبات حقيقية، والإرسال الرسمي عبر Meta بانتظار موافقة القالب."],
    en: ["Used for real events; official Meta sending awaits template approval."],
  },
  next: {
    ar: ["تفعيل الإرسال الرسمي، ثم فئات المدعوين والتذكيرات المجدولة وشاشة حضور مباشرة."],
    en: ["Switch on official sending, then guest categories, scheduled reminders and a live attendance screen."],
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
