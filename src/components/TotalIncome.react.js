"use strict";

import React, { Component } from 'react';
import commaNumber from 'comma-number';

export default class TotalIncome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <h2 className="text-center">This family would make <span className='figure'>${commaNumber(this.props.family.income)}</span> a year and would be eligible to receive <span className='figure'>${commaNumber(this.props.taxRefund)}</span> in tax credits.</h2>
    );
  }
}
