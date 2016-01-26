"use strict";
  const checkIncome = function(income, numberHouseholdMembers){
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
    let allowedIncome = screeningTable[numberHouseholdMembers-1];

    if (allowedIncome[1] >= income) {
      return true;
    } else {
      return false;
    }
  };

module.exports = checkIncome;
