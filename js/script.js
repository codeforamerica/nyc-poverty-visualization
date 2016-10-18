$(document).ready(function(){
  var waypoint = new Waypoint({
    element: document.getElementById('section-equation'),
    handler: function(direction) {
      if(direction === 'down'){
        $(".equation").each(function(index) {
          $(this).delay(400*index).fadeIn(300);
        }).promise().done(function(){
          $(".equation:first").trigger('mouseenter');
        });
      }
      console.log('Direction: ' + direction)
    },
    offset: 100
  });

  $('#section-1').waypoint(function (direction) {
    $('#bar').fadeIn();
  }, { offset: 'bottom-in-view' });

  /*$('#section-equation').waypoint(function(){
}, { offset: '100%' });*/

var chart2 = document.getElementById("chart2");

var chart2Constructor = new Chart(chart2, {
  type: 'bar',
  data: {
    labels: ["Housing Adjustment", "Income Tax Credits", "SNAP", "School Meals", "WIC", "HEAP", "Childcare", "Commuting", "Payroll Taxes", "Medical Expenses"],
    datasets: [
      {
        label: 'Marginal Effects of Selected Sources of Income on the CEO Poverty Rate, 2014',
        borderColor: '#1AB3E9',
        backgroundColor: "#1AB3E9",
        data: [-6.6, -3.9, -3.6, -0.5, -0.3, 0.0, 0.3, 2.1, 2.3, 2.6],
        fill: true
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: false,
      text: "Marginal Effect on Poverty, 2005-2014",
      fontColor: '#1078BE'
    },
    scales: {
      yAxes: [{
        gridLines: {
          color: '#eee'
        },
        ticks: {
          beginAtZero:false,
          fontColor: '#1078BE'
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: '#1078BE'
        },
        gridLines: {
          fontColor: '#eee',
          color: 'rgba(255, 255, 255, 0.1)'
        }
      }]
    }
  }
});

})
