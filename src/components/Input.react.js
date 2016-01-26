import React, { Component } from 'react';
import Rcslider from 'rc-slider';
// Bootstrap
import { Grid, Row, Col } from 'react-bootstrap';

import Family from './Family.react.js';
import BenefitsList from './BenefitsProgramsList.react.js';
import TotalIncome from './TotalIncome.react.js';

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
      family: { adults: 2, children: 2, hourly: 9 },
      testing: false
    };
  }
  render() {
    return(
    <Grid>
      <Row>
        <Col xs={12} sm={6} md={6}>
          <div>
            <p>Choose the number of adults in the household</p>
            <div className='familyChoice'><Rcslider min={1} max={4} defaultValue={2} marks={{1: 1, 2: 2, 3: 3, 4: 4}} ref='adults' onChange={(value) => this._updateFamily(value, 'adults')}/></div>
          </div>
          <div>
            <p>Choose the number of children in the household</p>
            <div className='familyChoice'><Rcslider min={0} max={6} defaultValue={2} marks={{0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5:5, 6:6}} ref='children' onChange={(value) => this._updateFamily(value, 'children')}/></div>
          </div>
          <div>
            <p>Adjust the main earners hourly wages to see how their benefits are affected</p>
            <div className='familyChoice'><Rcslider min={4} max={25} defaultValue={9} marks={marks} ref='hourly' onChange={(value) => this._updateFamily(value, 'hourly')} /></div>
          </div>
        </Col>

        <Col xs={12} sm={6} md={6}>
          <Family family={this.state.family} />
        </Col>
        <Col xs={12} sm={12} md={12}>
          <TotalIncome income={this.state.family.hourly} />
        </Col>
        <Col xs={12} sm={12} md={12}>
          <BenefitsList family={this.state.family} />
        </Col>
      </Row>
    </Grid>
    );
  }
  _updateFamily(value, setting) {
    var family = this.state.family;
    family[setting] = value;
    this.setState({family: family });
  }
}
