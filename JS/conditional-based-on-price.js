// I'm a baddie and I write bad code
function rentalCarCost(d) {
    let cost = 40 * d
    let rate1 = 20
    let rate2 = 50

    if (d < 3){
      cost = 40 * d
    }else if (d < 7) {
      cost = cost - rate1
    }else if (d >= 7) {
        cost = cost - rate2
    }
    return cost
  }

  // More elegant solution
  function baseCost(days, rate) {
    return days * rate;
  }
  
  function discountRate(days) {
    if ( days >= 7 ) {
      return 50;
    }
    else if ( days >= 3 ) {
      return 20;
    }
    else {
      return 0;
    }
  }
  
  function rentalCarCost(days) {
    return baseCost(days, 40) - discountRate(days);
  }