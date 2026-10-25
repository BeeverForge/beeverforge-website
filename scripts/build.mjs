import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const source = await readFile(`${root}final-preview/index.html`, 'utf8');
const trySource = await readFile(`${root}final-preview/try.html`, 'utf8');
const lines = (await readFile(`${root}scripts/translations.tsv`, 'utf8')).trim().split('\n');
const translations = new Map(lines.map((line, index) => {
  const columns = line.split('\t');
  if (columns.length !== 3) throw new Error(`Translation line ${index + 1} needs three columns`);
  return [columns[0], { es: columns[1], pt: columns[2] }];
}));

// The trial's waitlist. The site key is public; the endpoint is the door (beeverforge-try). An empty site key keeps the
// form in its "unavailable" state, so the live site never collects an address the door cannot take. When the site is
// served from this machine (127.0.0.1 or localhost), assets/try.js uses the local door and Cloudflare's always-pass test key.
const site = {
  waitlistEndpoint: 'https://try.beeverforge.com/waitlist',
  turnstileSiteKey: '',
  localWaitlistEndpoint: 'http://127.0.0.1:8500/waitlist',
  localTurnstileSiteKey: '1x00000000000000000000AA',
};

const locales = {
  en: { path: '/', lang: 'en', og: 'en_US', title: 'BeeverForge — From idea to engineered software', description: 'Connect business needs to prototypes, requirements, portfolio context, architecture and LLM-agent software delivery. Explore Community and Enterprise.', formPending: 'Sending your inquiry…', formError: 'We could not send your inquiry. Please try again or email contact@beeverforge.com.', formUnavailable: 'The inquiry form is being prepared. Please email contact@beeverforge.com.', thanksTitle: 'Thank you — BeeverForge', thanksEyebrow: 'Enterprise inquiry', thanksHeading: 'Thanks for getting in touch.', thanksBody: 'Your inquiry has been submitted. We’ll respond to the email address you provided.', thanksBack: 'Return to BeeverForge ↗' },
  es: { path: '/es/', lang: 'es', og: 'es_ES', title: 'BeeverForge — De la idea al software desarrollado', description: 'Conecte necesidades de negocio con prototipos, requisitos, portafolio, arquitectura y desarrollo por agentes LLM. Conozca Community y Enterprise.', formPending: 'Enviando su consulta…', formError: 'No pudimos enviar su consulta. Inténtelo de nuevo o escriba a contact@beeverforge.com.', formUnavailable: 'El formulario no está disponible. Escriba a contact@beeverforge.com.', thanksTitle: 'Gracias — BeeverForge', thanksEyebrow: 'Consulta sobre Enterprise', thanksHeading: 'Gracias por contactarnos.', thanksBody: 'Su consulta fue enviada. Responderemos a la dirección de correo que indicó.', thanksBack: 'Volver a BeeverForge ↗' },
  pt: { path: '/pt/', lang: 'pt-BR', og: 'pt_BR', title: 'BeeverForge — Da ideia ao software desenvolvido', description: 'Conecte necessidades de negócio a protótipos, requisitos, portfólio, arquitetura e desenvolvimento por agentes de LLM. Conheça Community e Enterprise.', formPending: 'Enviando sua mensagem…', formError: 'Não conseguimos enviar sua mensagem. Tente novamente ou escreva para contact@beeverforge.com.', formUnavailable: 'O formulário está indisponível. Escreva para contact@beeverforge.com.', thanksTitle: 'Obrigado — BeeverForge', thanksEyebrow: 'Mensagem sobre a Enterprise', thanksHeading: 'Obrigado pelo contato.', thanksBody: 'Sua mensagem foi enviada. Responderemos ao endereço de e-mail informado.', thanksBack: 'Voltar à BeeverForge ↗' },
};

