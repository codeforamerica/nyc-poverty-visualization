"use strict";

const wicIncomeThreshold = [
  [22784.6,0,0,0,0,0,0,0],
  [29328.05,30186.45,0,0,0,0,0,0],
  [34258.3,35251.75,35285.05,0,0,0,0,0],
  [45173.3,45911.45,44414.8,44568.35,0,0,0,0],
  [54476.95,55268.75,53576,52266.2,51467,0,0,0],
  [62657.65,62907.4,61610.55,60367.35,58521.05,57425.85,0,0],
  [72096.35,72545.9,70993.75,69913.35,67896.85,65547.35,62966.6,0],
  [80634.1,81344.5,79881.15,78597.25,76776.85,74466.2,72063.05,71450.7]

];




const wicAmountTable = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1327, 0, 0, 0, 0, 0, 0],
  [0, 1327, 1991, 0, 0, 0, 0, 0],
  [0, 1327, 1991, 2654, 0, 0, 0, 0],
  [0, 1327, 1991, 2654, 2654, 0, 0, 0],
  [0, 1327, 1991, 1991, 3318, 2654, 0, 0],
  [0, 664, 1991, 1991, 1991, 3318, 0, 0],
  [0, 664, 1327, 2654, 1991, 1991, 2654, 1991],
]

const CalculateWICEligibility = function(yearlyIncome, numberAdults, numberChildren){
  let
    familyIncomeRow = wicIncomeThreshold[numberAdults + numberChildren - 1],
    familyIncomeThreshold = familyIncomeRow[numberChildren - 1];



  if(yearlyIncome < familyIncomeThreshold){
      let
        wicAmountRow = wicAmountTable[numberAdults + numberChildren - 1],
        wicAmount = wicAmountRow[numberChildren];

    return {eligible: true, wicAmount: wicAmount};
  }
  else {
    return {eligible: false, wicAmount: 0};
  }
};

module.exports = CalculateWICEligibility;
