"use strict";

import taxTable from './taxRefundTable.js';

const eicCalculator = function(income, numberParents, numberChildren){
  let eligibility = function(income, numberParents, numberChildren){
    if(numberParents === 1 && numberChildren === 0){
      if(income < 14820){
        return true;
      } else {
        return false;
      }
    }

    if(numberParents === 2 && numberChildren === 0){
      if(income < 20330) {
        return true;
      } else {
        return false;
      }
    }

    if(numberParents === 1 && numberChildren === 1){
      if(income < 39131) {
        return true;
      } else {
        return false;
      }
    }

    if(numberParents === 2 && numberChildren === 1){
      if(income < 44651) {
        return true;
      } else {
        return false;
      }
    }

    if(numberParents === 1 && numberChildren === 2){
      if(income < 44454) {
        return true;
      } else {
        return false;
      }
    }

    if(numberParents === 2 && numberChildren === 2){
      if(income < 49974) {
        return true;
      } else {
        return false;
      }
    }

    if(numberParents === 1 && numberChildren > 2){
      if(income < 47747) {
        return true;
      } else {
        return false;
      }
    }

    if(numberParents === 2 && numberChildren > 2){
      if(income < 53267) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  let calcRefund = function(income, numberParents, numberChildren){
    console.log(income);
    const taxTableLength = taxTable.length;
    for(var i = 0; i < taxTableLength; i++){
      let
        currentRow = taxTable[i],
        minIncome = currentRow[0],
        maxIncome = currentRow[1];
      if(income > minIncome){
        if(income < maxIncome){
          if(numberParents === 1){
            console.log("INCOME MATCH" + currentRow[2]);
          }
        }
      } else {
        return;
      }
    }
  };

  if(eligibility(income, numberParents, numberChildren) === true){
    return calcRefund(income, numberParents, numberChildren);
  } else {
    return {eligibility: false, refundAmount: 0};
  }

};

module.exports = eicCalculator;
