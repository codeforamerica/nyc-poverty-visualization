"use strict";
//import * as $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import PovertyThreshold from './PovertyThreshold.react.js';
import IncomeSlider from './IncomeSlider.react.js';
import BottomBar from './BottomBar.react.js';
import AdditionalQuestions from './AdditionalQuestions.react.js';

//Fonts and Styles
require('font-awesome/css/font-awesome.min.css');
require('bootstrap/dist/css/bootstrap.css');
require('./styles/style.scss');

//Javascript
require('./scripts/grayscale.js');

ReactDOM.render(<PovertyThreshold />, document.getElementById('poverty-threshold'));
ReactDOM.render(<AdditionalQuestions />, document.getElementById('additional-questions'));
ReactDOM.render(<IncomeSlider />, document.getElementById('react-income-slider'));
ReactDOM.render(<BottomBar />, document.getElementById('bar'));
