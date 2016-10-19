  "use strict";




const
  snapIncomeTable = [
    [1, 1276],
    [2, 1726],
    [3, 2177],
    [4, 2628],
    [5, 3078],
    [6, 3529],
    [7, 3890],
    [8, 4430]
  ],

  snapAllotment = [
    [1, 194],
    [2, 357],
    [3, 511],
    [4, 649],
    [5, 771],
    [6, 925],
    [7, 1022],
    [8, 1169]
  ];

const calcAllowedIncome = function(totalFamily){
  let allowedIncome;
  if(totalFamily > 8){
    allowedIncome = 4430 + (totalFamily - 8) * 451;
  } else {
    allowedIncome = snapIncomeTable[totalFamily - 1][1];
  }
  return allowedIncome;
};

const calcSnapAllotment = function(totalFamily){
  let snapAmount;
  if(totalFamily > 8){
    snapAmount = 1169 + (totalFamily - 8) * 146;
  } else {
    snapAmount = snapAllotment[totalFamily -1][1];
  }
  return snapAmount;
};

const snapEligibility = function(yearlyIncome, numberAdults, numberChildren){
  let
    totalFamily = numberChildren + numberAdults,
    monthlyIncome = yearlyIncome/12,
    allowedIncome = calcAllowedIncome(totalFamily);

  if (monthlyIncome <= allowedIncome){
    let snapAmount = calcSnapAllotment(totalFamily);
    return {eligible: true, snapAmount: snapAmount};
  } else {
    return {eligible: false, snapAmount: 0};
  }
};

module.exports = snapEligibility;
