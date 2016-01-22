import React, { Component } from 'react';
import Scroll from 'react-scroll';
import Rcslider from 'rc-slider';

// Setting some components from react-scroll
let Link = Scroll.Link;
let Element = Scroll.Element;
var Events = Scroll.Events;

// Our components
import Families from './Family.js';

// Config the marks on the slider
const marks = {
  4: '$4',
  8: '$8',
  12: '$12',
  16: '$15',
  20: '$18',
  25: '$25'
};

// We're going to include the rc-slider css.
// This weirdly had to be copied from their repo, because the less didn't wanna happen.
require('../styles/slider.css');

// we don't need this right now
let scrollLinks = <ul>
  <li><Link to="hi" spy={true} smooth={true} duration={500}>Scroll to block 1</Link></li>
  <li><Link to="test" spy={true} smooth={true} duration={500}>Scroll to block 2</Link></li>
</ul>

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
      <Element name="hi" className="element">
        <div style={{ width: '250px', height: '250px'}}><Rcslider min={4} max={25} marks={marks} /></div>
        <Families />
      </Element>
    </div>
    );
  }
});

export default class Content extends Component {
  render() {
    return(
      <Scrolling />
    )
  }
}
