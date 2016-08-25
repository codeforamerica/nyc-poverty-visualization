"use strict";

import React, { Component } from 'react';
import { Row, Col, Button, Glyphicon, Table } from 'react-bootstrap';
import HouseholdSlider from './components/HouseholdSlider.react.js';
import HouseholdDropdown from './components/HouseholdDropdown.react.js';

import TotalIncome from './components/TotalIncome.react.js';
import IncomeTable from './components/IncomeTable.react.js';
import BenefitsTable from './components/BenefitsTable.react.js';
import CostsTable from './components/CostsTable.react.js';
import BarChart from './components/BarChart.react.js';

// Alt
import ThresholdStore from './stores/ThresholdStore.js';
import ThresholdActions from './actions/ThresholdActions.js';

//Benefits Logic Helpers
import CEOPovertyThreshold from './controllers/CEOPovertyThreshold.js';
import ACSChildCare from './controllers/ACSChildCare.js';
import SchoolFood from './controllers/SchoolFood.js';
import SNAP from './controllers/Snap.js';
import HEAP from './controllers/HEAP.js';
import WIC from './controllers/WIC.js';
import TaxRefund from './controllers/EarnedIncomeCredit.js';

import commaNumber from 'comma-number';

import Rcslider from 'rc-slider';



export default class BottomBar extends Component {
  constructor() {
    super();
    this.state = ThresholdStore.getState(); // Getting this from alt.js

    this._updateInput = this._updateInput.bind(this);
    this.onChangeThreshold = this.onChangeThreshold.bind(this); // Don't really need both of these but SHRUG
    this.state.eligibility = this.determineEligibility(this.state.eligibility);
    // this.state.CEOPovertyThreshold = CEOPovertyThreshold(this.state.family.income, this.state.family.adults, this.state.family.children);
  }

  componentDidMount() {
    ThresholdStore.listen(this.onChangeThreshold);
  }

  componentWillUnmount() {
    ThresholdStore.unlisten(this.onChangeThreshold);
  }

  onChangeThreshold(family ) { // Changing the family via alt
    this.setState(family);
  }

  determineEligibility(stateEligibility) {
    let
      income = this.state.family.income,
      adults = this.state.family.adults,
      children = this.state.family.children;

    stateEligibility.ACSChildCare = ACSChildCare(income, adults, children);
    stateEligibility.SchoolFood = SchoolFood(income, adults, children);
    stateEligibility.SNAP = SNAP(income, adults, children);
    stateEligibility.HEAP = HEAP(income, adults, children);
    stateEligibility.WIC = WIC(income, adults, children);
    stateEligibility.TaxRefund = TaxRefund(income, adults, children);

    return stateEligibility;
  }

  _updateInput(value, setting) {
    var family = this.state.family;
    family[setting] = parseInt(value);
    // // this.setState({family: family });
    ThresholdActions.updateFamily(family);
    // this.state.eligibility = this.determineEligibility(this.state.eligibility);
    // this.state.CEOPovertyThreshold = CEOPovertyThreshold(this.state.family.income, this.state.family.adults, this.state.family.children);
  }

  render(){
    return(
      <div>
        <Col xs={12} sm={12} md={12}>
          <Row>
            <Col sm={3} xs={3}>
              <span>Income (${commaNumber(this.state.family.income)})</span>
              <HouseholdSlider target='income' min={10000} max={50000} step={100} value={this.state.family.income} onChange={this._updateInput} />
            </Col>
            <Col sm={3} xs={3}>
              <span>Adults ({this.state.family.adults})</span>
              <HouseholdSlider target='adults' min={0} max={6} step={1} value={this.state.family.adults} onChange={this._updateInput} />
            </Col>
            <Col sm={3} xs={3}>
              <span>Children ({this.state.family.children})</span>
              <HouseholdSlider target='children' min={0} max={6} step={1} value={this.state.family.children} onChange={this._updateInput} />
            </Col>
            <Col sm={3} xs={3}>
              <span className='figure'>{this.state.family.adults}</span> adults, <span className='figure'>{this.state.family.children}</span> children, income <span className='figure'>${commaNumber(this.state.family.income)}</span> a year. CEO Poverty threshold is <strong>${commaNumber(this.state.CEOPovertyThreshold)}</strong>.
            </Col>
          </Row>
        </Col>
      </div>
    );
  }
}
