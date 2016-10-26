"use strict";

import React, { Component } from 'react';

// Bootstrap
import { Table, Panel, Glyphicon } from 'react-bootstrap';
import commaNumber from 'comma-number';
export default class BenefitsTable extends Component {
  render() {
    let schoolFoodName = '';
    if (this.props.eligibility.SchoolFood.lunchRate == 'free') {
      schoolFoodName = "School Lunches";
    } else if (this.props.eligibility.SchoolFood.lunchRate == 'breakfast') {
      schoolFoodName = "School Breakfast";
    }
    return(
      <Table>
        <tbody>
          <tr>
            <td><Glyphicon glyph={this.props.eligibility.SNAP.eligible ? "ok" : "remove"} /></td>
            <td>SNAP</td>
            <td>${ commaNumber(this.props.eligibility.SNAP.snapAmount) }</td>
          </tr>
          <tr>
            <td><Glyphicon glyph={this.props.eligibility.WIC.eligible ? "ok" : "remove"} /></td>
            <td>WIC</td>
            <td>${ commaNumber(this.props.eligibility.WIC.wicAmount) }</td>
          </tr>
          <tr>
            <td><Glyphicon glyph={this.props.eligibility.TaxRefund.eligible ? "ok" : "remove"} /></td>
            <td>Tax Credits</td>
            <td>${ commaNumber(this.props.eligibility.TaxRefund.refundAmount) }</td>
          </tr>
          <tr>
            <td><Glyphicon glyph="ok" /></td>
            <td>{schoolFoodName}</td>
            <td>${ commaNumber(this.props.eligibility.SchoolFood.foodValue) }</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
