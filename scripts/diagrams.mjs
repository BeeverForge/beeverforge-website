// Author-only step: renders diagrams/*.mmd to diagrams/svg/<name>.<locale>.svg, which are committed.
// The site build only inlines those files, so publishing needs no Mermaid, Node package or browser.
//
//   PUPPETEER_EXECUTABLE_PATH=/path/to/chrome node scripts/diagrams.mjs [name…]
//
// Mermaid comes from npx at one exact version, run outside this repository. Labels are translated
// from scripts/translations.tsv before rendering, so each language gets boxes sized for its own
// text. In a label, `code` stays in English and appears in a row as {0}, {1}…, as in the pages.
// The rendered SVG loses Mermaid's colours and inline styles; assets/docs.css styles it with the
// site's tokens, so one file follows both themes.
import { readFile, writeFile, mkdir, readdir, mkdtemp, rm } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const MERMAID_CLI = '@mermaid-js/mermaid-cli@11.4.2';
const LOCALES = (process.env.DIAGRAM_LOCALES || 'en,es,pt').split(',');
const root = fileURLToPath(new URL('../', import.meta.url));
const rows = (await readFile(`${root}scripts/translations.tsv`, 'utf8')).trim().split('\n').map((l) => l.split('\t'));
const translations = new Map(rows.map(([en, es, pt]) => [en, { es, pt }]));
const missing = new Set();

