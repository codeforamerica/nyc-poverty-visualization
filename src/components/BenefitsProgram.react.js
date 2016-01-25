"use strict";

import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';


export default class BenefitsProgram extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programs: []
    };
  }
  render(){
    return(
      <Panel>
        <h1>{this.props.programName}</h1>
      </Panel>
    );
  }
}
