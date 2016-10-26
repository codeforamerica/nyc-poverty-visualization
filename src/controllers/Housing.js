"use strict"

let marketRateMedian = 0;

let noRentMedian = [
  [8135, 0, 0, 0, 0, 0, 0, 0],
  [10757, 11382, 0, 0, 0, 0, 0, 0],
  [16236, 14550,  'ST', 0, 0, 0, 0, 0],
  [18214, 17956, 18812, 'ST', 0, 0, 0, 0],
  ['ST', 16421, 20388, 16796, 'ST', 0, 0, 0],
  ['ST', 'ST', 'ST', 'ST', 'ST', 0, 0, 0],
  [0, 0, 0, 'ST', 0, 0, 0, 0],
  [0, 0, 'ST', 0, 0, 0, 0, 'ST' ],
];

let ownedClearMedian = [
   [287, 0, 0, 0, 0, 0, 0, 0],
   [2525, 4674, 0, 0, 0, 0, 0, 0],
   [8252, 6870, 5893, 0, 0, 0, 0, 0],
   [11521, 9884, 8696, 'ST', 0, 0, 0, 0],
   [16582, 13259, 10801, 13736, 0, 0, 0, 0],
   [18847, 18208, 16738, 5037, 16093, 0, 0, 0],
   [14487, 18583, 18715, 'ST', 'ST', 'ST', 'ST', 0],
   [13192, 'ST', 19519, 'ST', 'ST', 'ST', 0, 23339]
];

let ownedMortgageMedian = 0;

let publicHousingMedian = [
   [4175, 0, 0, 0, 0, 0, 0, 0],
   [5237, 7782, 0, 0, 0, 0, 0, 0],
   [9128, 7710, 9649, 0, 0, 0, 0, 0],
   [8653, 10076, 9968, 12799, 0, 0, 0, 0],
   [13483, 14714, 8332, 13035, 14988, 0, 0, 0],
   [2208, 7026, 10338, 10590, 16200, 15844, 0, 0],
   [0, 21703, 1248, 16762, 0, 14678, 0, 0],
   [0, 0, 10784, 0, 10759, 0, 0, 17104]
];

let rentRegulatedMedian = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1302, 0, 0, 0, 0, 0, 0],
  [1827, 1086, 4115, 0, 0, 0, 0, 0],
  [2920, 4196, 1855, 6062, 0, 0, 0, 0],
  [2444, 3434, 4880, 5156, 3400, 0, 0, 0],
  [10027, 3699, 3336, 2944, 4706, 0, 0, 0],
  [0, 6103, 2573, 5002, 3357, 1974, 0, 0],
  [0, 5698, 2268, 11037, 5284, 16046, 0, 7202]
];


function calculateHousing(housingSelection, numberAdults, numberChildren) {
  let familySize = numberAdults + numberChildren;

  if (housingSelection == 0) {
    let
      publicHousingMedianRow = publicHousingMedian[ numberAdults + numberChildren - 1],
      housingValue = publicHousingMedianRow[numberChildren];

    return housingValue;
  } else if (housingSelection == 1) {
    // rent sub or regulated
    let
      rentRegulatedMedianRow = rentRegulatedMedian[ numberAdults + numberChildren - 1],
      housingValue = rentRegulatedMedianRow[numberChildren];

    return housingValue;
  } else if (housingSelection == 2) {
    let
      noRentMedianRow = noRentMedian[ numberAdults + numberChildren - 1],
      housingValue = noRentMedianRow[numberChildren];

    return housingValue;

  } else if (housingSelection == 3) {
    // own home with mortgage
    return 0;

  } else if (housingSelection == 4) {
    // own home with no mortgage
    let
      ownedClearMedianRow = ownedClearMedian[ numberAdults + numberChildren - 1],
      housingValue = ownedClearMedianRow[numberChildren];

    console.log(ownedClearMedianRow);
    return housingValue;
  } else if (housingSelection == 5) {
    // none of the above
    return 0;
  }

}

module.exports = calculateHousing;
