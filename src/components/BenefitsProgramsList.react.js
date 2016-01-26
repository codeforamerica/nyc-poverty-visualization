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
    console.log(ChildCareScreening(5000, 3));
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
            <BenefitsProgram key={i} programName={program.program_name} />
          );
        }, this)}
      </div>
    );
  }
}
