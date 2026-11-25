"""Social share images (1200x630) for every page, in Arabic and English, rendered
with the site's own fonts. Run: python3 scripts/og.py  → public/og/<name>-<locale>.png"""
import asyncio, json, pathlib
from playwright.async_api import async_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
F = ROOT / "src" / "fonts"; PUB = ROOT / "public"; OUT = PUB / "og"; OUT.mkdir(exist_ok=True)

NAME = {"ar": "محمد خانكان", "en": "Mohammed Khankan"}
LINE = {"ar": "أبني منتجات رقمية تحل مشكلات أعمال حقيقية", "en": "Building digital products that solve real business problems"}
ROLE = {"ar": "مؤسس أفق ورفد · مهندس برمجيات", "en": "Founder of OFOQ & RAFD · Software engineer"}

# name, tagline, chapter bg, ink, sub  (kept in sync with src/content/projects)
P = {
 "rukn": ({"ar": "ركن", "en": "RUKN"}, {"ar": "منصة SaaS لبناء المتاجر الإلكترونية وإدارتها", "en": "A SaaS platform for building and running online stores"}, "linear-gradient(180deg,#f5f3ef,#e5eae6)", "#123d26", "#4a5d52"),
 "ofoq": ({"ar": "أفق لإدارة المطاعم", "en": "OFOQ Restaurant OS"}, {"ar": "نظام تشغيل للمطاعم — من الطاولة إلى المطبخ إلى الحساب", "en": "An operating system for restaurants — table to kitchen to bill"}, "linear-gradient(180deg,#f9f9f9,#e7ecea)", "#10302a", "#4b5f59"),
 "maazeem": ({"ar": "معازيم", "en": "MAAZEEM"}, {"ar": "دعوات إلكترونية وإدارة المدعوين من التصميم حتى باب القاعة", "en": "Digital invitations and guest management, from design to the door"}, "linear-gradient(160deg,#221434,#362248 45%,#553473)", "#f4ecfb", "#cbb8de"),
 "rafd": ({"ar": "رفد التعليمية", "en": "RAFD"}, {"ar": "«من طالب، لأجل طالب» — أكثر من 2,000 مشترك", "en": "“By a student, for students” — 2,000+ subscribers"}, "linear-gradient(160deg,#0f2140,#16305c)", "#eaf1fb", "#a9bcd8"),
 "rafd-finance": ({"ar": "النظام المالي لرفد", "en": "RAFD Financial System"}, {"ar": "منظومة مالية وإدارية داخلية لفريق رفد", "en": "An internal finance & operations system for the RAFD team"}, "linear-gradient(160deg,#16231a,#22362a)", "#eef5ea", "#b4c7ad"),
 "altayf": ({"ar": "الطيف المعمارية", "en": "AL TAYF Architecture"}, {"ar": "هوية رقمية لشركة مقاولات معمارية في المملكة", "en": "A digital identity for an architectural contractor in Saudi Arabia"}, "linear-gradient(180deg,#f5efe8,#e6dfd1)", "#3d2c1a", "#6e5b45"),
}

FONTFACE = f"""
@font-face{{font-family:Alx;src:url('file://{F}/alexandria-latin-wght-normal.woff2');font-weight:100 900}}
@font-face{{font-family:Alx;src:url('file://{F}/alexandria-arabic-wght-normal.woff2');font-weight:100 900;unicode-range:U+0600-06FF,U+FB50-FDFF,U+FE70-FEFF}}
@font-face{{font-family:Plx;src:url('file://{F}/ibm-plex-sans-arabic-latin-400-normal.woff2')}}
@font-face{{font-family:Plx;src:url('file://{F}/ibm-plex-sans-arabic-arabic-400-normal.woff2');unicode-range:U+0600-06FF,U+FB50-FDFF,U+FE70-FEFF}}
*{{margin:0;box-sizing:border-box}} body{{width:1200px;height:630px;overflow:hidden;font-family:Plx}}
.hz{{position:absolute;inset-inline:0;height:2px;background:linear-gradient(90deg,transparent,#f4c98b 22%,#fff6e6 50%,#f4c98b 78%,transparent);box-shadow:0 0 22px 3px rgba(244,201,139,.5)}}
"""

