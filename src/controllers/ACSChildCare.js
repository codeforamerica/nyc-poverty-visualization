"use strict";
//[#people, monthly income]
const screeningTable = [
  [1, 973],
  [2, 3605],
  [3, 4206],
  [4, 4472],
  [5, 5234],
  [6, 5995],
  [7, 6756],
  [8, 7517],
  [9, 8279],
  [10, 9040],
  [11, 9801],
  [12, 10562],
  [13, 11324],
  [14, 12085],
  [15, 12846]
];

const checkIncome = function(yearlyIncome, numberAdults, numberChildren){
  //Check if family is in the income range for their household size
  let monthlyIncome = yearlyIncome/12,
    allowedIncome = screeningTable[numberAdults + numberChildren -1];

  //Check if children are present in the household
  if(numberChildren < 1){
    return false;
  }

  if (allowedIncome[1] >= monthlyIncome) {
    return true;
  } else {
    return false;
  }
};
//Test
module.exports = checkIncome;