// What the "Try it" page, its confirmation page and the legal pages say outside their text nodes: titles, descriptions,
// attributes and the form's states. Every text node of `final-preview/try.html` comes from `scripts/translations.tsv`.
const trial = {
  en: {
    title: 'Try the Prototype Builder — BeeverForge',
    description: 'Describe what you need in a conversation and leave with a clickable prototype and its requirements. Free by invitation, fifteen days, within a quota per person.',
    whatYouGet: 'What you get', steps: 'How the trial works', scope: 'What the trial includes and what it does not',
    placeholder: 'For example: an app where our field teams log site visits and managers approve the reports.',
    pending: 'Sending…',
    error: 'We could not add you to the waitlist. Please try again in a moment or email contact@beeverforge.com.',
    unavailable: 'The waitlist opens soon. Please email contact@beeverforge.com to be told when it does.',
    rateLimited: 'Too many attempts from this connection. Please wait a few minutes and try again.',
    invalid: 'Please check your name, your email and your description, then try again.',
    captcha: 'Please complete the check above the button, then try again.',
    thanksTitle: 'Check your inbox — BeeverForge', thanksEyebrow: 'Prototype Builder waitlist', thanksHeading: 'Check your inbox.',
    thanksBody: 'If this address is new to us, a confirmation is on its way. Follow the link in it to confirm your place on the waitlist. We’ll write again when it’s your turn.',
    thanksBack: 'Return to the trial page ↗',
    legal: 'Legal documents', legalEyebrow: 'Legal', version: 'Version',
    draft: 'Draft — under legal review. This text has not yet been approved by counsel and may change before the trial opens.',
  },
  es: {
    title: 'Pruebe el Prototype Builder — BeeverForge',
    description: 'Describa lo que necesita en una conversación y llévese un prototipo navegable y sus requisitos. Gratis por invitación, quince días, dentro de una cuota por persona.',
    whatYouGet: 'Lo que obtiene', steps: 'Cómo funciona la prueba', scope: 'Lo que incluye la prueba y lo que no',
    placeholder: 'Por ejemplo: una aplicación donde nuestros equipos de campo registran visitas y los gerentes aprueban los informes.',
    pending: 'Enviando…',
    error: 'No pudimos añadirle a la lista de espera. Inténtelo de nuevo en un momento o escriba a contact@beeverforge.com.',
    unavailable: 'La lista de espera abre pronto. Escriba a contact@beeverforge.com para que le avisemos.',
    rateLimited: 'Demasiados intentos desde esta conexión. Espere unos minutos e inténtelo de nuevo.',
    invalid: 'Revise su nombre, su correo y su descripción, e inténtelo de nuevo.',
    captcha: 'Complete la verificación sobre el botón e inténtelo de nuevo.',
    thanksTitle: 'Revise su correo — BeeverForge', thanksEyebrow: 'Lista de espera del Prototype Builder', thanksHeading: 'Revise su correo.',
    thanksBody: 'Si esta dirección es nueva para nosotros, le llegará una confirmación. Siga el enlace para confirmar su lugar en la lista de espera. Le escribiremos de nuevo cuando sea su turno.',
    thanksBack: 'Volver a la página de la prueba ↗',
    legal: 'Documentos legales', legalEyebrow: 'Legal', version: 'Versión',
    draft: 'Borrador — en revisión legal. Este texto aún no ha sido aprobado por un abogado y puede cambiar antes de que abra la prueba.',
  },
  pt: {
    title: 'Experimente o Prototype Builder — BeeverForge',
    description: 'Descreva o que você precisa numa conversa e saia com um protótipo clicável e os seus requisitos. Gratuito por convite, quinze dias, dentro de uma cota por pessoa.',
    whatYouGet: 'O que você recebe', steps: 'Como funciona o teste', scope: 'O que o teste inclui e o que não inclui',
    placeholder: 'Por exemplo: um aplicativo em que as equipes de campo registram visitas e os gestores aprovam os relatórios.',
    pending: 'Enviando…',
    error: 'Não conseguimos incluir você na lista de espera. Tente novamente em instantes ou escreva para contact@beeverforge.com.',
    unavailable: 'A lista de espera abre em breve. Escreva para contact@beeverforge.com para ser avisado quando abrir.',
    rateLimited: 'Muitas tentativas a partir desta conexão. Aguarde alguns minutos e tente novamente.',
    invalid: 'Confira seu nome, seu e-mail e sua descrição, e tente novamente.',
    captcha: 'Conclua a verificação acima do botão e tente novamente.',
    thanksTitle: 'Confira seu e-mail — BeeverForge', thanksEyebrow: 'Lista de espera do Prototype Builder', thanksHeading: 'Confira seu e-mail.',
    thanksBody: 'Se este endereço é novo para nós, uma confirmação está a caminho. Siga o link para confirmar seu lugar na lista de espera. Escreveremos de novo quando chegar a sua vez.',
    thanksBack: 'Voltar à página do teste ↗',
    legal: 'Documentos legais', legalEyebrow: 'Jurídico', version: 'Versão',
    draft: 'Rascunho — em revisão jurídica. Este texto ainda não foi aprovado por advogados e pode mudar antes de o teste abrir.',
  },
};
const legalPages = ['terms', 'privacy', 'acceptable-use'];

