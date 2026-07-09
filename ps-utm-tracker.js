(function () {
  const params = new URLSearchParams(location.search);
  const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  const found = {};
  keys.forEach(k => { if (params.get(k)) found[k] = params.get(k); });
  if (Object.keys(found).length) localStorage.setItem('ps_utm', JSON.stringify(found));
})();
