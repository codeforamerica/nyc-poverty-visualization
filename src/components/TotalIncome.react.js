"use strict";

import React, { Component } from 'react';

export default class TotalIncome extends Component {
  constructor(props) {
    super(props);
  }
  calculateAnnualIncome(){
    return this.props.income.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    return(
      <h1 className="text-center">This family would make {this.calculateAnnualIncome()} a year and {this.props.benefits.taxes} in tax credits.</h1>
    );
  }
}
