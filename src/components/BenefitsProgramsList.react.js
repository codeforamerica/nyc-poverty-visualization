"use strict";

import React, { Component } from 'react';
// Bootstrap

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
        <ul>
          {this.state.programs.map(function(program, i){
            return(
              <div key={i}>{program.program_name}</div>
            );
          }, this)}
        </ul>
      </div>
    );
  }
}
