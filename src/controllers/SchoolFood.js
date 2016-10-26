"use strict";


const freeLunchElegibility = [
  [22784.6, 0, 0, 0, 0, 0, 0, 0],
  [29328.1, 30186.45, 0, 0, 0, 0, 0, 0],
  [34258.3, 35251.75, 35285.05, 0, 0, 0, 0, 0],
  [45173.3, 45911.45, 44414.8, 44568.35, 0, 0, 0, 0],
  [54477, 55268.75, 53576, 52266.2, 51467, 0, 0, 0],
  [62657.7, 62907.4, 61610.55, 60637.35, 58521.05, 57425.86, 0, 0],
  [72096.4, 72545.9, 70993.75, 69913.35, 67896.85, 65547.35, 62966.6, 0],
  [80634.1, 81344.5, 79881.15, 78597.25, 76776.85, 74466.2, 72063.05, 71450.7],
];

const
  freeLunchTable = [
    [1, 13520],
    [2, 18200],
    [3, 22880],
    [4, 27560],
    [5, 32240],
    [6, 36920],
    [7, 41600],
    [8, 46280]
  ],

  reducedLunchTable = [
    [1, 19240],
    [2, 25900],
    [3, 32560],
    [4, 39220],
    [5, 45880],
    [6, 52540],
    [7, 59200],
    [8, 65860]
  ],

  mealValue = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1114, 0, 0, 0, 0, 0, 0],
    [0, 1580, 2627, 0, 0, 0, 0, 0],
    [0, 1969, 3246, 4832, 0, 0, 0, 0],
    [0, 2286, 3767, 5358, 8804, 0, 0, 0],
    [0, 2104, 4172, 6298, 7982, 11732, 0, 0],
    [0, 2332, 3622, 6914, 9354, 11026, 0, 0 ],
    [0, 3961, 3116, 6691, 8827, 10418, 12180, 22337]
  ]

const checkFreeLunchEligibility = function(yearlyIncome, numberAdults, numberChildren) {
  let
    freeLunchallowedIncome = freeLunchTable[numberAdults + numberChildren -1][1],
    reducedLunchallowedIncome = reducedLunchTable[numberAdults + numberChildren -1][1],
    lunchValue,
    familySize = numberAdults + numberChildren,
    tableRow = mealValue[familySize - 1];

    if(numberChildren > 0){
      lunchValue = tableRow[numberChildren];
    }
    else {
      lunchValue = 0;
    }

  if(numberChildren < 1){
    return {eligible: false, lunchValue: lunchValue, lunchRate: 'none'};
  }

  if(numberAdults < 1){
    return {eligible: true, lunchValue: lunchValue, lunchRate: 'free'};
  }

  if(yearlyIncome <= freeLunchallowedIncome) {
    return {eligible: true, lunchValue: lunchValue, lunchRate: 'free'};
  }
  if (yearlyIncome <= reducedLunchallowedIncome) {
    return {eligible: true, lunchValue: lunchValue, lunchRate: 'reduced'};
  } else {
    return {eligible: true, lunchValue: lunchValue, lunchRate: 'full-price'};
  }
};

module.exports = checkFreeLunchEligibility;
