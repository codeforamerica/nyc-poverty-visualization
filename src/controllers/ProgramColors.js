"use strict";

const colorName = function(programName){
  let color;
  switch(programName) {
    case 'ACSChildCare':
      color = 'light-blue';
      break;
    case 'HEAP':
      color = 'orange';
      break;
    case 'SchoolFood':
      color = 'light-green';
      break;
    case 'SNAP':
      color = 'green';
      break;
    case 'TaxRefund':
      color = 'red';
      break;
    case 'WIC':
      color = 'blue';
      break;
    default:
      color = 'gray';
  }
  return color;
};

module.exports = colorName;
