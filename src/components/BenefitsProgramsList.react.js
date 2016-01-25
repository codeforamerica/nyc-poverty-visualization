"use strict";

import React, { Component } from 'react';
// Bootstrap

export default class BenefitsList extends Component {
  componentDidMount(){
    $.get('/api/v1/programs', function(result){
      console.log(result);
      this.setState({
        programs: result
      });
    }.bind(this));
  }

  constructor(props) {
    super(props);
  }

  renderPrograms(){
    return this.state.programs.map(program => this.renderProgram(program));
  }

  renderProgram(program){
    return(
      <article>
        <h1>{program.program_name}</h1>
        <h2>{program.income}</h2>
      </article>
    );
  }

  render() {
    const programs = renderPrograms();

    return(
      <div className='BenefitsList'>
        <ul>
          <li>{programs}</li>
        </ul>
      </div>
    );
  }
}
