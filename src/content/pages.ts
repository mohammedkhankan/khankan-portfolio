import type { L, LL } from "./types";

/** Page copy. Edit freely — components read everything from here. */

export const home = {
  meta: {
    title: { ar: "محمد خانكان — مؤسس ومهندس برمجيات", en: "Mohammed Khankan — Founder & Software Engineer" } as L,
    description: {
      ar: "مؤسس شركة أفق للحلول التقنية والرقمنة ومنصة رفد التعليمية. يبني منتجات SaaS وأنظمة أعمال متكاملة: ركن، أفق للمطاعم، معازيم، رفد، الطيف.",
      en: "Founder of OFOQ Technical Solutions & Digitalization and RAFD. Builds SaaS products and business systems: RUKN, OFOQ Restaurant OS, MAAZEEM, RAFD and AL TAYF.",
    } as L,
  },
  eyebrow: { ar: "مؤسس أفق ورفد، ومهندس برمجيات يبني منتجات SaaS", en: "Founder of OFOQ and RAFD, software engineer building SaaS products" } as L,
  headline: {
    ar: "أبني منتجات رقمية تحلّ مشكلات أعمال حقيقية — وتبقى تعمل بعد الإطلاق.",
    en: "I build digital products that solve real business problems — and keep working long after launch.",
  } as L,
  intro: {
    ar: "مؤسس شركة أفق للحلول التقنية والرقمنة ومنصة رفد التعليمية. أقود المنتج من أول محادثة حتى التشغيل: فهم المشكلة، وتصميم النظام، وكتابة الكود واختباره، ثم نشره — لمطاعم وتجار ومنظمي مناسبات وطلاب.",
    en: "Founder of OFOQ Technical Solutions & Digitalization and the RAFD learning platform. I lead products from the first conversation to production — understanding the problem, designing the system, building and testing it, then shipping — for restaurants, merchants, event organizers and students.",
  } as L,
  indexTitle: { ar: "فهرس الأعمال", en: "Index of work" } as L,
  selectedTitle: { ar: "أعمال مختارة", en: "Selected work" } as L,
  selectedLead: {
    ar: "منتجات SaaS وأنظمة أعمال ومنصات بُنيت لاستخدام حقيقي، لا للعرض فقط.",
    en: "SaaS products, business systems and platforms built for real use — not just for show.",
  } as L,
  philosophyTitle: { ar: "طريقة التفكير", en: "How I work" } as L,
  philosophyLead: {
    ar: "المنتج الجيد يبدأ قبل الكود بوقت طويل، ويُختبر في الحالات الصعبة لا في المسار المثالي.",
    en: "Good products start long before the code — and are proven on the hard cases, not the happy path.",
  } as L,
  principles: [
    { t: { ar: "فهم المشكلة أولاً", en: "Understand the problem first" }, d: { ar: "قبل أي سطر كود: من يستخدم النظام؟ وما الذي يكلّفه الخطأ؟", en: "Before any code: who uses this, and what does a mistake cost them?" } },
    { t: { ar: "البساطة دون تنازل عن الجودة", en: "Simple, without cutting corners" }, d: { ar: "أبسط حل يعمل بشكل صحيح، لا أبسط حل يعمل أحياناً.", en: "The simplest solution that is correct — not the simplest that sometimes works." } },
    { t: { ar: "السرعة في ظروف التشغيل الواقعية", en: "Fast under real conditions" }, d: { ar: "على الشبكات والأجهزة التي يستخدمها الناس فعلاً.", en: "On the networks and devices people actually use." } },
    { t: { ar: "حماية البيانات والصلاحيات", en: "Protect data and permissions" }, d: { ar: "كل مستخدم يرى ما يخصه، ويفعل ما يُسمح له به فقط.", en: "Everyone sees what's theirs and does only what they're allowed to." } },
    { t: { ar: "لا استعلامات بلا داعٍ", en: "No needless queries" }, d: { ar: "كل رحلة إلى قاعدة البيانات لها ثمن في الأداء والتكلفة.", en: "Every trip to the database costs performance and money." } },
    { t: { ar: "احترام موارد الخادم", en: "Respect server resources" }, d: { ar: "تكلفة تشغيل منخفضة تعني سعراً أعدل للعميل.", en: "Lower running cost means a fairer price for customers." } },
    { t: { ar: "قابلية الصيانة والتوسع", en: "Maintainable and extensible" }, d: { ar: "الكود يُقرأ أكثر مما يُكتب، ويجب أن يتحمل الإضافة.", en: "Code is read more than written, and must welcome change." } },
    { t: { ar: "اختبار الحالات الصعبة", en: "Test the hard cases" }, d: { ar: "الدفع المكرر، والتزامن، وتغيّر الصلاحيات — لا المسار المثالي فقط.", en: "Double payments, concurrency, changing permissions — not just the happy path." } },
    { t: { ar: "التقنية بحسب الحاجة", en: "Technology by need" }, d: { ar: "نختار الأداة لأنها مناسبة، لا لأنها رائجة.", en: "Tools chosen because they fit, not because they trend." } },
  ] as { t: L; d: L }[],
  leadershipTitle: { ar: "القيادة", en: "Leadership" } as L,
  expertiseTitle: { ar: "مجالات العمل", en: "Areas of practice" } as L,
  expertise: [
    { ar: "تطوير منتجات SaaS", en: "SaaS development" },
    { ar: "هندسة Full-Stack", en: "Full-stack engineering" },
    { ar: "أنظمة الأعمال", en: "Business systems" },
    { ar: "تطبيقات الويب", en: "Web applications" },
    { ar: "معمارية قواعد البيانات", en: "Database architecture" },
    { ar: "التحكم بالوصول والصلاحيات", en: "Access control" },
    { ar: "استراتيجية المنتج", en: "Product strategy" },
    { ar: "تجربة وواجهة المستخدم", en: "UI / UX" },
    { ar: "هندسة الأداء", en: "Performance engineering" },
    { ar: "النشر والتشغيل التقني", en: "Technical deployment" },
  ] as L[],
  ctaTitle: { ar: "لديك نظام تحتاج بناءه؟", en: "Have a system that needs building?" } as L,
  ctaBody: {
    ar: "سواء كنت صاحب عمل يبحث عن حل متكامل، أو شريكاً مهتماً بالمنتجات، أو فريقاً تقنياً يريد التعاون — يسعدني الحديث.",
    en: "Whether you run a business that needs an integrated solution, are a potential partner interested in the products, or a technical team looking to collaborate — I'd be glad to talk.",
  } as L,
};

