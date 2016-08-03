"use strict"

import React, { Component } from 'react';
import commaNumber from 'comma-number';

export default class PovertyThreshold extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <p>The poverty threshold for a family with <span className='figure'>{this.props.family.adults}</span> adults and <span className='figure'>{this.props.family.children}</span> children is <span className='figure'>${commaNumber(this.props.povertyThreshold)}</span>.</p>
        <p>In other words, if this family's income is below <span className='figure'>${commaNumber(this.props.povertyThreshold)}</span>, they would be considred to be in poverty.</p>
      </div>
    );
  }
}
