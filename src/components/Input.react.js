"use strict";

import React, { Component } from 'react';
// Bootstrap
import { Grid, Row, Col, Button, Glyphicon } from 'react-bootstrap';

//Components
import ToggleButtons from './ToggleButtons.react.js';
import IncomeSlider from './IncomeSlider.react.js';
import BenefitsList from './BenefitsProgramsList.react.js';
import TotalIncome from './TotalIncome.react.js';
import ProgramChart from './ProgramChart.react.js';
import PovertyThreshold from './PovertyThreshold.react.js';

//Benefits Logic Helpers
import CEOPovertyThreshold from '../controllers/CEOPovertyThreshold.js';
import ACSChildCare from '../controllers/ACSChildCare.js';
import SchoolFood from '../controllers/SchoolFood.js';
import SNAP from '../controllers/Snap.js';
import HEAP from '../controllers/HEAP.js';
import WIC from '../controllers/WIC.js';
import TaxRefund from '../controllers/EarnedIncomeCredit.js';

import TableTop from 'tabletop';

require('../styles/slider.css');

export default class Input extends Component {
  constructor() {
    super();
    this._updateInput = this._updateInput.bind(this);
    this.state = {
      family: { adults: 2, children: 2, income: 17500 },
      eligibility: {},
      testing: false
    };
    this.state.CEOPovertyThreshold = CEOPovertyThreshold(this.state.family.income, this.state.family.adults, this.state.family.children);
    this.state.eligibility = this.determineEligibility(this.state.eligibility);
  }

  componentDidMount(){
    var that = this;
    this.sheetData = function fetchDataFromSheet(){
      TableTop.init({
        key: '1W9T8-TqoVILvFkvBvlv1BuPAyLrtb_M16KQChPppU-Y',
        callback: assignState
      });

      function assignState(result){
        console.log("got here");
        console.log(result);

        for(var i in result){
          if(result.hasOwnProperty(i)){
            var formattedArray = [];
            var arrayLine = '';
            var elementsArray = result[i].elements;
            for(var j in elementsArray){
              var object = elementsArray[j];
              var tempArray = [];
              for(var k in object){
                if(object.hasOwnProperty(k)){
                  var unformattedArrayLine = object[k];
                  unformattedArrayLine.toString();
                  unformattedArrayLine.replace(/[$]/, '');
                  tempArray.push(unformattedArrayLine);
                }
              }
              formattedArray.push(tempArray);
            }
            console.log(formattedArray)
          }
        }
        that.setState({
          spreadSheetData: result
        });
        console.log(that.state);
      }
    };
    this.sheetData();
  }

  determineEligibility(stateEligibility) {
    let
      income = this.state.family.income,
      adults = this.state.family.adults,
      children = this.state.family.children;

    stateEligibility.ACSChildCare = ACSChildCare(income, adults, children);
    stateEligibility.SchoolFood = SchoolFood(income, adults, children);
    stateEligibility.SNAP = SNAP(income, adults, children);
    stateEligibility.HEAP = HEAP(income, adults, children);
    stateEligibility.WIC = WIC(income, adults, children);
    stateEligibility.TaxRefund = TaxRefund(income, adults, children);

    return stateEligibility;
  }

  _updateInput(value, setting) {
    var family = this.state.family;
    family[setting] = value;
    this.setState({family: family });
    this.state.eligibility = this.determineEligibility(this.state.eligibility);
    this.state.CEOPovertyThreshold = CEOPovertyThreshold(this.state.family.income, this.state.family.adults, this.state.family.children);
  }

  _moveToHeader() {
    console.log("Move that info to the header!");
  }

  // Render it all
  render() {
    return(
    <Grid>
      <section id="input">
        <Row className='familyPane pane' id='pane2' ref='pane2'>
          <Col xs={12} sm={6} md={6}>
            <h1 className='blue'>Family Composition</h1>
            <ToggleButtons onClick={this._updateInput} family={this.state.family} type='adults' key='adults' />
            <ToggleButtons onClick={this._updateInput} family={this.state.family} type='children' key='children' />
          </Col>
          <Col className="text-center" xs={12} sm={5} md={5}>
            {Array.apply(0, Array(this.state.family.adults)).map(function (x, i) {
              return(<img src='public/assets/img/parent-icon.png' className='familyMember' key={i} />);
            })}
            {Array.apply(0, Array(this.state.family.children)).map(function (x, i) {
              return(<img src='public/assets/img/child-icon.png' className='familyMember' key={i} />);
            })}
            <PovertyThreshold povertyThreshold={this.state.CEOPovertyThreshold} family={this.state.family} />
            <Button bsSize='large' href="#income">Next Section <Glyphicon glyph='chevron-right'/></Button>
          </Col>
        </Row>
        </section>
        <section id='income'>
          <Row className='pane incomeSliderPane' id='pane3' ref='pane3'>
            <Col xs={12} sm={5} md={5}>
              <h1 className='blue'>Income</h1>
              <h4>A family's income influences which programs they will be eligible for, and these programs can determine whether or not the family is below the poverty threshold.</h4>
              <IncomeSlider onChange={this._updateInput} />
            </Col>
            <Col xs={12} sm={6} md={6} mdOffset={1}>
              <TotalIncome family={this.state.family} taxRefund={this.state.eligibility.TaxRefund.refundAmount} />
              <BenefitsList family={this.state.family} eligibility={this.state.eligibility} />
            </Col>
          </Row>
        </section>
        <section>
          <Row className='pane elgibilityPane' id='pane4' ref='pane4'>
            <Col xs={12} sm={12} md={12}>
              <ProgramChart family={this.state.family} eligibility={this.state.eligibility} />
            </Col>
          </Row>
        </section>
    </Grid>
    );
  }
}
