"use strict";

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
    [1, 13520],
    [2, 18200],
    [3, 22880],
    [4, 27560],
    [5, 32240],
    [6, 36920],
    [7, 41600],
    [8, 46280]
  ];

const checkFreeLunchEligibility = function(yearlyIncome, numberChildren, numberAdults) {
  let
    freeLunchallowedIncome = freeLunchTable[numberAdults + numberChildren -1],
    reducedLunchallowedIncome = reducedLunchTable[numberAdults + numberChildren -1];

  if(numberChildren < 1){
    return {eligible: false, lunchRate: 'none'};
  }

  if(numberAdults < 1){
    return {eligible: true, lunchRate: 'free'};
  }

  if(yearlyIncome <= freeLunchallowedIncome) {
    return {eligible: true, lunchRate: 'free'};
  } else if (yearlyIncome <= reducedLunchallowedIncome) {
    return {eligible: true, lunchRate: 'reduced'};
  } else {
    return {eligible: true, lunchRate: 'full-price'};
  }

};

module.exports = checkFreeLunchEligibility;
