"use strict";

const formatDollars = function(amount){
  if(amount > 0){
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return 0;
  }
};

module.exports = formatDollars;