export const leadership = [
  {
    org: { ar: "شركة أفق للحلول التقنية والرقمنة", en: "OFOQ Technical Solutions & Digitalization" } as L,
    role: { ar: "مؤسس ومدير تنفيذي", en: "Founder & CEO" } as L,
    body: {
      ar: "شركة حلول تقنية ورقمنة تبني منتجات SaaS تحل مشكلات متكررة لدى الأعمال الصغيرة والمتوسطة — منتجات يستخدمها عملاء كثيرون، بباقات بأسعار مناسبة، وتستمر في التطور.",
      en: "A technology and digitalization company building SaaS products for problems that small and mid-sized businesses face again and again — products used by many customers, priced in fair tiers, and continuously improved.",
    } as L,
    points: {
      ar: ["رؤية المنتجات واستراتيجيتها", "المعمارية والقرارات الهندسية", "قيادة التطوير والاختبار والنشر", "النموذج التجاري والباقات"],
      en: ["Product vision & strategy", "Architecture & engineering decisions", "Leading development, testing & release", "Business model & pricing"],
    } as LL,
    projects: ["rukn", "ofoq", "maazeem"],
  },
  {
    org: { ar: "رفد التعليمية", en: "RAFD Educational Platform" } as L,
    role: { ar: "مؤسس ومدير تنفيذي", en: "Founder & CEO" } as L,
    body: {
      ar: "منصة تعليم مساند لطلاب الجامعة الافتراضية السورية تجمع خبرة الطلاب في المقررات مع خبرة الكفاءات الأكاديمية.",
      en: "A supplementary learning platform for Syrian Virtual University students, pairing student insight into the courses with academic expertise.",
    } as L,
    points: {
      ar: ["التخطيط والقرارات الاستراتيجية", "التواصل مع الأكاديميين والتعاقدات", "قيادة تطوير الخدمات والتطبيقات", "تصميم وتطوير النظام المالي الداخلي"],
      en: ["Planning & strategic decisions", "Academic relationships & contracts", "Leading service and app development", "Designing & building the internal finance system"],
    } as LL,
    projects: ["rafd", "rafd-finance"],
  },
];

