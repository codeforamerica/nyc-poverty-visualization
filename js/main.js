// Lets get the pieces
import povertyThreshold from './calc/CEOPovertyThreshold.js';

// lets set our 'globals' - the things that you can change down the page
let adults = 0;
let children = 0;
let income = 0;

// Have we changed the number of children or parents?
$('#selectAdults').change(function(e) {
  console.log(this.value);
});
