import React, { Component } from 'react';
import commaNumber from 'comma-number';

function compareNumbers(a, b) {
  return a - b;
}

export default class BarChart extends Component {
  constructor() {
    super();

    this.state = {
			series: ['CEO Income vs Poverty Threshold'],
			labels: ['CEO Income', 'Poverty Threshold'],
      labelClasses: ['pull-left', 'pull-right'],
			colors: ['#1078BE', 'none'],
      backgroundColors: ['#1ab3e9', 'none'],
      ids: ['ceo-income', 'poverty-threshold']
    }
  }

	render () {
		return (
			<div>
				<Charts
					data={ this.props.data }
					labels={ this.state.labels }
          labelClasses={this.state.labelClasses}
          serie={this.state.series}
					colors={ this.state.colors }
          backgroundColors={this.state.backgroundColors}
          ids={ this.state.ids }
					height={ 250 }
					grouping={ 'layered' }
				/>
			</div>
		);
	}
};



var Legend = React.createClass({
	render: function () {
		var
      labels = this.props.labels,
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
						<label>{ self.props.serie[serieIndex] }</label>
						{ serie.map(function (item, itemIndex) {
							var
                style,
                color = self.props.colors[itemIndex],
                backgroundColor = self.props.backgroundColors[itemIndex],
								size = item / (stacked ? sum : max) * 100,
                label = self.props.labels[itemIndex],
                labelClasses = self.props.labelClasses[itemIndex],
                id = self.props.ids[itemIndex];

							style = {
								backgroundColor: backgroundColor,
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
            var formattedItem = commaNumber(item)
						return (
							<div
                id={id}
							 	className={ 'Charts--item ' + (self.props.grouping) }
							 	style={ style }
								key={ itemIndex }
							>
							 	<b className={labelClasses} style={{ color: color }}>{label}:  ${ formattedItem }</b>
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