export const about = {
  meta: {
    title: { ar: "نبذة", en: "About" } as L,
    description: {
      ar: "قصة محمد خانكان: من دراسة هندسة المعلوماتية والإقامة في السعودية إلى تأسيس رفد وشركة أفق للحلول التقنية والرقمنة وبناء منتجات SaaS.",
      en: "Mohammed Khankan's story: from informatics engineering and life in Saudi Arabia to founding RAFD and OFOQ Technical Solutions & Digitalization and building SaaS products.",
    } as L,
  },
  title: { ar: "مهندس يفكّر كصاحب عمل، وصاحب عمل يكتب الكود.", en: "An engineer who thinks like a business owner — and a founder who ships code." } as L,
  chapters: [
    {
      k: { ar: "الأساس", en: "Foundation" },
      t: { ar: "الهندسة أولاً", en: "Engineering first" },
      p: {
        ar: ["درس محمد هندسة المعلوماتية في الجامعة الافتراضية السورية، ومن هناك بدأ اهتمامه بالأنظمة لا بالشاشات فقط: كيف تُصمم البيانات، وكيف تُحمى، وكيف تبقى سريعة حين يزداد الاستخدام."],
        en: ["Mohammed studied Informatics Engineering at the Syrian Virtual University, where his interest in systems — not just screens — took shape: how data is modelled, how it's protected, and how it stays fast as usage grows."],
      },
    },
    {
      k: { ar: "الملاحظة", en: "Observation" },
      t: { ar: "من السعودية، نظرة إلى سوريا", en: "From Saudi Arabia, looking at Syria" },
      p: {
        ar: [
          "أتاحت له الإقامة في المملكة العربية السعودية الاطلاع اليومي على تجارب رقمية متقدمة في التجارة الإلكترونية والخدمات وإدارة الأعمال.",
          "ومن هذه التجربة اتضحت له فرص حقيقية لتطوير الخدمات الرقمية في سوريا، وأراد أن يساهم بما يملكه من خبرة تقنية في تقريب هذه الأدوات من المشاريع الصغيرة والمتوسطة، بأدوات عملية وأسعار مناسبة.",
        ],
        en: [
          "Living in Saudi Arabia gave him daily exposure to advanced digital experiences in e-commerce, services and business management.",
          "That experience made clear the real opportunities to develop digital services in Syria, and he wanted to contribute his technical skills to bringing such tools within reach of small and mid-sized businesses — practical tools at fair prices.",
        ],
      },
    },
    {
      k: { ar: "التأسيس", en: "Founding" },
      t: { ar: "رفد", en: "RAFD" },
      p: {
        ar: ["أسس رفد لتحسين تجربة التعليم المساند لطلاب الجامعة الافتراضية السورية — وهي تجربة قيادية بقدر ما هي تقنية: تعاقدات مع أكاديميين، وقرارات استراتيجية، وتطبيقات على أكثر من منصة، ونظام مالي داخلي صممه وطوره بنفسه."],
        en: ["He founded RAFD to improve supplementary learning for Syrian Virtual University students — as much a leadership role as a technical one: agreements with academics, strategic decisions, apps across platforms, and an internal finance system he designed and built himself."],
      },
    },
    {
      k: { ar: "المنتجات", en: "Products" },
      t: { ar: "شركة أفق للحلول التقنية والرقمنة", en: "OFOQ Technical Solutions & Digitalization" },
      p: {
        ar: [
          "ثم أسس شركة أفق للحلول التقنية والرقمنة لبناء منتجات SaaS: ركن للتجارة الإلكترونية، وأفق لإدارة المطاعم، ومعازيم للدعوات وإدارة المناسبات.",
          "الفكرة ليست بيع برنامج لمرة واحدة، بل منتجات تحل مشكلات متكررة، يستخدمها عدة عملاء، بباقات مناسبة، وتستمر في التطور مع الحفاظ على جودة هندسية عالية ونمو تجاري طويل المدى.",
        ],
        en: [
          "He then founded OFOQ Technical Solutions & Digitalization to build SaaS products: RUKN for e-commerce, OFOQ for restaurant operations, and MAAZEEM for invitations and event management.",
          "The idea isn't one-off software sales but products that solve recurring problems, serve many customers in fair tiers, and keep evolving — with high engineering standards and long-term commercial growth.",
        ],
      },
    },
    {
      k: { ar: "المسؤولية", en: "Ownership" },
      t: { ar: "من الفكرة حتى التشغيل", en: "From idea to production" },
      p: {
        ar: ["قاد محمد مشاريعه من الفكرة إلى التخطيط والتصميم والبرمجة والاختبار والنشر، مستعيناً بأدوات الذكاء الاصطناعي ومساهمات تقنية عند الحاجة. دوره ليس دور مطور واجهات، بل دور من يملك المنتج كاملاً ويتحمل قراراته."],
        en: ["Mohammed has led his projects from idea through planning, design, development, testing and deployment — using AI tools and technical contributors where it made sense. His role isn't that of a front-end developer, but of someone who owns the whole product and its decisions."],
      },
    },
    {
      k: { ar: "الاستمرار", en: "Continuing" },
      t: { ar: "التعلم لا يتوقف", en: "Always learning" },
      p: {
        ar: ["الأمان والأداء ليسا مرحلة في نهاية المشروع، بل طريقة تفكير من بدايته. ومع كل منتج جديد تتسع المعرفة وتتحسن الأدوات — والتعلم المستمر جزء من العمل نفسه."],
        en: ["Security and performance aren't a phase at the end of a project but a way of thinking from the start. Every new product widens the knowledge and sharpens the tools — continuous learning is part of the work itself."],
      },
    },
  ] as { k: L; t: L; p: LL }[],
};

