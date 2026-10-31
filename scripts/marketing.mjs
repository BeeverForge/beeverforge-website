import { copy, plans, assistedPrice } from './marketing-copy.mjs';

const origin = 'https://beeverforge.com';
const core = 'https://github.com/BeeverForge/beeverforge-oss';
export const themeScript = "try{document.documentElement.dataset.theme=localStorage.getItem('beeverforge-theme')==='light'?'light':'dark'}catch{document.documentElement.dataset.theme='dark'}";
const esc = (s) => String(s).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const money = (t, n) => new Intl.NumberFormat(t.locale, { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);
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
        <details class="resource-menu"><summary>${t.resources}<span aria-hidden="true">⌄</span></summary><div><a href="${t.path}architecture/">${t.docs}${arrow}</a><a href="${core}">${t.oss}${arrow}</a></div></details>
        <a class="sign-in" href="https://app.beeverforge.com">${t.signin}</a><a class="nav-cta" href="${t.path}try/#waitlist">${t.trial}${arrow}</a>
      </nav>
      <div class="header-tools"><label class="language-picker"><span class="sr-only">${t.language}</span><select aria-label="${t.language}" data-language>${Object.entries(copy).map(([l, v]) => `<option value="${v.path}${sub}"${l === locale ? ' selected' : ''}>${{ en: 'EN', es: 'ES', pt: 'PT' }[l]}</option>`).join('')}</select></label><button class="theme-toggle" type="button" data-theme-toggle aria-label="${t.theme}"><span aria-hidden="true">◐</span></button></div>
    </div></header>`,
    consent: `<aside class="consent-panel" data-consent-panel role="region" aria-labelledby="consent-title" hidden><div class="consent-copy"><h2 id="consent-title">${t.cookieTitle}</h2><p>${t.cookieText}</p></div><div class="consent-actions"><button class="consent-reject" type="button" data-consent-reject>${t.reject}</button><button class="consent-settings" type="button" data-consent-details-toggle aria-expanded="false" aria-controls="consent-details">${t.cookies}</button><button class="button button-gold" type="button" data-consent-accept>${t.accept}</button></div><div class="consent-details" id="consent-details" data-consent-details hidden><h3>${t.cookies}</h3><p>${t.essential}</p><label class="consent-toggle"><input type="checkbox" data-analytics-toggle><span><strong>${t.analytics}</strong><small>${t.analyticsText}</small></span></label><div class="consent-detail-actions"><button class="consent-reject" type="button" data-consent-cancel>${t.cancel}</button><button class="button button-gold" type="button" data-consent-save>${t.save}</button></div></div></aside>`,
    footer: `<footer class="site-footer"><div class="shell footer-grid"><div class="footer-brand"><a href="${t.path}"><img src="/assets/logo-dark.svg" alt="BeeverForge" width="240" height="74"></a><p>${t.footerText}</p></div><nav aria-label="${t.product}"><a href="${t.path}#product">${t.product}</a><a href="${t.path}pricing/">${t.pricing}</a><a href="${t.path}try/">${t.trial}</a><a href="https://app.beeverforge.com">${t.signin}</a></nav><nav aria-label="${t.resources}"><a href="${t.path}architecture/">${t.docs}</a><a href="${core}">${t.oss}${arrow}</a><a href="mailto:contact@beeverforge.com">contact@beeverforge.com</a><button class="consent-link" type="button" data-consent-open>${t.cookies}</button></nav></div><div class="shell footer-bottom"><span>© 2026 BeeverForge</span><div><a href="${t.path}legal/terms/">${t.terms}</a><a href="${t.path}legal/privacy/">${t.privacyLink}</a><a href="${t.path}legal/acceptable-use/">${t.acceptable}</a></div></div></footer>`,
  };
}

function planSection(t, compact) {
  return `<section class="m-section m-plans" id="plans" aria-labelledby="plans-title"><div class="shell">
    ${compact ? `<div class="m-section-head"><div><p class="eyebrow">${t.planEyebrow}</p><h2 id="plans-title">${t.planTitle}</h2></div><p>${t.planLead}</p></div>` : `<h2 id="plans-title" class="sr-only">${t.planTitle.replace(/<br>/g, " ")}</h2>`}
    <div class="m-plan-grid">${plans.map((p, i) => `<article class="m-plan${i ? ' m-plan-team' : ''}"><div class="m-plan-top"><h3>${p.name}</h3><span>${i ? t.teamTag : t.prototypeTag}</span></div><p class="m-plan-intro">${i ? t.teamIntro : t.prototypeIntro}</p><p class="m-plan-price"><strong>${money(t, p.price)}</strong><span>${t.month}<small>${t.company}</small></span></p><p class="m-tax">${t.tax}</p>${button(i ? `${t.path}#contact` : `${t.path}try/#waitlist`, i ? t.teamCta : t.prototypeCta, i ? 'button-gold' : 'button-outline', i ? 'data-interest="0"' : '')}<ul>${(i ? t.teamFeatures : t.prototypeFeatures).map((f) => `<li><span aria-hidden="true">✓</span>${f}</li>`).join('')}</ul></article>`).join('')}</div>
    <p class="m-plan-rule"><span aria-hidden="true">↳</span> ${t.planRule}</p><p class="m-cost-rule">${t.costRule}</p><p class="m-availability">${t.availability} <a href="mailto:contact@beeverforge.com">contact@beeverforge.com ${arrow}</a></p>
    ${assisted(t, compact)}
  </div></section>`;
}
function assisted(t, compact) {
  return `<article class="m-assisted" id="assisted"><div><p class="eyebrow">${t.assistedEyebrow}</p><h3>${t.assistedTitle}</h3><p>${t.assistedText}</p></div><div class="m-assisted-price"><span>${t.assistedFrom}</span><strong>${money(t, assistedPrice)}</strong><span>${t.once} · ${t.tax}</span><a class="text-link" href="${t.path}#contact" data-interest="2">${t.assistedCta}${arrow}</a></div><p class="m-assisted-note">${t.assistedNote}</p>${!compact ? `<ol class="m-assisted-steps">${t.assistedSteps.map(([h, p], i) => `<li><span>0${i + 1}</span><h4>${h}</h4><p>${p}</p></li>`).join('')}</ol>` : ''}</article>`;
}
function faq(t) {
  return `<section class="m-section m-faq" id="questions"><div class="shell m-faq-grid"><div><p class="eyebrow">${t.faqEyebrow}</p><h2>${t.faqTitle}</h2></div><div class="faq-list">${t.faqs.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div></div></section>`;
}
function finalCta(t) {
  return `<section class="m-section m-final"><div class="shell"><p class="eyebrow">${t.finalEyebrow}</p><h2>${t.finalTitle}</h2><p>${t.finalText}</p>${button(`${t.path}try/#waitlist`, t.trial)}</div></section>`;
}
function contact(t) {
  return `<section class="m-section m-contact" id="contact"><div class="shell m-contact-grid"><div><p class="eyebrow">${t.contactEyebrow}</p><h2>${t.contactTitle}</h2><p>${t.contactText}</p><a class="text-link" href="mailto:contact@beeverforge.com">contact@beeverforge.com${arrow}</a></div><form class="inquiry-form" data-inquiry-form data-endpoint="https://beeverforge-contact.80-pereira.workers.dev/contact" data-source="website" data-success-url="${t.path}thank-you/" data-pending-message="${esc(t.pending)}" data-error-message="${esc(t.error)}" data-unavailable-message="${esc(t.unavailable)}"><div class="form-trap" aria-hidden="true"><label>Website<input name="website" tabindex="-1" autocomplete="off"></label></div><div class="form-pair"><label for="contact-name">${t.name}<input id="contact-name" name="name" autocomplete="name" maxlength="120" required></label><label for="contact-email">${t.email}<input id="contact-email" type="email" name="email" autocomplete="email" maxlength="254" required></label></div><label for="contact-company">${t.companyLabel}<input id="contact-company" name="company" autocomplete="organization" maxlength="160" required></label><label for="contact-interest">${t.interest}<select id="contact-interest" name="interest">${t.interests.map((x) => `<option>${x}</option>`).join('')}</select></label><label for="contact-message">${t.message}<textarea id="contact-message" name="message" rows="4" minlength="10" maxlength="5000" placeholder="${esc(t.placeholder)}" required></textarea></label><p class="form-privacy">${t.privacy}</p><button class="button button-gold" type="submit">${t.send}${arrow}</button><p class="form-status" role="status" aria-live="polite"></p></form></div></section>`;
}
function home(t) {
  return `<main id="main" class="marketing-main">
    <section class="m-hero"><div class="shell m-hero-grid"><div class="m-hero-copy"><p class="eyebrow"><span class="gold-dot" aria-hidden="true"></span>${t.eyebrow}</p><h1>${t.hero}</h1><p class="lead">${t.lead}</p><div class="actions">${button(`${t.path}try/#waitlist`, t.trial)}<a class="m-watch" href="#walkthrough"><span aria-hidden="true">▷</span>${t.watch}</a></div><p class="m-trial-note">${t.trialNote}</p><p class="m-subscription">${t.from} <strong>${money(t, plans[0].price)}${t.month}</strong><a href="${t.path}pricing/">${t.pricingLink}${arrow}</a></p></div>
    <figure class="m-video" id="walkthrough"><div class="m-video-top"><span class="m-video-dot" aria-hidden="true"></span><span>BEEVERFORGE / WALKTHROUGH</span><span>01 → 06</span></div><div class="m-video-stage"><video controls playsinline preload="none" poster="/assets/video-poster.jpg" width="1280" height="720" aria-label="${t.videoTitle}" aria-describedby="video-description"><source src="/assets/beeverforge-overview.mp4" type="video/mp4"><a href="/assets/beeverforge-overview.mp4">${t.videoFallback}</a></video></div><figcaption><strong>${t.videoHeading}</strong><span>${t.videoLang}</span></figcaption><details class="m-video-summary"><summary>${t.videoSummary}</summary><p id="video-description">${t.videoText}</p></details></figure></div>
    <div class="shell m-trust-strip">${t.strip.map((s) => `<span><span aria-hidden="true">✓</span>${s}</span>`).join('')}</div></section>
    <section class="m-section m-process" id="product"><div class="shell"><div class="m-section-head"><div><p class="eyebrow">${t.processEyebrow}</p><h2>${t.processTitle}</h2></div><p>${t.processLead}</p></div><ol class="m-process-grid">${t.steps.map(([h, p, o], i) => `<li><span class="m-step">0${i + 1}<span aria-hidden="true">${['↗', '≋', '→'][i]}</span></span><h3>${h}</h3><p>${p}</p><div class="m-output"><span aria-hidden="true">↳</span>${o}</div></li>`).join('')}</ol></div></section>
    ${planSection(t, true)}${faq(t)}${finalCta(t)}${contact(t)}
    <section class="m-open"><div class="shell"><div><h2>${t.openTitle}</h2><p>${t.openText}</p></div><a class="text-link" href="${core}">${t.openCta}${arrow}</a></div></section>
  </main>`;
}
function pricing(t) {
  return `<main id="main" class="marketing-main"><section class="m-pricing-hero"><div class="shell"><p class="eyebrow">${t.pricing}</p><h1>${t.pricingHero}</h1><p class="lead">${t.pricingLead}</p><a class="text-link" href="${t.path}try/#waitlist">${t.trial} ${arrow}</a><p class="m-trial-note">${t.trialNote}</p></div></section>${planSection(t, false)}<section class="m-section m-costs"><div class="shell"><p class="eyebrow">${t.controlEyebrow}</p><h2>${t.controlTitle}</h2><div class="m-cost-grid">${t.costs.map(([h, p], i) => `<article><span>0${i + 1}</span><h3>${h}</h3><p>${p}</p></article>`).join('')}</div></div></section>${faq(t)}${finalCta(t)}</main>`;
}

export function marketingPage(locale, sub = '') {
  const t = copy[locale];
  const c = marketingChrome(locale, sub);
  const isPricing = sub === 'pricing/';
  const title = isPricing ? t.pricingTitle : t.title;
  const description = isPricing ? t.pricingDescription : t.description;
  const url = `${origin}${t.path}${sub}`;
  const schema = [
    { '@context': 'https://schema.org', '@type': 'Organization', name: 'BeeverForge', url: origin, logo: `${origin}/assets/logo-light.svg`, email: 'contact@beeverforge.com', sameAs: ['https://github.com/BeeverForge'] },
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'BeeverForge', applicationCategory: 'DeveloperApplication', operatingSystem: 'Web', url, description, offers: plans.map((p) => ({ '@type': 'Offer', name: `BeeverForge ${p.name}`, price: p.price, priceCurrency: 'EUR', url: `${origin}${t.path}pricing/`, description: t.availability, priceSpecification: { '@type': 'UnitPriceSpecification', price: p.price, priceCurrency: 'EUR', unitText: 'MONTH', referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitText: 'company' } } })) },
    ...(!isPricing ? [{ '@context': 'https://schema.org', '@type': 'VideoObject', name: 'BeeverForge — From idea to software', description: t.videoText, thumbnailUrl: `${origin}/assets/video-poster.jpg`, contentUrl: `${origin}/assets/beeverforge-overview.mp4`, uploadDate: '2026-10-31T00:00:00+00:00', duration: 'PT2M33S', inLanguage: 'en', embedUrl: `${url}#walkthrough` }] : []),
  ];
  return `<!doctype html>
<html lang="${t.lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="index,follow,max-image-preview:large"><meta name="theme-color" content="#18191D"><title>${title}</title><meta name="description" content="${esc(description)}"><link rel="canonical" href="${url}">
${Object.values(copy).map((l) => `<link rel="alternate" hreflang="${l.lang}" href="${origin}${l.path}${sub}">`).join('\n')}<link rel="alternate" hreflang="x-default" href="${origin}/${sub}">
<meta property="og:type" content="website"><meta property="og:site_name" content="BeeverForge"><meta property="og:locale" content="${t.og}"><meta property="og:title" content="${title}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${url}"><meta property="og:image" content="${origin}/assets/og-beeverforge.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta name="twitter:card" content="summary_large_image"><link rel="icon" href="/assets/favicon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/assets/apple-touch-icon.png"><link rel="stylesheet" href="/assets/final.css"><link rel="stylesheet" href="/assets/marketing.css"><script>${themeScript}</script>
${schema.map((s) => `<script type="application/ld+json">${JSON.stringify(s).replaceAll('<', '\\u003c')}</script>`).join('\n')}
</head><body class="marketing-body">${c.skip}${c.header}${isPricing ? pricing(t) : home(t)}${c.consent}${c.footer}<script src="/assets/final.js" defer></script><script src="/assets/marketing.js" defer></script>${!isPricing ? '<script src="/assets/site.js" defer></script>' : ''}</body></html>\n`;
}
