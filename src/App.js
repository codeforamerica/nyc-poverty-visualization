"use strict";

import React, { Component } from 'react';
import Header from './components/Header.react.js';
import Footer from './components/Footer.react.js';
import Input from './components/Input.react.js'; // This will do more of the mangement
import Story from './components/Story.react.js';
import scrollTo from './helpers/Scroll.js';

require('./styles/style.scss');

export default class App extends Component {
  constructor() {
    super();
    this.state = { currentPane: 1 };
    this._shiftPane = this._shiftPane.bind(this);
  }
  _shiftPane() {
    const currentPane = this.state.currentPane;
    const newPane = currentPane + 1;
    scrollTo(this.refs.pane1);

  }
  render() {
    return (
      <div>
        <Header />
        <div className='container-fluid'>
          <Story id='pane1' shiftPane={this._shiftPane.bind(this)} ref="pane1" />
          <Input shiftPane={this._shiftPane.bind(this)} />
        </div>
        <Footer />
      </div>
    );
  }
}
