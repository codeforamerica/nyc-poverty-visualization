"use strict"

import React, { Component } from 'react';
import formatDollars from '../controllers/formatDollars.js';

export default class PovertyThreshold extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h2>The poverty threshold for a family with {this.props.family.adults} adults and {this.props.family.children} children is ${formatDollars(this.props.povertyThreshold)}.</h2>
        <h2>The services that they qualify for can increase their income.</h2>
      </div>
    );
  }
}
