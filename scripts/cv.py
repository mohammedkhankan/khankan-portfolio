"""Builds public/cv/mohammed-khankan-cv-{ar,en}.pdf from a print-ready HTML template.
Run: python3 scripts/cv.py   (needs playwright + Chrome). Edit the DATA below to update."""
import asyncio, pathlib
from playwright.async_api import async_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
FONTS = ROOT / "src" / "fonts"
OUT = ROOT / "public" / "cv"; OUT.mkdir(parents=True, exist_ok=True)
PORTRAIT = ROOT / "public" / "portrait" / "portrait-480.webp"
SITE = "mohammedkhankan.github.io/khankan-portfolio"
EMAIL = ""  # set when the personal email is ready

D = {
 "ar": dict(dir="rtl", name="محمد خانكان", title="مؤسس ومدير تنفيذي · مهندس برمجيات ومطوّر منتجات SaaS",
   loc="المملكة العربية السعودية",
   summary="أبني منتجات رقمية تحل مشكلات أعمال حقيقية وأقودها من الفكرة حتى التشغيل: فهم المشكلة، وتصميم النظام وقاعدة البيانات، والبناء والاختبار، ثم الإطلاق والتطوير المستمر.",
   h_lead="القيادة", lead=[
     ("شركة أفق للحلول التقنية والرقمنة", "مؤسس ومدير تنفيذي", "منتجات SaaS للأعمال الصغيرة والمتوسطة: ركن، وأفق للمطاعم، ومعازيم."),
     ("منصة رفد التعليمية", "مؤسس ومدير تنفيذي", "منصة «من طالب، لأجل طالب» بأكثر من 2,000 مشترك و4,000 طالب ومستفيد، وتطبيقا Windows وأندرويد."),
   ],
   h_proj="مشاريع مختارة", proj=[
     ("ركن", "منصة SaaS للمتاجر الإلكترونية", "10 متاجر خلال الانطلاق الأول، ومنصة متعددة التجار ببيانات معزولة.", "ASP.NET Core (.NET 10) · React · PostgreSQL · EF Core"),
     ("أفق لإدارة المطاعم", "نظام تشغيل للمطاعم", "7 مطاعم ضمن التجربة، وواجهات للنادل والكاشير والمطبخ.", "Next.js 16 · Prisma 7 · PostgreSQL"),
     ("معازيم", "دعوات إلكترونية وتسجيل حضور", "52/52 اختباراً ناجحاً، واستيراد 10,000 ضيف في 1.84 ثانية.", "Next.js 16 · Drizzle · PostgreSQL 17"),
     ("النظام المالي لرفد", "نظام داخلي", "الاشتراكات والمستحقات والمصاريف وحصص الشركاء بثلاث عملات.", ""),
     ("الطيف المعمارية", "موقع شركة", "تصميم وبناء ونشر وتحسين لمحركات البحث.", "Next.js 16 · React 19 · altayf-sa.com"),
   ],
   h_skills="مجالات العمل", skills="تطوير SaaS · هندسة Full-Stack · أنظمة الأعمال · معمارية قواعد البيانات · الصلاحيات وعزل البيانات · هندسة الأداء · استراتيجية المنتج · UI/UX · النشر بـ Docker",
   h_stack="تقنيات", stack="TypeScript · React · Next.js · ASP.NET Core · PostgreSQL · Prisma · Drizzle · EF Core · Tailwind CSS · Docker",
   h_edu="الدراسة", edu="هندسة المعلوماتية — الجامعة الافتراضية السورية",
   h_contact="تواصل"),
 "en": dict(dir="ltr", name="Mohammed Khankan", title="Founder & CEO · Software engineer and SaaS product builder",
   loc="Saudi Arabia",
   summary="I build digital products that solve real business problems and lead them from idea to production: understanding the problem, designing the system and data model, building and testing, then launching and improving.",
   h_lead="Leadership", lead=[
     ("OFOQ Technical Solutions & Digitalization", "Founder & CEO", "SaaS products for small and mid-sized businesses: RUKN, OFOQ Restaurant OS and MAAZEEM."),
     ("RAFD Educational Platform", "Founder & CEO", "A “by a student, for students” platform with 2,000+ subscribers, 4,000+ learners, and Windows and Android apps."),
   ],
   h_proj="Selected projects", proj=[
     ("RUKN", "E-commerce SaaS platform", "10 stores in the first launch; multi-merchant with isolated data.", "ASP.NET Core (.NET 10) · React · PostgreSQL · EF Core"),
     ("OFOQ Restaurant OS", "Restaurant operations", "7 restaurants in trial; waiter, cashier and kitchen views.", "Next.js 16 · Prisma 7 · PostgreSQL"),
     ("MAAZEEM", "Digital invitations & check-in", "52/52 tests passing; 10,000 guests imported in 1.84 s.", "Next.js 16 · Drizzle · PostgreSQL 17"),
     ("RAFD Financial System", "Internal tool", "Subscriptions, payouts, expenses and partner shares across three currencies.", ""),
     ("AL TAYF Architecture", "Company website", "Design, build, deployment and SEO.", "Next.js 16 · React 19 · altayf-sa.com"),
   ],
   h_skills="Areas of practice", skills="SaaS development · Full-stack engineering · Business systems · Database architecture · Access control & tenant isolation · Performance engineering · Product strategy · UI/UX · Docker deployment",
   h_stack="Technologies", stack="TypeScript · React · Next.js · ASP.NET Core · PostgreSQL · Prisma · Drizzle · EF Core · Tailwind CSS · Docker",
   h_edu="Education", edu="Informatics Engineering — Syrian Virtual University",
   h_contact="Contact"),
}

