"use strict";

const snapElegibilityTable = [
[24632],
[31706, 32634],
[37036, 38110, 38146],
[48836, 49634, 48016, 48182],
[58894, 59750, 59720, 56504, 55640],
[67738, 68008, 66606, 65262, 63266, 62082],
[77942, 78452, 76750, 75582, 73402, 70862, 68072],
[87172, 87940, 86358, 84970, 83002, 80504, 77906, 77244]];

const snapThreshold = function(numberAdults, numberChildren){
  let
    familySize = numberAdults + numberChildren,
    tableRow = snapElegibilityTable[familySize - 1];
    if(numberChildren > 0){
      return tableRow[numberChildren];
    }
    else {
      return tableRow[0];
    }
};

const snapAllotment = [
[2207],
[3214, 2815],
[4457, 4174, 4264],
[5282, 5290, 5360, 6002],
[6176, 7000, 6367, 6323, 5571],
[7071, 8252, 6548, 8116, 7412, 5737],
['ST', 6695, 9232, 8213, 9901, 8180, 'NA'],
['ST', 'ST', 3381, 11359, 9215, 2123, 5473, 'ST']];

const calcSnapAllotment = function(numberAdults, numberChildren){
  let
    familySize = numberAdults + numberChildren,
    tableRow = snapAllotment[familySize - 1];
  if(numberChildren > 0){
    return tableRow[numberChildren];
  } else {
    return tableRow[0];
  }
};

const snapEligibility = function(yearlyIncome, numberAdults, numberChildren){
  let
    totalFamily = numberChildren + numberAdults,
    allowedIncome = snapThreshold(numberAdults, numberChildren);

  if (yearlyIncome <= allowedIncome){
    let snapAmount = calcSnapAllotment(numberAdults, numberChildren);
    return {eligible: true, snapAmount: snapAmount};
  } else {
    return {eligible: false, snapAmount: 0};
  }
};

/*
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
*/


module.exports = snapEligibility;
