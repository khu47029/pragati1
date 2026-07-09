(function(){
  function calculate({leads=30,conversion=20,averageValue=1000,websiteCost=16999}){
    leads=+leads; conversion=+conversion; averageValue=+averageValue; websiteCost=+websiteCost;
    const customers=leads*(conversion/100), revenue=customers*averageValue, profit=revenue-websiteCost, roi=websiteCost?((profit/websiteCost)*100):0;
    return {customers:Math.round(customers), revenue:Math.round(revenue), profit:Math.round(profit), roi:Math.round(roi)}
  }
  window.PSROI={calculate};
  document.addEventListener('input',e=>{const box=e.target.closest('[data-roi-box]'); if(!box)return; const data=Object.fromEntries(new FormData(box).entries()); const r=calculate(data); const out=box.querySelector('[data-roi-output]'); if(out)out.innerHTML=`<div class="ps-card"><div class="ps-score">₹${r.revenue.toLocaleString('en-IN')}</div><p>Estimated monthly revenue impact</p><p>Customers: ${r.customers} | Profit after website cost: ₹${r.profit.toLocaleString('en-IN')} | ROI: ${r.roi}%</p></div>`});
})();