def hero_file(slug):
    mf = PUB / "projects" / slug / "manifest.json"
    if not mf.exists(): return None
    items = json.loads(mf.read_text())
    h = next((m for m in items if m.get("role") == "hero"), None)
    if not h: return None
    w = next((s for s in h["sizes"] if s >= 1280), h["sizes"][-1])
    return PUB / "projects" / slug / f"{h['file']}-{w}.webp"

def person_html(l):
    pm = json.loads((PUB / "portrait" / "manifest.json").read_text())
    cut = PUB / "portrait" / f"cutout-{pm['cutout']['sizes'][-1]}.webp"
    d = "rtl" if l == "ar" else "ltr"
    return f"""<!DOCTYPE html><html dir="{d}" lang="{l}"><head><style>{FONTFACE}
body{{background:radial-gradient(50% 70% at {'22%' if l=='ar' else '78%'} 100%,rgba(244,201,139,.22),transparent 70%),linear-gradient(180deg,#0a1020,#0f1a33 50%,#1e2d55);color:#eef0f3;position:relative}}
.txt{{position:absolute;inset-inline-start:72px;top:110px;width:640px}}
h1{{font:700 84px/1.05 Alx;letter-spacing:{'0' if l=='ar' else '-.03em'}}}
p.l{{margin-top:22px;font:400 30px/1.4 Alx;color:#eef0f3e6}} p.r{{margin-top:26px;font-size:21px;color:#a3acbd}}
img{{position:absolute;bottom:58px;inset-inline-end:40px;height:560px;-webkit-mask-image:linear-gradient(to bottom,#000 82%,transparent),linear-gradient(to right,transparent,#000 14%,#000 86%,transparent);-webkit-mask-composite:source-in}}
.hz{{bottom:56px}} .gd{{position:absolute;inset-inline:0;bottom:0;height:56px;background:#0c1322}}
</style></head><body><div class="txt"><h1>{NAME[l]}</h1><p class="l">{LINE[l]}</p><p class="r">{ROLE[l]}</p></div>
<img src="file://{cut}"><div class="hz"></div><div class="gd"></div></body></html>"""

def project_html(slug, l):
    name, tag, bg, ink, sub = P[slug]
    d = "rtl" if l == "ar" else "ltr"
    img = hero_file(slug)
    pic = f'<div class="pic"><img src="file://{img}"></div>' if img else '<div class="hz" style="top:52%"></div>'
    return f"""<!DOCTYPE html><html dir="{d}" lang="{l}"><head><style>{FONTFACE}
body{{background:{bg};color:{ink};position:relative}}
.txt{{position:absolute;inset-inline-start:64px;top:64px;width:{'470px' if img else '1000px'};height:502px;display:flex;flex-direction:column}}
.by{{font-size:20px;color:{sub}}} h1{{margin-top:auto;font:700 {'68px' if img else '96px'}/1.08 Alx;letter-spacing:{'0' if l=='ar' else '-.02em'}}}
p{{margin-top:18px;font:400 25px/1.45 Alx;color:{sub}}}
.pic{{position:absolute;inset-inline-end:-20px;top:70px;width:640px;height:490px;border-radius:22px;overflow:hidden;box-shadow:0 30px 80px -30px rgba(4,8,20,.55)}}
.pic img{{width:100%;height:100%;object-fit:cover;object-position:center}}
</style></head><body><div class="txt"><span class="by">{NAME[l]}</span><h1>{name[l]}</h1><p>{tag[l]}</p></div>{pic}</body></html>"""

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--allow-file-access-from-files"])
        pg = await b.new_page(viewport={"width": 1200, "height": 630})
        jobs = [(f"default-{l}", person_html(l)) for l in ("ar", "en")] + [(f"{s}-{l}", project_html(s, l)) for s in P for l in ("ar", "en")]
        for name, html in jobs:
            f = OUT / "_tmp.html"; f.write_text(html, encoding="utf-8")
            await pg.goto(f"file://{f}"); await pg.wait_for_timeout(400)
            await pg.screenshot(path=str(OUT / f"{name}.png"))
        f.unlink(); await b.close()
    for old in ["default.png"] + [f"{s}.png" for s in P]:
        (OUT / old).unlink(missing_ok=True)
    print("og:", len(jobs))
asyncio.run(main())
