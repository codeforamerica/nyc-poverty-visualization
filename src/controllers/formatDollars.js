"use strict";

const formatDollars = function(amount){
  if(amount){
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};

module.exports = formatDollars;
