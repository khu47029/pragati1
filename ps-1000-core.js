
(function(){
  const PS1000 = {
    scoreAudit(form){
      const data = Object.fromEntries(new FormData(form).entries());
      let score = 20;
      ['website','googleProfile','reviews','whatsapp','photos','services','faq','speed','schema','content'].forEach(k=>{ if(data[k]==='yes') score += 8; });
      return Math.min(score,100);
    },
    roi({monthlyLeads=30, conversionRate=20, avgOrderValue=3000}){
      const customers = monthlyLeads * (conversionRate/100);
      return Math.round(customers * avgOrderValue);
    },
    whatsappText({business='', service='', city=''}){
      return `Hi Pragati Sahayak, I want an online presence audit for ${business || 'my business'}${city ? ' in '+city : ''}. Service needed: ${service || 'Website + Local SEO + WhatsApp leads'}.`;
    },
    initStickyCTA(){
      if(document.querySelector('[data-ps1000-sticky]')) return;
      const a=document.createElement('a');
      a.href='#contact'; a.textContent='Get Free Audit'; a.setAttribute('data-ps1000-sticky','true');
      a.style.cssText='position:fixed;right:16px;bottom:16px;z-index:9999;background:#f5c451;color:#08111f;padding:13px 18px;border-radius:999px;font-weight:800;text-decoration:none;box-shadow:0 18px 45px rgba(0,0,0,.28)';
      document.body.appendChild(a);
    }
  };
  window.PS1000 = PS1000;
  document.addEventListener('DOMContentLoaded',()=>PS1000.initStickyCTA());
})();
