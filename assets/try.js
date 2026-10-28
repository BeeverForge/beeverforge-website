// The trial's waitlist form (/try/), where a company asks for its trial: the company's wished address, its rule and
// whether it is free, the character count, Cloudflare Turnstile and the post to the door (beeverforge-try, on
// app.beeverforge.com).
// The door answers 202 with the same sentence for every address, so success always goes to the confirmation page;
// nothing here can tell whether an e-mail address was already known, and no refusal says so either. Served from this machine
// with a local build (BUILD_LOCAL=1), the form uses the local door and Cloudflare's always-pass test key, so the build
// in the laptop bed is the one that is tested. Without a door and a site key for this host, the form is read-only from
// the start and says so; the e-mail address in that sentence stays the way to ask.
(() => {
  const form = document.querySelector('[data-waitlist-form]');
  if (!form) return;
  const local = ['127.0.0.1', 'localhost'].includes(window.location.hostname);
  const endpoint = local ? form.dataset.localEndpoint : form.dataset.endpoint;
  const sitekey = local ? form.dataset.localSitekey : form.dataset.sitekey;
  const available = Boolean(endpoint && sitekey);
  const status = form.querySelector('.form-status');
  const submit = form.querySelector('button[type="submit"]');
  const slot = form.querySelector('[data-turnstile]');
  const wants = form.querySelector('textarea[name="wants"]');
  const counter = form.querySelector('[data-count-for]');
  const contact = 'contact@beeverforge.com';
  let widget = null;
  let token = '';
  let pending = false;

  // The status line: an error is an alert and takes focus, so it is heard and seen; anything else is polite. The
  // contact address in a sentence is a link, so the way to ask stays one step away even when the form cannot send.
  const say = (message, state) => {
    const alert = state === 'error';
    status.replaceChildren();
    status.setAttribute('role', alert ? 'alert' : 'status');
    status.setAttribute('aria-live', alert ? 'assertive' : 'polite');
    status.dataset.state = state;
    const text = message || '';
    const at = text.indexOf(contact);
    if (at < 0) {
      status.textContent = text;
    } else {
      const link = document.createElement('a');
      link.href = `mailto:${contact}`;
      link.textContent = contact;
      status.append(text.slice(0, at), link, text.slice(at + contact.length));
    }
    if (alert) status.focus();
  };
  const count = () => {
    if (counter && wants) counter.textContent = `${wants.value.length} / ${wants.maxLength}`;
  };
  wants?.addEventListener('input', count);
  count();

  // The company's wished address (`<slug>.beeverforge.com`), by the rule the door and the infrastructure apply too:
  // 3 to 20 characters, a letter first and a letter or digit last, no "--", not ending in "-preview" (a company's
  // previews live there), and none of the reserved names. It is a wish; the team may set another when it sets up the
  // space. The sentence shows under the field once the person leaves it, and goes as soon as the address is right.
  const slug = form.querySelector('input[name="slug"]');
  const slugError = form.querySelector('#try-slug-error');
  const reserved = new Set(('www app api admin mail send smtp imap pop ftp autodiscover autoconfig status docs blog help '
    + 'support static cdn assets try beta dev staging test preview hub accounts account login signin signup auth billing '
    + 'security abuse postmaster hostmaster webmaster ns ns1 ns2 dns mx beeverforge e2e').split(' '));
  // what the door said of an address it was asked about (free, taken, reserved, invalid): one it answered is not
  // asked again
  const told = new Map();
  const slugProblem = (value) => {
    if (!value) return ''; // `required` says it, like the other fields
    if (!/^[a-z][a-z0-9-]{1,18}[a-z0-9]$/.test(value) || value.includes('--')) return form.dataset.slugMessage;
    if (value.endsWith('-preview') || reserved.has(value)) return form.dataset.slugReservedMessage;
    // the door's word, when it differs from the rule here: a company opened there, or a list newer than this one
    const door = told.get(value);
    if (door === 'taken') return form.dataset.slugTakenMessage;
    if (door === 'reserved') return form.dataset.slugReservedMessage;
    if (door === 'invalid') return form.dataset.slugMessage;
    return '';
  };
  const showSlug = (problem) => {
    if (problem) slug.setAttribute('aria-invalid', 'true');
    else slug.removeAttribute('aria-invalid');
    if (slugError) slugError.textContent = problem;
  };
  // the address is lower case; what a person types in capitals or with spaces around it is tidied, not refused
  const tidySlug = () => { slug.value = slug.value.trim().toLowerCase(); };
  const checkSlug = () => {
    if (!slug) return true;
    tidySlug();
    const problem = slugProblem(slug.value);
    slug.setCustomValidity(problem);
    showSlug(problem);
    return !problem;
  };
  slug?.addEventListener('change', checkSlug);
  slug?.addEventListener('input', () => {
    const problem = slugProblem(slug.value.trim().toLowerCase());
    slug.setCustomValidity(problem);
    // while the person types, a shown sentence follows the value; a new one waits until they leave the field
    if (slug.getAttribute('aria-invalid') === 'true') showSlug(problem);
  });

  // Whether the wished address is free, asked of the door once the person pauses on an address the rule takes: taken
  // has its own sentence and holds the form, as a wrong address does; free says so under the field. An address the
  // door answered is not asked again. The door tells only the addresses of companies already opened, never another
  // request's wish, and the team may still change a free one. When the door does not answer (offline, a limit, a door
  // without the check), nothing is said and the form posts as before. Without a door to post to, nothing is asked.
  const slugFree = form.querySelector('#try-slug-free');
  const suffix = form.querySelector('.slug-suffix')?.textContent.trim() || '';
  const addresses = available ? `${endpoint.replace(/\/+$/, '')}/address/` : '';
  let asking = null; // the question in flight: its address, its controller and its end
  let pause = 0;
  const showFree = (value) => {
    if (!slugFree) return;
    const free = value && told.get(value) === 'free' && !slugProblem(value);
    slugFree.textContent = free ? form.dataset.slugFreeMessage.replace('{address}', `${value}${suffix}`) : '';
  };
  const ask = (value) => {
    asking?.controller.abort();
    const controller = new AbortController();
    const question = { value, controller, done: null };
    question.done = answered(value, question);
    asking = question;
    return question;
  };
  const answered = async (value, question) => {
    try {
      const response = await fetch(addresses + encodeURIComponent(value), {
        mode: 'cors',
        credentials: 'omit',
        signal: question.controller.signal,
      });
      if (!response.ok) return;
      const answer = await response.json();
      if (answer?.slug !== value || !['free', 'taken', 'reserved', 'invalid'].includes(answer.state)) return;
      told.set(value, answer.state);
      if (slug.value.trim().toLowerCase() !== value) return; // the person typed on: the answer waits in `told`
      const problem = slugProblem(value);
      slug.setCustomValidity(problem);
      showSlug(problem);
      showFree(value);
    } catch {
      // stopped by a newer question, offline, or not the door's answer: nothing is said
    } finally {
      if (asking === question) asking = null;
    }
  };
  slug?.addEventListener('input', () => {
    clearTimeout(pause);
    const value = slug.value.trim().toLowerCase();
    if (asking && asking.value !== value) asking.controller.abort();
    showFree(value);
    if (!addresses || !value || slugProblem(value)) {
      // the door's word on an address it answered (taken, or a list newer than this one's): said at once, as it came
      if (told.has(value)) showSlug(slugProblem(value));
      return;
    }
    if (!told.has(value) && asking?.value !== value) {
      pause = setTimeout(() => { if (asking?.value !== value && !told.has(value)) ask(value); }, 400);
    }
  });
  // The button pressed before the door answered: the address is asked now, and its answer awaited a moment, so a taken
  // one is held like a wrong one; an address edited meanwhile is asked in turn, within the same moment. A door slower
  // than that, or one that did not answer, is a door that does not answer.
  const settled = async () => {
    clearTimeout(pause);
    const deadline = Date.now() + 1500;
    const tried = new Set();
    for (;;) {
      const value = slug ? slug.value.trim().toLowerCase() : '';
      const left = deadline - Date.now();
      if (!addresses || !value || slugProblem(value) || told.has(value) || left <= 0) return;
      if (tried.has(value) && asking?.value !== value) return; // asked, and the door did not answer
      tried.add(value);
      const question = asking?.value === value ? asking : ask(value);
      await Promise.race([question.done, new Promise((done) => { setTimeout(done, left); })]);
      // stopped by an edit, not unanswered: should the person come back to it, it is asked again
      if (question.controller.signal.aborted) tried.delete(value);
    }
  };

  const render = () => {
    if (!window.turnstile || !slot) return;
    if (widget !== null) {
      try { window.turnstile.remove(widget); } catch {}
    }
    token = '';
    widget = window.turnstile.render(slot, {
      sitekey,
      // the form is a white card in both of the site's themes
      theme: 'light',
      language: (form.dataset.language || 'en').toLowerCase(),
      size: 'flexible',
      callback: (value) => { token = value; },
      'expired-callback': () => { token = ''; },
      'error-callback': () => { token = ''; },
    });
  };

  // Nothing can be sent: say so now, and let nobody fill a form that goes nowhere. The honeypot stays as it is.
  const close = () => {
    say(form.dataset.unavailableMessage, 'unavailable');
    submit.disabled = true;
    for (const field of form.elements) {
      if (field === submit || field.name === 'website') continue;
      field.setAttribute('aria-disabled', 'true');
      if (field.type === 'checkbox') field.disabled = true;
      else field.readOnly = true;
    }
    if (slot) slot.hidden = true;
  };

  if (available) {
    window.beeverforgeTurnstileReady = render;
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=beeverforgeTurnstileReady';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  } else {
    close();
  }

  // Retry-After, when the door sends it and lets the browser read it: seconds, or an HTTP date.
  const waitSeconds = (response) => {
    const header = response.headers.get('Retry-After');
    if (!header) return null;
    if (/^\d+$/.test(header.trim())) return Number(header);
    const at = Date.parse(header);
    return Number.isNaN(at) ? null : Math.max(0, Math.round((at - Date.now()) / 1000));
  };
  const rateSentence = (response) => {
    const seconds = waitSeconds(response);
    if (seconds === null) return form.dataset.rateMessage;
    const minutes = Math.max(1, Math.ceil(seconds / 60));
    if (minutes === 1) return form.dataset.rateWaitOneMessage;
    return form.dataset.rateWaitMessage.replace('{minutes}', String(minutes));
  };
  // The door's refusals, each with its own sentence, none of which tells whether the e-mail address was known: 403 is the
  // check that did not pass (the widget is reset below), 503 the check that could not be asked, 429 too many attempts,
  // 400 and 422 a field the door would not take; anything else is the generic sentence.
  const refusal = (response) => {
    if (response.status === 403) return form.dataset.captchaMessage;
    if (response.status === 503) return form.dataset.unavailableCheckMessage;
    if (response.status === 429) return rateSentence(response);
    if (response.status === 400 || response.status === 422) return form.dataset.invalidMessage;
    return form.dataset.errorMessage;
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (pending) return;
    if (!available) {
      say(form.dataset.unavailableMessage, 'unavailable');
      return;
    }
    pending = true;
    await settled();
    pending = false;
    checkSlug();
    if (!form.reportValidity()) return;
    if (!token) {
      say(form.dataset.captchaMessage, 'error');
      return;
    }
    const data = new FormData(form);
    const field = (name) => String(data.get(name) || '').trim();
    const payload = {
      company: field('company'),
      slug: field('slug'),
      email: field('email'),
      name: field('name'),
      wants: field('wants'),
      language: form.dataset.language || 'en',
      consent: data.get('consent') === 'true',
      turnstile_token: token,
      website: String(data.get('website') || ''),
    };
    // the button stays enabled while the door answers, so focus stays where it is; a second press is ignored
    pending = true;
    submit.setAttribute('aria-busy', 'true');
    say(form.dataset.pendingMessage, 'pending');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        mode: 'cors',
        credentials: 'omit',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        window.location.assign(form.dataset.successUrl);
        return;
      }
      say(refusal(response), 'error');
    } catch {
      say(form.dataset.errorMessage, 'error');
    }
    // a Turnstile token is single-use: the next attempt needs a fresh one
    if (widget !== null && window.turnstile) {
      try { window.turnstile.reset(widget); } catch {}
    }
    token = '';
    submit.removeAttribute('aria-busy');
    pending = false;
  });
})();
