"use strict";

import React, { Component } from 'react';
// Bootstrap
import { Panel } from 'react-bootstrap';

export default class Family extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var family = this.props.family;
    return(
      <Panel className='family'>
        <img src='http://localhost:8081/assets/img/nyc-family.png' /><br />
          <p> Hourly: {family.hourly} </p>
          <p> Adults: {family.adults} </p>
          <p> Children: {family.children} </p>
      </Panel>
    );
  }
}
