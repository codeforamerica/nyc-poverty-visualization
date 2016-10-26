"use strict";


const freeLunchElegibility = [
  [22784.6, 0, 0, 0, 0, 0, 0, 0],
  [29328.1, 30186.45, 0, 0, 0, 0, 0, 0],
  [34258.3, 35251.75, 35285.05, 0, 0, 0, 0, 0],
  [45173.3, 45911.32, 44414.8, 44568.35, 0, 0, 0, 0],
  [54477, 55268.75, 53576, 52266.2, 51467, 0, 0, 0],
  [62657.7, 62907.4, 61610.55, 60637.35, 58521.05, 57425.86, 0, 0],
  [72096.4, 72545.9, 70993.75, 69913.35, 67896.85, 65547.35, 62966.6, 0],
  [80634.1, 81344.5, 79881.15, 78597.25, 76776.85, 74466.2, 72063.05, 71450.7],
];


const lunchValue = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1117, 0, 0, 0, 0, 0, 0],
  [0, 1675, 3351, 0, 0, 0, 0, 0],
  [0, 2234, 4467, 6701, 0, 0, 0, 0],
  [0, 2792, 5584, 8376, 11169,  0, 0, 0],
  [0, 3351, 6701, 10052, 13402, 16753, 0, 0],
  [0, 3909, 7818, 11727, 15636, 19545, 0, 0],
  [0, 4467, 8935, 13402, 17870, 20657, 17870, 22337]
];

const breakfastValue = 278;


const checkFreeLunchEligibility = function(yearlyIncome, numberAdults, numberChildren) {
  let familySize = numberAdults + numberChildren - 1;
  let freeLunchEligibile = freeLunchElegibility[familySize];

  if (freeLunchEligibile[numberChildren - 1] > 0 && yearlyIncome <= freeLunchEligibile[numberChildren - 1]) {
    let lunchValueGet = lunchValue[familySize];
    return { eligible: true, foodValue: lunchValueGet[numberChildren] + (breakfastValue * numberChildren), lunchRate: 'free'}
  } else {
    return { eligible: false, foodValue: breakfastValue * numberChildren, lunchRate: 'breakfast'}
  }
};

module.exports = checkFreeLunchEligibility;
