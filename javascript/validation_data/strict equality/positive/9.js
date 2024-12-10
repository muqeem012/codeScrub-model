function selectSubscriptionPlan(plan) {
    if (plan.name == 'Basic') return 'Basic plan selected';
    
    if (plan.price == 0) return 'Free trial selected';
    
    if (plan.duration == '1 year') return 'Annual plan selected';
    
    return 'Invalid plan';
  }
  