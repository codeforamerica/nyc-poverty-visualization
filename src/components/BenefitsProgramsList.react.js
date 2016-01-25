"use strict";

import React, { Component } from 'react';
// Bootstrap

export default class BenefitsList extends Component {
  componentDidMount(){
    $.get('/api/v1/programs', function(result){
      this.setState({
        programs: result
      });
      console.log(result);
    }.bind(this));
  }

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className='BenefitsList'>
        <ul>
          {this.state.programs.map(function(program){
            return(
              <div>{program.program_name}</div>
            );
          }, this)}
        </ul>
      </div>
    );
  }
}
