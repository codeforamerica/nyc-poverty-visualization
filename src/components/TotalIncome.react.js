"use strict";

import React, { Component } from 'react';

export default class TotalIncome extends Component {
  constructor(props) {
    super(props);
  }

  formatDollars(amount){
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    return(
      <h1 className="text-center">This family would make ${this.formatDollars(this.props.income)} a year and would be eligible to receive ${this.formatDollars(this.props.taxRefund)} in tax credits.</h1>
    );
  }
}
