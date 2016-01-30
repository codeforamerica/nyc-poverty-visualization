"use strict";

import React, { Component } from 'react';
import Header from './components/Header.react.js';
import Input from './components/Input.react.js'; // This will do more of the mangement
import Story from './components/Story.react.js';

require('./styles/style.scss');

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <Story />
          <Input />
        </div>
      </div>
    );
  }
}
