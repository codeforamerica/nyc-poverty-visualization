"use strict";

import React, { Component } from 'react';

// Bootstrap
import { Grid, Row, Col, Navbar, NavItem, Nav } from 'react-bootstrap';

export default class Footer extends Component {
  render() {
    return(
      <div className='footerPane pane'>
        <div className='container'>
          <Row>
            <Col xs={12} sm={12} md={12}>
              <p><a href="https://a069-access.nyc.gov/ACCESSNYC/application.do">ACCESS NYC</a> is a free service that helps you find out if you may qualify for over 30 City, State and Federal benefit programs. You can apply online for certain programs through ACCESS NYC.</p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
