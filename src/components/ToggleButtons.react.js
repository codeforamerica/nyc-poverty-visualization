"use strict";

import React, { Component } from 'react';
import { Grid, Row, Col, Button, ButtonGroup, Panel } from 'react-bootstrap';

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
            <Col xs={10} sm={10} md={10} lg={10}>
              <p>Choose the number of {type} in the household:</p>
            </Col>
            <ButtonGroup bsSize='large'>
              <Button className={disabledMinus} onClick={() => disabledMinus == 'disabled' ? '' : this.props.onClick(current - 1, type)}><i className='fa fa-minus fa-3x'></i></Button>
              <Button className='value'>{current}</Button>
              <Button className={disabledPlus} onClick={() => disabledPlus == 'disabled' ? '' : this.props.onClick(current + 1, type)}><i className='fa fa-plus fa-3x'></i></Button>
            </ButtonGroup>
          </Row>
        </Grid>
    );
  }
}