def html(l):
    d = D[l]
    contact = [("WhatsApp", "+966 51 037 1924"), ("LinkedIn", "linkedin.com/in/mohammed-tarek-533a2a214"), ("GitHub", "github.com/mohammedkhankan"), ("Web", SITE)]
    if EMAIL: contact.insert(0, ("Email", EMAIL))
    lead = "".join(f'<div class="item"><div class="row"><b>{o}</b><span>{r}</span></div><p>{t}</p></div>' for o, r, t in d["lead"])
    proj = "".join(f'<div class="item"><div class="row"><b>{n}</b><span>{k}</span></div><p>{t}</p>' + (f'<p class="tech" dir="ltr">{x}</p>' if x else '') + '</div>' for n, k, t, x in d["proj"])
    cont = "".join(f'<li><span>{k}</span><bdi>{v}</bdi></li>' for k, v in contact)
    return f"""<!DOCTYPE html><html lang="{l}" dir="{d['dir']}"><head><meta charset="utf-8"><style>
@font-face{{font-family:Alx;src:url('file://{FONTS}/alexandria-latin-wght-normal.woff2');font-weight:100 900}}
@font-face{{font-family:Alx;src:url('file://{FONTS}/alexandria-arabic-wght-normal.woff2');font-weight:100 900;unicode-range:U+0600-06FF,U+0750-077F,U+FB50-FDFF,U+FE70-FEFF}}
@font-face{{font-family:Plx;src:url('file://{FONTS}/ibm-plex-sans-arabic-latin-400-normal.woff2');font-weight:400}}
@font-face{{font-family:Plx;src:url('file://{FONTS}/ibm-plex-sans-arabic-latin-600-normal.woff2');font-weight:600}}
@font-face{{font-family:Plx;src:url('file://{FONTS}/ibm-plex-sans-arabic-arabic-400-normal.woff2');font-weight:400;unicode-range:U+0600-06FF,U+0750-077F,U+FB50-FDFF,U+FE70-FEFF}}
@font-face{{font-family:Plx;src:url('file://{FONTS}/ibm-plex-sans-arabic-arabic-600-normal.woff2');font-weight:600;unicode-range:U+0600-06FF,U+0750-077F,U+FB50-FDFF,U+FE70-FEFF}}
@page{{size:A4;margin:0}}
*{{box-sizing:border-box;margin:0;padding:0}}
body{{font:10.5pt/1.55 Plx,sans-serif;color:#121826;width:210mm;min-height:297mm;display:grid;grid-template-columns:62mm 1fr}}
aside{{background:#0c1322;color:#eef0f3;padding:14mm 9mm;position:relative}}
aside img{{width:100%;border-radius:10px;display:block}}
aside .hz{{height:1px;margin:7mm 0;background:linear-gradient(90deg,transparent,#f4c98b,transparent);box-shadow:0 0 8px #f4c98b}}
aside h3{{font:600 10pt Alx;color:#f4c98b;margin-bottom:3mm}}
aside ul{{list-style:none;display:grid;gap:2.5mm;font-size:9pt}}
aside li span{{display:block;color:#a3acbd;font-size:8pt}}
aside p{{font-size:9pt;color:#d5dae3}}
main{{padding:14mm 12mm}}
h1{{font:700 26pt/1.1 Alx;letter-spacing:-.01em}}
.t{{margin-top:2mm;color:#535d70;font-size:10.5pt}}
.sum{{margin-top:6mm;font-size:10.5pt}}
h2{{font:600 12pt Alx;margin:7mm 0 3mm;padding-bottom:1.5mm;border-bottom:1px solid #dde1e8}}
.item{{margin-bottom:3.2mm}} .row{{display:flex;justify-content:space-between;gap:4mm;align-items:baseline}}
.row b{{font-weight:600}} .row span{{color:#535d70;font-size:9pt;white-space:nowrap}}
.item p{{color:#3b4456;font-size:9.6pt}}
.chips{{font-size:9.4pt;color:#3b4456}}
.tech{{font-size:8.6pt;color:#6b7486;text-align:start}} [dir=rtl] .tech{{text-align:right}}
aside li bdi{{direction:ltr;unicode-bidi:isolate;display:block;font-size:8.6pt;overflow-wrap:anywhere;word-break:normal}}
</style></head><body>
<aside>
  <img src="file://{PORTRAIT}" alt="">
  <div class="hz"></div>
  <h3>{d['h_contact']}</h3><ul>{cont}</ul>
  <div class="hz"></div>
  <h3>{d['h_edu']}</h3><p>{d['edu']}</p>
  <div class="hz"></div>
  <h3>{d['h_stack']}</h3><p>{d['stack']}</p>
</aside>
<main>
  <h1>{d['name']}</h1><p class="t">{d['title']} — {d['loc']}</p>
  <p class="sum">{d['summary']}</p>
  <h2>{d['h_lead']}</h2>{lead}
  <h2>{d['h_proj']}</h2>{proj}
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
