"use strict";

import React, { Component } from 'react';
import Rcslider from 'rc-slider';
// Bootstrap
import { Grid, Row, Col, Navbar, NavItem, Nav } from 'react-bootstrap';
// Our components
import Sliders from './sliders.react.js';
import Family from './Family.react.js';
import BenefitsList from './BenefitsProgramsList.react.js';

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
          <Sliders />
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