function replaceRequired(html, oldText, newText) {
  if (!html.includes(oldText)) throw new Error(`Missing source marker: ${oldText}`);
  return html.replace(oldText, newText);
}
function localizeText(html, locale) {
  if (locale === 'en') return html;
  const allowed = new Set([locales[locale].title, 'English', 'Español', 'Português', 'Prototype Builder', 'Portfolio Manager', 'Virtual Architect', 'contact@beeverforge.com']);
  html = html.replace(/>([^<>]+)</g, (match, content) => {
    const trimmed = content.trim();
    const entry = translations.get(trimmed);
    if (!entry) {
      if (/^[A-Za-zÀ-ÿ]/.test(trimmed) && !allowed.has(trimmed) && !trimmed.startsWith('try{')) throw new Error(`Missing ${locale} translation: ${trimmed}`);
      return match;
    }
    return `>${content.replace(trimmed, entry[locale])}<`;
  });
  return html;
}
function localizedPath(locale, href) {
  return href.replace(/^\//, locales[locale].path);
}
function buildPage(locale) {
  const l = locales[locale];
  let html = source.replace('<html lang="en">', `<html lang="${l.lang}">`);
  html = replaceRequired(html, '<meta name="robots" content="noindex,follow">', '<meta name="robots" content="index,follow,max-image-preview:large">');
  html = html.replace(/<meta name="description" content="[^"]+">/, `<meta name="description" content="${l.description}">`);
  html = html.replace(/<title>[^<]+<\/title>/, `<title>${l.title}</title>`);
  html = html.replace(/<meta property="og:locale" content="[^"]+">/, `<meta property="og:locale" content="${l.og}">`);
  html = html.replace(/<meta property="og:title" content="[^"]+">/, `<meta property="og:title" content="${l.title}">`);
  html = html.replace(/<meta property="og:description" content="[^"]+">/, `<meta property="og:description" content="${l.description}">`);
  html = replaceRequired(html, '<meta name="twitter:card" content="summary_large_image">', `<meta name="twitter:card" content="summary_large_image">\n  <link rel="canonical" href="https://beeverforge.com${l.path}">\n  <meta property="og:url" content="https://beeverforge.com${l.path}">\n  <link rel="alternate" hreflang="en" href="https://beeverforge.com/">\n  <link rel="alternate" hreflang="es" href="https://beeverforge.com/es/">\n  <link rel="alternate" hreflang="pt-BR" href="https://beeverforge.com/pt/">\n  <link rel="alternate" hreflang="x-default" href="https://beeverforge.com/">`);
  html = replaceRequired(html, 'href="/final-preview/" aria-label="BeeverForge preview home"', `href="${l.path}" aria-label="BeeverForge home"`);
  html = replaceRequired(html, 'Final design preview · not indexed', 'The next chapter of OpenFactory');
  html = replaceRequired(html, 'data-success-url="/thank-you/"', `data-success-url="${l.path}thank-you/" data-pending-message="${l.formPending}" data-error-message="${l.formError}" data-unavailable-message="${l.formUnavailable}"`);
  html = replaceRequired(html, 'placeholder="What do you want to build, and how does your team work today?"', `placeholder="${locale === 'es' ? '¿Qué quiere construir y cómo trabaja hoy su equipo?' : locale === 'pt' ? 'O que você quer construir e como sua equipe trabalha hoje?' : 'What do you want to build, and how does your team work today?'}"`);
  // links to the trial and the legal pages are written English-rooted in the source and follow the page's language
  html = html.replace(/href="\/(try|legal)\//g, (match, folder) => `href="${l.path}${folder}/`);
  html = html.replace(/(<option value="\/(?:es\/|pt\/)?") selected>/g, '$1>');
  html = replaceRequired(html, `<option value="${l.path}">`, `<option value="${l.path}" selected>`);
  if (locale !== 'en') html = localizeText(html, locale);
  html = html.replace('aria-label="Main navigation"', `aria-label="${locale === 'es' ? 'Navegación principal' : locale === 'pt' ? 'Navegação principal' : 'Main navigation'}"`)
    .replace('aria-label="Footer links"', `aria-label="${locale === 'es' ? 'Enlaces del pie de página' : locale === 'pt' ? 'Links do rodapé' : 'Footer links'}"`)
    .replace('aria-label="The four connected decisions"', `aria-label="${locale === 'es' ? 'Cuatro decisiones conectadas' : locale === 'pt' ? 'Quatro decisões conectadas' : 'The four connected decisions'}"`)
    .replace('aria-label="Enterprise product lifecycle"', `aria-label="${locale === 'es' ? 'Ciclo de vida del producto Enterprise' : locale === 'pt' ? 'Ciclo de vida do produto Enterprise' : 'Enterprise product lifecycle'}"`)
    .replace('aria-label="Capability comparison table, horizontally scrollable on small screens"', `aria-label="${locale === 'es' ? 'Tabla de comparación, desplazable horizontalmente en pantallas pequeñas' : locale === 'pt' ? 'Tabela de comparação, com rolagem horizontal em telas pequenas' : 'Capability comparison table, horizontally scrollable on small screens'}"`)
    .replace('aria-label="BeeverForge home"', `aria-label="${locale === 'es' ? 'Inicio de BeeverForge' : locale === 'pt' ? 'Página inicial da BeeverForge' : 'BeeverForge home'}"`)
    .replace('aria-label="Language"', `aria-label="${locale === 'es' ? 'Idioma' : locale === 'pt' ? 'Idioma' : 'Language'}"`)
    .replace('aria-label="Open menu"', `aria-label="${locale === 'es' ? 'Abrir menú' : locale === 'pt' ? 'Abrir menu' : 'Open menu'}"`)
    .replace('aria-label="Switch to light mode"', `aria-label="${locale === 'es' ? 'Cambiar al modo claro' : locale === 'pt' ? 'Mudar para o modo claro' : 'Switch to light mode'}"`);
  return html;
}
function thanksPage(locale) {
  const l = locales[locale];
  return `<!doctype html><html lang="${l.lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,follow"><title>${l.thanksTitle}</title><link rel="icon" href="/assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="/assets/final.css"><script>try{document.documentElement.dataset.theme=localStorage.getItem('beeverforge-theme')==='light'?'light':'dark'}catch{document.documentElement.dataset.theme='dark'}</script></head><body class="thanks-body"><main class="shell thanks-content"><a href="${l.path}" aria-label="BeeverForge"><img src="/assets/logo-dark.svg" alt="BeeverForge" width="240" height="74"></a><p class="eyebrow">${l.thanksEyebrow}</p><h1>${l.thanksHeading}</h1><p>${l.thanksBody}</p><a class="button button-gold" href="${l.path}">${l.thanksBack}</a></main><script src="/assets/final.js" defer></script></body></html>`;
}

// ── The pages beyond the home page share its header, cookie panel and footer, taken from the built home page of the
// same language, with its in-page anchors pointing back to the home page and the language picker to the same page.
const themeScript = "try{document.documentElement.dataset.theme=localStorage.getItem('beeverforge-theme')==='light'?'light':'dark'}catch{document.documentElement.dataset.theme='dark'}";
const themeHash = createHash('sha256').update(themeScript).digest('base64');
function between(html, start, end) {
  const from = html.indexOf(start);
  const to = html.indexOf(end, from);
  if (from < 0 || to < 0) throw new Error(`Missing chrome: ${start}`);
  return html.slice(from, to + end.length);
}
function chrome(locale, home, sub) {
  const l = locales[locale];
  const anchored = (part) => part.replace(/href="#/g, `href="${l.path}#`);
  const header = anchored(between(home, '<header class="site-header">', '</header>'))
    .replace(/<option value="(\/(?:es\/|pt\/)?)"/g, (match, path) => `<option value="${path}${sub}"`)
    .replace(`<a href="${l.path}${sub}">`, `<a href="${l.path}${sub}" aria-current="page">`);
  return {
    skip: between(home, '<a class="skip-link"', '</a>'),
    header,
    consent: between(home, '<aside class="consent-panel"', '</aside>'),
    footer: anchored(between(home, '<footer class="site-footer">', '</footer>')),
  };
}
function head(locale, sub, { title, description, robots = 'index,follow', csp = '' }) {
  const l = locales[locale];
  const url = (path) => `https://beeverforge.com${path}${sub}`;
  return `<!doctype html>
<html lang="${l.lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  ${csp ? `<meta http-equiv="Content-Security-Policy" content="${csp}">\n  ` : ''}<meta name="robots" content="${robots}">
  <meta name="theme-color" content="#1F1F24">
  <meta name="description" content="${description}">
  <title>${title}</title>
  <meta property="og:type" content="website">
  <meta property="og:locale" content="${l.og}">
  <meta property="og:site_name" content="BeeverForge">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="https://beeverforge.com/assets/og-beeverforge.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="canonical" href="${url(l.path)}">
  <meta property="og:url" content="${url(l.path)}">
${Object.values(locales).map((alt) => `  <link rel="alternate" hreflang="${alt.lang}" href="${url(alt.path)}">`).join('\n')}
  <link rel="alternate" hreflang="x-default" href="${url('/')}">
  <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
  <link rel="stylesheet" href="/assets/final.css">
  <script>${themeScript}</script>
</head>`;
}
function page(locale, home, sub, meta, main, scripts) {
  const c = chrome(locale, home, sub);
  return `${head(locale, sub, meta)}
<body>
  ${c.skip}
  ${c.header}
${main}
  ${c.consent}
  ${c.footer}
  <script src="/assets/final.js" defer></script>${scripts}
</body>
</html>
`;
}

// The waitlist page's own policy (GitHub Pages sends no headers, so it travels as a meta element): the site's own files,
// the theme script by its hash, Cloudflare Turnstile, the door's endpoint, and Google Analytics as the rest of the site
// loads it — only after consent.
const waitlistOrigins = [...new Set([site.waitlistEndpoint, site.localWaitlistEndpoint].map((u) => new URL(u).origin))].join(' ');
const tryPolicy = [
  "default-src 'self'",
  `script-src 'self' 'sha256-${themeHash}' https://challenges.cloudflare.com https://www.googletagmanager.com`,
  'frame-src https://challenges.cloudflare.com',
  `connect-src 'self' ${waitlistOrigins} https://challenges.cloudflare.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com`,
  "img-src 'self' data: https://*.google-analytics.com https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join('; ');

function tryPage(locale, home) {
  const l = locales[locale];
  const t = trial[locale];
  let main = trySource
    .replace(/href="\/(try|legal)\//g, (match, folder) => `href="${l.path}${folder}/`)
    .replace('aria-label="What you get"', `aria-label="${t.whatYouGet}"`)
    .replace('aria-label="How the trial works"', `aria-label="${t.steps}"`)
    .replace('aria-label="What the trial includes and what it does not"', `aria-label="${t.scope}"`);
  main = replaceRequired(main, 'placeholder="TRY_PLACEHOLDER"', `placeholder="${t.placeholder}"`);
  main = replaceRequired(main, 'data-waitlist-form', [
    'data-waitlist-form',
    `data-endpoint="${site.waitlistEndpoint}"`,
    `data-local-endpoint="${site.localWaitlistEndpoint}"`,
    `data-sitekey="${site.turnstileSiteKey}"`,
    `data-local-sitekey="${site.localTurnstileSiteKey}"`,
    `data-language="${l.lang}"`,
    `data-success-url="${l.path}try/thank-you/"`,
    `data-pending-message="${t.pending}"`,
    `data-error-message="${t.error}"`,
    `data-unavailable-message="${t.unavailable}"`,
    `data-rate-message="${t.rateLimited}"`,
    `data-invalid-message="${t.invalid}"`,
    `data-captcha-message="${t.captcha}"`,
  ].join(' '));
  main = localizeText(main, locale);
  return page(locale, home, 'try/', { title: t.title, description: t.description, csp: tryPolicy }, main, '\n  <script src="/assets/try.js" defer></script>');
}
function tryThanksPage(locale) {
  const l = locales[locale];
  const t = trial[locale];
  return `<!doctype html><html lang="${l.lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,follow"><title>${t.thanksTitle}</title><link rel="icon" href="/assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="/assets/final.css"><script>${themeScript}</script></head><body class="thanks-body"><main class="shell thanks-content"><a href="${l.path}" aria-label="BeeverForge"><img src="/assets/logo-dark.svg" alt="BeeverForge" width="240" height="74"></a><p class="eyebrow">${t.thanksEyebrow}</p><h1>${t.thanksHeading}</h1><p>${t.thanksBody}</p><a class="button button-gold" href="${l.path}try/">${t.thanksBack}</a></main><script src="/assets/final.js" defer></script></body></html>`;
}

// ── The legal pages: Markdown with a front matter (title, description, version, date, status), rendered here.
// Counsel's text replaces a file in content/legal/<language>/ and nothing else changes; `status: final` drops the banner.
const escapeHtml = (text) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
function inline(text, locale) {
  let html = escapeHtml(text);
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  html = html.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (match, label, href) => {
    const safe = /^(https:\/\/|mailto:|\/|#)/.test(href) ? href : '';
    if (!safe) return label;
    const local = safe.startsWith('/') ? localizedPath(locale, safe) : safe;
    const external = safe.startsWith('https://') ? ' rel="noopener"' : '';
    return `<a href="${local}"${external}>${label}</a>`;
  });
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/(^|[\s(])\*([^*\s][^*]*)\*/g, '$1<em>$2</em>');
  return html;
}
const slug = (text) => text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
function markdown(text, locale) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) throw new Error('A legal page needs a front matter');
  const meta = Object.fromEntries(match[1].split('\n').map((line) => {
    const at = line.indexOf(':');
    return [line.slice(0, at).trim(), line.slice(at + 1).trim()];
  }));
  for (const key of ['title', 'description', 'version', 'date', 'status']) if (!meta[key]) throw new Error(`A legal page needs ${key}`);
  const out = [];
  let paragraph = [];
  let list = null;
  const flushParagraph = () => {
    if (paragraph.length) out.push(`<p>${inline(paragraph.join(' '), locale)}</p>`);
    paragraph = [];
  };
  const flushList = () => {
    if (list) out.push(`<${list.tag}>${list.items.map((item) => `<li>${inline(item, locale)}</li>`).join('')}</${list.tag}>`);
    list = null;
  };
  for (const raw of text.slice(match[0].length).split('\n')) {
    const line = raw.trimEnd();
    let m;
    if (!line.trim()) { flushParagraph(); flushList(); continue; }
    if (/^#\s/.test(line)) throw new Error('A legal page’s title is its front matter; the body starts at ##');
    if ((m = line.match(/^(#{2,4})\s+(.+)$/))) {
      flushParagraph(); flushList();
      const level = m[1].length;
      out.push(`<h${level} id="${slug(m[2])}">${inline(m[2], locale)}</h${level}>`);
    } else if ((m = line.match(/^\s*(?:[-*]|\d+\.)\s+(.+)$/))) {
      const tag = /^\s*\d+\./.test(line) ? 'ol' : 'ul';
      flushParagraph();
      if (list && list.tag !== tag) flushList();
      if (!list) list = { tag, items: [] };
      list.items.push(m[1]);
    } else if (list && /^\s{2,}\S/.test(line)) {
      list.items[list.items.length - 1] += ` ${line.trim()}`;
    } else {
      flushList();
      paragraph.push(line.trim());
    }
  }
  flushParagraph(); flushList();
  return { meta, html: out.join('\n') };
}
function legalDate(locale, iso) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(locales[locale].lang, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}
async function legalDocument(locale, name) {
  return markdown(await readFile(`${root}content/legal/${locale}/${name}.md`, 'utf8'), locale);
}
function legalPage(locale, home, name, documents) {
  const l = locales[locale];
  const t = trial[locale];
  const { meta, html } = documents[name];
  const nav = legalPages.map((other) => `<a href="${l.path}legal/${other}/"${other === name ? ' aria-current="page"' : ''}>${escapeHtml(documents[other].meta.title)}</a>`).join('');
  const draft = meta.status === 'draft' ? `\n        <p class="legal-draft" role="note">${t.draft}</p>` : '';
  const main = `  <main id="main" class="legal-main">
    <div class="shell legal-layout">
      <article class="legal">
        <p class="eyebrow">${t.legalEyebrow}</p>
        <h1>${escapeHtml(meta.title)}</h1>
        <p class="legal-meta">${t.version} ${escapeHtml(meta.version)} · ${legalDate(locale, meta.date)}</p>${draft}
${html}
      </article>
      <nav class="legal-nav" aria-label="${t.legal}">${nav}</nav>
    </div>
  </main>`;
  return page(locale, home, `legal/${name}/`, { title: `${meta.title} — BeeverForge`, description: meta.description }, main, '');
}

for (const [locale, l] of Object.entries(locales)) {
  const directory = `${root}${l.path}`;
  await mkdir(directory, { recursive: true });
  const home = buildPage(locale);
  await writeFile(`${directory}index.html`, home);
  await mkdir(`${directory}thank-you/`, { recursive: true });
  await writeFile(`${directory}thank-you/index.html`, thanksPage(locale));
  await mkdir(`${directory}try/thank-you/`, { recursive: true });
  await writeFile(`${directory}try/index.html`, tryPage(locale, home));
  await writeFile(`${directory}try/thank-you/index.html`, tryThanksPage(locale));
  const documents = {};
  for (const name of legalPages) documents[name] = await legalDocument(locale, name);
  for (const name of legalPages) {
    await mkdir(`${directory}legal/${name}/`, { recursive: true });
    await writeFile(`${directory}legal/${name}/index.html`, legalPage(locale, home, name, documents));
  }
}
const retiredConcept = (version) => `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,follow"><meta http-equiv="refresh" content="0;url=/"><link rel="canonical" href="https://beeverforge.com/"><title>BeeverForge — website</title><script>location.replace('/')</script></head><body><main><h1>BeeverForge has a new home.</h1><p>The ${version.toUpperCase()} concept has been replaced by the website.</p><p><a href="/">Visit BeeverForge</a></p></main></body></html>`;
await Promise.all(['v1', 'v2'].map((version) => writeFile(`${root}${version}/index.html`, retiredConcept(version))));
const indexed = ['', 'try/', ...legalPages.map((name) => `legal/${name}/`)];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${indexed.flatMap((sub) => Object.values(locales).map(l => `  <url><loc>https://beeverforge.com${l.path}${sub}</loc>${Object.values(locales).map((alt) => `<xhtml:link rel="alternate" hreflang="${alt.lang}" href="https://beeverforge.com${alt.path}${sub}"/>`).join('')}<xhtml:link rel="alternate" hreflang="x-default" href="https://beeverforge.com/${sub}"/></url>`)).join('\n')}\n</urlset>\n`;
await writeFile(`${root}sitemap.xml`, sitemap);
console.log('Built English, Spanish and Portuguese static pages, the trial’s waitlist page, the legal pages and localized confirmation pages.');
