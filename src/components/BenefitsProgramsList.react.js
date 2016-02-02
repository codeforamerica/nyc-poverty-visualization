"use strict";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Chart, { Bar } from 'react-chartjs';
import BarChart from './BarChart/BarChart.react.js';
import _ from 'lodash';

//Benefits Programs Components
import Snap from './BenefitsPrograms/SNAP.react.js';
import SchoolFood from './BenefitsPrograms/SchoolFood.react.js';
import ACSChildCare from './BenefitsPrograms/ACSChildCare.react.js';
import WIC from './BenefitsPrograms/WIC.react.js';
import HEAP from './BenefitsPrograms/HEAP.react.js';
import EIC from './BenefitsPrograms/TaxRefund.react.js';



export default class BenefitsList extends Component {
  constructor(props) {
    super(props);
    var defaultData = [
      {text: 'HEAP', value: _.random(0.2, 6.2), fill: 'rgba(31, 60, 150, 1)', style: { fill: 'purple'} },
      {text: 'SNAP', value: _.random(0.2, 6.2), fill: 'rgba(107, 179, 192, 1)', style: { fill: 'purple'}},
      {text: 'Tax Refunds', value: _.random(0.2, 6.2), fill: 'rgba(211, 120, 122, 1)', style: { fill: 'purple'}},
      {text: 'WIC', value: _.random(0.2, 6.2), fill: 'rgba(199, 189, 127, 1)', style: { fill: 'purple'}},
      {text: 'Childcare', value: _.random(0.2, 6.2), fill: 'rgba(101, 106, 117, 1)', style: { fill: 'purple'}},
      {text: 'School Food', value: _.random(0.2, 6.2), fill: 'rgba(248, 189, 50, 1)', style: { fill: 'purple'}},
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
        <div><BarChart
                  width={this.state.width}
                  height={500}
                  margin={margin}
                  data={data}
                  onBarClick={this.handleBarClick }/>
        <p><a onClick={this.generateNewNumbers}>Generate new fake data</a></p></div>

        <div className='BenefitsList'>
          <Snap eligibility={this.props.eligibility.SNAP} />
          <SchoolFood eligibility={this.props.eligibility.SchoolFood} />
          <ACSChildCare eligibility={this.props.eligibility.ACSChildCare} />
          <WIC eligibility={this.props.eligibility.WIC} />
          <HEAP eligibility={this.props.eligibility.HEAP} />
          <EIC eligibility={this.props.eligibility.EIC} taxRefund={this.props.eligibility.EIC.refundAmount}/>
        </div>
      </div>
    );
  }
}
