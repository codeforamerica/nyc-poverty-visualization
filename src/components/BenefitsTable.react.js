"use strict";

import React, { Component } from 'react';

// Bootstrap
import { Table, Panel, Glyphicon } from 'react-bootstrap';
import formatDollars from '../controllers/formatDollars.js';
export default class BenefitsTable extends Component {
  render() {
    console.log(this.props.eligibility)
    return(
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>Program</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Glyphicon glyph="check" /></td>
            <td>SNAP</td>
            <td>${ formatDollars(this.props.eligibility.SNAP.snapAmount) }</td>
          </tr>
          <tr>
            <td><Glyphicon glyph="check" /></td>
            <td>WIC</td>
            <td>${ formatDollars(this.props.eligibility.WIC.wicAmount) }</td>
          </tr>
          <tr>
            <td></td>
            <td>Tax Credits</td>
            <td>${ formatDollars(this.props.eligibility.TaxRefund.refundAmount) }</td>
          </tr>
          <tr>
            <td><Glyphicon glyph="check" /></td>
            <td>HEAP</td>
            <td>$ --</td>
          </tr>
          <tr>
            <td><Glyphicon glyph="check" /></td>
            <td>School Lunches</td>
            <td>${ formatDollars(this.props.eligibility.SchoolFood.lunchValue) }</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
