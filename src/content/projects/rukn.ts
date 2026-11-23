import type { Project } from "../types";

export const rukn: Project = {
  slug: "rukn",
  order: 1,
  featured: true,
  variant: "product",
  category: "saas",
  name: { ar: "ركن", en: "RUKN" },
  tagline: {
    ar: "منصة SaaS لبناء المتاجر الإلكترونية وإدارتها",
    en: "A SaaS platform for building and running online stores",
  },
  summary: {
    ar: "منصة متعددة التجار تسهّل على الأعمال الصغيرة والمتوسطة دخول التجارة الرقمية، بتركيز أساسي على السوق السوري.",
    en: "A multi-merchant commerce platform that lowers the barrier to selling online for small and mid-sized businesses, focused first on the Syrian market.",
  },
  kind: { ar: "منصة SaaS متعددة المستأجرين", en: "Multi-tenant SaaS platform" },
  role: {
    ar: "المؤسس — قيادة المنتج والمعمارية والتطوير",
    en: "Founder — product, architecture & engineering lead",
  },
  status: "in-development",
  statusNote: {
    ar: "المنصة في مرحلة التطوير والتجهيز، والصور الحالية مؤقتة.",
    en: "The platform is in active development; current visuals are provisional.",
  },
  stack: [
    { name: "ASP.NET Core / .NET 10" },
    { name: "React" },
    { name: "TypeScript" },
    { name: "PostgreSQL" },
    { name: "Entity Framework Core" },
    { name: "Docker" },
    { name: "Cloudflare", note: { ar: "طبقة الحافة", en: "edge layer" } },
    { name: "Bunny", note: { ar: "تخزين وتوصيل الوسائط", en: "media storage & delivery" } },
  ],
  accent: { dark: "#86b98f", light: "#2f6b3b" },
  chapter: { bg: "linear-gradient(160deg,#eef3ec 0%,#d3e2d6 60%,#b3c6b8 100%)", ink: "#123d26", sub: "#3f5c4a", dark: false },
  proof: [
    { value: { ar: "متعدد التجار", en: "Multi-merchant" }, label: { ar: "منصة واحدة تخدم متاجر كثيرة ببيانات معزولة", en: "One platform, many stores, isolated data" } },
    { value: { ar: "30 يوماً", en: "30 days" }, label: { ar: "تجربة مجانية قبل الاشتراك", en: "Free trial before subscribing" } },
    { value: { ar: ".NET 10", en: ".NET 10" }, label: { ar: "نواة ASP.NET Core مع PostgreSQL", en: "ASP.NET Core core on PostgreSQL" } },
  ],
  mediaNote: { ar: "لقطات من المنصة. حزمة صور مؤقتة وستُحدَّث.", en: "Screens from the platform. A provisional image set, to be updated." },
  facts: [
    { label: { ar: "النموذج التجاري", en: "Business model" }, value: { ar: "اشتراكات شهرية وسنوية بباقات متعددة", en: "Monthly & yearly plans, multiple tiers" } },
    { label: { ar: "التجربة المجانية", en: "Free trial" }, value: { ar: "30 يوماً", en: "30 days" } },
    { label: { ar: "السوق الأول", en: "First market" }, value: { ar: "سوريا", en: "Syria" } },
  ],
  context: {
    ar: [
      "خلال الإقامة في السعودية والاحتكاك اليومي بتجارب تسوق رقمية ناضجة، اتضحت فرصة حقيقية: كثير من التجار والأعمال الصغيرة في سوريا يملكون منتجات وعملاء، لكن الأدوات المتاحة لبيعها رقمياً إما مجتزأة أو مكلفة أو صعبة التشغيل.",
      "ركن هو محاولة لتقديم منصة واحدة متكاملة يستطيع فيها التاجر إطلاق متجره وإدارته من مكان واحد، بتكلفة تناسب حجم عمله.",
    ],
    en: [
      "Living in Saudi Arabia and using mature digital commerce every day made an opportunity obvious: many merchants and small businesses in Syria already have products and customers, but the tools for selling online are fragmented, expensive or hard to operate.",
      "RUKN is an attempt to offer one integrated platform where a merchant can launch and run a store from a single place, at a cost that fits the size of the business.",
    ],
  },
  challenge: {
    ar: [
      "منصة التجارة متعددة التجار لا تُقاس بعدد الشاشات، بل بمدى صلابة ما تحتها: كل تاجر يجب أن يرى بياناته فقط، وكل موظف يجب أن يملك ما يحتاجه من صلاحيات ولا شيء أكثر، وكل طلب يجب أن يبقى صحيحاً حتى عندما تتزامن العمليات على المخزون نفسه.",
      "وفي الوقت ذاته، يجب أن تبقى التجربة بسيطة بما يكفي لتاجر يفتح متجره الرقمي الأول.",
    ],
    en: [
      "A multi-merchant commerce platform is judged less by its screens than by what sits beneath them: every merchant must see only their own data, every staff member must hold exactly the permissions they need, and every order must stay correct even when operations hit the same stock at the same moment.",
      "At the same time, the experience has to stay simple enough for a merchant opening their first online store.",
    ],
  },
  strategy: {
    ar: [
      "بناء منتج واحد يخدم عدداً كبيراً من التجار بدل تطوير متجر مخصص لكل عميل؛ هذا ما يجعل السعر في متناول الأعمال الصغيرة ويجعل كل تحسين يصل للجميع.",
      "باقات شهرية وسنوية متدرجة، مع تجربة مجانية لمدة 30 يوماً تسمح للتاجر بتشغيل متجره فعلياً قبل الالتزام.",
      "البدء بالأساسات التي لا تُعاد كتابتها بسهولة لاحقاً — عزل البيانات، الصلاحيات، سلامة العمليات — قبل التوسع في الواجهات.",
    ],
    en: [
      "Build one product that serves many merchants instead of a custom store per client — that is what keeps pricing within reach of small businesses and lets every improvement reach everyone.",
      "Tiered monthly and yearly plans, with a 30-day free trial so merchants can actually run their store before committing.",
      "Start with the foundations that are hardest to retrofit later — data isolation, permissions, transactional safety — before widening the surface.",
    ],
  },
  solution: {
    ar: [
      "لوحة تحكم للتاجر تجمع إدارة المتجر والكتالوج والعمليات اليومية، وواجهة متجر يتصفحها العميل النهائي على الجوال والكمبيوتر، ومحرر لتخصيص مظهر المتجر دون كتابة كود.",
    ],
    en: [
      "A merchant dashboard that brings store management, catalogue and daily operations together; a customer-facing storefront for mobile and desktop; and a store editor for customizing the look without writing code.",
    ],
  },
  features: [
    { title: { ar: "إدارة المتاجر", en: "Store management" } },
    { title: { ar: "المنتجات والتصنيفات", en: "Products & categories" } },
    { title: { ar: "المخزون", en: "Inventory" } },
    { title: { ar: "الطلبات", en: "Orders" } },
    { title: { ar: "العملاء", en: "Customers" } },
    { title: { ar: "الدفع والشحن", en: "Payments & shipping" } },
    { title: { ar: "المظهر ومحرر المتجر", en: "Themes & store editor" } },
    { title: { ar: "التقارير والإحصائيات", en: "Reports & analytics" } },
    { title: { ar: "الموظفون وصلاحياتهم", en: "Staff & permissions" } },
    { title: { ar: "صلاحيات المنصة", en: "Platform administration" } },
    { title: { ar: "الاشتراكات والباقات", en: "Subscriptions & plans" } },
  ],
  engineering: {
    ar: [
      "الخادم مبني على ASP.NET Core مع Entity Framework Core فوق PostgreSQL، والواجهات مبنية بـ React وTypeScript، والتشغيل عبر حاويات Docker.",
      "الموضوع الهندسي الأهم في ركن هو تصميم النظام متعدد التجار: كيف يُحدَّد المتجر في كل طلب، وكيف تُقيَّد كل عملية قراءة أو كتابة بحدود هذا المتجر، وكيف تبقى العمليات المالية والمخزنية صحيحة عند التزامن.",
    ],
    en: [
      "The backend is built on ASP.NET Core with Entity Framework Core over PostgreSQL; the interfaces use React and TypeScript; everything runs in Docker containers.",
      "The central engineering topic in RUKN is the multi-merchant design: how each request is resolved to a store, how every read and write is confined to that store's boundary, and how money and stock stay correct under concurrency.",
    ],
  },
  engineeringTopics: [
    {
      title: { ar: "عزل بيانات المستأجرين", en: "Tenant isolation" },
      body: {
        ar: "كل بيانات المتجر مرتبطة بمعرّف المستأجر، ويُفرض هذا القيد في طبقة الوصول إلى البيانات بدلاً من الاعتماد على تذكّره في كل شاشة.",
        en: "Store data is keyed to the tenant, and that constraint is enforced in the data-access layer rather than relying on each screen to remember it.",
      },
    },
    {
      title: { ar: "الصلاحيات", en: "Authorization" },
      body: {
        ar: "فصل بين صلاحيات إدارة المنصة وصلاحيات موظفي المتجر، مع التحقق من الصلاحية على الخادم في كل عملية.",
        en: "Platform-admin permissions are separated from store-staff permissions, and every operation is authorized on the server.",
      },
    },
    {
      title: { ar: "سلامة المعاملات", en: "Transaction safety" },
      body: {
        ar: "العمليات المترابطة — كإنشاء الطلب وحجز المخزون — تُنفَّذ كوحدة واحدة إما أن تكتمل كلها أو لا يُطبَّق منها شيء.",
        en: "Linked operations — such as creating an order and reserving stock — run as one unit that either completes fully or not at all.",
      },
    },
    {
      title: { ar: "العمليات المتزامنة", en: "Concurrent operations" },
      body: {
        ar: "التعامل مع احتمال وصول طلبين على الكمية نفسها في اللحظة نفسها، بحيث لا يُباع ما لم يعد متوفراً.",
        en: "Handling two orders reaching for the same quantity at the same moment, so stock that no longer exists is never sold.",
      },
    },
    {
      title: { ar: "سلامة البيانات", en: "Data integrity" },
      body: {
        ar: "قيود على مستوى قاعدة البيانات تحمي العلاقات والحالات من الوصول إلى وضع غير منطقي.",
        en: "Database-level constraints keep relationships and states from reaching an invalid combination.",
      },
    },
  ],
  decisions: [
    {
      title: { ar: "منصة مشتركة بدل نسخ مخصصة", en: "One shared platform, not per-client copies" },
      body: {
        ar: "قاعدة كود واحدة تخدم كل التجار تجعل الصيانة والتحديثات الأمنية تصل للجميع دفعة واحدة، وتبقي التكلفة منخفضة.",
        en: "A single codebase serving every merchant means maintenance and security fixes reach everyone at once, and keeps cost low.",
      },
    },
    {
      title: { ar: "‏.NET وPostgreSQL للنواة", en: ".NET and PostgreSQL for the core" },
      body: {
        ar: "اختيار بيئة ناضجة ذات أنواع صارمة ودعم قوي للمعاملات، لأن طبيعة المنتج تتعلق بالمال والمخزون.",
        en: "A mature, strongly typed stack with solid transactional support — because the product deals in money and stock.",
      },
    },
    {
      title: { ar: "تجربة مجانية طويلة", en: "A long free trial" },
      body: {
        ar: "ثلاثون يوماً تكفي لتشغيل المتجر واستقبال طلبات حقيقية، وهي أقوى من أي عرض تسويقي.",
        en: "Thirty days is enough to run the store and take real orders — more convincing than any sales pitch.",
      },
    },
  ],
  results: {
    ar: [
      "لا توجد بعد أرقام تشغيلية منشورة للمنصة، ولن تُعرض أي مؤشرات قبل قياسها فعلياً.",
    ],
    en: [
      "There are no published operating metrics for the platform yet, and none will be shown here before they are actually measured.",
    ],
  },
  currentStatus: {
    ar: ["قيد التطوير والتجهيز للإطلاق. الصور المعروضة مؤقتة وستُستبدل بحزمة مصورة جديدة."],
    en: ["In development and preparing for launch. Current visuals are provisional and will be replaced with a new screenshot set."],
  },
  next: {
    ar: ["استكمال تجهيز الإطلاق، ثم توسيع خيارات الدفع والشحن المحلية ومحرر المتجر بناءً على ملاحظات التجار الأوائل."],
    en: ["Complete launch readiness, then widen local payment and shipping options and the store editor based on early merchant feedback."],
  },
  diagrams: ["rukn-architecture", "rukn-isolation", "rukn-order-flow"],
  shots: [
    { key: "dashboard", label: { ar: "لوحة التحكم", en: "Dashboard" } },
    { key: "products", label: { ar: "المنتجات", en: "Products" } },
    { key: "inventory", label: { ar: "المخزون", en: "Inventory" } },
    { key: "orders", label: { ar: "الطلبات", en: "Orders" } },
    { key: "editor", label: { ar: "محرر المتجر", en: "Store editor" } },
    { key: "analytics", label: { ar: "الإحصائيات", en: "Analytics" } },
    { key: "storefront-mobile", label: { ar: "واجهة المتجر على الجوال", en: "Mobile storefront" } },
  ],
  pendingMedia: {
    ar: "حزمة صور ركن (RUKN_Portfolio_Enhanced) لم تُرفق بعد. بمجرد إضافتها تظهر هنا تلقائياً.",
    en: "The RUKN image set (RUKN_Portfolio_Enhanced) hasn't been added yet. Once it is, it appears here automatically.",
  },
};
