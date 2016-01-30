import React, { Component } from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import Rcslider from 'rc-slider';


export default class IncomeSlider extends Component {
  render() {
    return(
      <Panel className='pane storyBoard noBorder'>
        This is a calculator of a sample family that does things if you move the sliders.
      </Panel>
    )
  }
}
