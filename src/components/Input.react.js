import React, { Component } from 'react';
import Rcslider from 'rc-slider';
// Bootstrap
import { Grid, Row, Col } from 'react-bootstrap';

//Components

import Family from './Family.react.js';
import BenefitsList from './BenefitsProgramsList.react.js';
import TotalIncome from './TotalIncome.react.js';

//Benefits Logic Helpers
import ACSChildCare from '../controllers/ACSChildCare.js';
import SchoolFood from '../controllers/SchoolFood.js';

// Config the marks on the slider
const marks = {
  4: '$4',
  8: '$8',
  12: '$12',
  16: '$15',
  20: '$18',
  25: '$25'
};

require('../styles/slider.css');

export default class Input extends Component {
  constructor() {
    super();
    this._updateFamily = this._updateFamily.bind(this);
    this.state = {
      family: { adults: 2, children: 2, income: 17500 },
      testing: false
    };
  }
  /*
    This goes here instead of in a separate component because we need to
    be able to pass the data down in a waterfall. Not best practice.
  */
  displayToggle(type) {
    var current = this.state.family[type];
    return(
    <Col cs={12} sm={6} md={6}>
      <Grid fluid>
        <Row className='toggle'>
          <Col xs={12} sm={12} md={12}>
            <p>Choose the number of {type} in the household</p>
          </Col>
        <Col xs={5} sm={4} md={4} className='choice'>
          <i className='fa fa-minus fa-4x' onClick={() => this._updateFamily(current - 1, type)}></i>
        </Col>
        <Col xs={2} sm={4} md={4} className='value'>{current}</Col>
        <Col xs={5} sm={4} md={4} className='choice'>
          <i className='fa fa-plus fa-4x' onClick={() => this._updateFamily(current + 1, type)}></i>
        </Col>
      </Row>
    </Grid>
  </Col>);
  }
  // Render it all
  render() {
    var benefits = {taxes: 1000}; // This is a placeholder for the benefits that we'll know they get
    return(
    <Grid>
      <Row>
        <Col xs={12} sm={12} md={12}>
          <Grid>
            <Row className='toggle'>
                {this.displayToggle('adults')}
                {this.displayToggle('children')}
            </Row>
          </Grid>
          <div>
            <p>Adjust the house hold yearly income</p>
            <div className='familyChoice'><Rcslider min={0} max={50000} defaultValue={17500} onChange={(value) => this._updateFamily(value, 'income')} /></div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={12}>
          <TotalIncome income={this.state.family.income} benefits={benefits} />
        </Col>
        <Col xs={12} sm={12} md={12}>
          <BenefitsList family={this.state.family} />
        </Col>
      </Row>
    </Grid>
    );
  }
  _updateFamily(value, setting) {
    // Super hacky right now
    if (setting == 'adults' && (value < 0 || value > 5))
      return;
    if (setting == 'children' && (value < 0 || value > 6))
      return;

    var family = this.state.family;
    family[setting] = value;
    this.setState({family: family });
  }
}
