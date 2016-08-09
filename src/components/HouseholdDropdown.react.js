"use strict";

import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';


export default class HouseholdDropdown extends Component {
  render(){
    return(
      <div className='familyChoice'>
        <select name="" className="form-control" value={this.props.value} onChange={(event) => this.props.onChange(parseInt(event.target.value), this.props.target)}>
        {[...Array(this.props.max)].map((x, i) =>
          <option value={i+1}>{i+1}</option>
        )}
        </select>
      </div>
    );
  }
}
