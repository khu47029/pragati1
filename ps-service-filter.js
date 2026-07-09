(function () {
  document.addEventListener('click', function (event) {
    const btn = event.target.closest('[data-service-filter]');
    if (!btn) return;
    const type = btn.getAttribute('data-service-filter');
    document.querySelectorAll('[data-service-card]').forEach(card => {
      card.style.display = type === 'all' || card.getAttribute('data-service-card') === type ? '' : 'none';
    });
  });
})();
