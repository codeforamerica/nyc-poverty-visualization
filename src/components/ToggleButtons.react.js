"use strict";

import React, { Component } from 'react';
import { Grid, Row, Col, Button, Panel } from 'react-bootstrap';

export default class TotalIncome extends Component {
  disableButton(current){
    if(current < 1) {
      return {plus: false, minus: true};
    }
    if(current > 5) {
      return {plus: true, minus: false};
    }
    else {
      return {plus: false, minus: false};
    }
  }
  render(){
    var type = this.props.type;
    var current = this.props.family[type];
    var disabledPlus = this.disableButton(current).plus ? 'disabled' : '';
    var disabledMinus = this.disableButton(current).minus ? 'disabled' : '';

    return(
        <Grid fluid>
          <Row className='toggle'>
            <Col xs={10} sm={10} md={10} lg={10} xsOffset={2} smOffset={2} mdOffset={2} lgOffset={2}>
              <p>Choose the number of {type} in the household:</p>
            </Col>
            <Col xs={5} sm={3} md={3} lg={3} xsOffset={1} smOffset={3} mdOffset={3} lgOffset={3} className='choice'>
              <div className={disabledMinus} onClick={() => this.props.onClick(current - 1, type)}>
                <i className='fa fa-minus fa-4x'></i>
              </div>
            </Col>
            <Col xs={1} sm={1} md={1} lg={1} className='value'>{current}</Col>
            <Col xs={5} sm={3} md={3} lg={3} className='choice'>
              <div className={disabledPlus} onClick={() => this.props.onClick(current + 1, type)}>
                <i className='fa fa-plus fa-4x'></i>
              </div>
            </Col>
          </Row>
        </Grid>
    );
  }
}
