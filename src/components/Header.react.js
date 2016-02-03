"use strict";

import React, { Component } from 'react';

// Bootstrap
import { Grid, Row, Col, Navbar, NavItem, Nav } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return(
    <Navbar fixedTop>
      <img className='navbar-brand' src='/public/assets/img/nyc-logo.png' />
    </Navbar>
    );
  }
}
