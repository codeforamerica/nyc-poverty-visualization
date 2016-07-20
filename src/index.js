"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import StandAloneThreshold from './StandAloneThreshold.react.js';
import StandAloneIncomeSlider from './StandAloneIncomeSlider.react.js';

require('./styles/style.scss');

ReactDOM.render(<StandAloneThreshold />, document.getElementById('poverty-threshold'));
ReactDOM.render(<StandAloneIncomeSlider />, document.getElementById('react-income-slider'));
