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
- Lab review in headless Chromium: every new page in three languages, dark and light, at 1440×900 and 390×844 — one H1, the right `lang`, canonical and four `hreflang` links, no horizontal overflow, no console error. The form's states with the door mocked in the browser: 202 reaches the thank-you page; 403, 503, 429 (with and without a readable `Retry-After`), 422, 400, 500 and a network failure each show their sentence as a focused alert, keep the button enabled and re-arm the check; a second press while the door answers sends one request; a missing captcha sends nothing, and the default build without a site key is read-only from load in the three languages. The real Turnstile widget (test key) renders under the page's policy with no refusal. No request reached any door; nothing was sent.
- After the independent review of the branch: the legal drafts are published `noindex,follow` and left out of the sitemap, and the build refuses a page that still carries a note for counsel and is not a draft; without a site key the form is read-only from the moment the page loads and says so, instead of after a person has filled it in; the door's refusals each have their sentence (403 the check, 503 the check not answering, 429 the wait with the minutes from `Retry-After` when the door exposes it, 400 and 422 the fields, anything else the generic one); an error is announced as an alert and takes focus, the button stays enabled and `aria-busy` while the door answers, a second press is ignored, and the Turnstile slot has an accessible name in each language; the English privacy policy no longer names password-guessing (the trial has no passwords) and the Resend bullet names the Enterprise inquiries it delivers, in the three languages.
- The committed HTML is the default build (`node scripts/build.mjs`), the one the Pages workflow runs: `try/index.html` carries no `data-local-endpoint`, no `data-local-sitekey` and no `127.0.0.1` in its policy. For the laptop bed, build with `BUILD_LOCAL=1` and do not commit the result.
- A prototype stays one product (DR-016): the Try it page's questions and the trial terms say, in the three languages, that each person makes one prototype about one product, which can change as much as the quota allows, and that a request for a different product is declined.
- Before publishing: the real Turnstile site key in `scripts/build.mjs`, the door deployed at `try.beeverforge.com`, and counsel's texts in `content/legal/` (the door refuses to invite until they exist; `status: final` makes a page indexable, and the build refuses it while a note for counsel remains).
- The form's states are verified against the real local door, not against mocked answers: with the door on port 8500 and `TRY_SITE_ORIGINS` naming `http://127.0.0.1:8600`, provoke each answer (an invalid field for 422, a few quick attempts for 429, the check for 403 and 503) and see its sentence, the alert, the focus and the re-armed check; the mocked run described above showed the script's mapping, not the door's headers. Until the door's own fix lands, its refusals carry no `Access-Control-Allow-Origin`, the browser's fetch throws and the form says the generic sentence for every refusal; the browser reads `Retry-After` only if the door also sends `Access-Control-Expose-Headers: Retry-After`, otherwise the form says the generic wait sentence. The bed's door was not running during this review, so that verification is still due.
