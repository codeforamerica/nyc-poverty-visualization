"use strict";

import React, { Component } from 'react';

// Bootstrap
import { Table, Panel, Glyphicon } from 'react-bootstrap';
import commaNumber from 'comma-number';
export default class BenefitsTable extends Component {
  render() {
    console.log(this.props.eligibility)
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
            <td><Glyphicon glyph={this.props.eligibility.SchoolFood.eligible ? "ok" : "remove"} /></td>
            <td>School Lunches</td>
            <td>${ commaNumber(this.props.eligibility.SchoolFood.lunchValue) }</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
