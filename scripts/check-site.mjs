import { readFile, access, stat } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { copy, plans } from './marketing-copy.mjs';

// Verify the generated public experience, including every local destination and
// fragment reachable from the home, pricing, trial, legal and documentation pages.
const root = new URL('../', import.meta.url);
const sitemap = await readFile(new URL('sitemap.xml', root), 'utf8');
const paths = [...sitemap.matchAll(/<loc>https:\/\/beeverforge\.com\/([^<]*)<\/loc>/g)].map((m) => m[1]);
assert(paths.length > 30, 'The sitemap must retain localized documentation and legal pages');
const checked = new Map();
const load = async (path) => {
  if (!checked.has(path)) checked.set(path, await readFile(new URL(path || 'index.html', root), 'utf8'));
  return checked.get(path);
};
let links = 0;
for (const path of paths) {
  const filename = `${path}index.html`;
  const html = await load(filename);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${filename}: one H1`);
  assert(html.includes(`rel="canonical" href="https://beeverforge.com/${path}"`), `${filename}: canonical`);
  assert(!html.includes('content="noindex'), `${filename}: sitemap points only at indexable pages`);
  for (const lang of ['en', 'es', 'pt-BR', 'x-default']) assert(html.includes(`hreflang="${lang}"`), `${filename}: ${lang} alternate`);
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  assert.equal(ids.length, new Set(ids).size, `${filename}: unique IDs`);
  for (const [, attr, raw] of html.matchAll(/\b(href|src|poster)="([^"\s]+)"/g)) {
    const url = new URL(raw.replaceAll('&amp;', '&'), `https://beeverforge.com/${path}`);
    if (url.origin !== 'https://beeverforge.com') continue;
    let destination = decodeURIComponent(url.pathname).slice(1);
    if (!destination || destination.endsWith('/')) destination += 'index.html';
    await access(new URL(destination, root));
    if (attr === 'href' && url.hash && destination.endsWith('.html')) {
      const target = await load(destination);
      assert(target.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `${filename}: missing anchor ${raw}`);
    }
    links++;
  }
}
for (const [locale, t] of Object.entries(copy)) {
  for (const sub of ['', 'pricing/']) {
    const html = await load(`${t.path.slice(1)}${sub}index.html`);
    assert(!/\b(Business|Enterprise|Community)\b/.test(html), `${locale} ${sub}: legacy editions must not compete with subscriptions`);
    assert(html.includes(`<html lang="${t.lang}">`), `${locale}: language`);
    const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
    const app = schemas.find((s) => s['@type'] === 'SoftwareApplication');
    assert.deepEqual(app.offers.map((o) => o.price), plans.map((p) => p.price));
    assert.equal((html.match(/class="m-plan(?: m-plan-team)?"/g) || []).length, 2);
    for (const id of ['prototype', 'team']) assert(app.offers.some((o) => o.name.toLowerCase().endsWith(id)));
    if (!sub) {
      assert(html.includes('preload="none"'), `${locale}: no initial video download`);
      assert(!html.includes('autoplay'), `${locale}: no autoplay`);
      assert(schemas.some((s) => s['@type'] === 'VideoObject'));
    }
  }
}
assert((await stat(new URL('assets/beeverforge-overview.mp4', root))).size < 15_000_000, 'Keep the supplied light video');
console.log(`Verified ${paths.length} sitemap pages, ${links} local links/assets, three languages, shared plan offers and on-demand video.`);
