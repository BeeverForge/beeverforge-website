---
title: Terms of use
description: Draft of the next version of BeeverForge's terms: the trial, the Prototype and Team plans, your own AI provider key, the assisted start, cancellations and refunds.
version: 1.1
date: 2026-10-29
status: draft
---

## 1. Who we are and what these terms cover

The BeeverForge platform and this website are provided by **HERMES ALVES & ROBERTO PEREIRA, LDA**, a company established in Portugal, NIPC 518786749 ("BeeverForge", "we", "us"). BeeverForge is its brand. It is administered by Hermes Alves; you can reach us at contact@beeverforge.com. **[Counsel: add the registered office, the commercial registry details and the share capital wherever Portuguese law requires them on these terms; none of them is recorded in this draft. Confirm how the company's management is named here.]**

The platform is reached at app.beeverforge.com, where a company asks for its account and its people sign in, and at each company's own address under beeverforge.com (for example, acme.beeverforge.com).

These terms apply to everything a company does on the platform: the waitlist, the company's request and its account, invitations, the free trial, the paid plans (Prototype and Team), the company's own AI provider key, and the assisted start. They work together with our [privacy policy](/legal/privacy/) and our [acceptable use policy](/legal/acceptable-use/). By accepting them when you first sign in, you agree to all three.

## 2. Who may use BeeverForge

- BeeverForge is offered to companies: each account is a company account. The person who asks for it does so on the company's behalf and confirms that they are allowed to accept these terms for it. **[Counsel: confirm that the plans can be restricted to business customers, and what applies if a customer turns out to be a consumer or a sole trader.]**
- BeeverForge reviews each request and decides whether to approve it.
- The person who asked becomes the account's admin and may invite colleagues. Each colleague accepts these terms when they first sign in.
- Everyone who uses BeeverForge must be at least 18 years old and able to enter into a binding agreement.
- An invitation is for one person and may not be transferred or shared.
- Only a person the company has authorised may choose a plan, enter the company's AI provider key, accept a scope or authorise production for it. **[Counsel and product owner: who in the company may do each of these acts, and how the platform records that person's authority.]**

## 3. The trial

- The trial lets the company's people describe a product in a conversation, see it as a clickable prototype on simulated data, and generate its requirements. It covers what the Prototype plan does; the Team plan's features are not part of it.
- It is offered to a few companies at a time. Each approved company gets its own space at its own address under beeverforge.com, with its own Prototype Builder. The address a company asks for is a wish; BeeverForge may set a different one.
- A company's trial lasts **fifteen days** from the date its account opens.
- It is **free of charge**, within a limited AI and infrastructure budget that BeeverForge sets for the company and for the trial as a whole. When the company's budget is reached, the trial tells you when you can continue. We may also limit the total use of the trial at any time.
- No card is asked for. **The trial never turns into a charge:** nothing is billed unless the company chooses a paid plan.
- Each person in the account makes **one prototype**, about one product. It can change as much as the budget allows, but it stays that product: a request for a different product is declined.
- When the trial ends, new runs stop. The account's people can still sign in to read and download what they created until it is deleted (see the [privacy policy](/legal/privacy/)).
- If the company chooses a paid plan, the same account continues, at the same address, with its data.
- The trial is a preview of a service that is still evolving. We may change, suspend or end it, or any part of it, at any time. There is no service level, uptime commitment or support obligation during the trial.

## 4. Your account

The company's account is one account; its admin invites the colleagues who take part. Each person signs in with their email address and a password, or with a GitHub account; we never see your GitHub password and keep only a hash of a password you set here. Keep your password and your sign-in secure, and turn on two-step sign-in if you can. You are responsible for what happens under your invitation. Tell us at once at contact@beeverforge.com if you think someone else has used it.

## 5. The paid plans and their prices

