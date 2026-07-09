(function () {
  document.addEventListener('input', function (event) {
    const input = event.target.closest('[data-faq-search]');
    if (!input) return;
    const q = input.value.toLowerCase();
    document.querySelectorAll('[data-faq-item]').forEach(item => {
      item.style.display = item.innerText.toLowerCase().includes(q) ? '' : 'none';
    });
  });
})();
