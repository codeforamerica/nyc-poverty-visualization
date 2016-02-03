"use strict";

import React, { Component } from 'react';

//Benefits Programs Components
import BenefitsProgramTag from './BenefitsPrograms/BenefitsProgramTag.react.js';

export default class BenefitsList extends Component {
  constructor(props) {
    super(props);
  }
  eligiblePrograms(input){
      var output = [];
      for(var program in input){
        if(input.hasOwnProperty(program)){
          if(input[program].eligible === true){
            let programName = program.toString();
            output.push(<BenefitsProgramTag programName={programName} key={programName} />);
          }
        }
      }
      return output;
  }
  ineligiblePrograms(input){
      var output = [];
      for(var program in input){
        if(input.hasOwnProperty(program)){
          if(input[program].eligible === false){
            let programName = program.toString();
            output.push(<BenefitsProgramTag programName={programName} key={programName} />);
          }
        }
      }
      return output;
  }
  render(){
    console.log(this.eligiblePrograms(this.props.eligibility).length);
    return(
        <div className='BenefitsList'>
          <h2>Here are the services they would likely qualify for:</h2>
          <div className='eligible'>
            {this.eligiblePrograms(this.props.eligibility)}
          </div>
          <div>
            <hr/>
            <p>We cannot determine eligibility for these services:</p>
            <div className='ineligible'>
              {this.ineligiblePrograms(this.props.eligibility)}
            </div>
          </div>
        </div>
    );
  }
}
