"use strict";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Chart, { Bar } from 'react-chartjs';
import BarChart from './BarChart/BarChart.react.js';
import _ from 'lodash';

//Benefits Programs Components
import Snap from './BenefitsPrograms/SNAP.react.js';
import SchoolFood from './BenefitsPrograms/SchoolFood.react.js';
import ACSChildCare from './BenefitsPrograms/ACSChildCare.react.js';
import WIC from './BenefitsPrograms/WIC.react.js';
import HEAP from './BenefitsPrograms/HEAP.react.js';
import EIC from './BenefitsPrograms/TaxRefund.react.js';



export default class BenefitsList extends Component {
  constructor(props) {
    super(props);
  }

  render(){

    return(
        <div className='BenefitsList'>
          <Snap eligibility={this.props.eligibility.SNAP} />
          <SchoolFood eligibility={this.props.eligibility.SchoolFood} />
          <ACSChildCare eligibility={this.props.eligibility.ACSChildCare} />
          <WIC eligibility={this.props.eligibility.WIC} />
          <HEAP eligibility={this.props.eligibility.HEAP} />
          <EIC eligibility={this.props.eligibility.TaxRefund.eligible} taxRefund={this.props.eligibility.TaxRefund.refundAmount}/>
        </div>
    );
  }
}
