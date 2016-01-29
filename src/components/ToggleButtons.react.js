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
    return(
        <Grid fluid>
          <Row className='toggle'>
            <Panel>
              <Col xs={12} sm={12} md={12}>
                <p className='text-center'>Choose the number of {type} in the household:</p>
              </Col>
              <Col xs={5} sm={4} md={4} className='choice'>
                <Button disabled={this.disableButton(current).minus} onClick={() => this.props.onClick(current - 1, type)}>
                  <i className='fa fa-minus fa-4x'></i>
                </Button>
              </Col>
              <Col xs={2} sm={4} md={4} className='value'>{current}</Col>
              <Col xs={5} sm={4} md={4} className='choice'>
                <Button disabled={this.disableButton(current).plus} onClick={() => this.props.onClick(current + 1, type)}>
                  <i className='fa fa-plus fa-4x'></i>
                </Button>
              </Col>
            </Panel>
          </Row>
        </Grid>
    );
  }
}
