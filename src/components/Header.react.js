"use strict";

import React, { Component } from 'react';

// Bootstrap
import { Grid, Row, Col, Navbar, NavItem, Nav } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return(
    <Navbar inverse fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <img src='/public/assets/img/nyc-logo.png' />
        </Navbar.Brand>
        <Nav>
          <NavItem eventKey={1} href="#">Family Info</NavItem>
        </Nav>
      </Navbar.Header>
    </Navbar>
    );
  }
}
