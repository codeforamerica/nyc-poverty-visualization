"use strict";

import React, { Component } from 'react';

// Bootstrap
import { Table, Panel } from 'react-bootstrap';

export default class CostsTable extends Component {
  render() {
    return(
    <Panel>
      <Table>
        <tbody>
          <tr>
            <td>Transportation</td>
            <td>$16,000</td>
          </tr>
          <tr>
            <td>Healthcare</td>
            <td>$16,000</td>
          </tr>
          <tr>
            <td>Housing</td>
            <td>$16,000</td>
          </tr>
          <tr>
            <td>Child Care</td>
            <td>$16,000</td>
          </tr>
        </tbody>
      </Table>
    </Panel>
    );
  }
}
