"use strict";

import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Rcslider from 'rc-slider';


export default class IncomeSlider extends Component {
  render(){
    return(
      <Row>
        <Col xs={12} sm={12} md={12}>
          <div className='familyChoice'>
            <Rcslider min={0} max={50000} defaultValue={17500} onChange={(value) => this.props.onChange(value, 'income')} />
            <label>$0</label>
            <label style={{float:'right'}}>$50,000</label>
          </div>
        </Col>
      </Row>
    );
  }
}
