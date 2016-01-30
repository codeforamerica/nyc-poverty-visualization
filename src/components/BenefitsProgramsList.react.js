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
  }

  render(){
    var data = [];
    console.log(this.props.elegibility);

    data.labels = ["Housing Adjustment", "Social Security", "Other Cash Transfers", "Income Taxes", "Food Stamps", "School Meals", "WIC", "HEAP"];
    data.datasets = [{
      label: "Effects of programs on poverty",
      fillColor: "rgba(150, 194, 112, .5)",
      strokeColor: "rgba(150, 194, 112, 1)",
      highlightFill: "rgba(150, 194, 112, 1)",
      highlightStroke: "rgba(150, 194, 112, 1)",
      data: [6.5, 5.3, 3.7, 3.6, 3.6, 0.6, 0.1]
    }];

    return(
      <Bar data={data} width="600" height="250" />
    );
  }
}
