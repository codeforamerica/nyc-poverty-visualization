import React, { Component } from 'react';
import formatDollars from '../controllers/formatDollars.js';

function compareNumbers(a, b) {
  return a - b;
}

export default class BarChart extends Component {
  constructor() {
    super();

    this.state = {
			series: ['CEO Income vs Poverty Threshold'],
			labels: ['CEO Income', 'Poverty Threshold'],
			colors: ['#1ab3e9', '#9c27b0']
    }
  }

	render () {
		return (
			<section>

				<Charts
					data={ this.props.data }
					labels={ this.state.series }
					colors={ this.state.colors }
					height={ 250 }
					grouping={ 'layered' }
				/>

				<Legend labels={ this.state.labels } colors={ this.state.colors } />
			</section>
		);
	}
};



var Legend = React.createClass({
	render: function () {
		var labels = this.props.labels,
			colors = this.props.colors;

		return (
		<div className="Legend">
			{ labels.map(function(label, labelIndex) {
				return (
				<div key={labelIndex}>
					<span className="Legend--color" style={{ backgroundColor: colors[labelIndex % colors.length]  }} />
					<span className="Legend--label">{ label }</span>
				</div>
				);
			}) }
		</div>
		);
	}
});

var Charts = React.createClass({
	render: function () {
		var self = this,
			data = this.props.data,
			layered = this.props.grouping === 'layered' ? true : false,
			stacked = this.props.grouping === 'stacked' ? true : false,
			opaque = this.props.opaque,
			max = 250;

		for (var i = data.length; i--; ) {
			for (var j = data[i].length; j--; ) {
				if (data[i][j] > max) {
					max = data[i][j];
				}
			}
		}


		return (
			<div className={ 'Charts' + (this.props.horizontal ? ' horizontal' : '' ) }>
				{ data.map(function (serie, serieIndex) {
				 	var sortedSerie = serie.slice(0),
				 		sum;

				 	sum = serie.reduce(function (carry, current) {
				 		return carry + current;
					}, 0);
				 	sortedSerie.sort(compareNumbers);

					return (
						<div className={ 'Charts--serie ' + (self.props.grouping) }
				 			key={ serieIndex }
							style={{ height: self.props.height ? self.props.height: 'auto' }}
						>
						<label>{ self.props.labels[serieIndex] }</label>
						{ serie.map(function (item, itemIndex) {
							var color = self.props.colors[itemIndex], style,
								size = item / (stacked ? sum : max) * 100;

							style = {
								backgroundColor: color,
								opacity: opaque ? 1 : (.35),
								zIndex: item
							};

							if (self.props.horizontal) {
								style['width'] = size + '%';
							} else {
								style['height'] = size + '%';
							}

							//if (layered && !self.props.horizontal) {
								//console.log(sortedSerie, serie, sortedSerie.indexOf(item));
								//style['right'] = ((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) + '%';
								// style['left'] = (itemIndex * 10) + '%';
							//}
              var formattedItem = formatDollars(item)
						 return (
							 <div
							 	className={ 'Charts--item ' + (self.props.grouping) }
							 	style={ style }
								key={ itemIndex }
							>
							 	<b style={{ color: color }}>${ formattedItem }</b>
							 </div>
						);
						}) }
						</div>
					);
				}) }
			</div>
		);
	}
});
