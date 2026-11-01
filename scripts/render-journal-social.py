"""Render the original editorial social cards (Pillow; run on macOS).

The checked-in PNGs are served directly; the website build needs only Node.
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
FONTS = Path('/System/Library/Fonts/Supplemental')
INK, PAPER = '#222329', '#e7bf7a'
texts = {
    'pt': ['60,5%', 'PESQUISA LOVABLE / 2026', 'Ainda não monetizam.', 'Mas pretendem.', 'Respondentes, não projetos.'],
    'en': ['60.5%', 'LOVABLE SURVEY / 2026', 'Not monetizing yet.', 'But planning to.', 'Respondents, not projects.'],
    'es': ['60,5%', 'ESTUDIO LOVABLE / 2026', 'Aún no monetizan.', 'Pero quieren hacerlo.', 'Participantes, no proyectos.'],
}
for locale, t in texts.items():
    image = Image.new('RGB', (1200, 630), PAPER)
    d = ImageDraw.Draw(image)
    serif = lambda size: ImageFont.truetype(str(FONTS / 'Georgia.ttf'), size)
    sans = lambda size: ImageFont.truetype(str(FONTS / 'Arial.ttf'), size)
    d.line((55, 82, 1145, 82), fill='#b39361', width=1)
    d.text((60, 29), 'BEEVERFORGE JOURNAL', font=sans(20), fill=INK)
    d.text((60, 112), t[1], font=sans(20), fill=INK)
    d.text((48, 133), t[0], font=serif(185), fill=INK)
    d.text((64, 355), t[2], font=serif(43), fill=INK)
    d.text((64, 411), t[3], font=serif(43), fill=INK)
    d.rectangle((65, 491, 1135, 500), fill='#b39361')
    d.rectangle((65, 491, 65 + round(1070 * .605), 500), fill=INK)
    d.text((65, 542), t[4], font=sans(25), fill=INK)
    image.save(ROOT / f'assets/journal-{locale}.png', optimize=True)
