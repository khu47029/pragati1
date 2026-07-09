(function () {
  function buildMessage(data) {
    return [
      'Hello Pragati Sahayak,',
      `Business Name: ${data.businessName || ''}`,
      `Business Type: ${data.businessType || ''}`,
      `Location: ${data.location || ''}`,
      `Service Need: ${data.serviceNeed || ''}`,
      `Budget: ${data.budget || ''}`,
      `Timeline: ${data.timeline || ''}`,
      'Please check my online presence and suggest improvement.'
    ].join('\n');
  }

  window.PSWhatsAppBuilder = { buildMessage };

  document.addEventListener('input', function (event) {
    const form = event.target.closest('[data-ps-whatsapp-builder]');
    if (!form) return;
    const data = Object.fromEntries(new FormData(form).entries());
    const output = form.querySelector('[data-ps-message-output]');
    if (output) output.value = buildMessage(data);
  });
})();
