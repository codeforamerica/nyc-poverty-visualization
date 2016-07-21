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
  })

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

  var chart0 = document.getElementById("chart0");
  var chart1 = document.getElementById("chart1");
  var chart2 = document.getElementById("chart2");
  var chart3 = document.getElementById("chart3");
  var chart4 = document.getElementById("chart4");

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

  var chart1Constructor = new Chart(chart1, {
    type: 'line',
    data: {
      labels: ["2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014"],
      datasets: [
        {
          label: 'Official Poverty Measure',
          borderColor: '#05237F',
          backgroundColor: '#89D6F4',
          data: [18.3, 17.9, 16.8, 16.8, 17.3, 18.8, 19.3, 20.0, 19.9, 19.1],
          fill: true
        },
        {
          label: 'CEO Poverty Measure',
          borderColor: '#FBC700',
          backgroundColor: 'rgba(251, 199, 0, 0.66)',
          data: [20.4, 19.8, 19.8, 19, 19.8, 20.8, 21.2, 21.2, 21.1, 20.7],
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: "Official and CEO Poverty Rates, 2005-2014",
        fontColor: '#05237F'
      },
      scales: {
        ticks: {
          fontColor: 'rgba(5, 35, 127, 1)'
        },
        yAxes: [{
          gridLines: {
            color: 'rgba(255, 255, 255, 0.5)'
          },
          ticks: {
            beginAtZero: false,
            fontColor: 'rgba(5, 35, 127, 1)'
          }
        }],
        xAxes: [{
          gridLines: {
            fontColor: '#fff',
            color: 'rgba(255, 255, 255, 0.5)'
          },
          ticks: {
            show: true,
            fontColor: 'rgba(5, 35, 127, 1)',
            beginAtZero:false
          }
        }]
      }
    }
  });

  var chart2Constructor = new Chart(chart2, {
    type: 'bar',
    data: {
      labels: ["2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014"],
      datasets: [
        {
          label: '% 18 - 64 Year-Olds Employed',
          borderColor: '#fff',
          backgroundColor: "rgba(251, 199, 0, .89)",
          data: [67.0, 68.7, 69.3, 70.8, 68.2, 66.4, 67.0, 68.0, 68.4, 69.4],
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

  var chart3Constructor = new Chart(chart3, {
    type: 'bar',
    data: {
      labels: ["2010", "2011", "2012", "2013", "2014"],
      datasets: [
        {
          label: 'At Least 50',
          borderColor: '#fff',
          backgroundColor: 'rgb(23, 85, 210)',
          data: [56.3, 56.3, 57.8, 57.5, 58.6],
          fill: true
        },
        {
          label: 'Less then 50',
          borderColor: '#fff',
          backgroundColor: '#2C99C4',
          data: [16.5, 16.6, 15.9, 16.4, 16.1],
          fill: true
        },
        {
          label: 'No Weeks',
          borderColor: '#fff',
          backgroundColor: '#86D6F4',
          data: [27.3, 27.0, 26.4, 26.0, 25.3],
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: "Weeks Worked in Prior 12 Months, 2010-2014",
        fontColor: '#05237F'
      },
      scales: {
        yAxes: [{
          stacked: true,
          gridLines: {
            color: 'rgba(255, 255, 255, 0.5)'
          },
          ticks: {
            beginAtZero:false,
            fontColor: 'rgb(5, 35, 127)'
          }
        }],
        xAxes: [{
          ticks: {
            fontColor: 'rgb(5, 35, 127)'
          },
          stacked: true,
          gridLines: {
            fontColor: '#fff',
            color: 'rgba(255, 255, 255, 0.5)'
          }
        }]
      }
    }
  });

  var chart4Constructor = new Chart(chart4, {
    type: 'line',
    data: {
      labels: ["2008", "2009", "2010", "2011", "2012", "2013", "2014"],
      datasets: [
        {
          label: 'Official Income',
          borderColor: '#fff',
          backgroundColor: 'rgba(156, 39, 176, .9)',
          data: [100, 96.8, 91.9, 92.2, 92.0, 93.8, 97.2],
          fill: true
        },
        {
          label: 'CEO Income',
          borderColor: '#fff',
          backgroundColor: 'rgba(0, 150, 136, .9)',
          data: [100, 99.8, 99.9, 102.1, 102.2, 103.5, 105.7],
          fill: true
        },
        {
          label: 'CEO Threshold',
          borderColor: '#fff',
          backgroundColor: 'rgba(3, 169, 244, .9)',
          data: [100,101.5, 104.3, 107.4, 107.7, 108.1, 109.6],
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: "Comparison of Income Trends with the CEO Poverty Threshold, 2008-2014",
        fontColor: '#fff'
      },
      scales: {
        yAxes: [{
          gridLines: {
            color: 'rgba(255, 255, 255, 0.5)'
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
            color: 'rgba(255, 255, 255, 0.5)'
          }
        }]
      }
    }
  });

});
