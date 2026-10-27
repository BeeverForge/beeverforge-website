// Builds the "BeeverForge core architecture" section from architecture-src/*.html.
// Each source holds a <title>, a <meta name="description"> and the article body (English).
// Spanish and Portuguese come from scripts/translations.tsv, one row per translation unit:
// the whole content of a heading, paragraph, list item, table cell, caption or SVG label.
// Code, <pre> blocks and elements marked translate="no" stay in English; inside a unit they
// appear as {0}, {1}… and every translation must carry exactly the same tokens.
import { readFile, writeFile, mkdir } from 'node:fs/promises';

export const pages = [
  { slug: '', file: 'overview.html', nav: 'Overview' },
  { slug: 'lifecycle/', file: 'lifecycle.html', nav: 'Lifecycle of a ticket' },
  { slug: 'runtime/', file: 'runtime.html', nav: 'Runtime and durability' },
  { slug: 'box/', file: 'box.html', nav: 'The box and the quality floor' },
  { slug: 'extensions/', file: 'extensions.html', nav: 'Extension model' },
  { slug: 'principles/', file: 'principles.html', nav: 'Engineering principles' },
  { slug: 'repository/', file: 'repository.html', nav: 'Repository principles' },
];
const SECTION = 'BeeverForge core architecture';
// Every source link is pinned to one commit of the core, written in the sources as @core/<path>
// (a file) or @tree/<path> (a directory). No release tag existed when the section was written.
const CORE = 'https://github.com/BeeverForge/beeverforge-oss';
const CORE_REF = '171de5f2537d916c479cc07b593d212f41e1fae2';
const UNIT = /<(h1|h2|h3|h4|p|li|td|th|dt|dd|figcaption|caption|summary|span|small|text|title|desc)\b([^>]*)>([\s\S]*?)<\/\1>/g;
const LINK = /<a\b([^>]*)>([\s\S]*?)<\/a>/g;
const SENTINEL = /\u0001(\d+)\u0001/g;
const letters = (text) => /[A-Za-zÀ-ÿ]/.test(text.replace(/\{\d+\}/g, '').replace(/&[a-z]+;|&#\d+;/g, ''));

export const urlOf = (locale, locales, page) => `${locales[locale].path}architecture/${page.slug}`;

// Lifts code, <pre> and translate="no" elements out of the text so no translation can touch them.
function protect(html) {
  const held = [];
  const hold = (match) => `\u0001${held.push(match) - 1}\u0001`;
  html = html.replace(/<pre\b[^>]*>[\s\S]*?<\/pre>/g, hold)
    .replace(/<(\w+)\b[^>]*\btranslate="no"[^>]*>[\s\S]*?<\/\1>/g, hold)
    .replace(/<code\b[^>]*>[\s\S]*?<\/code>/g, hold);
  return { html, held, hold };
}
function restore(html, held) {
  while (SENTINEL.test(html)) html = html.replace(SENTINEL, (m, i) => held[Number(i)]);
  return html;
}
// A unit's key: its content with whitespace collapsed and each protected element numbered.
function keyOf(inner) {
  const ids = [];
  const key = inner.replace(SENTINEL, (m, i) => `{${ids.push(i) - 1}}`).replace(/\s+/g, ' ').trim();
  return { key, ids };
}
function translateUnit(inner, locale, translations, missing) {
  const { key, ids } = keyOf(inner);
  if (!letters(key)) return inner;
  if (locale === 'en') return inner;
  const entry = translations.get(key);
  if (!entry) { missing.add(key); return inner; }
  const text = entry[locale];
  const tokens = (s) => (s.match(/\{\d+\}/g) || []).sort().join();
  if (tokens(text) !== tokens(key)) throw new Error(`Translation of "${key}" (${locale}) must carry the tokens ${tokens(key) || 'none'}`);
  return text.replace(/\{(\d+)\}/g, (m, n) => `\u0001${ids[Number(n)]}\u0001`);
}
export function localizeDoc(html, locale, translations, missing) {
  const { html: open, held, hold } = protect(html);
  let out = open.replace(LINK, (match, attrs, inner) => {
    if (/<(p|span|small|div)\b/.test(inner)) return match; // a container link: its units are translated below
    return hold(`<a${attrs}>${translateUnit(inner, locale, translations, missing)}</a>`);
  });
  out = out.replace(UNIT, (match, tag, attrs, inner) => `<${tag}${attrs}>${translateUnit(inner, locale, translations, missing)}</${tag}>`);
  if (locale === 'en') {
    const stray = out.replace(UNIT, '').replace(SENTINEL, '').replace(/<[^>]+>/g, '\n').split('\n').map((s) => s.trim()).filter(letters);
    if (stray.length) throw new Error(`Text outside a translation unit: ${stray.join(' | ')}`);
  }
  return restore(out, held);
}
function translateString(text, locale, translations, missing) {
  if (locale === 'en') return text;
  const entry = translations.get(text);
  if (!entry) { missing.add(text); return text; }
  return entry[locale];
}

// Every h2 and h3 of the article gets an id from its English text, so a link to a section is the
// same in every language, and a visible anchor link after the heading text.
const slugOf = (html) => html.replace(/<[^>]+>/g, '').replace(/&[a-z]+;/g, '').toLowerCase()
  .normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
function slugsOf(body) {
  const seen = new Set();
  return [...body.matchAll(/<(h2|h3)>([\s\S]*?)<\/\1>/g)].map(([, , inner]) => {
    let slug = slugOf(inner) || 'section';
    for (let n = 2; seen.has(slug); n += 1) slug = `${slugOf(inner)}-${n}`;
    seen.add(slug);
    return slug;
  });
}
function anchorHeadings(html, slugs, label) {
  let index = 0;
  const article = html.indexOf('<article');
  return html.slice(0, article) + html.slice(article).replace(/<(h2|h3)>([\s\S]*?)<\/\1>/g, (m, tag, inner) => {
    const slug = slugs[index++];
    return `<${tag} id="${slug}">${inner}<a class="doc-anchor" href="#${slug}" aria-label="${label}">#</a></${tag}>`;
  });
}

// A diagram is written in a page as <div class="doc-diagram" data-diagram="name"></div> and filled,
// after translation, with diagrams/svg/<name>.<locale>.svg (rendered by scripts/diagrams.mjs). The
// SVG is inlined so the page's stylesheet, and with it the theme, colours it.
let diagramRoot = '';
async function inlineDiagrams(html, locale) {
  const found = [...html.matchAll(/<div class="doc-diagram" data-diagram="([a-z0-9-]+)"><\/div>/g)];
  for (const [tag, name] of found) {
    const svg = (await readFile(`${diagramRoot}diagrams/svg/${name}.${locale}.svg`, 'utf8')).trim();
    html = html.replace(tag, `<div class="doc-diagram doc-diagram-mermaid">${svg}</div>`);
  }
  return html;
}

export async function buildArchitecture({ root, source, translations, locales, localizeText, localizeLabels }) {
  diagramRoot = root;
  const sources = await Promise.all(pages.map(async (page) => {
    const raw = await readFile(`${root}architecture-src/${page.file}`, 'utf8');
    const title = raw.match(/<title>([^<]+)<\/title>/)?.[1];
    const description = raw.match(/<meta name="description" content="([^"]+)">/)?.[1];
    if (!title || !description) throw new Error(`${page.file} needs a <title> and a meta description`);
    const body = raw.replaceAll('href="@core/', `href="${CORE}/blob/${CORE_REF}/`).replaceAll('href="@tree/', `href="${CORE}/tree/${CORE_REF}/`).replace(/<title>[^<]+<\/title>\s*/, '').replace(/<meta name="description" content="[^"]+">\s*/, '');
    return { ...page, title, description, body, slugs: slugsOf(body) };
  }));
  const header = source.match(/<header class="site-header">[\s\S]*?<\/header>/)[0];
  const consent = source.match(/<aside class="consent-panel"[\s\S]*?<\/aside>/)[0];
  const footer = source.match(/<footer class="site-footer">[\s\S]*?<\/footer>/)[0];
  const missing = new Set();
  const urls = [];
  for (const locale of Object.keys(locales)) {
    const l = locales[locale];
    const t = (text) => translateString(text, locale, translations, missing);
    for (const [index, page] of sources.entries()) {
      const url = urlOf(locale, locales, page);
      const prev = sources[index - 1];
      const next = sources[index + 1];
      const sidebar = `<nav class="doc-sidebar" aria-label="${t('Architecture contents')}"><details class="doc-toc" open data-doc-toc><summary>Contents</summary><p class="doc-toc-title">${SECTION}</p><ol>${sources.map((p) => `<li><a href="${urlOf(locale, locales, p)}"${p === page ? ' aria-current="page"' : ''}>${p.nav}</a></li>`).join('')}</ol></details></nav>`;
      const pager = `<nav class="doc-pager" aria-label="${t('Previous and next pages')}">${prev ? `<a class="doc-pager-prev" rel="prev" href="${urlOf(locale, locales, prev)}"><small>Previous</small><span>${prev.nav}</span></a>` : '<span class="doc-pager-gap"></span>'}${next ? `<a class="doc-pager-next" rel="next" href="${urlOf(locale, locales, next)}"><small>Next</small><span>${next.nav}</span></a>` : ''}</nav>`;
      const localized = localizeDoc(`<main id="main" class="doc-main"><div class="shell doc-layout">${sidebar}<article class="doc-article">${page.body}${pager}</article></div></main>`, locale, translations, missing);
      const main = anchorHeadings(await inlineDiagrams(localized, locale), page.slugs, t('Link to this section'));
      const chrome = (part) => {
        part = part.replace('href="/final-preview/" aria-label="BeeverForge preview home"', `href="${l.path}" aria-label="BeeverForge home"`)
          .replace(/href="#(editions|lifecycle|comparison|questions|contact)"/g, `href="${l.path}#$1"`)
          .replaceAll('href="/architecture/">', `href="${l.path}architecture/" aria-current="true">`)
          // the trial and the legal pages are English-rooted in the source and follow the page's language
          .replace(/href="\/(try|legal)\//g, (match, folder) => `href="${l.path}${folder}/`)
          .replace('Final design preview · not indexed', 'From idea to engineered software')
          .replace(/<option value="\/(es\/|pt\/)?"( selected)?>/g, (m, prefix) => {
            const code = prefix ? prefix.slice(0, 2) : 'en';
            return `<option value="${urlOf(code, locales, page)}"${code === locale ? ' selected' : ''}>`;
          });
        if (locale !== 'en') part = localizeText(part, locale);
        return localizeLabels(part, locale);
      };
      const body = `${chrome(header)}\n  ${main}\n  ${chrome(consent)}\n  ${chrome(footer)}`;
      const title = `${t(page.title)} — BeeverForge`;
      const description = t(page.description);
      const alternates = Object.keys(locales).map((code) => `\n  <link rel="alternate" hreflang="${locales[code].lang}" href="https://beeverforge.com${urlOf(code, locales, page)}">`).join('');
      const html = `<!doctype html>
<html lang="${l.lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="index,follow,max-image-preview:large">
  <meta name="theme-color" content="#1F1F24">
  <meta name="description" content="${description}">
  <title>${title}</title>
  <meta property="og:type" content="article">
  <meta property="og:locale" content="${l.og}">
  <meta property="og:site_name" content="BeeverForge">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="https://beeverforge.com/assets/og-beeverforge.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="canonical" href="https://beeverforge.com${url}">
  <meta property="og:url" content="https://beeverforge.com${url}">${alternates}
  <link rel="alternate" hreflang="x-default" href="https://beeverforge.com${urlOf('en', locales, page)}">
  <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
  <link rel="stylesheet" href="/assets/final.css">
  <link rel="stylesheet" href="/assets/docs.css">
  <script>try{document.documentElement.dataset.theme=localStorage.getItem('beeverforge-theme')==='light'?'light':'dark'}catch{document.documentElement.dataset.theme='dark'}</script>
</head>
<body class="doc-body">
  <a class="skip-link" href="#main">${t('Skip to content')}</a>
  ${body}
  <script src="/assets/final.js" defer></script>
  <script src="/assets/docs.js" defer></script>
</body>
</html>
`;
      await mkdir(`${root}${url}`, { recursive: true });
      await writeFile(`${root}${url}index.html`, html);
      if (locale === 'en') urls.push(page);
    }
  }
  if (missing.size) throw new Error(`Missing architecture translations (${missing.size}):\n${[...missing].join('\n')}`);
  return urls.map((page) => ({ loc: urlOf('en', locales, page), page }));
}
