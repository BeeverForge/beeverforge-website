"""Render the original editorial social cards (Pillow; run on macOS).

The checked-in PNGs are served directly; the website build needs only Node.
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
FONTS = Path('/System/Library/Fonts/Supplemental')
INK, PAPER = '#222329', '#e7bf7a'
texts = {
    'pt': ['91%', 'das aplicações auditadas tinham vulnerabilidades.', '182 de 200 aplicações publicadas', 'Lovable + Claude Code · repositórios públicos no GitHub', 'Amostra do estudo; não é uma taxa global de insucesso.'],
    'en': ['91%', 'of audited apps had vulnerabilities.', '182 of 200 deployed applications', 'Lovable + Claude Code · public GitHub repositories', 'Study sample; not a platform-wide failure rate.'],
    'es': ['91%', 'de las apps auditadas tenía vulnerabilidades.', '182 de 200 aplicaciones publicadas', 'Lovable + Claude Code · repositorios públicos de GitHub', 'Muestra del estudio; no es una tasa global de fracaso.'],
}
for locale, t in texts.items():
    image = Image.new('RGB', (1200, 630), PAPER)
    d = ImageDraw.Draw(image)
    serif = lambda size: ImageFont.truetype(str(FONTS / 'Georgia.ttf'), size)
    sans = lambda size: ImageFont.truetype(str(FONTS / 'Arial.ttf'), size)
    d.line((55, 82, 1145, 82), fill='#b39361', width=1)
    d.text((60, 29), 'BEEVERFORGE JOURNAL', font=sans(20), fill=INK)
    d.text((52, 105), t[0], font=serif(168), fill=INK)
    d.text((65, 336), t[1], font=serif(37), fill=INK)
    d.text((65, 407), t[2], font=sans(29), fill=INK)
    d.text((65, 448), t[3], font=sans(26), fill=INK)
    d.text((65, 501), t[4], font=sans(24), fill=INK)
    d.line((65, 546, 1135, 546), fill='#b39361', width=1)
    d.text((65, 571), 'Deng, Fan & Meng · preprint v4 · 14/09/2026 · arXiv:2606.23130', font=sans(20), fill=INK)
    image.save(ROOT / f'assets/journal-audit-v2-{locale}.png', optimize=True)
