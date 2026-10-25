# Multilingual site and theme release

## Product claims

- The public Community code and documentation support LLM-agent execution from prepared work, configured checks, independent review, merge policies and a human production gate. The copy explicitly says developers do not need to write code in this workflow while people retain product, architecture, quality and production decisions.
- The productivity comparison describes the difference between manual coding with LLM assistance and orchestrated agent execution. No measured or guaranteed productivity figure is claimed.
- Enterprise availability and the availability of SSO, RBAC, Prototype Builder, Portfolio Manager, Virtual Architect and BeeverForge support were confirmed by the product owner in this conversation. No protocol, SLA, hosting model or price was invented.

## Verification before deployment

- `node scripts/build.mjs` generated `/`, `/es/`, `/pt/` and localized thank-you pages.
- Chromium local lab review covered all three languages, dark/light, 1440×900 desktop and 390×844 mobile: 12 full-page screenshots, one H1, correct `lang`, canonical and indexability, no page-level horizontal overflow, and form present.
- Direct loads, all internal section anchors, mobile menu and Escape behavior passed on each language.
- Theme persisted through locale change. The contact form success and error paths were tested with mocked HTTP responses; no actual inquiry was sent.
- SEO: self-canonicals, `hreflang` en/es/pt-BR/x-default, localized title/description/OG metadata, sitemap entries for three indexable URLs, `noindex` confirmation and retired-concept pages. No search ranking claim is made.
- In a headless Chromium local-server lab run at 1440×900, `DOMContentLoaded` was 120 ms on the cold first English load, 13 ms in Spanish and 12 ms in Portuguese; `load` was 145, 52 and 48 ms respectively. These localhost timings exclude public-network latency and are not Lighthouse scores or real-user data.

## Deployment

Merge the review branch into `main`. The GitHub Pages workflow builds and publishes the three languages and shared assets. After the workflow succeeds, verify the public URLs, direct reloads, TLS, theme switch, language switch, and Worker response path. Keep the existing domain DNS configuration.

# The trial page and the legal drafts (branch `try-page`, not yet published)

The tag `v1.0.0` marks the site before this change.

- `/try/`, `/es/try/`, `/pt/try/` with the waitlist form and localized confirmation pages; `/legal/terms/`, `/legal/privacy/`, `/legal/acceptable-use/` in the three languages, as drafts under legal review; the home page gains a "Try it" link in the navigation, one call to action under the four decisions, and the legal links in the footer. The deploy workflow publishes `try/` and `legal/`.
- Header links no longer wrap in Spanish and Portuguese between 1001 and 1261 px (they did before this change); measured with no wrap and no overflow from 1001 to 1921 px in the three languages.
- Lab review in headless Chromium: every new page in three languages, dark and light, at 1440×900 and 390×844 — one H1, the right `lang`, canonical and four `hreflang` links, no horizontal overflow, no console error. The form's states with mocked door responses: 202 reaches the thank-you page; 500, 429, 422 and a network failure each show their sentence and re-enable the button; a missing captcha and the production build without a site key send nothing. The real Turnstile widget (test key) renders under the page's policy with no refusal. No request reached any door; nothing was sent.
- Before publishing: the real Turnstile site key in `scripts/build.mjs`, the door deployed at `try.beeverforge.com`, and counsel's texts in `content/legal/` (the door refuses to invite until they exist).
