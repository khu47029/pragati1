(function(){
  const $=(s,r=document)=>r.querySelector(s); const $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
  window.PSUltra={
    $,$$, brand:'Pragati Sahayak',
    qs(){return Object.fromEntries(new URLSearchParams(location.search).entries())},
    save(k,v){localStorage.setItem('ps_'+k,JSON.stringify(v))},
    load(k,d=null){try{return JSON.parse(localStorage.getItem('ps_'+k))??d}catch(e){return d}},
    wa(text){return 'https://wa.me/?text='+encodeURIComponent(text)},
    copy(text){navigator.clipboard?.writeText(text); return text},
    scoreColor(score){return score>=80?'Excellent':score>=60?'Good':score>=40?'Average':'Needs Improvement'}
  };
  document.addEventListener('click',e=>{const btn=e.target.closest('[data-copy]'); if(btn){PSUltra.copy(btn.dataset.copy); btn.textContent='Copied'; setTimeout(()=>btn.textContent='Copy',900)}})
})();
