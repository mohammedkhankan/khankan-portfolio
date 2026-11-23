import type { DiagramKey, L, Locale } from "@/content/types";
import { ui } from "@/content/site";

/* ------------------------------------------------------------------
   Engineering figures, drawn in HTML/CSS so they are bilingual,
   responsive, selectable and screen-reader friendly. Conceptual —
   no infrastructure secrets, hostnames or admin paths.
   ------------------------------------------------------------------ */

const figLabel = ui.labels.figure;

type N = { label: L; sub?: L; tone?: "project" | "muted" | "pending" };
const n = (ar: string, en: string, sub?: [string, string], tone?: N["tone"]): N => ({
  label: { ar, en },
  sub: sub ? { ar: sub[0], en: sub[1] } : undefined,
  tone,
});

function Node({ node, locale, className = "" }: { node: N; locale: Locale; className?: string }) {
  const tone =
    node.tone === "project"
      ? "border-transparent bg-project/15 ring-1 ring-project/50"
      : node.tone === "pending"
        ? "border-dashed border-line-strong"
        : node.tone === "muted"
          ? "border-line bg-transparent text-muted"
          : "border-line bg-bg";
  return (
    <div className={`rounded-[var(--radius-sm)] border px-3 py-2.5 ${tone} ${className}`}>
      <div className="text-sm font-medium leading-snug">{node.label[locale]}</div>
      {node.sub && <div className="mt-0.5 text-xs leading-snug text-muted">{node.sub[locale]}</div>}
    </div>
  );
}

function Arrow({ vertical = false }: { vertical?: boolean }) {
  return vertical ? (
    <div className="mx-auto h-5 w-px bg-line-strong" aria-hidden />
  ) : (
    <div className="flex items-center justify-center text-muted" aria-hidden>
      <svg viewBox="0 0 24 12" className="h-3 w-6 rtl:-scale-x-100"><path d="M0 6h20M15 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.25" /></svg>
    </div>
  );
}

/** Linear process: horizontal on desktop, vertical on mobile. */
function Flow({ steps, locale }: { steps: N[]; locale: Locale }) {
  return (
    <ol className="flex flex-col gap-0 lg:flex-row lg:items-stretch lg:gap-0">
      {steps.map((s, i) => (
        <li key={i} className="flex flex-col lg:flex-1 lg:flex-row lg:items-center">
          <div className="flex items-start gap-3 lg:block lg:w-full">
            <span className="mt-2.5 text-xs tabular-nums text-muted lg:mb-2 lg:mt-0 lg:block" dir="ltr">{String(i + 1).padStart(2, "0")}</span>
            <Node node={s} locale={locale} className="flex-1" />
          </div>
          {i < steps.length - 1 && (
            <>
              <div className="ms-[0.85rem] lg:hidden"><Arrow vertical /></div>
              <div className="hidden px-1.5 pt-5 lg:block"><Arrow /></div>
            </>
          )}
        </li>
      ))}
    </ol>
  );
}

// Literal class names so Tailwind can detect them.
const COLS: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-2 sm:grid-cols-3",
  4: "grid-cols-2 lg:grid-cols-4",
  5: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
};

/** Stacked architecture layers. */
function Layers({ rows, locale }: { rows: { name: L; items: N[] }[]; locale: Locale }) {
  return (
    <div className="grid gap-2">
      {rows.map((r, i) => (
        <div key={i}>
          <div className="grid gap-3 md:grid-cols-[9rem_1fr] md:items-center">
            <div className="text-sm text-muted">{r.name[locale]}</div>
            <div className={`grid gap-2 ${COLS[Math.min(r.items.length, 5)]}`}>
              {r.items.map((it, j) => <Node key={j} node={it} locale={locale} />)}
            </div>
          </div>
          {i < rows.length - 1 && <div className="md:ms-[9.75rem]"><Arrow vertical /></div>}
        </div>
      ))}
    </div>
  );
}

function Fig({ n: num, title, caption, locale, children }: { n: number; title: L; caption?: L; locale: Locale; children: React.ReactNode }) {
  return (
    <figure className="overflow-hidden rounded-[var(--radius-lg)] bg-surface ring-1 ring-line">
      <div className="flex items-baseline justify-between gap-4 border-b border-line px-4 py-3 md:px-6">
        <span className="text-sm font-medium">{title[locale]}</span>
        <span className="text-xs text-muted">{figLabel[locale]} {num}</span>
      </div>
      <div className="p-4 md:p-8">{children}</div>
      {caption && <figcaption className="border-t border-line px-4 py-3 text-sm text-muted md:px-6">{caption[locale]}</figcaption>}
    </figure>
  );
}

