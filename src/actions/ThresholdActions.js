import alt from '../alt.js';

class ThresholdActions {
  updateFamily(family) {
    return family;
  }

  updateChildrenUnderOne(value) {
    return value;
  }
}

module.exports = alt.createActions(ThresholdActions);
