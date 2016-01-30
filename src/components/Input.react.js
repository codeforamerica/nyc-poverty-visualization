"use strict";

import React, { Component } from 'react';
// Bootstrap
import { Grid, Row, Col } from 'react-bootstrap';
//Components
import ToggleButtons from './ToggleButtons.react.js';
import IncomeSlider from './IncomeSlider.react.js';
import BenefitsList from './BenefitsProgramsList.react.js';
import TotalIncome from './TotalIncome.react.js';

//Benefits Logic Helpers
import ACSChildCare from '../controllers/ACSChildCare.js';
import SchoolFood from '../controllers/SchoolFood.js';
import SNAP from '../controllers/Snap.js';
import WIC from '../controllers/WIC.js';
import HEAP from '../controllers/HEAP.js';

// Waypoints
import Waypoint from 'react-waypoint';

// Scrolling
import Scroll from 'react-scroll';
var Link = Scroll.Link;
var Element = Scroll.Element;
var Events = Scroll.Events;


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
    stateEligibility.WIC = WIC(income, adults, children);
    stateEligibility.HEAP = HEAP(income, adults, children);

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
    var benefits = {taxes: 1000}; // This is a placeholder for the benefits that we'll know they get
    return(
<<<<<<< 2269c8541ee999bf700917e2d5eeecdfd5cd5f03
    <Grid>
      <Row className='pane' id='pane2' ref='pane2'>
=======
    <div>
      <Row className='pane'>
>>>>>>> Add WIC, also remove container within container
        <Col xs={12} sm={12} md={12}>
          <ToggleButtons onClick={this._updateInput} family={this.state.family} type='adults'/>
          <ToggleButtons onClick={this._updateInput} family={this.state.family} type='children'/>
          <TotalIncome family={this.state.family} />
        </Col>
      </Row>
      <Row className='pane' id='pane3' ref='pane3'>
        <Col xs={12} sm={12} md={12}>
          <IncomeSlider onChange={this._updateInput} />
          <TotalIncome family={this.state.family} />
        </Col>
      </Row>
      <Row className='pane' id='pane4' ref='pane4'>
        <Col xs={12} sm={12} md={12}>
          <BenefitsList family={this.state.family} eligibility={this.state.eligibility} />
        </Col>
        <TotalIncome family={this.state.family} />
        <Waypoint onEnter={this._moveToHeader}></Waypoint>
      </Row>
    </div>
    );
  }
}
