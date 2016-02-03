"use strict";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Chart, { Bar } from 'react-chartjs';
import { Row, Col } from 'react-bootstrap';
import BarChart from './BarChart/BarChart.react.js';
import _ from 'lodash';
import ProgramColors from '../controllers/ProgramColors.js';

export default class ProgramChart extends Component {
  constructor(props) {
    super(props);
    var defaultData = [
      {text: 'HEAP', value: _.random(0.2, 2), programName:'HEAP' },
      {text: 'SNAP', value: _.random(0.2, 2), programName:'SNAP' },
      {text: 'Tax Refunds', value: _.random(0.2, 2), programName: 'TaxRefund'},
      {text: 'WIC', value: _.random(0.2, 2), programName: 'WIC'},
      {text: 'ASC Childcare', value: _.random(0.2, 2), programName: 'ACSChildCare'},
      {text: 'School Food', value: _.random(0.2, 2), programName: 'SchoolFood'},
    ];
    this.state = { dataSet: defaultData, programCurrent: {}, width: 500 };
    this.handleBarClick = this.handleBarClick.bind(this);
    this.programInfo = this.programInfo.bind(this);
  }
  componentDidMount()  {
    var domNode = ReactDOM.findDOMNode(this);
    this.setState({width: domNode.offsetWidth}); // Need to set it at the start, too.
    window.onresize = () => {
     this.setState({width: domNode.offsetWidth});
    };
  }
  handleBarClick(element, id){
    var program = this.state.programCurrent;
    program.name = element.text;
    this.setState({ programCurrent: program });
  }
  programInfo() {
    var programCurrent = this.state.programCurrent;

    if (programCurrent.name) {
      return(
        <div className='programInfo'>
          <Row>
            <Col xs={8} sm={8} md={8} xsOffset={2} mdOffset={2} lgOffset={2}>
              <div className='text-center'><h1>{programCurrent.name}</h1></div>
              <div>Some information about the program currently selected will go here.</div>
            </Col>
          </Row>
        </div>
      );
    }
    return(<div></div>);
  }
  render(){
    var data = this.state.dataSet;
    var programCurrent = this.state.programCurrent;

    const margin = {top: 20, right: 20, bottom: 80, left: 40};

    _.each(data, function(d) {
      d.class = ProgramColors(d.programName);
      if (programCurrent.name && programCurrent.name != d.text) {
        d.class = ProgramColors(d.programName) + '-light';
      }
    });

    return(
        <div>
          <BarChart
            width={this.state.width}
            height={400}
            margin={margin}
            data={data}
            onBarClick={this.handleBarClick }/>
            {this.programInfo()}
        </div>
    );
  }
}
