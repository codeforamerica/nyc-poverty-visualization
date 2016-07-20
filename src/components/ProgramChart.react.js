"use strict";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Chart, { Bar } from 'react-chartjs';
import { Row, Col } from 'react-bootstrap';
// charts on charts on charts
import ReactD3 from 'react-d3-components';
var BarChart = ReactD3.BarChart;


import _ from 'lodash';
import ProgramColors from '../controllers/ProgramColors.js';

export default class ProgramChart extends Component {
  constructor(props) {
    super(props);
    var defaultData = [
      {text: 'SNAP', value: 3.6, programName:'SNAP', desc: "This credit is available from the Federal, State and City governments.. The Earned Income Tax Credits (EITCs) are refundable tax credits for working people in  a wide range of incomes. Workers who qualify for the EITCs and file Federal,  New York State and City tax returns can get back some or all of the income tax that was withheld during the year. They may also get extra cash back. More information on the program and the application process is <a href='http://www.nyc.gov/html/hra/html/services/snap.shtml'>available here</a>." },
      {text: 'Tax Credits', value: 3.6, programName: 'TaxRefund', desc: "This program is run by the New York State Department of Taxation and Finance along with the U.S. Internal Revenue Service. The Earned Income Tax Credits (EITCs) are refundable tax credits for working people with a range of incomes. Workers who qualify for the EITCs and file Federal and State tax returns can get back some or all of the income tax that was withheld during the year. They may also get extra cash back. More information on the program and the application process is <a href='http://www1.nyc.gov/site/dca/consumers/get-tax-credit-information.page'>available here</a>."},
      {text: 'School Meals', value: 0.6, programName: 'SchoolFood', desc: "This program is run by the New York City Department of Education and and provides free or reduced-price meals to students who are eligible while they attend school (grades K-12).  More information on the program and the application process is <a href='http://www.schoolfoodnyc.org/EatAtSchool/nutritionstandards.htm'>available here</a>."},
      {text: 'WIC', value: 0.1, programName: 'WIC', desc: "This program is run by the the New York State Department of Health that provides food and services free of charge to eligible women, infants and children. WIC offers nutrition education, breastfeeding support, referrals and a variety of nutritious foods to low-income pregnant, breastfeeding or postpartum women, infants and children up to age five to promote and support good health. WIC participants have longer, healthier pregnancies and fewer premature births. More information on the program and the application process is <a href='http://www.health.ny.gov/prevention/nutrition/wic/'>available here</a>."},
      {text: 'HEAP', value: 0.0, programName:'HEAP', desc: "HEAP is a federally funded program that assists low-income New Yorkers with the cost of heating their homes. HEAP also offers an emergency benefit for households in a heat or heat related energy emergency. More information on the program and the application process is <a href='http://otda.ny.gov/programs/heap/'>available here</a>." }
    ];
    var data = [{
      label: 'somethingA',
      values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
    }];
    this.state = { dataSet: defaultData, programCurrent: {}, width: 500, sampleData: data };
    this.handleBarClick = this.handleBarClick.bind(this);
    this.programInfo = this.programInfo.bind(this);
  }
  componentDidMount()  {


  }
  handleBarClick(element, id){
    var program = this.state.programCurrent;
    program.name = element.text ? element.text : element; // this is because of the seperate clicks on x axis or bar
    this.setState({ programCurrent: program });
  }
  programInfo() {
    var programCurrent = this.state.programCurrent;
    var program = this.state.dataSet[_.findIndex(this.state.dataSet, { 'text': programCurrent.name } )];

    if (programCurrent.name) {
      return(
        <div className='programInfo'>
          <Row>
            <Col xs={8} sm={8} md={8} xsOffset={2} mdOffset={2} lgOffset={2}>
              <div className='text-center'><h1>{programCurrent.name}</h1></div>
              <div dangerouslySetInnerHTML={{__html: program.desc}} />
            </Col>
          </Row>
        </div>
      );
    }
    return(<div></div>);
  }
  render(){


    return(
        <div>
          <div key="25" id="chartjs-test"></div>
          <div className='text-center'><h1 className='blue'>Marginal Effects of a Service on CEO Poverty Rate</h1></div>
          <BarChart
        data={this.state.sampleData}
        width={600}
        height={400}
        margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
            {this.programInfo()}
        </div>
    );
  }
}
