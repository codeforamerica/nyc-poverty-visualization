
"use strict";

import React, { Component } from 'react';
import { Row, Col, Button, Glyphicon } from 'react-bootstrap';
import IncomeSlider from './components/IncomeSlider.react.js';
import TotalIncome from './components/TotalIncome.react.js';
import BenefitsList from './components/BenefitsProgramsList.react.js'

//Benefits Logic Helpers
import CEOPovertyThreshold from './controllers/CEOPovertyThreshold.js';
import ACSChildCare from './controllers/ACSChildCare.js';
import SchoolFood from './controllers/SchoolFood.js';
import SNAP from './controllers/Snap.js';
import HEAP from './controllers/HEAP.js';
import WIC from './controllers/WIC.js';
import TaxRefund from './controllers/EarnedIncomeCredit.js';

import Rcslider from 'rc-slider';



export default class StandAloneThreshold extends Component {
  constructor() {
    super();
    this.state = {
      family: { adults: 2, children: 2, income: 17500 },
      eligibility: {}
    };
    this._updateInput = this._updateInput.bind(this);
    this.state.eligibility = this.determineEligibility(this.state.eligibility);
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
    family[setting] = value;
    this.setState({family: family });
    this.state.eligibility = this.determineEligibility(this.state.eligibility);
  }

  render(){
    return(
      <div>
        <Col xs={12} sm={5} md={5}>
          <IncomeSlider onChange={this._updateInput} />
        </Col>
        <Col xs={12} sm={6} md={6} mdOffset={1}>
          <TotalIncome family={this.state.family} taxRefund={this.state.eligibility.TaxRefund.refundAmount} />
          <BenefitsList family={this.state.family} eligibility={this.state.eligibility} />
        </Col>
      </div>
    );
  }
}
