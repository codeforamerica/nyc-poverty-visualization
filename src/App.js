"use strict";

import React, { Component } from 'react';
import Header from './components/Header.react.js';
import Content from './components/Content.react.js'; // This will do more of the mangement

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <div className='header-title'>
            NYC Poverty And Benefits Calculator
          </div>
          <Content />
        </div>
      </div>
    );
  }
}
