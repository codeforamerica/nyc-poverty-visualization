"use strict";

const WICIncomeThreshold = 1772;

const wicTable = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 735, 0, 0, 0, 0, 0, 0],
  [0, 886, 848, 0, 0, 0, 0, 0],
  [0, 712, 1016, 969, 0, 0, 0, 0],
  [0, 819, 940, 1072, 1105, 0, 0, 0],
  [0, 776, 923, 1024, 1129, 1939, 0, 0],
  [0, 664, 1135, 1033, 881, 1461, 0, 0],
  [0, 664, 895, 1523, 908, 1283, 1511, 1991]
]

const CalculateWICEligibility = function(yearlyIncome, numberAdults, numberChildren){
  let monthlyIncome = yearlyIncome/12;
  if(monthlyIncome < WICIncomeThreshold){

    let
      familySize = numberAdults + numberChildren,
      tableRow = wicTable[familySize - 1];
      let wicAmount;
      if(numberChildren > 0){
        wicAmount = tableRow[numberChildren];
      }
      else {
        wicAmount = 0;
      }


    return {eligible: true, wicAmount: wicAmount};
  }
  else {
    return {eligible: false, wicAmount: 0};
  }
};

module.exports = CalculateWICEligibility;
