(function(){
  function orgSchema(){return {'@context':'https://schema.org','@type':'ProfessionalService',name:'Pragati Sahayak',url:'https://pragatisahayak.in/',areaServed:'India',serviceType:['Premium websites','WhatsApp lead systems','Google Business Profile improvement','AI search ready content']}}
  function faqSchema(faqs){return {'@context':'https://schema.org','@type':'FAQPage',mainEntity:faqs.map(f=>({'@type':'Question',name:f.q,acceptedAnswer:{'@type':'Answer',text:f.a}}))}}
  function inject(obj){const s=document.createElement('script');s.type='application/ld+json';s.textContent=JSON.stringify(obj);document.head.appendChild(s)}
  window.PSSchema={orgSchema,faqSchema,inject};
})();
