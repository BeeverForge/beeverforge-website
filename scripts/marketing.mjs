import { copy } from './marketing-copy.mjs';
import { blogTeaser, blogView } from './blog.mjs';
import { productionGuideSlug } from './blog-content.mjs';

const origin = 'https://beeverforge.com';
const core = 'https://github.com/BeeverForge/beeverforge-oss';
export const themeScript = "try{document.documentElement.dataset.theme=localStorage.getItem('beeverforge-theme')==='light'?'light':'dark'}catch{document.documentElement.dataset.theme='dark'}";
const esc = (s) => String(s).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const castello = 'https://castellosoft.com.br/';
const arrow = '<span aria-hidden="true">↗</span>';
const button = (href, text, style = 'button-gold', extra = '') => `<a class="button ${style}" href="${href}" ${extra}>${text}${arrow}</a>`;

export function marketingChrome(locale, sub = '') {
  const t = copy[locale];
  return {
    skip: `<a class="skip-link" href="#main">${t.skip}</a>`,
    header: `<header class="site-header"><div class="shell header-inner">
      <a class="brand" href="${t.path}" aria-label="BeeverForge"><img src="/assets/logo-dark.svg" alt="BeeverForge" width="240" height="74"></a>
      <button class="menu-toggle" type="button" aria-controls="site-nav" aria-expanded="false">${t.menu}<span aria-hidden="true">☰</span></button>
      <nav id="site-nav" class="site-nav" aria-label="${t.menu}">
        <a href="${t.path}#product">${t.product}</a><a href="${t.path}pricing/"${sub === 'pricing/' ? ' aria-current="page"' : ''}>${t.pricing}</a>
        <a href="${t.path}blog/"${sub.startsWith('blog/') ? ' aria-current="page"' : ''}>${t.blog}</a><details class="resource-menu"><summary>${t.resources}<span aria-hidden="true">⌄</span></summary><div><a href="${t.path}architecture/">${t.docs}${arrow}</a><a href="${core}">${t.oss}${arrow}</a></div></details>
        <a class="nav-cta" href="${t.path}#contact">${t.enterpriseCta}${arrow}</a>
      </nav>
      <div class="header-tools"><label class="language-picker"><span class="sr-only">${t.language}</span><select aria-label="${t.language}" data-language>${Object.entries(copy).map(([l, v]) => `<option value="${v.path}${sub}"${l === locale ? ' selected' : ''}>${{ en: 'EN', es: 'ES', pt: 'PT' }[l]}</option>`).join('')}</select></label><button class="theme-toggle" type="button" data-theme-toggle aria-label="${t.theme}"><span aria-hidden="true">◐</span></button></div>
    </div></header>`,
    consent: `<aside class="consent-panel" data-consent-panel role="region" aria-labelledby="consent-title" hidden><div class="consent-copy"><h2 id="consent-title">${t.cookieTitle}</h2><p>${t.cookieText}</p></div><div class="consent-actions"><button class="consent-reject" type="button" data-consent-reject>${t.reject}</button><button class="consent-settings" type="button" data-consent-details-toggle aria-expanded="false" aria-controls="consent-details">${t.cookies}</button><button class="button button-gold" type="button" data-consent-accept>${t.accept}</button></div><div class="consent-details" id="consent-details" data-consent-details hidden><h3>${t.cookies}</h3><p>${t.essential}</p><label class="consent-toggle"><input type="checkbox" data-analytics-toggle><span><strong>${t.analytics}</strong><small>${t.analyticsText}</small></span></label><div class="consent-detail-actions"><button class="consent-reject" type="button" data-consent-cancel>${t.cancel}</button><button class="button button-gold" type="button" data-consent-save>${t.save}</button></div></div></aside>`,
    footer: `<footer class="site-footer"><div class="shell footer-grid"><div class="footer-brand"><a href="${t.path}"><img src="/assets/logo-dark.svg" alt="BeeverForge" width="240" height="74"></a><p>${t.footerText}</p></div><nav aria-label="${t.product}"><a href="${t.path}#product">${t.product}</a><a href="${t.path}pricing/">${t.pricing}</a><a href="${t.path}#brasil">${t.brazil[0]}</a></nav><nav aria-label="${t.resources}"><a href="${t.path}blog/">${t.blog}</a><a href="${t.path}architecture/">${t.docs}</a><a href="${core}">${t.oss}${arrow}</a><a href="mailto:contact@beeverforge.com">contact@beeverforge.com</a><button class="consent-link" type="button" data-consent-open>${t.cookies}</button></nav></div><div class="shell footer-bottom"><span>© 2026 BeeverForge</span><div><a href="${t.path}legal/terms/">${t.terms}</a><a href="${t.path}legal/privacy/">${t.privacyLink}</a><a href="${t.path}legal/acceptable-use/">${t.acceptable}</a></div></div></footer>`,
  };
}

