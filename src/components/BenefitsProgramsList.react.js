"use strict";

import React, { Component } from 'react';
import { Bar } from 'react-chartjs';
import _ from 'lodash';

//Benefits Programs Components
import Snap from './BenefitsPrograms/SNAP.react.js';
import SchoolFood from './BenefitsPrograms/SchoolFood.react.js';
import ACSChildCare from './BenefitsPrograms/ACSChildCare.react.js';



export default class BenefitsList extends Component {
  constructor(props) {
    super(props);
    var defaultData = [_.random(0.2, 6.2), _.random(0.2, 6.2), _.random(0.2, 6.2), _.random(0.2, 6.2), _.random(0.2, 6.2), _.random(0.2, 6.2), _.random(0.2, 6.2), _.random(0.2, 6.2)];
    this.state = { dataSet: defaultData };
    this.generateNewNumbers = this.generateNewNumbers.bind(this);
  }
  generateNewNumbers() {
    var newData = [_.random(0.2, 6.2), _.random(0.2, 6.2), _.random(0.2, 6.2), _.random(0.2, 6.2), _.random(0.2, 6.2), _.random(0.2, 6.2), _.random(0.2, 6.2), _.random(0.2, 6.2)];
    this.setState({ dataSet: newData });
  }
  render(){
    var data = [];
    console.log(this.props.elegibility);
    var dataSet = this.state.dataSet;

    data.labels = ["Housing Adjustment", "Social Security", "Other Cash Transfers", "Income Taxes", "Food Stamps", "School Meals", "WIC", "HEAP"];
    data.datasets = [{
      label: "Effects of programs on poverty",
      fillColor: "rgba(150, 194, 112, .5)",
      strokeColor: "rgba(150, 194, 112, 1)",
      highlightFill: "rgba(150, 194, 112, 1)",
      highlightStroke: "rgba(150, 194, 112, 1)",
      data: dataSet
    }];

    return(
      <div><Bar data={data} width="600" height="250" />
      <p><a onClick={this.generateNewNumbers}>Generate new fake data</a></p></div>
    );
  }
}
