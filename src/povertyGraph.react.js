"use strict";
import React, { Component } from 'react';



export default class povertyGraph extends Component {
  constructor() {
    super();

    this.toggle = this.toggle.bind(this);
    this.changeIconTotal= this.changeIconTotal.bind(this);

    this.state = { toggle: { ceo: true, federal: true }, iconTotal: 200 };
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  toggle(type) {
    var state = this.state.toggle;
    var current = state[type];
    if (current == false) {
      state[type] = true;
    } else {
      state[type] = false;
    }

    this.setState({ toggle: state });
  }

  changeIconTotal(event) {
    var total = event.target.value;

    if (total > 1)
      this.setState({iconTotal: total});
    else
      this.setState({iconTotal: 1});
  }

  render(){
    var totalNewYorkers = 8405837;
    var totalNewYorkersPretty = totalNewYorkers.toLocaleString();
    var federalPovertyPercent = 19.1;
    var ceoPovertyPercent = 20.7;

    var federalPovertyCount = Math.ceil(federalPovertyPercent / 100 * totalNewYorkers).toLocaleString();
    var ceoPovertyCount = Math.ceil(ceoPovertyPercent / 100 * totalNewYorkers).toLocaleString();

    var iconTotal = parseInt(this.state.iconTotal); // Split up the population into 100 icons
    var iconCount = Math.ceil(totalNewYorkers / iconTotal).toLocaleString();

    // Colors
    var colorCEO = '#377bb5';
    var colorFederal = '#1AB3E9'
    var colorDefault = 'rgba(151, 151, 151, 1)';

    // Toggles
    var toggleCEO = this.state.toggle.ceo;
    var toggleFederal = this.state.toggle.federal;

    // Text
    var textCEO = toggleCEO ? "Remove CEO Poverty" : "Add CEO Poverty";
    var textFederal = toggleFederal ? "Remove Federal Poverty" : "Add Federal Poverty";

    console.log(iconTotal);
    let icons = [...Array(iconTotal)].map((x, i) => {
      // How many of these should be blue
      var fontColor = colorDefault;
      var totalFederal = Math.ceil(federalPovertyPercent / 100 * iconTotal);
      var totalCEO = Math.ceil(ceoPovertyPercent / 100 * iconTotal);

      if (totalCEO >= i && toggleCEO)
        fontColor = colorCEO;

      if (totalFederal >= i && toggleFederal)
        fontColor = colorFederal;

      return(
        <i className='fa fa-male fa-3x' style={{ color: fontColor }} key={i}></i>
      );
    });


    return(
      <div className="row">
        <div className="col-md-4">
          <div className="lead">
            The total number of citizens living in New York is <strong>{totalNewYorkersPretty}</strong>. <strong style={{ color: colorFederal}}>{federalPovertyPercent}%</strong> ({federalPovertyCount}) of them are under the federal poverty line, and <strong style={{ color: colorCEO }}>{ceoPovertyPercent}%</strong> ({ceoPovertyCount}) of them are under the Center of Economic Opportunity's poverty line. You can see how many New Yorkers are below the poverty line by clicking the buttons below.
          </div>
          <div className='controls'>
            <p><button onClick={() => this.toggle('federal')} className='btn btn-primary'>{textFederal}</button></p>
            <p><button onClick={() => this.toggle('ceo')} className='btn btn-primary'>{textCEO}</button></p>
          </div>
          <div className="lead">
            Each <i className='fa fa-male' style={{ color: colorDefault }}></i> represents <strong>{iconCount}</strong> New Yorkers.
          </div>
        </div>
        <div className="col-md-8">
          <div className="povertyGraph">
            {icons}
          </div>
        </div>
      </div>
    );
  }
}
