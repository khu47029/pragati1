(function () {
  function scoreAudit(data) {
    let score = 0;
    const checks = [
      data.website === 'yes',
      data.googleProfile === 'yes',
      data.reviews === 'yes',
      data.whatsapp === 'yes',
      data.gallery === 'yes',
      data.services === 'yes',
      data.mobile === 'yes',
      data.faq === 'yes'
    ];
    checks.forEach(ok => { if (ok) score += 12; });
    if (data.businessName && data.businessName.length > 2) score += 4;
    return Math.min(score, 100);
  }

  window.PragatiAudit = { scoreAudit };

  document.addEventListener('submit', function (event) {
    const form = event.target.closest('[data-ps-audit-form]');
    if (!form) return;
    event.preventDefault();

    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());
    const score = scoreAudit(data);
    const result = form.parentElement.querySelector('[data-ps-audit-result]');

    const stage = score >= 80 ? 'Premium Ready' : score >= 55 ? 'Growth Ready' : 'Needs Trust Upgrade';
    const message =
      `Business: ${data.businessName || 'Local Business'}\n` +
      `Type: ${data.businessType || 'Not specified'}\n` +
      `Score: ${score}/100\n` +
      `Stage: ${stage}\n` +
      `Need: Website + Google Profile + WhatsApp Lead System + Trust Sections`;

    if (result) {
      result.style.display = 'block';
      result.innerHTML = `<h3>Your Online Presence Score: ${score}/100</h3><p>${stage}</p><pre>${message}</pre>`;
    }

    const phone = form.getAttribute('data-whatsapp-number') || '';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    const link = form.querySelector('[data-ps-whatsapp-link]');
    if (link) {
      link.href = url;
      link.style.display = 'inline-flex';
    }
  });
})();
