import alt from '../alt.js';
import ThresholdActions from '../actions/ThresholdActions.js';

class ThresholdStore {
  constructor() {
    this.family = { adults: 2, children: 2, income: 15000 };
    this.CEOPovertyThreshold = 31156;

    this.bindListeners({
      handleUpdateFamily: ThresholdActions.UPDATE_FAMILY
    });
  }

  handleUpdateFamily(family) {
    this.family = family;
  }
}

module.exports = alt.createStore(ThresholdStore, 'ThresholdStore');
