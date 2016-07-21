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
        <tbody>
          <tr>
            <td><Glyphicon glyph="check" /></td>
            <td>SNAP</td>
            <td>${ formatDollars(this.props.eligibility.SNAP.snapAmount) }</td>
          </tr>
          <tr>
            <td><Glyphicon glyph="check" /></td>
            <td>WIC</td>
            <td>$16,000</td>
          </tr>
          <tr>
            <td></td>
            <td>Tax Credits</td>
            <td>${ formatDollars(this.props.eligibility.TaxRefund.refundAmount) }</td>
          </tr>
          <tr>
            <td><Glyphicon glyph="check" /></td>
            <td>HEAP</td>
            <td>$16,000</td>
          </tr>
          <tr>
            <td><Glyphicon glyph="check" /></td>
            <td>School Lunches</td>
            <td>$16,000</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
