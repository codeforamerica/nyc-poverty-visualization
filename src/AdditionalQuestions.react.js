"use strict";
import React, { Component } from 'react';
import { Row, Col, Button, Glyphicon, Table, Panel, FormGroup, Radio } from 'react-bootstrap';
// Alt
import ThresholdStore from './stores/ThresholdStore.js';
import ThresholdActions from './actions/ThresholdActions.js';



export default class AdditionalQuestions extends Component {
  constructor() {
    super();

    this.state = ThresholdStore.getState(); // Getting this from alt.js
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
    // // this.setState({family: family });
    ThresholdActions.updateFamily(family);
    this.state.eligibility = this.determineEligibility(this.state.eligibility);
    this.state.CEOPovertyThreshold = CEOPovertyThreshold(this.state.family.income, this.state.family.adults, this.state.family.children);
  }

  render(){
    return(
      <Row>
        <Col md={4}>
          <Panel header="New Parent Benefits">
            <p>Are any of your <span className="figure">{this.state.family.children}</span> children under the age of 1?</p>
          </Panel>
        </Col>
        <Col md={4}>
          <Panel header="Housing">
            <p>Choose the option that best describes your housing situation:</p>
            <FormGroup id="housing-options">

              <Radio name="housing-option">
                Live in public housing
              </Radio>
              <Radio name="housing-option">
                Live in rent subsidized or rent regulated housing of any kind
              </Radio>
              <Radio name="housing-option">
                Live rent free
              </Radio>
              <Radio name="housing-option">
                Own home with a mortgage
              </Radio>
              <Radio name="housing-option">
                Own your home with no mortgage
              </Radio>
              <Radio name="housing-option">
                None of the above
              </Radio>
            </FormGroup>
          </Panel>
        </Col>
        <Col md={4}>
          <Panel header="Transportation">
            <p>How many of the <span className="figure">{this.state.family.adults}</span> adults in your household commute to work?</p>
          </Panel>
        </Col>
      </Row>
    );
  }
}
