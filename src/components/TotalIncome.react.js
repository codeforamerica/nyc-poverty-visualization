"use strict";

import React, { Component } from 'react';

export default class TotalIncome extends Component {
  constructor(props) {
    super(props);
  }
  calculateAnnualIncome(){
    var income = this.props.income * 37.5 * 52;
    return income.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    return(
      <h1 className="text-center">This family would make {this.calculateAnnualIncome()} a year.</h1>
    );
  }
}
