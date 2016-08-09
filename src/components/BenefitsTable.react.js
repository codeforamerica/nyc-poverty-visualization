"use strict";

import React, { Component } from 'react';

// Bootstrap
import { Table, Panel, Glyphicon } from 'react-bootstrap';
import commaNumber from 'comma-number';
export default class BenefitsTable extends Component {
  render() {
    return(
      <Table>
        <tbody>
          <tr>
            <td>SNAP</td>
            <td>${ commaNumber(this.props.eligibility.SNAP.snapAmount) }</td>
          </tr>
          <tr>
            <td>WIC</td>
            <td>${ commaNumber(this.props.eligibility.WIC.wicAmount) }</td>
          </tr>
          <tr>
            <td>Tax Credits</td>
            <td>${ commaNumber(this.props.eligibility.TaxRefund.refundAmount) }</td>
          </tr>
          <tr>
            <td>HEAP</td>
            <td>$ --</td>
          </tr>
          <tr>
            <td>School Lunches</td>
            <td>${ commaNumber(this.props.eligibility.SchoolFood.lunchValue) }</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
