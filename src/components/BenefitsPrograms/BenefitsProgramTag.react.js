"use strict";

import React, { Component } from 'react';

export default class EIC extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
        <span className="benefits-program-tag">
          <p>{this.props.programName}</p>
        </span>
    );
  }
}
