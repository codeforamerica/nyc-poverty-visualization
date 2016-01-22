import React, { Component } from 'react';
import Scroll from 'react-scroll';
import Rcslider from 'rc-slider';

import Header from './components/Header.js';

// Setting some components from react-scroll
let Link = Scroll.Link;
let Element = Scroll.Element;
var Events = Scroll.Events;

// We're going to include the rc-slider css.
// This weirdly had to be copied from their repo, because the less didn't wanna happen.
require('./styles/slider.css');

// Config the marks on the slider
const marks = {
  4: '$4',
  8: '$8',
  12: '$12',
  16: '$15',
  20: '$18',
  25: '$25'
};


let Scrolling = React.createClass({
  mixins: [Events],
  componentDidMount() {
    this.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    this.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });
  },
  componentWillUnmount() {
    this.scrollEvent.remove('begin');
    this.scrollEvent.remove('end');
  },
  render() {
    return(
    <div>
      <ul>
        <li><Link to="hi" spy={true} smooth={true} duration={500}>Scroll to block 1</Link></li>
        <li><Link to="test" spy={true} smooth={true} duration={500}>Scroll to block 2</Link></li>
      </ul>

      <Element name="hi" className="element">
        This is a test of fancy smooth scrolling.
        <div style={{ width: '250px', height: '250px'}}><Rcslider min={4} max={25} marks={marks} /></div>
      </Element>
      <Element name="test" className="element">
        This is a test of another fancy smooth scrolling. Cool things would go here.
      </Element>
    </div>
    );
  }
});


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <Scrolling />
        </div>
      </div>
    );
  }
}
