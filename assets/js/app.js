(() => {
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('nav');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(isOpen));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
    }));
  }
  document.querySelector('[data-open-all]')?.addEventListener('click', () => document.querySelectorAll('details.block').forEach(d => d.open = true));
  document.querySelector('[data-close-all]')?.addEventListener('click', () => document.querySelectorAll('details').forEach(d => d.open = false));

  // Keep the existing start-page buttons visually equal.
  document.querySelectorAll('.hero .actions .btn').forEach(button => {
    button.classList.add('primary');
    button.classList.remove('alt');
  });
})();
