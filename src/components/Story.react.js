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
        x
      </div>
      <div className='storyPane pane'>
        <div className='container'>
          <Grid>
            <Row>
              <Col xs={11} md={10} lg={10} xsOffset={1} mdOffset={1} lgOffset={1}>
                <p className='subHead'>
                  A subhead that explains in more detail
                </p>
                <p>
                  The UK will contribute up to 275 million over the next two years to help Turkey address the consequences of the Syria conflict. In his Budget statement today the Chancellor announced that payment to the Civil List for calendar year 2011 will be unchanged at £7. New figures released this week show that the number of people in this age group who have a job rose by 50,000 during the last quarter. The emergency Budget will be held on Tuesday 22 June, the Chancellor announced today.
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
