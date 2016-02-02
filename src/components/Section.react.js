import React, { Component } from 'react';
import Scroll from 'react-scroll'; 

var Link = Scroll.Link;
var Element = Scroll.Element;
var Events = Scroll.Events;

var Section = React.createClass({
  mixins: [Events],
  componentDidMount: function() {

    this.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    this.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

  },
  componentWillUnmount: function() {
    this.scrollEvent.remove('begin');
    this.scrollEvent.remove('end');
  },
  render: function () {
  	return (
  		<Link to="test1" spy={true} smooth={true} offset={50} duration={500} >Test 1</Link>
		<Button className="btn" type="submit" value="Test 2" to="test2" spy={true} smooth={true} offset={50} duration={500} >Test 2</Button>

  		<Element name="test1" className="element">
  		  test 1
  		</Element>

  		<Element name="test2" className="element">
  		  test 2
  		</Element>
	);
  }
});