- **Prototype**, €19 per month: prototyping in a conversation, collaboration with colleagues, versions of each prototype, and export of the requirements.
- **Team**, €299 per month: access to the platform, the virtual PO and orchestration, and one parallel execution. **[Product owner: confirm whether Team includes everything Prototype includes.]**
- Prices are **per company**, not per seat. A company has one subscription at a time, Prototype or Team, never both.
- Prices are in euros and **exclude VAT and any other tax, which is added where applicable**. **[Accountant: how VAT is charged and shown — Portuguese VAT for customers in Portugal, the reverse charge for business customers elsewhere in the EU, customers outside the EU; the tax registration that automatic tax calculation needs before it is turned on; and whether the invoices issued through the payment provider meet Portuguese invoicing rules (certified invoicing software, communication to the tax authority) or BeeverForge must issue its own.]**
- **The monthly fee gives access to the platform. Infrastructure, AI consumption and third-party services are paid separately by the customer.** No plan includes hosting the company's product, a service level agreement or unlimited support. **[Product owner: what support, if any, each plan includes.]**
- On Team, connecting the company's own execution infrastructure is a separate step that BeeverForge's team completes with the company. Paying does not mean that everything is operational: the company's billing page shows the subscription, the AI provider key, the infrastructure and any assisted start separately. **[Counsel and product owner: what BeeverForge commits to for connecting a Team company's infrastructure, and by when; whether the Team fee is due while the infrastructure is not yet connected. This draft commits to nothing.]**
- **[Counsel and product owner: whether and how BeeverForge may change the prices or the plans of an existing subscription, the notice it gives and the company's right to cancel before a change applies. This draft says nothing about it.]**

## 6. Your company's AI provider key

- During the trial, the Prototype Builder runs on BeeverForge's own AI provider account, within the trial's budget.
- **After the trial, a paid plan works only with the company's own API key** for a supported AI provider — for now, Anthropic. It must be an API key, never the sign-in of a personal or chat subscription.
- The company is the provider's customer. It accepts the provider's terms, and the provider bills the company directly for what the company's runs use. **BeeverForge sells no AI credits, and after the trial it never uses its own key in place of the company's.**
- The company's admin enters the key in the company's account, at its own address. Before storing it, BeeverForge checks it with one minimal call to the provider, which the provider may bill. BeeverForge keeps the key in a secret store, uses it only to run the company's Prototype Builder, and shows only its provider, its last four characters, the date it was checked and its state.
- Without a valid key, the account is read-only: its people can sign in, read and export, but cannot start new runs.
- **[Counsel: who answers for the provider's charges caused by runs the company's people start, for a key that leaks from the company's side, and for the provider's handling of the content; the role each party has under the GDPR, as the privacy policy describes it.]**

## 7. Subscriptions: payment, changes and missed payments

- A subscription is **monthly**, is paid at the start of each period and renews each month until it is cancelled. **[Counsel: whether the automatic renewal needs a further notice or consent.]**
- Payments are taken by Stripe, our payment provider, on Stripe's own pages. BeeverForge never sees the full card number.
- A subscription starts when the payment is confirmed to BeeverForge, not when the payment page closes.
- **Changing plan:** moving from Prototype to Team takes effect at once, and the price difference for the rest of the current period is charged then; it is shown before the company confirms. Moving from Team to Prototype takes effect at the end of the current period.
- **Cancelling:** the company may cancel at any time from its billing page. The cancellation takes effect at the end of the period already paid, and the company keeps its plan until then. Nothing more is charged after that.
- **A missed payment:** if a payment fails, the company keeps normal access for **7 days**, with a notice, and then the account becomes read-only until the payment is made. **[Product owner: confirm the grace period; 7 days is the platform's default.]** An account whose subscription ends unpaid or cancelled, or whose first payment never completes, is read-only too.
- **Read-only** means that the company's people can sign in, read and export, but cannot start new runs.
- **No data is deleted because of a payment state.** The retention rules of the [privacy policy](/legal/privacy/) still apply. **[Product owner and counsel: how long a read-only account's content is kept once it stops paying — the 90 days after the last activity of the trial, or another period for accounts that paid.]**

## 8. The assisted start

- **What it is.** A one-off order in which BeeverForge's team takes one of the company's prototypes further. Its **base package costs €1,490**, plus VAT where applicable. It is tied to one prototype and to the company that asks for it. **[Product owner: what the base package covers in general and any limit to it (time, screens, environments); this draft names none and leaves it to each scope.]**
- **Asking.** The company asks for it from its prototype, in the Prototype Builder. Asking creates no obligation for either side.
- **The scope.** BeeverForge's team reviews the prototype and its requirements and writes a scope: what the base package delivers for that prototype, what it does not, and what it assumes. Each scope has a version. BeeverForge may decline a request it cannot scope.
- **Accepting the scope.** The company accepts one version of the scope, through a person authorised to act for it, in its account. Only a person's acceptance counts: no automated message, no payment notice and not the virtual PO can accept a scope for the company. Nothing is due before a scope is accepted.
- **Payment.** Once the scope is accepted, the company pays the base package through Stripe. The work is scheduled once the payment is confirmed. **Payment does not mean that the work is done, nor that its result is accepted.** **[Accountant: the invoice for the assisted start — the same questions as for the plans.]**
- **The work and its acceptance.** BeeverForge's team works within the accepted scope and shows the company the result before production, for the company to review and accept. **[Counsel: the acceptance criteria and period, what happens when the company does not answer, and how defects found at acceptance are handled; this draft sets none of them.]**
- **Production.** Nothing reaches production without the company's **explicit authorisation**, given by a person authorised to act for it, after it accepted the result. A payment, an automated message or the virtual PO cannot authorise production.
- **Extras.** Anything outside the accepted scope is an extra. BeeverForge quotes it separately, outside the platform; it is agreed in writing before it starts and paid separately.
- The infrastructure, AI consumption and third-party services the work needs are the company's own and are paid separately by it.
- **[Counsel: who owns the code and the other deliverables of the assisted start, and the licence to BeeverForge's own components in them; the warranty, if any, on the deliverables; the delivery time, if any; and the liability rules for this paid service (section 16 was written for a free trial).]**

## 9. Cancellation and refunds

- **Plans.** A cancelled subscription ends at the end of the period already paid, and nothing more is charged. A move from Team to Prototype also takes effect at the end of the period. **[Product owner and counsel: whether any part of a period already paid is refunded. The platform today ends a cancelled subscription at the end of the paid period and makes no partial refund.]**
- **Moving up.** When the company moves from Prototype to Team, the difference it is charged covers the rest of the current period.
- **The assisted start.** Before a scope is accepted, nothing is due and the company may simply withdraw its request. **[Product owner and counsel: what is refunded if the company cancels after paying and before the work starts, while it runs, or if BeeverForge cannot deliver the accepted scope; this draft sets no rule.]**
- A refund, where one is due, is paid back to the payment method used, through Stripe.
- **[Counsel: the plans are offered to companies. Confirm whether a right of withdrawal under EU consumer law (Directive 2011/83/EU, as transposed in Portugal) can apply to any customer, and, if it can, how it applies to a subscription and to an assisted start whose work has begun.]**
- Cancelling never deletes the company's data: see section 7.

## 10. Your content

- "Your content" is what you and your colleagues write, the documents and images you upload, and what the platform produces in your company's account: prototypes, notes, requirements and the downloadable package.
- Your content belongs to your company's account and its people: **they keep the rights they have in it.** They give BeeverForge a limited, non-exclusive licence to host, process and transmit it only as needed to run the company's account and its plan, to keep it secure, and to carry out an assisted start the company orders.
- You confirm that you have the right to use what you upload, and that it does not include confidential information you may not share, other people's personal data, or real customer data. Use fictitious data in prototypes.
- We do not sell your content, do not use it to train models, and do not read your prototypes unless you ask for the assisted start or for our help.

## 11. What the platform produces

- The prototypes and requirements are produced with the help of AI models. **They may be incomplete or wrong.** Review them before you rely on them.
- A prototype is a way to see an idea. It is not production software, it is not secure for real data and it must not be used as a live product.
- You may use the requirements you generate for any lawful purpose, with BeeverForge or with anyone else.

## 12. Acceptable use

You must follow our [acceptable use policy](/legal/acceptable-use/). In short: use BeeverForge to work out and build a product, do not attack it, do not try to get around its limits, and do not use it for anything unlawful or harmful.

## 13. Our property

The platform, the BeeverForge name, logo and website are ours or our licensors'. Parts of the Prototype Builder are, or will be, published as open source; where code is published under an open-source licence, that licence governs the code. These terms do not give you any other right in our property.

## 14. Suspension and ending

We may suspend or end your access, with or without notice, if you break these terms or the acceptable use policy, if your use puts the platform, other people or us at risk, or when the trial ends without a paid plan. You may stop using BeeverForge and delete your account and content at any time from your account page. **[Counsel: the notice BeeverForge gives before it ends a paid plan, and what it refunds when it ends one without the company's fault.]**

## 15. No warranty

The trial is provided free of charge, **"as is" and "as available"**, without any warranty, to the extent the law allows. We do not warrant that the platform will be uninterrupted or error-free, or that its output will be accurate or fit for a particular purpose. **[Counsel: version 1.0 disclaims every warranty because the trial is free; the paid plans and the assisted start need their own warranty terms.]**

## 16. Limitation of liability

To the extent the law allows, BeeverForge is not liable for indirect or consequential losses, lost profits or lost data, and its total liability for anything related to the trial is limited to **EUR 100 (one hundred euros)**. Neither these exclusions nor the limit apply to wilful misconduct or gross negligence, nor to death, personal injury or harm to health. Nothing in these terms limits liability that cannot be limited by law, or the rights you have as a consumer where consumer law applies. **[Counsel: the limit of liability for the paid plans and the assisted start — for example, the amounts paid in a given period — to replace or complete the EUR 100 written for the free trial.]**

## 17. Changes to these terms

We may update these terms. Each version has a number and a date. When we change them, we will ask you to accept the new version the next time you sign in; until you do, you cannot continue using BeeverForge. **[Counsel: whether a change can bind a paid subscription during a period already paid, and the notice it needs.]**

## 18. Law and disputes

These terms are governed by Portuguese law. Any dispute is settled by the competent courts in Portugal, without prejudice to the mandatory rules that protect you as a consumer, including the right to go to the courts of your own domicile where the law grants it. **[Counsel: whether to name one court for business customers, and whether information on alternative dispute resolution is needed.]**

## 19. Contact

Questions about these terms: contact@beeverforge.com.