const letters = (s) => /[A-Za-zÀ-ÿ]/.test(s.replace(/\{\d+\}/g, '').replace(/<br>/g, ''));
const code = (s) => s.replaceAll('<', '#lt;').replaceAll('>', '#gt;');
function translate(text, locale) {
  if (!text.trim()) return text;
  const held = [];
  const key = text.replace(/`([^`]+)`/g, (m, c) => `{${held.push(c) - 1}}`).trim();
  let out = key;
  if (locale !== 'en' && letters(key)) {
    const entry = translations.get(key);
    if (!entry) missing.add(key);
    else out = entry[locale];
  }
  return out.replace(/\{(\d+)\}/g, (m, n) => code(held[Number(n)]));
}
const ARROW = /^(\s*\S+?\s*(?:-->>|->>|--\)|-\)|-->|->|--x|-x)\s*\S+?\s*:)(.*)$/;
function localize(source, locale) {
  return source.split('\n').map((line) => {
    let m;
    if ((m = line.match(/^(\s*acc(?:Title|Descr)\s*:\s*)(.*)$/))) return m[1] + translate(m[2], locale);
    if ((m = line.match(/^(\s*(?:participant|actor)\s+\S+\s+as\s+)(.*)$/))) return m[1] + translate(m[2], locale);
    if ((m = line.match(/^(\s*Note\s+(?:over|left of|right of)\s+[^:]+:\s*)(.*)$/))) return m[1] + translate(m[2], locale);
    if ((m = line.match(/^(\s*(?:loop|alt|else|opt|par|and|critical|break)\s+)(.*)$/))) return m[1] + translate(m[2], locale);
    if ((m = line.match(ARROW))) return `${m[1]} ${translate(m[2], locale)}`;
    return line.replace(/"([^"]*)"/g, (s, inner) => `"${translate(inner, locale)}"`);
  }).join('\n');
}

// Mermaid's output carries a stylesheet, colours and inline styles of its own theme. They are
// removed so the page's stylesheet decides, and the root gets the natural width as a property.
function clean(svg, id) {
  svg = svg.replace(/<style>[\s\S]*?<\/style>/g, '')
    .replace(/\sstyle="([^"]*)"/g, (m, css) => { // only the text anchor is layout; the rest is theme
      const anchor = css.match(/text-anchor:\s*([a-z]+)/)?.[1];
      return anchor ? ` text-anchor="${anchor}"` : '';
    })
    .replace(/\s(fill|stroke)="(?!none|url)[^"]*"/g, '');
  // Coordinates keep two decimals: Mermaid writes sixteen, which only makes the page heavier.
  svg = svg.replace(/<[^>]+>/g, (tag) => tag.replace(/-?\d+\.\d+(e-?\d+)?/g, (n) => String(Math.round(Number(n) * 100) / 100)));
  const width = Math.ceil(Number(svg.match(/viewBox="([^"]+)"/)[1].split(/\s+/)[2]));
  svg = svg.replace(/^<svg\b[^>]*?(\sviewBox="[^"]+")[^>]*>/, (open, viewBox) => {
    const type = open.match(/aria-roledescription="([^"]+)"/)?.[1] || 'diagram';
    const title = open.match(/aria-labelledby="([^"]+)"/)?.[1];
    const desc = open.match(/aria-describedby="([^"]+)"/)?.[1];
    return `<svg id="${id}" xmlns="http://www.w3.org/2000/svg"${viewBox} class="doc-mermaid doc-mermaid-${type.replace(/[^a-z0-9-]/gi, '')}" role="img"${title ? ` aria-labelledby="${title}"` : ''}${desc ? ` aria-describedby="${desc}"` : ''} style="--w:${width}px">`;
  });
  return svg.replace(/\n\s*/g, '\n') + '\n';
}

const config = {
  theme: 'base',
  markdownAutoWrap: false,
  htmlLabels: false,
  themeVariables: { fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: '14px' },
  flowchart: { htmlLabels: false, wrappingWidth: 640, curve: 'basis', nodeSpacing: 36, rankSpacing: 44, padding: 12, diagramPadding: 8 },
  sequence: { messageFontSize: 14, actorFontSize: 14, noteFontSize: 14, mirrorActors: false, actorMargin: 36, width: 130, boxMargin: 8, noteMargin: 10, messageMargin: 34, diagramMarginX: 8, diagramMarginY: 8, wrap: false },
};
const names = process.argv.slice(2);
const files = (await readdir(`${root}diagrams`)).filter((f) => f.endsWith('.mmd') && (!names.length || names.includes(f.slice(0, -4))));
const scratch = await mkdtemp(join(tmpdir(), 'beeverforge-diagrams-'));
await writeFile(join(scratch, 'config.json'), JSON.stringify(config));
const puppeteer = { args: ['--no-sandbox'], ...(process.env.PUPPETEER_EXECUTABLE_PATH ? { executablePath: process.env.PUPPETEER_EXECUTABLE_PATH } : {}) };
await writeFile(join(scratch, 'puppeteer.json'), JSON.stringify(puppeteer));
await mkdir(`${root}diagrams/svg`, { recursive: true });
const jobs = [];
for (const file of files) {
  const source = await readFile(`${root}diagrams/${file}`, 'utf8');
  for (const locale of LOCALES) jobs.push({ name: file.slice(0, -4), locale, text: localize(source, locale) });
}
if (missing.size) throw new Error(`Missing diagram translations (${missing.size}):\n${[...missing].join('\n')}`);
try {
  for (const { name, locale, text } of jobs) { // one browser at a time: each render starts Chromium
    const input = join(scratch, `${name}.${locale}.mmd`);
    const output = join(scratch, `${name}.${locale}.svg`);
    await writeFile(input, text);
    execFileSync('npx', ['-y', MERMAID_CLI, '-q', '-c', 'config.json', '-p', 'puppeteer.json', '-I', `d-${name}`, '-i', input, '-o', output], { cwd: scratch, stdio: ['ignore', 'ignore', 'inherit'], env: { ...process.env, PUPPETEER_SKIP_DOWNLOAD: '1' } });
    await writeFile(`${root}diagrams/svg/${name}.${locale}.svg`, clean(await readFile(output, 'utf8'), `d-${name}`));
    console.log(`diagrams/svg/${name}.${locale}.svg`);
  }
} finally {
  await rm(scratch, { recursive: true, force: true });
}
