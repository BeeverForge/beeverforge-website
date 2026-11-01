"""Render the original editorial social cards (Pillow; run on macOS).

The checked-in PNGs are served directly; the website build needs only Node.
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
FONTS = Path('/System/Library/Fonts/Supplemental')
INK, PAPER = '#222329', '#e7bf7a'
texts = {
    'pt': ['Protótipo.', 'Produção.', 'ENGENHARIA / ENTREGA / OPERAÇÃO', 'O produto precisa funcionar.', 'IDEIA  →  ENGENHARIA  →  OPERAÇÃO'],
    'en': ['Prototype.', 'Production.', 'ENGINEERING / DELIVERY / OPERATION', 'The product has to work.', 'IDEA  →  ENGINEERING  →  OPERATION'],
    'es': ['Prototipo.', 'Producción.', 'INGENIERÍA / ENTREGA / OPERACIÓN', 'El producto debe funcionar.', 'IDEA  →  INGENIERÍA  →  OPERACIÓN'],
}
for locale, t in texts.items():
    image = Image.new('RGB', (1200, 630), PAPER)
    d = ImageDraw.Draw(image)
    serif = lambda size: ImageFont.truetype(str(FONTS / 'Georgia.ttf'), size)
    sans = lambda size: ImageFont.truetype(str(FONTS / 'Arial.ttf'), size)
    d.line((55, 82, 1145, 82), fill='#b39361', width=1)
    d.text((60, 29), 'BEEVERFORGE JOURNAL', font=sans(20), fill=INK)
    d.text((60, 112), t[2], font=sans(20), fill=INK)
    d.text((52, 153), t[0], font=serif(123), fill=INK)
    d.text((52, 290), t[1], font=serif(123), fill=INK)
    d.text((65, 458), t[3], font=sans(27), fill=INK)
    d.line((65, 520, 1135, 520), fill='#b39361', width=1)
    d.text((65, 553), t[4], font=sans(23), fill=INK)
    image.save(ROOT / f'assets/journal-production-{locale}.png', optimize=True)
