import React, { Component } from 'react';
import Header from './components/Header.js';
import Content from './components/Content.js'; // This will do more of the mangement

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <Content />
        </div>
      </div>
    );
  }
}
