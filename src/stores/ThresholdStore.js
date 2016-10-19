import alt from '../alt.js';
import ThresholdActions from '../actions/ThresholdActions.js';
// programs
//Benefits Logic Helpers
import CEOPovertyThreshold from '../controllers/CEOPovertyThreshold.js';
import ACSChildCare from '../controllers/ACSChildCare.js';
import SchoolFood from '../controllers/SchoolFood.js';
import SNAP from '../controllers/Snap.js';
import HEAP from '../controllers/HEAP.js';
import WIC from '../controllers/WIC.js';
import TaxRefund from '../controllers/EarnedIncomeCredit.js';

class ThresholdStore {
  constructor() {
    this.family = { adults: 2, children: 2, income: 15500 };

    this.CEOPovertyThreshold = CEOPovertyThreshold(this.family.income, this.family.adults, this.family.children);
    this.updateEligibility();
    this.childrenUnderOne = false;

    this.bindListeners({
      handleUpdateFamily: ThresholdActions.UPDATE_FAMILY,
      handleUpdateChildrenUnderOne: ThresholdActions.UPDATE_CHILDREN_UNDER_ONE
    });

    this.updateEligibility = this.updateEligibility.bind(this);
  }

  handleUpdateFamily(family) {
    this.family = family;
    this.CEOPovertyThreshold = CEOPovertyThreshold(this.family.income, this.family.adults, this.family.children);
    this.eligibility = this.updateEligibility();
  }

  updateEligibility() {
    let
      income = this.family.income,
      adults = this.family.adults,
      children = this.family.children,
      eligibility = {};

    eligibility.ACSChildCare = ACSChildCare(income, adults, children);
    eligibility.SchoolFood = SchoolFood(income, adults, children);
    eligibility.SNAP = SNAP(income, adults, children);
    eligibility.HEAP = HEAP(income, adults, children);
    eligibility.WIC = WIC(income, adults, children);
    eligibility.TaxRefund = TaxRefund(income, adults, children);

    this.eligibility = eligibility;

    return eligibility;
  }

  handleUpdateChildrenUnderOne(value) {
    this.childrenUnderOne = value;
    this.CEOPovertyThreshold = CEOPovertyThreshold(this.family.income, this.family.adults, this.family.children);
    this.eligibility = this.updateEligibility();
  }
}

module.exports = alt.createStore(ThresholdStore, 'ThresholdStore');
