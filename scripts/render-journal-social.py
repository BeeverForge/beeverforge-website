"""Render the original editorial social cards (Pillow; run on macOS).

The checked-in PNGs are served directly; the website build needs only Node.
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
FONTS = Path('/System/Library/Fonts/Supplemental')
INK, PAPER = '#222329', '#e7bf7a'
texts = {
    'pt': ['11,14%', 'com publicação verificável', '1.007 de 9.041 projetos públicos no GitHub', 'associados à Lovable e ao Claude Code', 'Amostra do estudo; não é uma taxa global de produção.'],
    'en': ['11.14%', 'with a verifiable deployment', '1,007 of 9,041 public projects on GitHub', 'associated with Lovable and Claude Code', 'Study sample; not a platform-wide production rate.'],
    'es': ['11,14%', 'con publicación verificable', '1.007 de 9.041 proyectos públicos de GitHub', 'asociados a Lovable y Claude Code', 'Muestra del estudio; no es una tasa global de producción.'],
}
for locale, t in texts.items():
    image = Image.new('RGB', (1200, 630), PAPER)
    d = ImageDraw.Draw(image)
    serif = lambda size: ImageFont.truetype(str(FONTS / 'Georgia.ttf'), size)
    sans = lambda size: ImageFont.truetype(str(FONTS / 'Arial.ttf'), size)
    d.line((55, 82, 1145, 82), fill='#b39361', width=1)
    d.text((60, 29), 'BEEVERFORGE JOURNAL', font=sans(20), fill=INK)
    d.text((52, 110), t[0], font=serif(174), fill=INK)
    d.text((65, 312), t[1], font=serif(45), fill=INK)
    d.text((65, 399), t[2], font=sans(29), fill=INK)
    d.text((65, 440), t[3], font=sans(29), fill=INK)
    d.text((65, 497), t[4], font=sans(24), fill=INK)
    d.line((65, 546, 1135, 546), fill='#b39361', width=1)
    d.text((65, 571), 'Deng, Fan & Meng · preprint v4 · 14/09/2026 · arXiv:2606.23130', font=sans(20), fill=INK)
    image.save(ROOT / f'assets/journal-evidence-{locale}.png', optimize=True)
