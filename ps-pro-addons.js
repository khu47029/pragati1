(function () {
  const cta = document.createElement('div');
  cta.className = 'ps-sticky-cta';
  cta.innerHTML = '<a href="pages/online-presence-audit.html">Free Online Audit</a>';
  if (!document.querySelector('.ps-sticky-cta')) document.body.appendChild(cta);

  document.querySelectorAll('[data-ps-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  document.querySelectorAll('[data-copy]').forEach(button => {
    button.addEventListener('click', async () => {
      const target = document.querySelector(button.getAttribute('data-copy'));
      if (!target) return;
      await navigator.clipboard.writeText(target.innerText || target.value || '');
      button.textContent = 'Copied';
      setTimeout(() => button.textContent = 'Copy', 1400);
    });
  });
})();
