import React, { Component } from 'react';
import { Panel, Grid, Row, Col, Button, Glyphicon } from 'react-bootstrap';

export default class Story extends Component {
  render() {
    return(
    <section>
      <div className='imagePane'>
        <div className='storyPane pane'>
          <div className='container'>
            <Grid>
              <Row>
                <Col xs={12} md={6} lg={6}>
                  <h1>Measuring Poverty in NYC</h1>
                  <p className='subHead'>
                    As the number of people in a household and the income of a family changes, so does their benefits eligibility
                  </p>
                  <p>
                    This  interactive data visualization is based on the NYC Center for  Economic Opportunity’s estimate of a more realistic poverty measure.  It includes a poverty threshold that reflects the high cost of living in NYC but also  takes into account the benefits available to individuals and families in poverty.  This tools shows how representative families move over or under the CEO poverty line based on their size, income and program eligibility.
                    It is not meant to be used to determine eligibility, but as a tool to understand poverty and the importance of the social safety net.
                  </p>
                </Col>
                <Col className="text-center" xs={12} md={6} lg={6}>
                <h1 className="big-number"> 20.7% </h1>
                <p className="subHead"> Percentage of New Yorkers living in poverty </p>
                </Col>
              </Row>
              <br/>
              <Row>
              </Row>
            </Grid>
          </div>
        </div>

      </div>
    </section>
    )
  }
}