/* --------------------------- Figures --------------------------- */

const defs: Record<DiagramKey, { title: L; caption?: L; body: (l: Locale) => React.ReactNode }> = {
  "rukn-architecture": {
    title: { ar: "معمارية SaaS متعددة التجار — نظرة مفاهيمية", en: "Multi-tenant SaaS architecture — conceptual" },
    caption: { ar: "تبسيط مفاهيمي لطبقات المنصة كما وردت في التقرير التقني.", en: "A conceptual simplification of the platform layers described in the technical report." },
    body: (l) => (
      <Layers
        locale={l}
        rows={[
          { name: { ar: "الواجهات", en: "Clients" }, items: [n("لوحة التاجر", "Merchant dashboard", ["React · TS", "React · TS"]), n("واجهة المتجر", "Storefront", ["React · TS", "React · TS"]), n("إدارة المنصة", "Platform admin")] },
          { name: { ar: "الحافة والوسائط", en: "Edge & media" }, items: [n("Cloudflare", "Cloudflare", undefined, "muted"), n("Bunny", "Bunny", ["الوسائط", "media"], "muted")] },
          { name: { ar: "التطبيق", en: "Application" }, items: [n("تحديد المتجر", "Tenant resolution", undefined, "project"), n("التحقق من الصلاحيات", "Authorization", undefined, "project"), n("منطق الأعمال", "Domain services", ["ASP.NET Core", "ASP.NET Core"])] },
          { name: { ar: "البيانات", en: "Data" }, items: [n("استعلامات مقيّدة بالمتجر", "Tenant-scoped queries", ["EF Core", "EF Core"]), n("PostgreSQL", "PostgreSQL")] },
        ]}
      />
    ),
  },
  "rukn-isolation": {
    title: { ar: "مسار الطلب وعزل المستأجر", en: "Request path & tenant isolation" },
    caption: { ar: "كل طلب يُربط بمتجر واحد قبل أن يصل إلى أي بيانات.", en: "Every request is bound to exactly one store before it reaches any data." },
    body: (l) => (
      <Flow
        locale={l}
        steps={[
          n("طلب وارد", "Incoming request"),
          n("تحديد المتجر", "Resolve tenant", ["مستأجر واحد لكل طلب", "one tenant per request"], "project"),
          n("صلاحية المستخدم في هذا المتجر", "Check role in this store", undefined, "project"),
          n("استعلام مقيّد بالمتجر", "Tenant-scoped query"),
          n("استجابة", "Response"),
        ]}
      />
    ),
  },
  "rukn-order-flow": {
    title: { ar: "تدفق الطلب والدفع", en: "Order & payment flow" },
    body: (l) => (
      <Flow
        locale={l}
        steps={[
          n("السلة", "Cart"),
          n("إعادة التحقق من السعر والمخزون", "Re-validate price & stock"),
          n("إنشاء الطلب + حجز المخزون", "Create order + reserve stock", ["معاملة واحدة", "one transaction"], "project"),
          n("الدفع", "Payment"),
          n("الشحن والتسليم", "Shipping & fulfilment"),
        ]}
      />
    ),
  },
  "ofoq-state": {
    title: { ar: "فصل الحالات: الطاولة ≠ الزيارة ≠ الحساب", en: "State separation: table ≠ visit ≠ bill" },
    caption: {
      ar: "الطاولة كيان دائم. كل زيارة جلسة مستقلة لها طلباتها وحسابها، فتُحرَّر الطاولة دون أن يضيع الحساب السابق.",
      en: "The table is permanent. Each visit is its own session with its own orders and bill, so the table can be freed without losing the previous bill.",
    },
    body: (l) => (
      <div className="grid gap-6 lg:grid-cols-[1fr_auto_1.2fr_auto_1.2fr] lg:items-center">
        <div className="grid gap-2">
          <Node locale={l} node={n("الطاولة", "Table", ["مكان دائم", "a place — persistent"])} />
        </div>
        <div className="hidden lg:block"><Arrow /></div>
        <div className="grid gap-2">
          <Node locale={l} node={n("جلسة الطاولة #1", "Table session #1", ["مغلقة — محفوظة", "closed — preserved"], "muted")} />
          <Node locale={l} node={n("جلسة الطاولة #2", "Table session #2", ["الزيارة الحالية", "current visit"], "project")} />
        </div>
        <div className="hidden lg:block"><Arrow /></div>
        <div className="grid grid-cols-2 gap-2">
          <Node locale={l} node={n("الطلب", "Order")} />
          <Node locale={l} node={n("تذكرة التحضير", "Prep ticket", ["لكل محطة", "per station"])} />
          <Node locale={l} node={n("الحساب", "Bill")} />
          <Node locale={l} node={n("الدفعة", "Payment", ["مرة واحدة فقط", "recorded once"])} />
        </div>
      </div>
    ),
  },
  "ofoq-flow": {
    title: { ar: "التدفق التشغيلي للمطعم", en: "Restaurant operational flow" },
    body: (l) => (
      <Flow
        locale={l}
        steps={[
          n("حجز · QR · زبون مباشر", "Reservation · QR · walk-in"),
          n("فتح جلسة", "Open session", undefined, "project"),
          n("النادل يسجّل الطلب", "Waiter takes order", ["الأسعار تُعاد قراءتها", "prices re-read"]),
          n("التذاكر إلى المحطات", "Tickets to stations"),
          n("الحساب والدفع", "Bill & payment"),
          n("إغلاق الجلسة وتحرير الطاولة", "Close session, free table", undefined, "project"),
        ]}
      />
    ),
  },
  "ofoq-architecture": {
    title: { ar: "معمارية التطبيق", en: "Application architecture" },
    body: (l) => (
      <Layers
        locale={l}
        rows={[
          { name: { ar: "الأدوار", en: "Roles" }, items: [n("النادل", "Waiter"), n("الكاشير", "Cashier"), n("محطات التحضير", "Prep stations"), n("الإدارة", "Management"), n("منيو الضيف (QR)", "Guest menu (QR)")] },
          { name: { ar: "التطبيق", en: "Application" }, items: [n("Next.js 16 · React 19", "Next.js 16 · React 19", ["TypeScript", "TypeScript"], "project"), n("Supabase Auth", "Supabase Auth", ["المصادقة", "authentication"])] },
          { name: { ar: "البيانات", en: "Data" }, items: [n("Prisma 7", "Prisma 7"), n("PostgreSQL", "PostgreSQL")] },
          { name: { ar: "التشغيل", en: "Runtime" }, items: [n("Docker", "Docker"), n("Bunny", "Bunny", ["الوسائط", "media"], "muted")] },
        ]}
      />
    ),
  },
  "maazeem-workflow": {
    title: { ar: "مسار الدعوة", en: "Invitation workflow" },
    body: (l) => (
      <div className="grid gap-8">
        <Flow
          locale={l}
          steps={[
            n("إنشاء المناسبة", "Create event"),
            n("تصميم الدعوة", "Design invitation", ["قالب أو تصميم مرفوع", "template or upload"]),
            n("المدعوون", "Guests", ["يدوي أو Excel", "manual or Excel"]),
            n("الإرسال", "Send", undefined, "project"),
            n("القبول / الاعتذار", "Accept / decline"),
            n("تسجيل الحضور", "Check-in"),
          ]}
        />
        <div className="grid gap-2 border-t border-line pt-6 sm:grid-cols-3">
          <Node locale={l} node={n("إرسال يدوي", "Manual sending")} />
          <Node locale={l} node={n("إرسال بمساعدة بوت", "Bot-assisted sending", ["أداة مساعدة — بلا ضمانات", "an aid — no guarantees"])} />
          <Node locale={l} node={n("تكامل Meta الرسمي", "Official Meta integration", ["قيد العمل", "in progress"], "pending")} />
        </div>
      </div>
    ),
  },
  "maazeem-checkin": {
    title: { ar: "تسجيل الحضور عبر QR", en: "Guest QR check-in" },
    body: (l) => (
      <Flow
        locale={l}
        steps={[
          n("المدعو يستلم الدعوة", "Guest receives invitation", ["مع QR شخصي أو عام", "personal or shared QR"]),
          n("الوصول إلى القاعة", "Arrives at venue"),
          n("فريق الاستقبال يفتح رابط المسح", "Reception opens scan link", undefined, "project"),
          n("مسح الرمز وتسجيل الحضور", "Scan & record attendance"),
          n("صاحب المناسبة يتابع عبر رابطه", "Host follows via own link"),
        ]}
      />
    ),
  },
  "maazeem-architecture": {
    title: { ar: "معمارية متعددة العملاء", en: "Multi-tenant architecture" },
    body: (l) => (
      <Layers
        locale={l}
        rows={[
          { name: { ar: "المستخدمون", en: "Users" }, items: [n("مقدّم الخدمة", "Service provider", ["مستأجر", "tenant"], "project"), n("صاحب المناسبة", "Host", ["رابط متابعة", "follow-up link"]), n("فريق الاستقبال", "Reception", ["رابط مسح", "scan link"])] },
          { name: { ar: "التطبيق", en: "Application" }, items: [n("Next.js 16 · React 19", "Next.js 16 · React 19", ["TypeScript", "TypeScript"]), n("معالجة الصور", "Image processing", ["Sharp", "Sharp"])] },
          { name: { ar: "البيانات", en: "Data" }, items: [n("Drizzle ORM", "Drizzle ORM"), n("PostgreSQL", "PostgreSQL")] },
          { name: { ar: "الإرسال", en: "Messaging" }, items: [n("WhatsApp Cloud API", "WhatsApp Cloud API", ["قيد العمل", "in progress"], "pending")] },
        ]}
      />
    ),
  },
  "rafd-ecosystem": {
    title: { ar: "منظومة رفد", en: "The RAFD ecosystem" },
    caption: { ar: "تفاصيل البنية التقنية تُضاف بعد وصول التقرير.", en: "Technical architecture details will be added once the report arrives." },
    body: (l) => (
      <Layers
        locale={l}
        rows={[
          { name: { ar: "الخبرة", en: "Expertise" }, items: [n("كفاءات أكاديمية", "Academics"), n("خبرة الطلاب بالمقررات", "Student course insight")] },
          { name: { ar: "المحتوى", en: "Content" }, items: [n("جلسات وشروحات منظمة", "Structured sessions", undefined, "project")] },
          { name: { ar: "التطبيقات", en: "Apps" }, items: [n("سطح المكتب", "Desktop"), n("أندرويد", "Android"), n("iOS", "iOS", ["قيد التطوير", "in development"], "pending")] },
          { name: { ar: "الوصول", en: "Access" }, items: [n("تقييد الأجهزة والجلسات", "Device & session limits"), n("حماية المحتوى", "Content protection", ["معقولة لا مطلقة", "reasonable, not absolute"])] },
        ]}
      />
    ),
  },
  "rafd-finance-flow": {
    title: { ar: "المنطق المالي", en: "Financial logic" },
    caption: { ar: "مخطط مفاهيمي فقط — بلا أي أرقام حقيقية.", en: "Conceptual only — no real figures." },
    body: (l) => (
      <Flow
        locale={l}
        steps={[
          n("تسجيل الطالب وحالته", "Student registration & state"),
          n("الدفعة والتفعيل", "Payment & activation", ["USD · SAR · SYP", "USD · SAR · SYP"]),
          n("إيرادات المنصة", "Platform revenue"),
          n("خصم المستحقات والمصاريف", "Less payouts & expenses"),
          n("توزيع حصص الشركاء", "Partner shares", undefined, "project"),
          n("التقارير", "Reports"),
        ]}
      />
    ),
  },
  "altayf-journey": {
    title: { ar: "رحلة التنفيذ", en: "Delivery journey" },
    body: (l) => (
      <ol className="grid grid-cols-1 ruled sm:grid-cols-3">
        {[
          n("الاجتماع مع العميل", "Client meeting"),
          n("فهم الاحتياجات", "Understanding needs"),
          n("تحديد الرؤية", "Defining the vision"),
          n("التوجه التصميمي", "Design direction"),
          n("تحسين الصور", "Image optimization"),
          n("بناء الموقع", "Building the site"),
          n("إعداد المحتوى", "Content"),
          n("الأداء وSEO", "Performance & SEO"),
          n("النشر", "Deployment", undefined, "project"),
        ].map((s, i) => (
          <li key={i} className="flex items-baseline gap-3 bg-bg px-4 py-4">
            <span className="text-xs tabular-nums text-muted" dir="ltr">{i + 1}</span>
            <span className={`text-sm ${s.tone === "project" ? "text-project font-medium" : ""}`}>{s.label[l]}</span>
          </li>
        ))}
      </ol>
    ),
  },
};

export function Diagram({ id, n: num, locale }: { id: DiagramKey; n: number; locale: Locale }) {
  const d = defs[id];
  return (
    <Fig n={num} title={d.title} caption={d.caption} locale={locale}>
      {d.body(locale)}
    </Fig>
  );
}

