"use strict";

import React, { Component } from 'react';

export default class BenefitsProgramStatusIcon extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    if(this.props.eligible){
      return(
        <i className='fa fa-check-circle fa-4x eligible'></i>
      );
    } else {
      return (
        <i className='fa fa-minus-circle fa-4x not-eligible'></i>
      );
    }
  }
}
