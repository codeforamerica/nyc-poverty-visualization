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

  updateHousing(value) {
    return value;
  }

  updateTransportation(value) {
    return value;
  }
}

module.exports = alt.createActions(ThresholdActions);
