(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var CEOPovertyTable = [[14425], [20345, 21778], [31156, 27417, 25859], [38104, 34708, 31156, 29692], [44553, 41375, 38104, 34708, 33306], [50629, 47638, 44553, 41375, 38104, 36764], [56392, 53526, 50629, 47638, 44553, 41375, 40098], [61907, 59165, 56392, 53526, 50629, 47638, 44553, 43307]];

var povertyThreshold = function povertyThreshold(income, numberParents, numberChildren) {
  var familySize = numberParents + numberChildren,
      tableRow = CEOPovertyTable[familySize - 1];
  if (numberChildren > 0) {
    return tableRow[numberChildren];
  } else {
    return tableRow[0];
  }
};

module.exports = povertyThreshold;

},{}],2:[function(require,module,exports){
'use strict';

var _CEOPovertyThreshold = require('./calc/CEOPovertyThreshold.js');

var _CEOPovertyThreshold2 = _interopRequireDefault(_CEOPovertyThreshold);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// lets set our 'globals' - the things that you can change down the page
var adults = 0; // Lets get the pieces

var children = 0;
var income = 0;

// Have we changed the number of children or parents?
$('#selectAdults').change(function (e) {
  console.log(this.value);
});

},{"./calc/CEOPovertyThreshold.js":1}]},{},[2])


//# sourceMappingURL=build.js.map
