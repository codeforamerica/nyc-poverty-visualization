"use strict";

import React, { Component } from 'react';
import { Panel, Col } from 'react-bootstrap';
import  StatusIcon from '../BenefitsProgramStatusIcon.react.js';

export default class HEAP extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <Panel>
        <Col xs={2} sm={2} md={2}>
          <StatusIcon eligible={this.props.eligibility.eligible} />
        </Col>
        <Col xs={10} sm={10} md={10}>
          <h1>HEAP</h1>
          <p>Program description goes here...</p>
        </Col>
      </Panel>
    );
  }
}
