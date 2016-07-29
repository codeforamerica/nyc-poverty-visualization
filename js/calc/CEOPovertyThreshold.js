"use strict";

const CEOPovertyTable = [
[14425],
[20345, 21778],
[31156, 27417, 25859],
[38104, 34708, 31156, 29692],
[44553, 41375, 38104, 34708, 33306],
[50629, 47638, 44553, 41375, 38104, 36764],
[56392, 53526, 50629, 47638, 44553, 41375, 40098],
[61907, 59165, 56392, 53526, 50629, 47638, 44553, 43307]];

const povertyThreshold = function(income, numberParents, numberChildren){
  let
    familySize = numberParents + numberChildren,
    tableRow = CEOPovertyTable[familySize - 1];
    if(numberChildren > 0){
      return tableRow[numberChildren];
    }
    else {
      return tableRow[0];
    }

};

module.exports = povertyThreshold;
