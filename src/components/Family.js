import React, { Component } from 'react';
// Bootstrap
import { Grid, Row, Col, Navbar, NavItem, Nav } from 'react-bootstrap';

let familyData = [
  {
    name: 'Johnson',
    hourly: 8,
    members: [
      { name: 'Adult 1', type: 'adult' },
      { name: 'Adult 2', type: 'adult' },
      { name: 'Kid 1', type: 'child' },
      { name: 'Kid 2', type: 'child' }
    ],
  }
]

class Family extends Component {
  constructor(props) {
    super(props);
    var family = familyData[0]; // Leftover from when there were multiple families
    this.state = {
      family: family, // I imagine I'm going to do an API call here to get the information about the families from @charlie's code
    }
  }
  render() {
    let members = this.state.family.members.map(function(object, i) {
      return(<p>{object.name}</p>);
    });

    return(
      <div className='family'>
        <img src='/assets/img/nyc-family.png' /><br />

        <p>Name: {this.state.family.name}<br />Hourly: {this.state.family.hourly}</p>
        <p>
          {members}
        </p>
      </div>
    );
  }
}

export default class Families extends Component {
  render() {
    return(
      <Grid>
        <Row>
          <Col xs={6} md={6} sm={6}>
            Sliders here!
          </Col>
          <Col xs={6} md={6} sm={6}>
            <Family />
          </Col>
        </Row>
      </Grid>
    );
  }
}
