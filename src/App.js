import React, { Component } from 'react';
import Scroll from 'react-scroll';

let Link = Scroll.Link;
let Element = Scroll.Element;
var Events = Scroll.Events;

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
        <li><Link to="hi" spy={true} smooth={true} duration={500}>Test 1</Link></li>
        <li><Link to="test" spy={true} smooth={true} duration={500}>Test 2</Link></li>
      </ul>

      <Element name="hi" className="element">
        This is a test of fancy smooth scrolling.
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
      <div>Hello World!</div>
    );
  }
}
