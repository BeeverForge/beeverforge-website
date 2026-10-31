// Keep the inquiry's topic when moving from a plan or an assisted-start link.
document.querySelectorAll('[data-interest]').forEach((link) => {
  link.addEventListener('click', () => {
    try { sessionStorage.setItem('beeverforge-inquiry-interest', link.dataset.interest); } catch {}
    const field = document.querySelector('#contact-interest');
    if (field) field.selectedIndex = Number(link.dataset.interest);
  });
});
const field = document.querySelector('#contact-interest');
try {
  const selected = sessionStorage.getItem('beeverforge-inquiry-interest');
  if (field && selected !== null) {
    field.selectedIndex = Number(selected);
    sessionStorage.removeItem('beeverforge-inquiry-interest');
  }
} catch {}
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  document.querySelectorAll('.resource-menu[open]').forEach((menu) => {
    menu.open = false;
    menu.querySelector('summary').focus();
  });
});
document.addEventListener('click', (event) => {
  document.querySelectorAll('.resource-menu[open]').forEach((menu) => {
    if (!menu.contains(event.target)) menu.open = false;
  });
});
