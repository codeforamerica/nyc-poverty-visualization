import alt from '../alt.js';
import ThresholdActions from '../actions/ThresholdActions.js';

class ThresholdStore {
  constructor() {
    this.family = { adults: 2, children: 2, income: 17500 };

    this.bindListeners({
      handleUpdateFamily: ThresholdActions.UPDATE_FAMILY
    });
  }

  handleUpdateFamily(family) {
    this.family = family;
  }
}

module.export = alt.createStore(ThresholdStore, 'ThresholdStore');
