(function () {
  function leadScore({ budget, timeline, businessType, hasWebsite }) {
    let score = 20;
    if (['15000-30000', '30000+'].includes(budget)) score += 25;
    if (['urgent', '7-days'].includes(timeline)) score += 25;
    if (['Dental Clinic', 'Salon', 'Gym', 'Coaching Center', 'Restaurant'].includes(businessType)) score += 15;
    if (hasWebsite === 'no') score += 15;
    return Math.min(score, 100);
  }

  window.PSLeadScore = { leadScore };
})();
