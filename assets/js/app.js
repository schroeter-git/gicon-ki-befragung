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
  document.querySelector('[data-open-all]')?.addEventListener('click', () => document.querySelectorAll('details').forEach(d => d.open = true));
  document.querySelector('[data-close-all]')?.addEventListener('click', () => document.querySelectorAll('details').forEach(d => d.open = false));

  // Unify the site identity/header on every page, including fragebogen.html.
  document.querySelectorAll('.brand').forEach(brand => {
    brand.innerHTML = '<span class="mark">LFP</span><span>GICON KI-Befragung<small>Ergebniswebsite · Version 5.0</small></span>';
  });

  // Same primary style for both hero actions on the start page.
  document.querySelectorAll('.hero .actions .btn').forEach(button => {
    button.classList.add('primary');
    button.classList.remove('alt');
  });

  // Consistent visible version label and document title.
  const versionPattern = /Version\s+4(?:\.1|\.2|\.3)?/gi;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => { node.nodeValue = node.nodeValue.replace(versionPattern, 'Version 5.0'); });
  document.title = document.title.replace(versionPattern, 'Version 5.0');
})();
