"use strict";

import React, { Component } from 'react';
import ProgramColors from '../../controllers/ProgramColors.js';

export default class ProgramTag extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
        <span className={"benefits-program-tag " + ProgramColors(this.props.programName)}>
          <p>{this.props.programName}</p>
        </span>
    );
  }
}
