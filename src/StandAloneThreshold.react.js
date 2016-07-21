
"use strict";

import React, { Component } from 'react';
import { Row, Col, Button, Glyphicon } from 'react-bootstrap';
import CEOPovertyThreshold from './controllers/CEOPovertyThreshold.js';
import ToggleButtons from './components/ToggleButtons.react.js';
import PovertyThreshold from './components/PovertyThreshold.react.js';
import HouseholdSlider from './components/HouseholdSlider.react.js';


export default class StandAloneThreshold extends Component {
  constructor() {
    super();
    this._updateInput = this._updateInput.bind(this);
    this.state = {
      family: { adults: 2, children: 2, income: 17500 },
      eligibility: {},
      testing: false
    };
    this.state.CEOPovertyThreshold = CEOPovertyThreshold(this.state.family.income, this.state.family.adults, this.state.family.children);
  }

  _updateInput(value, setting) {
    var family = this.state.family;
    family[setting] = value;
    this.setState({family: family });
    //this.state.eligibility = this.determineEligibility(this.state.eligibility);
    this.state.CEOPovertyThreshold = CEOPovertyThreshold(this.state.family.income, this.state.family.adults, this.state.family.children);
  }

  render(){
    return(
      <div id="input">
        <Row className='familyPane pane' id='pane2' ref='pane2'>
          <Col xs={12} sm={6} md={6}>
            <span>Adults ({this.state.family.adults})</span>
            <HouseholdSlider target='adults' min={0} max={6} default={this.state.family.adults} onChange={this._updateInput} />
            <span>Children ({this.state.family.children})</span>
            <HouseholdSlider target='children' min={0} max={6} default={this.state.family.children} onChange={this._updateInput} />
          </Col>
          <Col className="text-center" xs={12} sm={5} md={5}>
            {Array.apply(0, Array(this.state.family.adults)).map(function (x, i) {
              return(<img src='public/assets/img/parent-icon.png' className='familyMember' key={i} />);
            })}
            {Array.apply(0, Array(this.state.family.children)).map(function (x, i) {
              return(<img src='public/assets/img/child-icon.png' className='familyMember' key={i} />);
            })}
            <PovertyThreshold povertyThreshold={this.state.CEOPovertyThreshold} family={this.state.family} />
          </Col>
        </Row>
      </div>

    );
  }
}