export const experience = {
  meta: {
    title: { ar: "القيادة والخبرة", en: "Leadership & Experience" } as L,
    description: {
      ar: "أدوار محمد خانكان القيادية والتقنية: مؤسس ومدير تنفيذي لشركة أفق للحلول التقنية والرقمنة ورفد، ومهندس برمجيات يقود منتجات SaaS.",
      en: "Mohammed Khankan's leadership and engineering roles: Founder & CEO of OFOQ Technical Solutions & Digitalization and RAFD, and a software engineer leading SaaS products.",
    } as L,
  },
  title: { ar: "القيادة والخبرة", en: "Leadership & experience" } as L,
  lead: {
    ar: "دوران قياديان، وممارسة هندسية واحدة تجمعهما: تحويل الاحتياجات الحقيقية إلى منتجات تعمل.",
    en: "Two leadership roles, one engineering practice connecting them: turning real needs into products that work.",
  } as L,
  practiceTitle: { ar: "الممارسة الهندسية", en: "Engineering practice" } as L,
  practice: {
    ar: [
      "تصميم أنظمة متعددة المستأجرين مع عزل البيانات والصلاحيات.",
      "نمذجة البيانات للعمليات الحساسة: الطلبات، المدفوعات، المخزون، الحجوزات.",
      "معالجة التزامن والحالات الحدّية كتكرار الدفع وتعارض الحجوزات.",
      "بناء واجهات مخصصة لأدوار تشغيلية مختلفة.",
      "النشر بالحاويات وتشغيل منخفض التكلفة.",
      "تحسين الأداء والصور وأساسيات SEO للمواقع.",
    ],
    en: [
      "Designing multi-tenant systems with data isolation and permissions.",
      "Data modelling for sensitive operations: orders, payments, stock, reservations.",
      "Handling concurrency and edge cases such as duplicate payments and conflicting reservations.",
      "Building role-specific interfaces for different operational staff.",
      "Container-based deployment and low-cost operation.",
      "Performance, image optimization and SEO fundamentals for websites.",
    ],
  } as LL,
  stackTitle: { ar: "تقنيات مستخدمة في المشاريع", en: "Technologies used across projects" } as L,
  stackNote: {
    ar: "مجمّعة من التقنيات الموثقة في المشاريع المعروضة.",
    en: "Collected from the technologies documented in the projects shown.",
  } as L,
};

