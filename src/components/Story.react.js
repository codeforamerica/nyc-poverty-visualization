import React, { Component } from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import Rcslider from 'rc-slider';


export default class IncomeSlider extends Component {
  render() {
    return(
    <section>
      <div className='titlePane pane noBorder pane1'>
        Social Services and Benefits over Income
      </div>
      <div className='imagePane'>

      </div>
      <div className='storyPane pane'>
        <div className='container'>
          <Grid>
            <Row>
              <Col xs={11} md={10} lg={10} xsOffset={1} mdOffset={1} lgOffset={1}>
                <p className='subHead'>
                  As the number of people in a household and the income of a family changes, so does their benefits eligibility
                </p>
                <p>
                  This is an interactive data visualization based on research done by the Center of Economic Opportunity on some of the benefits available to indidviduals and families in poverty. It is not meant to be taken as a calculator, but as a tool to witness trends over time, the number of people in a family and the income of that family.
                </p>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    </section>
    )
  }
}
