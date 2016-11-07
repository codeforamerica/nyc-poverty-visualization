"use strict";
import React, { Component } from 'react';
import { Row, Col, Collapse, Well, ButtonToolbar, ButtonGroup, Button, Glyphicon, Table, Panel, FormGroup, Radio } from 'react-bootstrap';
// Alt
import ThresholdStore from './stores/ThresholdStore.js';
import ThresholdActions from './actions/ThresholdActions.js';
import commaNumber from 'comma-number';


export default class AdditionalQuestions extends Component {
  constructor() {
    super();

    this.state = ThresholdStore.getState(); // Getting this from alt.js
    this.state.showSnap = false;
    this.state.showHousingDetails = false;

    //Default to no children eligible for WIC
    this.onChangeThreshold = this.onChangeThreshold.bind(this);
    this.updateChildUnderOne = this.updateChildUnderOne.bind(this);
    this.updateHousing = this.updateHousing.bind(this);
  }

  componentDidMount() {
    ThresholdStore.listen(this.onChangeThreshold);
  }

  updateChildUnderOne() {
    // this.setState({childrenUnderOne: !this.state.childrenUnderOne})
    ThresholdActions.updateChildrenUnderOne(!this.state.childrenUnderOne);
  }

  componentWillUnmount() {
    ThresholdStore.unlisten(this.onChangeThreshold);
  }

  onChangeThreshold(data) { // Updating the store
    this.setState(data);
  }

  updateHousing(event) {
    ThresholdActions.updateHousing(event.target.value);
    this.setState({ showHousingDetails: true });
  }

  updateTransportation(event) {
    ThresholdActions.updateTransportation(event.target.value);
  }

  render(){
    let showTransportation = this.state.transportation > 0 ? true : false;

    return(
      <Row>
        <Col md={4}>
          <Panel header="New Parent Benefits">
            <p>Are any of your <span className="figure">{this.state.family.children}</span> children under the age of 1?</p>
              <Button bsSize="large" block onClick={this.updateChildUnderOne} active={!this.state.childrenUnderOne}>No</Button>
              <Button bsSize="large" block onClick={this.updateChildUnderOne} active={this.state.childrenUnderOne}>Yes</Button>
          </Panel>
          <Collapse in={this.state.childrenUnderOne}>
            <div>
              <Well>
                On average, this family would receive about <span className="figure">${commaNumber(this.state.eligibility.WIC.wicAmount)}</span> from being enrolled in WIC (supplemental nutrition for newborns and mothers).
              </Well>
            </div>
          </Collapse>
        </Col>
        <Col md={4}>
          <Panel header="Housing">
            <p>Choose the option that best describes your housing situation:</p>
            <FormGroup id="housing-options">
              <Radio name="housing-option" value={0} onChange={this.updateHousing}>
                Live in public housing
              </Radio>
              <Radio name="housing-option" value={1} onChange={this.updateHousing}>
                Live in rent subsidized or rent regulated housing of any kind
              </Radio>
              <Radio name="housing-option" value={2} onChange={this.updateHousing}>
                Live rent free
              </Radio>
              <Radio name="housing-option" value={3} onChange={this.updateHousing}>
                Own home with a mortgage
              </Radio>
              <Radio name="housing-option" value={4} onChange={this.updateHousing}>
                Own your home with no mortgage
              </Radio>
              <Radio name="housing-option" value={5} onChange={this.updateHousing}>
                None of the above
              </Radio>
            </FormGroup>
          </Panel>
          <Collapse in={this.state.showHousingDetails}>
            <Well>
              On average, the value of this family's housing situation would contribute <span className="figure">${commaNumber(this.state.eligibility.Housing)}</span> to reducing their poverty threshold.
            </Well>
          </Collapse>
        </Col>
        <Col md={4}>
          <Panel header="Transportation">
            <p>How many of the <span className="figure">{this.state.family.adults}</span> adults in your household commute to work?</p>
            {[...Array(this.state.family.adults+1)].map((x, i) =>
              <div key={i} style={{ float: 'left', margin: '5px', textAlign: 'center', padding: '3px', width: '50px' }}>
                <input type='radio' name='transportation' value={i} onChange={this.updateTransportation} />
                <br />
                {i}
              </div>
            )}
          </Panel>
          <Collapse in={showTransportation}>
            <Well>
              On average, this family would spend <span className='figure'>${commaNumber(this.state.transportationCost)}</span> a year on transportation.
            </Well>
          </Collapse>
        </Col>
      </Row>
    );
  }
}
