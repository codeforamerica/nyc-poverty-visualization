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
            <Rcslider min={this.props.min} max={this.props.max} defaultValue={this.props.default} onChange={(value) => this.props.onChange(value, this.props.target)} />
            <label style={{float:'left'}}>{this.props.min}</label>
            <label style={{float:'right'}}>{this.props.max}</label>
          </div>
        </Col>
      </Row>
    );
  }
}
