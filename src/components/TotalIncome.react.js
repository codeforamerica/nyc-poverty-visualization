"use strict";

import React, { Component } from 'react';

export default class TotalIncome extends Component {
  constructor(props) {
    super(props);
  }
  calculateAnnualIncome(){
    if (this.props.family) {
      var income = this.props.family.income;
      return income.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return 0;
  }

  calculateThreshold() {

  }

  render() {
    var family = this.props.family;
    var income;
    if (family.income) {
      var income = (
        <p>Income: {this.calculateAnnualIncome()}</p>
      )
    }
    return(
      <div>{income}</div>
    );
  }
}
