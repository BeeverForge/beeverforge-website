// Search is local; the reader's query never leaves the browser.
const normalize = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase();
const search = document.querySelector('[data-blog-search]');
if (search) {
  search.addEventListener('submit', e => e.preventDefault());
  search.querySelector('input').addEventListener('input', e => {
    const query = normalize(e.target.value.trim());
    let found = 0;
    document.querySelectorAll('[data-blog-entry]').forEach(article => {
      article.hidden = !normalize(article.dataset.search).includes(query);
      if (!article.hidden) found++;
    });
    document.querySelector('[data-blog-empty]').hidden = found > 0;
  });
}
const article = document.querySelector('[data-article] article');
if (article) {
  const progress = document.querySelector('[data-reading-progress]');
  const update = () => {
    const rect = article.getBoundingClientRect();
    const available = rect.height - innerHeight;
    progress.style.width = `${available > 0 ? Math.min(100,Math.max(0,-rect.top / available * 100)) : 100}%`;
  };
  addEventListener('scroll', update, {passive:true});
  addEventListener('resize', update);
  update();
  const sidebar = document.querySelector('.j-sidebar');
  const nav = sidebar.querySelector('nav');
  const label = nav.querySelector('.j-label');
  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'j-mobile-toc-title';
  toggle.innerHTML = `<span class="j-label">${label.textContent}</span><span aria-hidden="true">⌄</span>`;
  toggle.style.cssText = 'border:0;background:transparent;color:inherit;width:100%;text-align:left';
  nav.id = 'article-toc';
  toggle.setAttribute('aria-controls','article-toc');
  sidebar.prepend(toggle);
  sidebar.classList.toggle('is-collapsed',matchMedia('(max-width:740px)').matches);
  toggle.setAttribute('aria-expanded',String(!sidebar.classList.contains('is-collapsed')));
  toggle.addEventListener('click',()=>{
    sidebar.classList.toggle('is-collapsed');
    toggle.setAttribute('aria-expanded',String(!sidebar.classList.contains('is-collapsed')));
  });
}
document.querySelector('[data-copy-link]')?.addEventListener('click', async e => {
  const button = e.currentTarget;
  const status = document.querySelector('[data-share-status]');
  try {
    const url = document.querySelector('link[rel="canonical"]').href;
    await navigator.clipboard.writeText(url);
    button.firstChild.textContent = button.dataset.copied;
    status.textContent = button.dataset.copied;
  } catch {
    status.textContent = button.dataset.copyError;
    status.classList.remove('sr-only');
  }
});
