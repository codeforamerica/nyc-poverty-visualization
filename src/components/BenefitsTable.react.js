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
            <td><Glyphicon glyph="check" /></td>
            <td>SNAP</td>
            <td>${ commaNumber(this.props.eligibility.SNAP.snapAmount) }</td>
          </tr>
          <tr>
            <td><Glyphicon glyph="check" /></td>
            <td>WIC</td>
            <td>${ commaNumber(this.props.eligibility.WIC.wicAmount) }</td>
          </tr>
          <tr>
            <td></td>
            <td>Tax Credits</td>
            <td>${ commaNumber(this.props.eligibility.TaxRefund.refundAmount) }</td>
          </tr>
          <tr>
            <td><Glyphicon glyph="check" /></td>
            <td>HEAP</td>
            <td>$ --</td>
          </tr>
          <tr>
            <td><Glyphicon glyph="check" /></td>
            <td>School Lunches</td>
            <td>${ commaNumber(this.props.eligibility.SchoolFood.lunchValue) }</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
