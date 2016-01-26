"use strict";

import React, { Component } from 'react';
import { Panel, Row, Col } from 'react-bootstrap';
import BenefitsProgramStatusIcon from './BenefitsProgramStatusIcon.react.js';


export default class BenefitsProgram extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    console.log(this.props.eligible);
    return(
      <Panel>
        <Col xs={4} sm={4} md={4}>
          <BenefitsProgramStatusIcon eligible={this.props.eligible} />
        </Col>
        <Col xs={8} sm={8} md={8}>
          <h1>{this.props.programName}</h1>
        </Col>
      </Panel>
    );
  }
}
