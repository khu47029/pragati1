(function(){
  function scoreProfile(d){let s=0;['category','photos','reviews','services','hours','website','posts','description','whatsapp','location'].forEach(k=>{if(d[k]==='yes')s+=10});return s}
  window.PSGBP={scoreProfile};
})();
