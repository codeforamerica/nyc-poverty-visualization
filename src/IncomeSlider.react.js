
"use strict";

import React, { Component } from 'react';
import { Row, Col, Button, Glyphicon, Table, Panel } from 'react-bootstrap';
import HouseholdSlider from './components/HouseholdSlider.react.js';

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



export default class StandAloneThreshold extends Component {
  constructor() {
    super();
    this.state = ThresholdStore.getState(); // Getting this from alt.js

    this._updateInput = this._updateInput.bind(this);
    this.onChangeThreshold = this.onChangeThreshold.bind(this); // Don't really need both of these but SHRUG
    // this.state.eligibility = this.determineEligibility(this.state.eligibility);
    // this.state.CEOPovertyThreshold = CEOPovertyThreshold(this.state.family.income, this.state.family.adults, this.state.family.children);
  }

  componentDidMount() {
    ThresholdStore.listen(this.onChangeThreshold);
  }

  componentWillUnmount() {
    ThresholdStore.unlisten(this.onChangeThreshold);
  }

  onChangeThreshold(family ) { // Changing the family via alt
    console.log(family);
    this.setState(family);
  }

  determineEligibility(stateEligibility) {
    // let
    //   income = this.state.family.income,
    //   adults = this.state.family.adults,
    //   children = this.state.family.children;
    //
    // stateEligibility.ACSChildCare = ACSChildCare(income, adults, children);
    // stateEligibility.SchoolFood = SchoolFood(income, adults, children);
    // stateEligibility.SNAP = SNAP(income, adults, children);
    // stateEligibility.HEAP = HEAP(income, adults, children);
    // stateEligibility.WIC = WIC(income, adults, children);
    // stateEligibility.TaxRefund = TaxRefund(income, adults, children);
    //
    // return stateEligibility;
  }

  _updateInput(value, setting) {
    var family = this.state.family;
    family[setting] = value;
    // // this.setState({family: family });
    ThresholdActions.updateFamily(family);

    // this.state.eligibility = this.determineEligibility(this.state.eligibility);
    // ThresholdActions.updateEligibility(this.state.eligibility);

    this.state.CEOPovertyThreshold = CEOPovertyThreshold(this.state.family.income, this.state.family.adults, this.state.family.children);
  }

  render(){
    console.log("INcome Slider", this.state);
    return(
      <div>
        <Col xs={12} sm={12} md={12}>
          <h1>How how can benefits programs help?</h1>
          <p>Adjust this household's income and composition using the sliders to see how their poverty threshold, benefits, and costs change.</p>
        </Col>
        <Col xs={12} sm={6} md={6}>
          <Panel>
            <p>This household has <span className='figure'>{this.state.family.adults}</span> adults, <span className='figure'>{this.state.family.children}</span> children, and makes <span className='figure'>${commaNumber(this.state.family.income)}</span> a year.</p>
            <span>Income (${commaNumber(this.state.family.income)})</span>
            <HouseholdSlider target='income' min={10000} max={50000} value={this.state.family.income} onChange={this._updateInput} />
            <span>Adults ({this.state.family.adults})</span>
            <HouseholdSlider target='adults' min={0} max={6} value={this.state.family.adults} onChange={this._updateInput} />
            <span>Children ({this.state.family.children})</span>
            <HouseholdSlider target='children' min={0} max={6} value={this.state.family.children} onChange={this._updateInput} />
          </Panel>
        </Col>
        <Col xs={12} sm={6} md={6}>
          <Panel>
            <p>The benefits a family receives can put them above or below the poverty threshold.</p>
            <BenefitsTable
              taxCreditAmount={this.state.eligibility.TaxRefund.refundAmount}
              eligibility={this.state.eligibility}
            />
          </Panel>
        </Col>
        <Col id="threshold-bar-chart" xs={12} sm={12} md={12}>
          <Panel>
            <BarChart data={[[[this.state.family.income],[this.state.CEOPovertyThreshold]]]} />
          </Panel>
        </Col>
      </div>
    );
  }
}
