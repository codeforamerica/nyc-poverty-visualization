import React, { Component } from 'react';

// Bootstrap
import { Grid, Row, Col, Navbar, NavItem, Nav } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return(
    <Navbar inverse fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <img src='/assets/img/nyc-logo.png' />
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">Back To Top</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}
