import alt from '../alt.js';

class ThresholdActions {
  updateFamily(family) {
    return family;
  }

  updateChildrenUnderOne(value) {
    return value;
  }

  updateEligibility(data) {
    return data;
  }
}

module.exports = alt.createActions(ThresholdActions);
