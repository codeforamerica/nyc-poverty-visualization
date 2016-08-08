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

  $(".equation-block").hover(function(){
    $(".equation-block").removeClass('active');
    $(this).addClass('active');
    $(".equation-panel").hide();
    var target = $(this).data('target');
    var targetPanel = $("#section-equation").find("[data-panel=" + target + "]");
    targetPanel.show();
  })

  /*$('#section-equation').waypoint(function(){
}, { offset: '100%' });*/

var chart2 = document.getElementById("chart3");

var chart0Constructor = new Chart(chart0, {
  type: 'doughnut',
  data: {
    labels: ["% Below Threshold", "% Above Threshold"],
    datasets: [
      {
        label: 'Official Poverty Measure',
        borderColor: '#fff',
        backgroundColor: ['#FBC700', '#89D6F4'],
        data: [20.7, 79.3],
        fill: true
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Official and CEO Poverty Rates, 2005-2014",
      fontColor: '#fff'
    }
  }
});

var chart2Constructor = new Chart(chart2, {
  type: 'bar',
  data: {
    labels: ["Health Care", "Child Care", "Housing", "Transportation", "HEAP", "WIC", "SNAP", "School Lunches", "EIC"],
    datasets: [
      {
        label: '% 18 - 64 Year-Olds Employed',
        borderColor: '#fff',
        backgroundColor: "rgba(251, 199, 0, .89)",
        data: [-3.0, -2.7, -1.3, -.3, 0.1, 1.2, 2.3, 2.5, 3],
        fill: true
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Employment/Population Ratios, 2005-2014",
      fontColor: '#fff'
    },
    scales: {
      yAxes: [{
        gridLines: {
          color: '#fff'
        },
        ticks: {
          beginAtZero:false,
          fontColor: '#fff'
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: '#fff'
        },
        gridLines: {
          fontColor: '#fff',
          color: 'rgba(255, 255, 255, 0.1)'
        }
      }]
    }
  }
});

})
