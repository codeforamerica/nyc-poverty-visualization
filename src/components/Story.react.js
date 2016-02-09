import React, { Component } from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import Rcslider from 'rc-slider';


export default class IncomeSlider extends Component {
  render() {
    return(
    <section>
      <div className='titlePane pane noBorder pane1'>
        NYC Poverty Estimator
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
                  This  interactive data visualization is based on the NYC Center for  Economic Opportunity’s estimate of a more realistic poverty measure.  It includes a poverty threshold that reflects the high cost of living in NYC but also  takes into account the benefits available to individuals and families in poverty.  This tools shows how representative families move over or under the CEO poverty line based on their size, income and program eligibility.
                  It is not meant to be used to determine eligibility, but as a tool to understand poverty and the importance of the social safety net.
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
