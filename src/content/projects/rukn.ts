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
  status: "live",
  statusNote: {
    ar: "المنصة تعمل، ومن المتاجر الحقيقية عليها متجر روان للخدمات المكتبية.",
    en: "The platform is live; among the real stores running on it is Rawan Office Services.",
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
  chapter: { bg: "linear-gradient(180deg,#f5f3ef 0%,#e5eae6 100%)", ink: "#123d26", sub: "#4a5d52", dark: false },
  proof: [
    { value: { ar: "10 متاجر", en: "10 stores" }, label: { ar: "خلال الانطلاق الأول", en: "in the first launch" } },
    { value: { ar: "30 يوماً", en: "30 days" }, label: { ar: "تجربة مجانية قبل الاشتراك", en: "free trial before subscribing" } },
    { value: { ar: "متعدد التجار", en: "Multi-merchant" }, label: { ar: "منصة واحدة ببيانات معزولة لكل متجر", en: "one platform, isolated data per store" } },
  ],
  mediaNote: { ar: "لقطات حقيقية من ركن: لوحة حساب تاجر تجريبي، وواجهة متجر روان. البيانات الخاصة مطموسة.", en: "Real screens from RUKN: a demo merchant account's dashboard and Rawan's storefront. Private data is blurred." },
  facts: [
    { label: { ar: "النموذج التجاري", en: "Business model" }, value: { ar: "اشتراكات شهرية وسنوية بباقات متعددة", en: "Monthly & yearly plans, multiple tiers" } },
    { label: { ar: "التجربة المجانية", en: "Free trial" }, value: { ar: "30 يوماً", en: "30 days" } },
    { label: { ar: "السوق الأول", en: "First market" }, value: { ar: "سوريا", en: "Syria" } },
  ],
  context: {
    ar: [
      "تجار كثيرون في سوريا لديهم منتجات وعملاء، لكن أدوات البيع الرقمي مجتزأة أو مكلفة. ركن منصة واحدة يطلق منها التاجر متجره ويديره بتكلفة تناسبه.",
      "ركن هو محاولة لتقديم منصة واحدة متكاملة يستطيع فيها التاجر إطلاق متجره وإدارته من مكان واحد، بتكلفة تناسب حجم عمله.",
    ],
    en: [
      "Many Syrian merchants have products and customers, but online-selling tools are fragmented or costly. RUKN is one platform to launch and run a store at a fair price.",
      "RUKN is an attempt to offer one integrated platform where a merchant can launch and run a store from a single place, at a cost that fits the size of the business.",
    ],
  },
  challenge: {
    ar: [
      "كل تاجر يرى بياناته فقط، وكل موظف يملك صلاحياته فقط، وكل طلب يبقى صحيحاً حتى لو تزامنت العمليات — مع تجربة بسيطة لتاجر يفتح متجره الأول.",
      "وفي الوقت ذاته، يجب أن تبقى التجربة بسيطة بما يكفي لتاجر يفتح متجره الرقمي الأول.",
    ],
    en: [
      "Every merchant sees only their data, every staff member only their permissions, and every order stays correct under concurrency — while staying simple for a first-time merchant.",
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
      "لوحة تحكم تجمع الطلبات والمخزون والدفع، ومحرر بصري بمعاينة حية، وواجهة متجر حقيقية يتسوق منها العملاء.",
    ],
    en: [
      "A dashboard for orders, stock and payments, a visual editor with live preview, and a real storefront customers shop from.",
    ],
  },
  features: [
    { title: { ar: "لوحة تحكم وحالة النشر", en: "Dashboard & publish status" } },
    { title: { ar: "المنتجات والتصنيفات", en: "Products & categories" } },
    { title: { ar: "المخزون ومواقع التخزين", en: "Inventory & storage locations" } },
    { title: { ar: "الطلبات حسب المرحلة", en: "Orders by stage" } },
    { title: { ar: "السلات المتروكة", en: "Abandoned carts" } },
    { title: { ar: "الدفع عبر شام كاش", en: "Payments via Sham Cash" } },
    { title: { ar: "التوصيل والاستلام", en: "Delivery & pickup" } },
    { title: { ar: "المحرر البصري للمتجر", en: "Visual store editor" } },
    { title: { ar: "الهوية والثيمات", en: "Brand & themes" } },
    { title: { ar: "الإحصائيات", en: "Analytics" } },
    { title: { ar: "الموظفون والصلاحيات", en: "Staff & permissions" } },
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
      "وصلت ركن إلى 10 متاجر خلال انطلاقها الأول، منها متجر روان للخدمات المكتبية.",
      "لا تُعرض أرقام مبيعات أو أعداد متاجر لعدم وجود بيانات موثقة للنشر.",
    ],
    en: [
      "RUKN reached 10 stores in its first launch, including Rawan Office Services.",
      "No sales figures or store counts are shown, as no verified data is available for publication.",
    ],
  },
  currentStatus: {
    ar: ["منشورة وتعمل، مع استمرار التطوير."],
    en: ["Live, with development ongoing."],
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

};
