(function(){
  async function loadJSON(path){const r=await fetch(path);return r.json()}
  async function renderGrid(path,target){try{const data=await loadJSON(path);document.querySelector(target).innerHTML=data.map(x=>`<article class="ps-card"><h3>${x.title||x.name}</h3><p>${x.description||x.summary||''}</p></article>`).join('')}catch(e){console.warn('Cluster load failed',e)}}
  window.PSCluster={loadJSON,renderGrid};
})();
