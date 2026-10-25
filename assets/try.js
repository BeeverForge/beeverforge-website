// The trial's waitlist form (/try/): the character count, Cloudflare Turnstile and the post to the door (beeverforge-try).
// The door answers 202 with the same sentence for every address, so success always goes to the confirmation page;
// nothing here can tell whether an address was already known. Served from this machine, the form uses the local door
// and Cloudflare's always-pass test key, so the committed build is the one that is tested.
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
  let widget = null;
  let token = '';

  const say = (message, state) => {
    status.textContent = message || '';
    status.dataset.state = state;
  };
  const count = () => {
    if (counter && wants) counter.textContent = `${wants.value.length} / ${wants.maxLength}`;
  };
  wants?.addEventListener('input', count);
  count();

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

  if (available) {
    window.beeverforgeTurnstileReady = render;
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=beeverforgeTurnstileReady';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  } else if (slot) {
    slot.hidden = true;
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    if (!available) {
      say(form.dataset.unavailableMessage, 'error');
      return;
    }
    if (!token) {
      say(form.dataset.captchaMessage, 'error');
      return;
    }
    const data = new FormData(form);
    const field = (name) => String(data.get(name) || '').trim();
    const payload = {
      email: field('email'),
      name: field('name'),
      wants: field('wants'),
      language: form.dataset.language || 'en',
      consent: data.get('consent') === 'true',
      turnstile_token: token,
      website: String(data.get('website') || ''),
    };
    submit.disabled = true;
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
      if (response.status === 429) say(form.dataset.rateMessage, 'error');
      else if (response.status === 400 || response.status === 422) say(form.dataset.invalidMessage, 'error');
      else say(form.dataset.errorMessage, 'error');
    } catch {
      say(form.dataset.errorMessage, 'error');
    }
    // a Turnstile token is single-use: the next attempt needs a fresh one
    if (widget !== null && window.turnstile) {
      try { window.turnstile.reset(widget); } catch {}
    }
    token = '';
    submit.disabled = false;
  });
})();
