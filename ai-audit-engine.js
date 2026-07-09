(function(){
  function auditScore(form){
    const data=Object.fromEntries(new FormData(form).entries());
    let score=0, max=100, wins=[], gaps=[];
    const checks=['website','googleProfile','reviews','whatsapp','services','gallery','faq','schema','speed','caseStudy'];
    checks.forEach(k=>{ if(data[k]==='yes'){score+=10; wins.push(k)} else gaps.push(k) });
    return {score, grade:PSUltra.scoreColor(score), wins, gaps, data};
  }
  function render(result){
    return `<div class="ps-report"><h2>AI Online Presence Audit</h2><p class="muted">Business: ${result.data.businessName||'Local Business'}</p><h3>Score: ${result.score}/100 - ${result.grade}</h3><p>Strong points: ${result.wins.join(', ')||'Need setup'}</p><p>Improvement areas: ${result.gaps.join(', ')||'Everything looks strong'}</p><h3>Recommended next steps</h3><ul><li>Premium mobile website with clear service pages</li><li>FAQ and schema for AEO visibility</li><li>Case studies and proof for E-E-A-T</li><li>WhatsApp lead capture flow</li></ul></div>`
  }
  window.PSAudit={auditScore,render};
  document.addEventListener('submit',e=>{const form=e.target.closest('[data-ps-audit-form]'); if(!form)return; e.preventDefault(); const r=auditScore(form); PSUltra.save('last_audit',r); const out=document.querySelector('[data-ps-audit-output]'); if(out) out.innerHTML=render(r);});
})();
