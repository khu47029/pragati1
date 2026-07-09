(function(){
  function score(data){let s=0;['clearServices','reviews','gallery','contact','whatsapp','about','faq','privacy','speed','mobile'].forEach(k=>{if(data[k]==='yes')s+=10});return s}
  window.PSTrust={score};
})();
