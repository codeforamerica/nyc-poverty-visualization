import React, { Component } from 'react';
// Bootstrap
import { Grid, Row, Col, Navbar, NavItem, Nav } from 'react-bootstrap';

export default class Family extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var family = this.props.family;
    return(
      <div className='family'>
        <img src='http://localhost:8081/assets/img/nyc-family.png' /><br />

        <ul>
          <li> Hourly: {family.hourly} </li>
          <li> Adults: {family.adults} </li>
          <li> Children: {family.children}  </li>
        </ul>
      </div>
    );
  }
}
