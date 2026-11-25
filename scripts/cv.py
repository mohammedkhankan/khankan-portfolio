"""Builds public/cv/mohammed-khankan-cv-{ar,en}.pdf from a print-ready HTML template.
Run: python3 scripts/cv.py   (needs playwright + Chrome). Edit the DATA below to update."""
import asyncio, pathlib
from playwright.async_api import async_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
FONTS = ROOT / "src" / "fonts"
# Static (non-variable) heading weights: variable fonts get embedded in PDFs as Type 3,
# which many viewers (phones, some desktop readers) render broken or blurry.
CVF = ROOT / "scripts" / "cv-fonts"
OUT = ROOT / "public" / "cv"; OUT.mkdir(parents=True, exist_ok=True)
PORTRAIT = ROOT / "public" / "portrait" / "portrait-480.webp"
SITE = "mohammedkhankan.github.io/khankan-portfolio"
import re as _re
_site = (ROOT / "src" / "content" / "site.ts").read_text(encoding="utf-8")
EMAIL = (_re.search(r'email: "([^"]*)"', _site) or [None, ""])[1]  # from links.email in site.ts

D = {
 "ar": dict(dir="rtl", name="محمد خانكان", title="مؤسس ومدير تنفيذي · مهندس برمجيات ومطوّر منتجات SaaS",
   loc="المملكة العربية السعودية",
   summary="أبني منتجات رقمية تحل مشكلات أعمال حقيقية، وأقودها من الفكرة حتى الإطلاق.",
   h_lead="القيادة", lead=[
     ("شركة أفق للحلول التقنية والرقمنة", "مؤسس ومدير تنفيذي", "منصات رقمية للأعمال باشتراكات شهرية: ركن للمتاجر، وأفق للمطاعم، ومعازيم للمناسبات."),
     ("منصة رفد التعليمية", "مؤسس ومدير تنفيذي", "منصة «من طالب، لأجل طالب» بأكثر من 2,000 مشترك و4,000 طالب ومستفيد، وتطبيقا Windows وأندرويد."),
   ],
   h_proj="مشاريع مختارة", proj=[
     ("ركن", "منصة متاجر إلكترونية", "منصة سورية تتيح للتجار إنشاء متاجرهم الإلكترونية بسهولة: أسعار بالليرة السورية، ودفع عبر شام كاش، ومتجر جاهز للجوال.", "ASP.NET Core · React · PostgreSQL — ruknshop.com"),
     ("أفق للمطاعم", "نظام إدارة مطاعم", "منصة تتيح للمطاعم نظاماً متكاملاً: منيو إلكتروني بالباركود، وكاشير، ونادل، ومحطات تحضير، وحسابات المطعم.", "Next.js · PostgreSQL — menu.ofoqsy.com"),
     ("معازيم", "دعوات إلكترونية", "دعوة باسم كل ضيف وباركود خاص تُرسل على واتساب، مع تسجيل الحضور بمسح الباركود من الجوال.", "Next.js · PostgreSQL — maazeem.ofoqsy.com"),
     ("النظام المالي لرفد", "نظام داخلي", "متابعة الاشتراكات والمدفوعات ومستحقات المدرّسين والمصاريف وأرباح الشركاء.", ""),
     ("الطيف المعمارية", "موقع شركة", "موقع لشركة مقاولات معمارية (زجاج معشّق وقباب وتشطيبات) يعرض أعمالها ويظهر في محركات البحث.", "Next.js · React — altayf-sa.com"),
   ],
   h_prev="الخبرة الميدانية", prev=[
     ("Bolt", "العمليات وتفعيل الكباتن · 2021–2024، ومن 2025 حتى الآن", "قيادة جزء من عمليات التفعيل اليومية، وتدريب الموظفين الجدد، وتطوير الإجراءات الداخلية، ومعالجة الحالات المعقدة. عاد في 2025 لتطوير أداء الفريق."),
     ("Blink", "تفعيل حسابات الكباتن · 2023–2025", "طرق تفعيل جديدة قلّصت زمن التفعيل، ودعم جودة الخدمة."),
     ("الكشري سنت", "مبيعات · 2024–2025", "بناء علاقات مع العملاء والمساهمة في رفع المبيعات."),
   ],
   h_skills="مجالات العمل", skills="تطوير SaaS · هندسة Full-Stack · أنظمة الأعمال · تصميم قواعد البيانات · الصلاحيات · الأداء · استراتيجية المنتج · UI/UX",
   h_stack="تقنيات", stack="TypeScript · React · Next.js · ASP.NET Core · PostgreSQL · Prisma · Drizzle · EF Core · Tailwind CSS · Docker · Python · C++",
   h_edu="الدراسة", edu="هندسة المعلوماتية — الجامعة الافتراضية السورية",
   h_contact="تواصل"),
 "en": dict(dir="ltr", name="Mohammed Khankan", title="Founder & CEO · Software engineer & SaaS builder",
   loc="Saudi Arabia",
   summary="I build digital products that solve real business problems, and lead them from idea to launch.",
   h_lead="Leadership", lead=[
     ("OFOQ Technical Solutions & Digitalization", "Founder & CEO", "Subscription platforms for businesses: RUKN for stores, OFOQ for restaurants and MAAZEEM for events."),
     ("RAFD Educational Platform", "Founder & CEO", "A “by a student, for students” platform with 2,000+ subscribers, 4,000+ learners, and Windows and Android apps."),
   ],
   h_proj="Selected projects", proj=[
     ("RUKN", "E-commerce platform", "A Syrian platform that lets merchants open their own online store easily: prices in Syrian pounds, payment via Sham Cash, mobile-ready.", "ASP.NET Core · React · PostgreSQL — ruknshop.com"),
     ("OFOQ for Restaurants", "Restaurant management", "A platform that gives restaurants a complete system: QR digital menu, cashier, waiter app, kitchen stations and billing.", "Next.js · PostgreSQL — menu.ofoqsy.com"),
     ("MAAZEEM", "Digital invitations", "A personal invitation with its own QR code for every guest, sent on WhatsApp, with check-in by scanning from a phone.", "Next.js · PostgreSQL — maazeem.ofoqsy.com"),
     ("RAFD Financial System", "Internal tool", "Tracks subscriptions, payments, teacher payouts, expenses and partner profits.", ""),
     ("AL TAYF Architecture", "Company website", "Website for an architectural contractor (stained glass, domes, finishes) that showcases its work and ranks in search.", "Next.js · React — altayf-sa.com"),
   ],
   h_prev="Field experience", prev=[
     ("Bolt", "Operations & driver onboarding · 2021–2024, 2025–present", "Led part of daily activation operations, trained new staff, improved procedures and handled escalations. Returned in 2025 to raise team performance."),
     ("Blink", "Driver account activation · 2023–2025", "New activation approaches that shortened activation time; supported service quality."),
     ("Al Koshary Cent", "Sales · 2024–2025", "Built customer relationships and helped grow sales."),
   ],
   h_skills="Areas of practice", skills="SaaS development · Full-stack engineering · Business systems · Database design · Access control · Performance · Product strategy · UI/UX",
   h_stack="Technologies", stack="TypeScript · React · Next.js · ASP.NET Core · PostgreSQL · Prisma · Drizzle · EF Core · Tailwind CSS · Docker · Python · C++",
   h_edu="Education", edu="Informatics Engineering — Syrian Virtual University",
   h_contact="Contact"),
}

