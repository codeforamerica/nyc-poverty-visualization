"use strict";

const childCareIncomeGuideline = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 80674, 0, 0, 0, 0, 0, 0],
  [0, 136137, 72607, 0, 0, 0, 0, 0],
  [0, 91565, 123330, 40337, 0, 0, 0, 0],
  [0, 115364, 92775, 131095, 'ST', 0, 0, 0],
  [0, 162256, 94792, 110523, 57581, 'ST', 0, 0],
  [0, 137448, 126356, 58993, 52640, 36303, 'ST', 0],
  [0, 'ST', 89629, 132709, 158020, 'ST', 105885, 'ST'],
];

// If the family is below or equal to the income guidelines above, these are their costs
const childCareBelowOrEqual = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 17285, 0, 0, 0, 0, 0, 0],
  [0, 5477, 1041, 0, 0, 0, 0, 0],
  [0, 2794, 5116, 13110, 0, 0, 0, 0],
  [0, 1659, 1956, 5030, 'ST', 0, 0, 0],
  [0, 872, 2766, 671, 6707, 'ST', 0, 0],
  [0, 'ST', 1217, 1788, 1452, 456, 'ST', 0],
  [0, 'ST', 8876, 8712, 484, 'ST', 3353, 'ST'],
];

const childCareAbove = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 11457, 0, 0, 0, 0, 0, 0],
  [0, 11178, 9780, 0, 0, 0, 0, 0],
  [0, 6914, 11066, 1565, 0, 0, 0, 0],
  [0, 5030, 7951, 6707, 'ST', 0, 0, 0],
  [0, 3457, 5739, 7260, 12798, 'ST', 0, 0],
  [0, 761, 6148, 2959, 'ST', 13828, 'ST', 0],
  [0, 'ST', 1383, 69, 5589, 'ST', 'ST', 'ST'],
];


const ChildCare = function(yearlyIncome, numberAdults, numberChildren) {
  let familySize = numberAdults + numberChildren;
  let childCareCost = 0;
  // Is the yearly income higher or lower than the guideline?
  let familyIncomeGuideline = childCareIncomeGuideline[familySize][numberChildren];
  if (familyIncomeGuideline < yearlyIncome) { // Yearly income is greater than guideline
    childCareCost = childCareAbove[familySize][numberChildren];
  } else { // And now it's less
    childCareCost = childCareBelowOrEqual[familySize][numberChildren];
  }

  return childCareCost;
};

module.exports = ChildCare;
