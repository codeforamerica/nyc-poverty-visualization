"use strict";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Chart, { Bar } from 'react-chartjs';
import BarChart from './BarChart/BarChart.react.js';
import _ from 'lodash';
import ProgramColors from '../controllers/ProgramColors.js';

export default class ProgramChart extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    var defaultData = [
      {text: 'HEAP', value: _.random(0.2, 6.2), class: ProgramColors('HEAP') },
      {text: 'SNAP', value: _.random(0.2, 6.2), class: ProgramColors('SNAP') },
      {text: 'Tax Refunds', value: _.random(0.2, 6.2), class: ProgramColors('TaxRefund')},
      {text: 'WIC', value: _.random(0.2, 6.2), class: ProgramColors('WIC')},
      {text: 'Childcare', value: _.random(0.2, 6.2), class: ProgramColors('ACSChildCare')},
      {text: 'School Food', value: _.random(0.2, 6.2), class: ProgramColors('SchoolFood') },
    ];
    this.state = { dataSet: defaultData, width: 500 };
    this.generateNewNumbers = this.generateNewNumbers.bind(this);
  }
  componentDidMount()  {
    var domNode = ReactDOM.findDOMNode(this);
    console.log(domNode);

    window.onresize = () => {
     this.setState({width: domNode.offsetWidth});
    };
  }
  handleBarClick(element, id){
    console.log(`The bin ${element.text} with id ${id} was clicked`);
  }
  generateNewNumbers() {
    var data = this.state.dataSet;

    //this.setState({ dataSet: data });
  }
  render(){
    var data = this.state.dataSet;
    const margin = {top: 20, right: 20, bottom: 80, left: 40};

    return(
        <div>
          <BarChart
            width={this.state.width}
            height={500}
            margin={margin}
            data={data}
            onBarClick={this.handleBarClick }/>
        </div>
    );
  }
}
