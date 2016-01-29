"use strict";

import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Rcslider from 'rc-slider';


export default class IncomeSlider extends Component {
  render(){
    return(
      <Row>
        <Col xs={12} sm={12} md={12}>
          <p className='text-center'>Adjust the house hold yearly income:</p>
          <div className='familyChoice'><Rcslider min={0} max={50000} defaultValue={17500} onChange={(value) => this.props.onChange(value, 'income')} /></div>
        </Col>
      </Row>
    );
  }
}
