# BeeverForge website

The production website at [beeverforge.com](https://beeverforge.com/) has complete static pages in English (`/`), Spanish (`/es/`) and Brazilian Portuguese (`/pt/`). The approved vector identity, Community/Enterprise comparison, connected product lifecycle, FAQs and existing Enterprise inquiry form are shared across languages. Visitors can switch between dark and light modes; the choice is stored locally.

## Build

Edit the English editorial source in `final-preview/index.html` and its Spanish/Portuguese equivalents in `scripts/translations.tsv`. Run `node scripts/build.mjs` to generate all publishable pages, localized confirmation pages, retired-concept redirects and the sitemap. A local static server can serve the repository root for review. The source preview remains `noindex` and is not deployed.

The translation file has three tab-separated columns: exact English source text, Spanish, Portuguese. The build keeps the same semantic page structure across languages. Shared scripts and styles live in `assets/`.

## The trial page and the legal pages

`/try/` (and `/es/try/`, `/pt/try/`) presents the Prototype Builder trial and holds its waitlist form. Its English source is `final-preview/try.html`; every text node is translated in `scripts/translations.tsv`, and the build fails on a missing one. The form (`assets/try.js`) posts to the trial's door (`beeverforge-try`, `POST /waitlist`) behind Cloudflare Turnstile. Its two settings live at the top of `scripts/build.mjs`: `waitlistEndpoint` and `turnstileSiteKey` (public). While the site key is empty, the form says the waitlist opens soon and sends nothing. Served from `127.0.0.1` or `localhost`, the form uses the local door (`http://127.0.0.1:8500/waitlist`) and Cloudflare's always-pass test key, so the committed build is the one that is tested. The page carries its own Content-Security-Policy as a meta element, because GitHub Pages sends no headers.

The terms of use, the privacy policy and the acceptable use policy are Markdown in `content/legal/<en|es|pt>/`, rendered by the build to `/legal/<terms|privacy|acceptable-use>/` in each language. Each file starts with a front matter (`title`, `description`, `version`, `date`, `status`); `status: draft` shows the "under legal review" banner, `status: final` removes it. Counsel's text replaces a file and nothing else changes.

To review locally: `node scripts/build.mjs && python3 -m http.server 8600 --bind 127.0.0.1`, then open `http://127.0.0.1:8600/try/`. With the door running on port 8500 (and `TRY_SITE_ORIGINS` naming `http://127.0.0.1:8600`), the form works end to end.

## Contact

The form uses the existing Cloudflare Worker endpoint and Resend configuration. The Worker secret is not stored in this repository. The public Worker accepts `beeverforge.com` and `www.beeverforge.com` origins; localhost is intentionally excluded. Local form tests must mock the network response. The visible confirmation page appears only after an HTTP success response. The English, Spanish and Portuguese forms share the same fields, validation and endpoint.

Google Analytics 4 uses measurement ID `G-JH25XRDJHG`. The tag loads only after a visitor accepts analytics cookies; visitors can reject or change their choice through Cookie settings in the footer. A successful Enterprise inquiry is counted as a `generate_lead` event only when analytics consent has been granted.

## Hosting

GitHub holds the code and GitHub Pages serves the static website through `.github/workflows/deploy-pages.yml` on `main`. Hostinger administers the domain; no DNS change is needed for this release. The retired `/v1/` and `/v2/` routes redirect to `/` with `noindex`. The original OpenFactory domain has not been changed.

See [RELEASE.md](RELEASE.md) for verification and product-claim notes.
