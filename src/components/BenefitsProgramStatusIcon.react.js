"use strict";

import React, { Component } from 'react';

export default class BenefitsProgramStatusIcon extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    console.log(this.props.eligible);
    if(this.props.eligible){
      return(
        <h1>Eligible</h1>
      );
    } else {
      return (
        <h1>Not Eligible</h1>
      )
    }
  }
}
