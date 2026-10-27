# BeeverForge website

The production website at [beeverforge.com](https://beeverforge.com/) has complete static pages in English (`/`), Spanish (`/es/`) and Brazilian Portuguese (`/pt/`). The approved vector identity, Community/Enterprise comparison, connected product lifecycle, FAQs and existing Enterprise inquiry form are shared across languages. Visitors can switch between dark and light modes; the choice is stored locally.

## Build

Edit the English editorial source in `final-preview/index.html` and its Spanish/Portuguese equivalents in `scripts/translations.tsv`. Run `node scripts/build.mjs` to generate all publishable pages, localized confirmation pages, retired-concept redirects and the sitemap. A local static server can serve the repository root for review. The source preview remains `noindex` and is not deployed.

The translation file has three tab-separated columns: exact English source text, Spanish, Portuguese. The build keeps the same semantic page structure across languages. Shared scripts and styles live in `assets/`.

## The trial page and the legal pages

`/try/` (and `/es/try/`, `/pt/try/`) presents the Prototype Builder trial for companies and holds its waitlist form. The trial is a hosted company account in its trial plan: a company asks for it, BeeverForge approves it and sets up the company's own space at `<address>.beeverforge.com` with its own Prototype Builder, the person who asked becomes the account's admin and invites colleagues, the trial lasts fifteen days within the company's quota, and the same account continues on the Business plan with its data. Its English source is `final-preview/try.html`; every text node is translated in `scripts/translations.tsv`, and the build fails on a missing one; the sentences the form says are attributes, in the `trial` table of `scripts/build.mjs`, and the build fails when a language lacks one. The form (`assets/try.js`) posts to the trial's door (`beeverforge-try`, `POST https://app.beeverforge.com/waitlist`) behind Cloudflare Turnstile. Besides the person's name, e-mail and description, it sends the company's name as `company` (1–120 characters) and the company's wished address as `slug`. The address field shows `.beeverforge.com` beside it and is checked in the browser by the rule the door and the infrastructure apply too (the hosted company accounts' contract): 3 to 20 characters, `^[a-z][a-z0-9-]{1,18}[a-z0-9]$`, no `--`, not ending in `-preview`, none of the reserved names (the list is in `assets/try.js`); a wrong address has its own sentence under the field, a malformed one and a reserved one each, and the form does not post until it is right. The address is a wish the team may change, and the field's hint says so. The page's sign-in hint points to `https://app.beeverforge.com`. Its two settings live at the top of `scripts/build.mjs`: `waitlistEndpoint` and `turnstileSiteKey` (public). While the site key is empty, the form is read-only from the moment the page loads — the fields `readonly` and `aria-disabled`, the button disabled — and says the waitlist opens soon, with the contact address as a link; nothing is sent. The page carries its own Content-Security-Policy as a meta element, because GitHub Pages sends no headers.

The door's refusals each have their sentence: 403 asks to complete the check again, 503 says the check is not answering, 429 asks to wait (for the minutes in `Retry-After` when the door lets the browser read it), 400 and 422 ask to check the fields; anything else is the generic sentence. None of them says whether an address was already known.

**The laptop bed.** `BUILD_LOCAL=1 node scripts/build.mjs` also writes the local door (`http://127.0.0.1:8500/waitlist`) and Cloudflare's always-pass test key into the page, and adds the local door to the page's policy; served from `127.0.0.1` or `localhost`, the form then uses them. The default build (`node scripts/build.mjs`, the one the Pages workflow runs) carries neither, so the published page knows only `https://app.beeverforge.com`; served locally, it is read-only like the live page without a site key.

The terms of use, the privacy policy and the acceptable use policy describe the trial as a company account (the hub at `app.beeverforge.com`, the company's own address, its admin and colleagues). They are Markdown in `content/legal/<en|es|pt>/`, rendered by the build to `/legal/<terms|privacy|acceptable-use>/` in each language. Each file starts with a front matter (`title`, `description`, `version`, `date`, `status`); `status: draft` shows the "under legal review" banner, publishes the page `noindex,follow` and keeps it out of the sitemap; `status: final` removes the banner, indexes the page and lists it in the sitemap once it is final in the three languages. A note for counsel is a bold bracketed segment, `**[… — to be completed by counsel]**`, and the build refuses a page that still carries one and is not a draft. Counsel's text replaces a file and nothing else changes.

To review locally: `BUILD_LOCAL=1 node scripts/build.mjs && python3 -m http.server 8600 --bind 127.0.0.1`, then open `http://127.0.0.1:8600/try/`. With the door running on port 8500 (and `TRY_SITE_ORIGINS` naming `http://127.0.0.1:8600`), the form works end to end, and its states are to be checked against that door, not against mocked answers.

## Contact

The form uses the existing Cloudflare Worker endpoint and Resend configuration. The Worker secret is not stored in this repository. The public Worker accepts `beeverforge.com` and `www.beeverforge.com` origins; localhost is intentionally excluded. Local form tests must mock the network response. The visible confirmation page appears only after an HTTP success response. The English, Spanish and Portuguese forms share the same fields, validation and endpoint.

Google Analytics 4 uses measurement ID `G-JH25XRDJHG`. The tag loads only after a visitor accepts analytics cookies; visitors can reject or change their choice through Cookie settings in the footer. A successful Enterprise inquiry is counted as a `generate_lead` event only when analytics consent has been granted.

## Hosting

GitHub holds the code and GitHub Pages serves the static website through `.github/workflows/deploy-pages.yml` on `main`. Hostinger administers the domain; no DNS change is needed for this release. The retired `/v1/` and `/v2/` routes redirect to `/` with `noindex`. The original OpenFactory domain has not been changed.

See [RELEASE.md](RELEASE.md) for verification and product-claim notes.
