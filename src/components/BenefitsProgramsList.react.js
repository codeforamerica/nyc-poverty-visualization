"use strict";

import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import BenefitsProgram from './BenefitsProgram.react.js';

export default class BenefitsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programs: []
    };
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
            <BenefitsProgram programName={program.program_name} />
          );
        }, this)}
      </div>
    );
  }
}
