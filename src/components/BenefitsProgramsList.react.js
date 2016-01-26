"use strict";

import React, { Component } from 'react';
import BenefitsProgram from './BenefitsProgram.react.js';
import ChildCareScreening from '../controllers/ACSChildCare.js';

export default class BenefitsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programs: []
    };
  }
  eligibilityLogic(){
    let monthlyIncome = this.props.family.hourly * 37.5 *4;
    let householdMemberCount = this.props.family.adults + this.props.family.children;
    return ChildCareScreening(monthlyIncome, householdMemberCount);
  }
  componentDidMount(){
    $.get('/api/v1/programs', function(result){
      this.setState({
        programs: result
      });
    }.bind(this));
  }

  render(){
    return(
      <div className='BenefitsList'>
        {this.state.programs.map(function(program, i){
          return(
            <BenefitsProgram key={i} programName={program.program_name} eligible={this.eligibilityLogic()} />
          );
        }, this)}
      </div>
    );
  }
}
