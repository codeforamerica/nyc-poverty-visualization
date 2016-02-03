"use strict";

import React, { Component } from 'react';
import formatDollars from '../controllers/formatDollars.js';

export default class TotalIncome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <h2 className="text-center">This family would make ${formatDollars(this.props.family.income)} a year and would be eligible to receive ${formatDollars(this.props.taxRefund)} in tax credits.</h2>
    );
  }
}