function planSection(t, compact) {
  return `<section class="m-section m-plans" id="plans" aria-labelledby="plans-title"><div class="shell">
    ${compact ? `<div class="m-section-head"><div><p class="eyebrow">${t.planEyebrow}</p><h2 id="plans-title">${t.planTitle}</h2></div><p>${t.planLead}</p></div>` : `<h2 id="plans-title" class="sr-only">${t.planTitle.replace(/<br>/g, " ")}</h2>`}
    <div class="m-plan-grid">
      <article class="m-plan m-plan-enterprise" id="enterprise">
        <div class="m-plan-top"><h3>Enterprise</h3><span>${t.enterpriseTag}</span></div>
        <p class="m-plan-intro">${t.enterpriseIntro}</p>
        <p class="m-plan-price m-plan-quote"><strong>${t.enterprisePrice}</strong></p>
        <p class="m-tax">${t.enterpriseTerms}</p>
        ${button(`${t.path}#contact`, t.enterpriseCta)}
        <ul>${t.enterpriseFeatures.map(feature => `<li><span aria-hidden="true">✓</span>${feature}</li>`).join('')}</ul>
      </article>
      ${brazil(t)}
    </div>
    <p class="m-cost-rule">${t.costRule}</p>
    ${assisted(t)}
  </div></section>`;
}
function brazil(t) {
  const [title, text, quote, fink] = t.brazil;
  return `<article class="m-brazil" id="brasil">
    <img src="/assets/fink-logo.webp" width="80" height="80" loading="lazy" alt="Fink">
    <h3>${title}</h3>
    <p>${text}</p>
    ${button(`${castello}#beeverforge`, quote, 'button-outline')}
    <a class="text-link" href="${castello}#experiencia">${fink}${arrow}</a>
  </article>`;
}
function assisted(t) {
  return `<article class="m-assisted m-automation-journey" id="assisted"><div class="m-automation-heading"><p class="eyebrow">${t.assistedEyebrow}</p><h3>${t.assistedTitle}</h3><p>${t.assistedText}</p></div><ol class="m-automation-roles">${t.automationRoles.map(([title, owner, text], i) => `<li><span class="m-role-number" aria-hidden="true">0${i + 1}</span><h4>${title}</h4><p class="m-role-owner">${owner}</p><p class="m-role-description">${text}</p></li>`).join('')}</ol><p class="m-automation-approval">${t.automationApproval}</p><div class="m-automation-actions">${button(`${t.path}#contact`, t.automationCta, 'button-gold', 'data-interest="0"')}<a class="text-link" href="${t.path}#contact" data-interest="1">${t.assistedCta}${arrow}</a></div><p class="m-assisted-note">${t.assistedNote}</p></article>`;
}
function faq(t) {
  return `<section class="m-section m-faq" id="questions"><div class="shell m-faq-grid"><div><p class="eyebrow">${t.faqEyebrow}</p><h2>${t.faqTitle}</h2></div><div class="faq-list">${t.faqs.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div></div></section>`;
}
function finalCta(t) {
  return `<section class="m-section m-final"><div class="shell"><p class="eyebrow">${t.finalEyebrow}</p><h2>${t.finalTitle}</h2><p>${t.finalText}</p>${button(`${t.path}#contact`, t.enterpriseCta)}</div></section>`;
}
function contact(t) {
  return `<section class="m-section m-contact" id="contact"><div class="shell m-contact-grid"><div><p class="eyebrow">${t.contactEyebrow}</p><h2>${t.contactTitle}</h2><p>${t.contactText}</p><a class="text-link" href="mailto:contact@beeverforge.com">contact@beeverforge.com${arrow}</a></div><form class="inquiry-form" data-inquiry-form data-endpoint="https://beeverforge-contact.80-pereira.workers.dev/contact" data-source="website" data-success-url="${t.path}thank-you/" data-pending-message="${esc(t.pending)}" data-error-message="${esc(t.error)}" data-unavailable-message="${esc(t.unavailable)}"><div class="form-trap" aria-hidden="true"><label>Website<input name="website" tabindex="-1" autocomplete="off"></label></div><div class="form-pair"><label for="contact-name">${t.name}<input id="contact-name" name="name" autocomplete="name" maxlength="120" required></label><label for="contact-email">${t.email}<input id="contact-email" type="email" name="email" autocomplete="email" maxlength="254" required></label></div><label for="contact-company">${t.companyLabel}<input id="contact-company" name="company" autocomplete="organization" maxlength="160" required></label><label for="contact-interest">${t.interest}<select id="contact-interest" name="interest">${t.interests.map((x) => `<option>${x}</option>`).join('')}</select></label><label for="contact-message">${t.message}<textarea id="contact-message" name="message" rows="4" minlength="10" maxlength="5000" placeholder="${esc(t.placeholder)}" required></textarea></label><p class="form-privacy">${t.privacy}</p><button class="button button-gold" type="submit">${t.send}${arrow}</button><p class="form-status" role="status" aria-live="polite"></p></form></div></section>`;
}
function freedom(t) {
  return `<section class="m-section m-freedom" id="model-choice"><div class="shell"><div class="m-section-head"><div><p class="eyebrow">${t.freedomEyebrow}</p><h2>${t.freedomTitle}</h2></div><p>${t.freedomLead}</p></div><ul class="m-provider-list" aria-label="${t.providerLabel}">${t.providerNames.map((name) => `<li>${name}</li>`).join('')}</ul><div class="m-freedom-grid">${t.freedomCards.map(([h,p],i) => `<article><span aria-hidden="true">0${i+1}</span><h3>${h}</h3><p>${p}</p></article>`).join('')}</div><p class="m-provider-note">${t.freedomNote}</p><a class="text-link" href="${t.path}blog/${productionGuideSlug}/#model-choice">${t.freedomLink}${arrow}</a></div></section>`;
}
function home(t, locale) {
  return `<main id="main" class="marketing-main">
    <section class="m-hero"><div class="shell m-hero-grid"><div class="m-hero-copy"><p class="eyebrow"><span class="gold-dot" aria-hidden="true"></span>${t.eyebrow}</p><h1>${t.hero}</h1><p class="lead">${t.lead}</p><div class="actions">${button(`${t.path}#contact`, t.enterpriseCta)}</div><a class="text-link m-hero-brazil" href="#brasil">${t.brazil[0]}${arrow}</a></div>
    <figure class="m-video" id="walkthrough"><div class="m-video-top"><span class="m-video-dot" aria-hidden="true"></span><span>BEEVERFORGE / WALKTHROUGH</span><span>01 → 06</span></div><div class="m-video-stage"><video controls playsinline preload="none" poster="/assets/video-poster.jpg" width="1280" height="720" aria-label="${t.videoTitle}" aria-describedby="video-description"><source src="/assets/beeverforge-overview.mp4" type="video/mp4"><a href="/assets/beeverforge-overview.mp4">${t.videoFallback}</a></video></div><figcaption><strong>${t.videoHeading}</strong><span>${t.videoLang}</span></figcaption><details class="m-video-summary"><summary>${t.videoSummary}</summary><p id="video-description">${t.videoText}</p></details></figure></div>
    <div class="shell m-trust-strip">${t.strip.map((s) => `<span><span aria-hidden="true">✓</span>${s}</span>`).join('')}</div></section>
    <section class="m-section m-process" id="product"><div class="shell"><div class="m-section-head"><div><p class="eyebrow">${t.missionEyebrow}</p><h2>${t.missionTitle}</h2></div><p>${t.missionLead}</p></div><ol class="m-process-grid">${t.steps.map(([h, p, o], i) => `<li><span class="m-step">0${i + 1}<span aria-hidden="true">${['↗', '≋', '→'][i]}</span></span><h3>${h}</h3><p>${p}</p><div class="m-output"><span aria-hidden="true">↳</span>${o}</div></li>`).join('')}</ol><a class="text-link m-process-link" href="${t.path}blog/${productionGuideSlug}/#factory">${t.missionLink}${arrow}</a></div></section>
    ${freedom(t)}${planSection(t, true)}${faq(t)}${blogTeaser(locale)}${finalCta(t)}${contact(t)}
    <section class="m-open"><div class="shell"><div><h2>${t.openTitle}</h2><p>${t.openText}</p></div><a class="text-link" href="${core}">${t.openCta}${arrow}</a></div></section>
  </main>`;
}
function pricing(t) {
  return `<main id="main" class="marketing-main"><section class="m-pricing-hero"><div class="shell"><p class="eyebrow">${t.pricing}</p><h1>${t.pricingHero}</h1><p class="lead">${t.pricingLead}</p><a class="text-link" href="${t.path}#contact">${t.enterpriseCta} ${arrow}</a></div></section>${planSection(t, false)}<section class="m-section m-costs"><div class="shell"><p class="eyebrow">${t.controlEyebrow}</p><h2>${t.controlTitle}</h2><div class="m-cost-grid">${t.costs.map(([h, p], i) => `<article><span>0${i + 1}</span><h3>${h}</h3><p>${p}</p></article>`).join('')}</div></div></section>${faq(t)}${finalCta(t)}</main>`;
}

export function marketingPage(locale, sub = '') {
  const t = copy[locale];
  const c = marketingChrome(locale, sub);
  const isPricing = sub === 'pricing/';
  const editorial = sub.startsWith('blog/') ? blogView(locale, sub) : null;
  const title = editorial?.title || (isPricing ? t.pricingTitle : t.title);
  const description = editorial?.description || (isPricing ? t.pricingDescription : t.description);
  const url = `${origin}${t.path}${sub}`;
  const schema = [
    { '@context': 'https://schema.org', '@type': 'Organization', name: 'BeeverForge', url: origin, logo: `${origin}/assets/logo-light.svg`, email: 'contact@beeverforge.com', sameAs: ['https://github.com/BeeverForge'] },
    ...(!editorial ? [{ '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'BeeverForge', applicationCategory: 'DeveloperApplication', operatingSystem: 'Web', url, description, offers: [{ '@type': 'Offer', name: 'BeeverForge Enterprise', url: `${origin}${t.path}pricing/#enterprise`, description: `${t.enterpriseIntro} ${t.enterpriseTerms}` }] }] : editorial.schema),
    ...(!isPricing && !editorial ? [{ '@context': 'https://schema.org', '@type': 'VideoObject', name: 'BeeverForge — From idea to software', description: t.videoText, thumbnailUrl: `${origin}/assets/video-poster.jpg`, contentUrl: `${origin}/assets/beeverforge-overview.mp4`, uploadDate: '2026-10-31T00:00:00+00:00', duration: 'PT2M33S', inLanguage: 'en', embedUrl: `${url}#walkthrough` }] : []),
  ];
  return `<!doctype html>
<html lang="${t.lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="index,follow,max-image-preview:large"><meta name="theme-color" content="#18191D"><title>${esc(title)}</title><meta name="description" content="${esc(description)}"><link rel="canonical" href="${url}">
${Object.values(copy).map((l) => `<link rel="alternate" hreflang="${l.lang}" href="${origin}${l.path}${sub}">`).join('\n')}<link rel="alternate" hreflang="x-default" href="${origin}/${sub}">
<meta property="og:type" content="${editorial && sub !== 'blog/' ? 'article' : 'website'}"><meta property="og:site_name" content="BeeverForge"><meta property="og:locale" content="${t.og}"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${url}"><meta property="og:image" content="${editorial?.ogImage || `${origin}/assets/og-beeverforge.png`}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">${editorial?.ogImageAlt ? `<meta property="og:image:alt" content="${esc(editorial.ogImageAlt)}">` : ''}<meta name="twitter:card" content="summary_large_image"><link rel="icon" href="/assets/favicon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/assets/apple-touch-icon.png"><link rel="stylesheet" href="/assets/final.css"><link rel="stylesheet" href="/assets/marketing.css?v=enterprise-br-20261113"><link rel="stylesheet" href="/assets/journal.css?v=journal-20261113">${editorial ? `<link rel="alternate" type="application/rss+xml" title="BeeverForge Journal" href="${t.path}blog/feed.xml">` : ''}<script>${themeScript}</script>
${schema.map((s) => `<script type="application/ld+json">${JSON.stringify(s).replaceAll('<', '\\u003c')}</script>`).join('\n')}
${editorial?.articleDate ? `<meta property="article:published_time" content="${editorial.articleDate}T00:00:00+00:00"><meta property="article:modified_time" content="${editorial.articleDate}T00:00:00+00:00">` : ''}
</head><body class="marketing-body">${c.skip}${c.header}${editorial?.main || (isPricing ? pricing(t) : home(t, locale))}${c.consent}${c.footer}<script src="/assets/final.js" defer></script><script src="/assets/marketing.js" defer></script>${editorial ? '<script src="/assets/journal.js" defer></script>' : ''}${!isPricing && !editorial ? '<script src="/assets/site.js" defer></script>' : ''}</body></html>\n`;
}
