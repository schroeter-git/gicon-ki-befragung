(() => {
  // Existing interaction: mobile navigation
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('nav');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(isOpen));
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menu.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Existing interaction: questionnaire accordion controls
  document.querySelector('[data-open-all]')?.addEventListener('click', () => {
    document.querySelectorAll('details').forEach(detail => { detail.open = true; });
  });
  document.querySelector('[data-close-all]')?.addEventListener('click', () => {
    document.querySelectorAll('details').forEach(detail => { detail.open = false; });
  });

  // Version 4.3 visual identity: KI -> LFP in the blue/petrol circle
  document.querySelectorAll('.mark').forEach(mark => {
    if (mark.textContent.trim() === 'KI') mark.textContent = 'LFP';
  });

  // Version 4.3: make both hero calls-to-action use the preferred filled style.
  document.querySelectorAll('.hero .actions .btn').forEach(button => {
    button.classList.add('primary');
    button.classList.remove('alt');
  });

  // Keep version labeling consistent on every page without changing page content.
  const versionPattern = /Version\s+4(?:\.1|\.2|\.3)?/gi;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach(node => {
    if (versionPattern.test(node.nodeValue)) {
      node.nodeValue = node.nodeValue.replace(versionPattern, 'Version 4.3');
    }
    versionPattern.lastIndex = 0;
  });
  document.title = document.title.replace(/Version\s+4(?:\.1|\.2|\.3)?/gi, 'Version 4.3');
})();