def html(l):
    d = D[l]
    contact = [("WhatsApp", "+966 51 037 1924"), ("LinkedIn", "linkedin.com/in/mohammed-tarek-533a2a214"), ("GitHub", "github.com/mohammedkhankan"), ("Web", SITE)]
    if EMAIL: contact.insert(0, ("Email", EMAIL))
    lead = "".join(f'<div class="item"><div class="row"><b>{o}</b><span>{r}</span></div><p>{t}</p></div>' for o, r, t in d["lead"])
    proj = "".join(f'<div class="item"><div class="row"><b>{n}</b><span>{k}</span></div><p>{t}</p>' + (f'<p class="tech" dir="ltr">{x}</p>' if x else '') + '</div>' for n, k, t, x in d["proj"])
    prev = "".join(f'<div class="item"><div class="row"><b>{o}</b><span>{r}</span></div><p>{t}</p></div>' for o, r, t in d["prev"])
    # Let long values break only at natural points (after @ and /), never mid-word.
    brk = lambda v: v.replace("@", "@<wbr>").replace("/", "/<wbr>")
    cont = "".join(f'<li><span>{k}</span><bdi>{brk(v)}</bdi></li>' for k, v in contact)
    return f"""<!DOCTYPE html><html lang="{l}" dir="{d['dir']}"><head><meta charset="utf-8"><style>
@font-face{{font-family:Alx;src:url('file://{CVF}/alexandria-latin-600.ttf');font-weight:600}}
@font-face{{font-family:Alx;src:url('file://{CVF}/alexandria-latin-700.ttf');font-weight:700}}
@font-face{{font-family:Alx;src:url('file://{CVF}/alexandria-arabic-600.ttf');font-weight:600;unicode-range:U+0600-06FF,U+0750-077F,U+FB50-FDFF,U+FE70-FEFF}}
@font-face{{font-family:Alx;src:url('file://{CVF}/alexandria-arabic-700.ttf');font-weight:700;unicode-range:U+0600-06FF,U+0750-077F,U+FB50-FDFF,U+FE70-FEFF}}
@font-face{{font-family:Plx;src:url('file://{FONTS}/ibm-plex-sans-arabic-latin-400-normal.woff2');font-weight:400}}
@font-face{{font-family:Plx;src:url('file://{FONTS}/ibm-plex-sans-arabic-latin-600-normal.woff2');font-weight:600}}
@font-face{{font-family:Plx;src:url('file://{FONTS}/ibm-plex-sans-arabic-arabic-400-normal.woff2');font-weight:400;unicode-range:U+0600-06FF,U+0750-077F,U+FB50-FDFF,U+FE70-FEFF}}
@font-face{{font-family:Plx;src:url('file://{FONTS}/ibm-plex-sans-arabic-arabic-600-normal.woff2');font-weight:600;unicode-range:U+0600-06FF,U+0750-077F,U+FB50-FDFF,U+FE70-FEFF}}
@page{{size:A4;margin:0}}
*{{box-sizing:border-box;margin:0;padding:0}}
body{{font:10pt/1.5 Plx,sans-serif;color:#121826;width:210mm;height:297mm;overflow:hidden;display:grid;grid-template-columns:62mm 1fr}}
aside{{background:#0c1322;color:#eef0f3;padding:12mm 8mm;position:relative}}
aside img{{width:78%;margin-inline:auto;border-radius:10px;display:block}}
aside .hz{{height:1px;margin:5mm 0;background:linear-gradient(90deg,transparent,#f4c98b,transparent);box-shadow:0 0 8px #f4c98b}}
aside h3{{font:600 10pt Alx;color:#f4c98b;margin-bottom:3mm}}
aside ul{{list-style:none;display:grid;gap:2.5mm;font-size:9pt}}
aside li span{{display:block;color:#a3acbd;font-size:8pt}}
aside p{{font-size:9pt;color:#d5dae3}}
main{{padding:11mm 11mm 8mm}}
h1{{font:700 24pt/1.1 Alx;letter-spacing:-.01em}}
.t{{margin-top:2mm;color:#535d70;font-size:10.5pt}}
.sum{{margin-top:4mm;font-size:10pt}}
h2{{font:600 11.5pt Alx;margin:4.2mm 0 2.2mm;padding-bottom:1.5mm;border-bottom:1px solid #dde1e8}}
.item{{margin-bottom:2.4mm}} .row{{display:flex;justify-content:space-between;gap:4mm;align-items:baseline}}
.row b{{font-weight:600}} .row span{{color:#535d70;font-size:9pt;white-space:nowrap}}
.item p{{color:#3b4456;font-size:9.4pt;line-height:1.45}}
.chips{{font-size:9.4pt;color:#3b4456}}
.tech{{font-size:8.6pt;color:#6b7486;text-align:start}} [dir=rtl] .tech{{text-align:right}}
aside li bdi{{direction:ltr;unicode-bidi:isolate;display:block;font-size:8.4pt;overflow-wrap:normal;word-break:normal}}
</style></head><body>
<aside>
  <img src="file://{PORTRAIT}" alt="">
  <div class="hz"></div>
  <h3>{d['h_contact']}</h3><ul>{cont}</ul>
  <div class="hz"></div>
  <h3>{d['h_edu']}</h3><p>{d['edu']}</p>
  <div class="hz"></div>
  <h3>{d['h_stack']}</h3><p dir="ltr" style="text-align:{'right' if d['dir']=='rtl' else 'left'}">{d['stack']}</p>
</aside>
<main>
  <h1>{d['name']}</h1><p class="t">{d['title']} — {d['loc']}</p>
  <p class="sum">{d['summary']}</p>
  <h2>{d['h_lead']}</h2>{lead}
  <h2>{d['h_proj']}</h2>{proj}
  <h2>{d['h_prev']}</h2>{prev}
  <h2>{d['h_skills']}</h2><p class="chips">{d['skills']}</p>
</main></body></html>"""

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--allow-file-access-from-files"])
        for l in ("ar", "en"):
            f = OUT / f"_cv-{l}.html"; f.write_text(html(l), encoding="utf-8")
            pg = await b.new_page()
            await pg.goto(f"file://{f}"); await pg.wait_for_timeout(600)
            await pg.pdf(path=str(OUT / f"mohammed-khankan-cv-{l}.pdf"), format="A4", print_background=True, prefer_css_page_size=True)
            await pg.screenshot(path=f"/tmp/qa/shots/cv-{l}.png", full_page=True)
            f.unlink()
        await b.close()
asyncio.run(main())
print("cv done")
