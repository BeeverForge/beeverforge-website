import { articles } from './blog-content.mjs';
import { copy } from './marketing-copy.mjs';

const origin = 'https://beeverforge.com';
const esc = (s) => String(s).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
export const blogRoutes = ['blog/', ...articles.map((a) => `blog/${a.slug}/`)];
const date = (t, value) => new Intl.DateTimeFormat(t.locale, { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T00:00:00Z`));
function cards(locale, current = '') {
  const t = copy[locale];
  return `<div class="m-editorial-grid">${articles.filter((a) => a.slug !== current).map((a, index) => {
    const c = a[locale];
    return `<article class="m-editorial-card"><div class="m-editorial-mark" aria-hidden="true"><span>0${index + 1}</span><span>${a === articles[0] ? 'IDEA → PRODUCTION' : 'MODEL ↔ CHOICE'}</span></div><p class="eyebrow">${c.category}</p><h3><a href="${t.path}blog/${a.slug}/">${c.title}</a></h3><p>${c.summary}</p><a class="text-link" href="${t.path}blog/${a.slug}/">${t.blogRead}<span aria-hidden="true">↗</span></a></article>`;
  }).join('')}</div>`;
}
export function blogTeaser(locale) {
  const t = copy[locale];
  return `<section class="m-section m-editorial"><div class="shell"><div class="m-section-head"><div><p class="eyebrow">${t.blogEyebrow}</p><h2>${t.blogTitle}</h2></div><div><p>${t.blogLead}</p><a class="text-link" href="${t.path}blog/">${t.blogAll}<span aria-hidden="true">↗</span></a></div></div>${cards(locale)}</div></section>`;
}
export function blogView(locale, sub) {
  const t = copy[locale];
  const slug = sub.slice('blog/'.length).replace(/\/$/, '');
  const article = articles.find((a) => a.slug === slug);
  if (!slug) return {
    title: `${t.blog} — ${t.blogEyebrow} | BeeverForge`, description: t.blogLead,
    main: `<main id="main" class="marketing-main"><section class="m-section m-blog-index"><div class="shell"><p class="eyebrow">${t.blog}</p><h1>${t.blogTitle}</h1><p class="lead">${t.blogLead}</p>${cards(locale)}</div></section></main>`,
    schema: [{ '@context': 'https://schema.org', '@type': 'Blog', name: `BeeverForge ${t.blog}`, url: `${origin}${t.path}blog/`, inLanguage: t.lang, blogPost: articles.map((a) => ({ '@type': 'BlogPosting', headline: a[locale].title, url: `${origin}${t.path}blog/${a.slug}/`, datePublished: a.date })) }],
  };
  if (!article) throw new Error(`Unknown blog route: ${sub}`);
  const a = article[locale];
  const url = `${origin}${t.path}${sub}`;
  return {
    title: `${a.title} | BeeverForge`, description: a.summary,
    main: `<main id="main" class="marketing-main"><article class="m-article"><header class="shell m-article-head"><a class="text-link" href="${t.path}blog/">← ${t.blogBack}</a><p class="eyebrow">${a.category}</p><h1>${a.title}</h1><p class="m-article-meta">${t.blogAuthor} · <time datetime="${article.date}">${date(t, article.date)}</time></p><p class="lead">${a.lead}</p></header><div class="shell m-article-layout"><nav class="m-article-toc" aria-label="${t.blog}"><ol>${a.sections.map(([heading], i) => `<li><a href="#section-${i + 1}">${heading}</a></li>`).join('')}</ol></nav><div class="m-article-body">${a.sections.map(([heading, paragraph], i) => `<section id="section-${i + 1}"><h2>${heading}</h2><p>${paragraph}</p></section>`).join('')}<section class="m-article-sources"><h2>${t.blogSources}</h2><ul>${article.sources.map(([label, href]) => `<li><a href="${esc(href)}" rel="noopener">${esc(label)}<span aria-hidden="true">↗</span></a></li>`).join('')}</ul></section><div class="m-article-cta"><a class="button button-gold" href="${t.path}#contact">${t.blogCta}<span aria-hidden="true">↗</span></a></div></div></div></article><section class="m-section m-editorial"><div class="shell"><p class="eyebrow">${t.blogRelated}</p>${cards(locale, slug)}</div></section></main>`,
    schema: [
      { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: a.title, description: a.summary, datePublished: `${article.date}T00:00:00+00:00`, dateModified: `${article.date}T00:00:00+00:00`, inLanguage: t.lang, mainEntityOfPage: url, author: { '@type': 'Organization', name: 'BeeverForge', url: origin }, publisher: { '@type': 'Organization', name: 'BeeverForge', logo: { '@type': 'ImageObject', url: `${origin}/assets/og-beeverforge.png` } }, image: `${origin}/assets/og-beeverforge.png`, citation: article.sources.map((s) => s[1]) },
      { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'BeeverForge', item: `${origin}${t.path}` }, { '@type': 'ListItem', position: 2, name: t.blog, item: `${origin}${t.path}blog/` }, { '@type': 'ListItem', position: 3, name: a.title, item: url }] },
    ],
  };
}
