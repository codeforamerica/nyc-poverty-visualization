"use strict";

const heapTable = [
  [1, 2194],
  [2, 2869],
  [3, 3544],
  [4, 4219],
  [5, 4894],
  [6, 5569],
  [7, 5696],
  [8, 5822],
  [9, 5949],
  [10, 6076],
  [11, 6534]
];

const heapCalculator = function(yearlyIncome, numberAdults, numberChildren){
  let
    monthlyIncome = yearlyIncome/12,
    householdSize = numberAdults + numberChildren,
    allowedIncome = heapTable[householdSize - 1][1];

    if(monthlyIncome <= allowedIncome){
      return {eligible: true};
    }
    else {
      return {eligible: false};
    }
};

module.exports = heapCalculator;
