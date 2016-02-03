"use strict";

import React, { Component } from 'react';
// Bootstrap
import { Row, Col } from 'react-bootstrap';
//Components
import ToggleButtons from './ToggleButtons.react.js';
import IncomeSlider from './IncomeSlider.react.js';
import BenefitsList from './BenefitsProgramsList.react.js';
import TotalIncome from './TotalIncome.react.js';
import ProgramChart from './ProgramChart.react.js';

//Benefits Logic Helpers
import ACSChildCare from '../controllers/ACSChildCare.js';
import SchoolFood from '../controllers/SchoolFood.js';
import SNAP from '../controllers/Snap.js';
import HEAP from '../controllers/HEAP.js';
import WIC from '../controllers/WIC.js';
import TaxRefund from '../controllers/EarnedIncomeCredit.js';

// Waypoints
import Waypoint from 'react-waypoint';

require('../styles/slider.css');

export default class Input extends Component {
  constructor() {
    super();
    this._updateInput = this._updateInput.bind(this);
    this.state = {
      family: { adults: 2, children: 2, income: 17500 },
      eligibility: {},
      testing: false
    };
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

  _moveToHeader() {
    console.log("Move that info to the header!");
  }

  // Render it all
  render() {
    return(
    <section>
      <Row className='familyPane pane' id='pane2' ref='pane2'>
        <Col xs={12} sm={12} md={12}>
          <ToggleButtons onClick={this._updateInput} family={this.state.family} type='adults'/>
          <ToggleButtons onClick={this._updateInput} family={this.state.family} type='children'/>
          <Col xs={6} sm={5} md={3} lg={4} xsOffset={4} smOffset={4} mdOffset={4} lgOffset={5}>
            {Array.apply(0, Array(this.state.family.adults)).map(function (x, i) {
              return(<img src='public/assets/img/adult.png' className='familyMember' />);
            })}
            {Array.apply(0, Array(this.state.family.children)).map(function (x, i) {
              return(<img src='public/assets/img/child.png' className='familyMember' />);
            })}

          </Col>
        </Col>
      </Row>
      <Row className='pane incomeSliderPane' id='pane3' ref='pane3'>
        <Col xs={8} sm={8} md={8}  xsOffset={2} smOffset={2} mdOffset={2} lgOffset={2}>
          <IncomeSlider onChange={this._updateInput} />
          <TotalIncome family={this.state.family} taxRefund={this.state.eligibility.TaxRefund.refundAmount} />
          <BenefitsList family={this.state.family} eligibility={this.state.eligibility} />
        </Col>
      </Row>
      <Row className='pane elgibilityPane' id='pane4' ref='pane4'>
        <Col xs={12} sm={12} md={12}>
          <ProgramChart family={this.state.family} eligibility={this.state.eligibility} />
        </Col>
        <Waypoint onEnter={this._moveToHeader}></Waypoint>
      </Row>
    </section>
    );
  }
}
