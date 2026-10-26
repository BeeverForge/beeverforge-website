// The section contents stay open on wide screens and start collapsed on narrow ones.
const toc = document.querySelector('[data-doc-toc]');
if (toc) {
  const wide = window.matchMedia('(min-width: 901px)');
  const sync = () => { toc.open = wide.matches; };
  sync();
  wide.addEventListener('change', sync);
}
