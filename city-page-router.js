(function(){
  const cities=['Agra','Delhi','Noida','Gurugram','Jaipur','Lucknow','Kanpur','Meerut','Ghaziabad','Faridabad'];
  window.PSCities={cities, slug:s=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-')};
})();
