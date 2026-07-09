(function(){
  const services=['Premium Website','WhatsApp Lead System','Google Profile Improvement','Basic SEO','FAQ + Schema','Reviews + Trust Section','Gallery/Portfolio','Lead Capture Form'];
  function build(data){return `# Pragati Sahayak Proposal

Business: ${data.businessName||'Local Business'}
Industry: ${data.industry||'Local Service'}
Goal: ${data.goal||'More trust and inquiries'}

## Recommended System
${services.map(s=>'- '+s).join('
')}

## Why this matters
Customer pehle online check karta hai. A premium booking-ready website helps your business look trusted, clear and easy to contact.

## Next Step
Free online presence audit + WhatsApp discussion.`}
  window.PSProposal={build};
  document.addEventListener('submit',e=>{const form=e.target.closest('[data-proposal-form]'); if(!form)return; e.preventDefault(); const data=Object.fromEntries(new FormData(form).entries()); const md=build(data); const out=document.querySelector('[data-proposal-output]'); if(out) out.textContent=md;});
})();