export const contact = {
  meta: {
    title: { ar: "تواصل", en: "Contact" } as L,
    description: {
      ar: "تواصل مع محمد خانكان عبر واتساب أو LinkedIn أو GitHub.",
      en: "Get in touch with Mohammed Khankan via WhatsApp, LinkedIn or GitHub.",
    } as L,
  },
  title: { ar: "لنتحدث عن مشروعك.", en: "Let's talk about your project." } as L,
  lead: {
    ar: "أسرع طريقة للتواصل هي واتساب. للتعاون المهني أو الشراكات، يمكن التواصل أيضاً عبر LinkedIn.",
    en: "WhatsApp is the fastest way to reach me. For professional collaboration or partnerships, LinkedIn works too.",
  } as L,
  audiences: [
    { t: { ar: "أصحاب الأعمال", en: "Business owners" }, d: { ar: "نظام متكامل لعملك، أو اشتراك في أحد المنتجات.", en: "An integrated system for your business, or a subscription to one of the products." } },
    { t: { ar: "الشركاء والمستثمرون", en: "Partners & investors" }, d: { ar: "حديث حول المنتجات والأسواق واستراتيجية النمو.", en: "A conversation about the products, markets and growth strategy." } },
    { t: { ar: "الفرق التقنية", en: "Technical teams" }, d: { ar: "تعاون هندسي أو مراجعة معمارية.", en: "Engineering collaboration or an architecture discussion." } },
  ] as { t: L; d: L }[],
  channels: {
    whatsapp: { ar: "رسالة مباشرة", en: "Direct message" } as L,
    linkedin: { ar: "التواصل المهني", en: "Professional network" } as L,
    github: { ar: "الكود والمستودعات العامة", en: "Code & public repositories" } as L,
  },
};

export const privacy = {
  meta: {
    title: { ar: "الخصوصية", en: "Privacy" } as L,
    description: { ar: "كيف يتعامل هذا الموقع مع بياناتك.", en: "How this site handles your data." } as L,
  },
  title: { ar: "الخصوصية", en: "Privacy" } as L,
  body: {
    ar: [
      "هذا موقع تعريفي ثابت. لا يحتوي على نماذج إدخال، ولا يستخدم أدوات تحليلات أو تتبع، ولا يضع ملفات تعريف ارتباط (Cookies).",
      "يحفظ المتصفح محلياً (localStorage) اختيارك للغة والوضع الداكن أو الفاتح فقط، ولا تُرسل هذه المعلومة إلى أي خادم.",
      "عند الضغط على روابط واتساب أو LinkedIn أو GitHub تنتقل إلى تلك المنصات، وتخضع لسياسات الخصوصية الخاصة بها.",
      "الخطوط والصور مستضافة ضمن الموقع نفسه، دون طلبات إلى خدمات خارجية.",
    ],
    en: [
      "This is a static portfolio site. It has no forms, uses no analytics or tracking tools, and sets no cookies.",
      "Your browser stores only your language and dark/light theme choice locally (localStorage); this is never sent to any server.",
      "Clicking WhatsApp, LinkedIn or GitHub links takes you to those platforms, which have their own privacy policies.",
      "Fonts and images are hosted on this site itself, with no requests to third-party services.",
    ],
  } as LL,
};
