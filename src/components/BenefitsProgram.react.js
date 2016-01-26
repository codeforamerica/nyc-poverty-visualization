"use strict";

import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import BenefitsProgramStatusIcon from './BenefitsProgramStatusIcon.react.js';


export default class BenefitsProgram extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    console.log(this.props.eligible);
    return(
      <Panel>
        <BenefitsProgramStatusIcon eligible={this.props.eligible} />
        <h1>{this.props.programName}</h1>
      </Panel>
    );
  }
}
