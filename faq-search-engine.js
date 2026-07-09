(function(){
  document.addEventListener('input',e=>{const input=e.target.closest('[data-faq-search]'); if(!input)return; const q=input.value.toLowerCase(); document.querySelectorAll('[data-faq-item]').forEach(item=>{item.style.display=item.textContent.toLowerCase().includes(q)?'':'none'})});
})();
