"use strict";

import React, { Component } from 'react';
import { Row, Col, Button, Glyphicon, Panel } from 'react-bootstrap';
import CEOPovertyThreshold from './controllers/CEOPovertyThreshold.js';
import PovertyThreshold from './components/PovertyThreshold.react.js';
import HouseholdSlider from './components/HouseholdSlider.react.js';

// Alt
import ThresholdStore from './stores/ThresholdStore.js';
import ThresholdActions from './actions/ThresholdActions.js';

export default class StandAloneThreshold extends Component {
  constructor() {
    super();
    this._updateInput = this._updateInput.bind(this);

    this.state = ThresholdStore.getState(); // Getting this from alt.js

    // this.state.CEOPovertyThreshold = CEOPovertyThreshold(this.state.family.income, this.state.family.adults, this.state.family.children);
    this.onChangeThreshold = this.onChangeThreshold.bind(this);
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

  _updateInput(value, setting) {
    var family = this.state.family;
    family[setting] = value;
    // this.setState({family: family });
    ThresholdActions.updateFamily(family);
    //this.state.eligibility = this.determineEligibility(this.state.eligibility);
    // this.state.CEOPovertyThreshold = CEOPovertyThreshold(this.state.family.income, this.state.family.adults, this.state.family.children);
  }

  render(){
    return(
      <div id="input">
        <Row className='familyPane vdivide pane' id='pane2' ref='pane2'>
          <Col xs={12} sm={12} md={12}>
            <Panel bsStyle="primary" header="Adjust Household Composition">
              <Row>
                <Col xs={12} sm={6} md={6}>
                  <p>Adults in household</p>
                  <HouseholdSlider target='adults' min={0} max={6} value={this.state.family.adults} onChange={this._updateInput} />
                  <br />
                  <p>Children in household</p>
                  <HouseholdSlider target='children' min={0} max={6} value={this.state.family.children} onChange={this._updateInput} />
                </Col>
                <Col xs={12} sm={6} md={6}>
                  {Array.apply(0, Array(this.state.family.adults)).map(function (x, i) {
                    return(<div className='familyMemberAdult' key={i}></div>);
                  })}
                  {Array.apply(0, Array(this.state.family.children)).map(function (x, i) {
                    return(<div className='familyMemberChild' key={i}></div>);
                  })}
                  <PovertyThreshold povertyThreshold={this.state.CEOPovertyThreshold} family={this.state.family} />
                </Col>
              </Row>
            </Panel>
          </Col>
        </Row>
      </div>

    );
  }
}
