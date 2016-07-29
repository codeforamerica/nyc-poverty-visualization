// Lets get the pieces
import povertyThreshold from './calc/CEOPovertyThreshold.js';
import acsChildCare from './calc/ACSChildCare.js';
import earnedIncomeCredit from './calc/EarnedIncomeCredit.js';
import formatDollars from './calc/formatDollars.js';
import HEAP from './calc/HEAP.js';
import programColors from './calc/ProgramColors.js';
import schoolFood from './calc/SchoolFood.js';
import snap from './calc/Snap.js';
import taxRefundTable from './calc/taxRefundTable.js';
import WIC from './calc/WIC.js';

// lets set our 'globals' - the things that you can change down the page
let adults = 2;
let children = 1;
let income = 1000;
let ceo = formatDollars(povertyThreshold(income, adults, children));

function inject() {
  // We have to recalculate the CEO
  ceo = formatDollars(povertyThreshold(income, adults, children));

  $('.adultCount').html(adults);
  $('.childrenCount').html(children);
  $('.ceoCount').html(ceo);
}

// Lets inject the starting values
inject();

// Have we changed the number of children or parents?
$('#selectAdults').change(function(e) {
  adults = parseInt(this.value);
  inject(); // Change all of the values
});
