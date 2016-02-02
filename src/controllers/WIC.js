"use strict";

const WICIncomeThreshold = 1772;

const CalculateWICEligibility = function(yearlyIncome, numberAdults, numberChildren){
  let monthlyIncome = yearlyIncome/12;
  if(monthlyIncome < WICIncomeThreshold){
    return {eligible: true};
  }
  else {
    return {eligible: false};
  }
};

module.exports = CalculateWICEligibility;
