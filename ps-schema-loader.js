(function () {
  window.PSSchema = {
    inject: function (schemaObject) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schemaObject);
      document.head.appendChild(script);
    }
  };
})();
