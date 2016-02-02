"use strict";

import taxTable from './taxRefundTable.js';

const eicCalculator = function(income, numberParents, numberChildren){
  //Initially determine the eligibility based on marital status, number of children, and income.
  //This saves us from iterating through the IRS tax table for non-eligible candidates.
  let eligibility = function(income, numberParents, numberChildren){
    if(income < 1){
      return false;
    }
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

  //Get the appropriate tax row from the IRS table (stored in taxRefundTable.js)
  const getTaxRow = function(income){
    const taxTableLength = taxTable.length;
    let taxRow = [];
    for(var i = 0; i < taxTableLength; i++){
      let
        currentRow = taxTable[i],
        minIncome = currentRow[0],
        maxIncome = currentRow[1];
      if(income >= minIncome){
        if(income <= maxIncome){
          taxRow = currentRow;
          break;
        }
      }
    }
    return taxRow;
  };

  if(eligibility(income, numberParents, numberChildren) === true){
    //If the candidate passes an initial eligiblity check, then find their refund amount
    let
      //taxColumn is the column in the IRS table array that we will return a value from
      //Initial offset is 2 because the first 2 columns are max and min income
      taxColumn = 2,
      taxRow = getTaxRow(income);

    if(numberParents >= 2){
      //Filing jointly bumps the candidate four columns over
      taxColumn += 4;
    } else {
      taxColumn += 0;
    }

    if(numberChildren <= 3){
      //Move an additional column over for every child
      taxColumn += numberChildren;
    } else if (numberChildren > 3) {
      //Max is three children
      taxColumn += 3;
    }

    return {eligible: true, refundAmount: taxRow[taxColumn]};

  } else {
    return {eligible: false, refundAmount: 0};
  }

};

module.exports = eicCalculator;
