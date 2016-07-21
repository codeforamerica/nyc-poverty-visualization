"use strict";

import React, { Component } from 'react';

// Bootstrap
import { Table, Panel } from 'react-bootstrap';

export default class IncomeTable extends Component {
  render() {
    console.log('got here')
    return(
    <Panel>
      <Table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Income from wages</td>
            <td>$16,000</td>
          </tr>
        </tbody>
      </Table>
    </Panel>
    );
  }
}
