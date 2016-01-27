"use strict";

import React, { Component } from 'react';

//Benefits Programs Components
import Snap from './BenefitsPrograms/SNAP.react.js';
import SchoolFood from './BenefitsPrograms/SchoolFood.react.js';
import ACSChildCare from './BenefitsPrograms/ACSChildCare.react.js';



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
      </div>
    );
  }
}
