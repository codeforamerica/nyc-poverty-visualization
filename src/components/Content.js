"use strict";

import React, { Component } from 'react';
import Rcslider from 'rc-slider';
// Bootstrap
import { Grid, Row, Col, Navbar, NavItem, Nav } from 'react-bootstrap';
// Our components
import Family from './Family.js';

// Config the marks on the slider
const marks = {
  4: '$4',
  8: '$8',
  12: '$12',
  16: '$15',
  20: '$18',
  25: '$25'
};

// We're going to include the rc-slider css.
// This weirdly had to be copied from their repo, because the less didn't wanna happen.
require('../styles/slider.css');

export default class Content extends Component {
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
            <div className='familyChoice'><Rcslider min={1} max={4} defaultValue={2} marks={{1: 1, 2: 2, 3: 3, 4: 4}} ref='adults' onChange={() => this._updateFamily('adults')}/></div>
          </div>
          <div>
            <p>Choose the number of children in the household</p>
            <div className='familyChoice'><Rcslider min={1} max={6} defaultValue={2} marks={{1: 1, 2: 2, 3: 3, 4: 4, 5:5, 6:6}} ref='children' onChange={() => this._updateFamily('children')}/></div>
          </div>
          <div>
            <p>Adjust the main earners hourly wages to see how their benefits are affected</p>
            <div className='familyChoice'><Rcslider min={4} max={25} defaultValue={9} marks={marks} ref='hourly' onChange={() => this._updateFamily('hourly')} /></div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6}>
          <Family family={this.state.family} />
        </Col>
      </Row>
    </Grid>
    );
  }
  _updateFamily(setting, value) {
    var value = this.refs[setting].startValue;
    console.log(setting, value);
    var family = this.state.family;
    family[setting] = value;
    this.setState({family: family });
  }
}
