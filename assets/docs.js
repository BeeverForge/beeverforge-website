// The section contents stay open on wide screens and start collapsed on narrow ones.
const toc = document.querySelector('[data-doc-toc]');
if (toc) {
  const wide = window.matchMedia('(min-width: 901px)');
  const sync = () => { toc.open = wide.matches; };
  sync();
  wide.addEventListener('change', sync);
}

// On a narrow screen a table is read as one card per row: each cell carries its column's heading.
for (const table of document.querySelectorAll('.doc-table table')) {
  const heads = [...table.querySelectorAll('thead th')].map((th) => th.textContent.trim());
  if (!heads.length) continue;
  for (const row of table.querySelectorAll('tbody tr')) {
    [...row.children].forEach((cell, i) => { if (heads[i]) cell.dataset.label = heads[i]; });
  }
  table.closest('.doc-table').classList.add('doc-stack');
}

// A frame that scrolls sideways can be reached and scrolled with the keyboard, under the name of
// its figure caption, table caption or the section it belongs to.
const frames = document.querySelectorAll('.doc-diagram, .doc-table, .doc-article pre');
const nameOf = (frame) => {
  const own = frame.closest('figure')?.querySelector('figcaption') || frame.querySelector('caption');
  if (own) return own.textContent.trim();
  let heading = frame.previousElementSibling;
  while (heading && !/^H[23]$/.test(heading.tagName)) heading = heading.previousElementSibling;
  return heading ? heading.firstChild?.textContent.trim() || heading.textContent.trim() : '';
};
const reachable = () => {
  for (const frame of frames) {
    if (frame.scrollWidth > frame.clientWidth + 1) {
      frame.tabIndex = 0;
      if (frame.tagName !== 'PRE') {
        frame.setAttribute('role', 'region');
        const name = nameOf(frame);
        if (name) frame.setAttribute('aria-label', name);
      }
    } else if (frame.hasAttribute('tabindex')) {
      frame.removeAttribute('tabindex');
      frame.removeAttribute('role');
      frame.removeAttribute('aria-label');
    }
  }
};
reachable();
window.addEventListener('resize', reachable);
