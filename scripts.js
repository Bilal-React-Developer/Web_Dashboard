var ctx = document.querySelector('.statisticsChart').getContext('2d')

var statistics = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
    datasets: [
      {
        label: 'Series 1', // Name the series
        data: [500, 50, 424, 50, 544, 47, 1811], // Specify the data values array
        fill: true,
        borderColor: '#2196f3', // Add custom color border (Line)
        backgroundColor: '#f50bb3', // Add custom color background (Points and Fill)
        borderWidth: 1, // Specify bar border width
      },
      {
        label: 'Series 2', // Name the series
        data: [1288, 150, 699, 242, 1417, 75, 2000], // Specify the data values array
        fill: true,
        borderColor: '#4CAF50', // Add custom color border (Line)
        backgroundColor: '#5099d1', // Add custom color background (Points and Fill)
        borderWidth: 1, // Specify bar border width
      },
    ],
  },
  options: {
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
  },
})
var ctx = document.querySelector('.repeated').getContext('2d')

var statistics = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
    datasets: [
      {
        label: 'video 1', // Name the series
        data: [20, 30, 10, 18, 47, 35, 28], // Specify the data values array
        fill: false,
        borderColor: '#f50bb3', // Add custom color border (Line)
        backgroundColor: '#f50bb3', // Add custom color background (Points and Fill)
        borderWidth: 2, // Specify bar border width
      },
      {
        label: 'Video 2', // Name the series
        data: [30, 37, 17, 47, 39, 44, 31], // Specify the data values array
        fill: false,
        borderColor: '#5099d1', // Add custom color border (Line)
        backgroundColor: '#5099d1', // Add custom color background (Points and Fill)
        borderWidth: 2, // Specify bar border width
      },
    ],
  },
  options: {
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  },
})

// hide and show toggle

// $(document).ready(function () {
//   $('#hide_show').click(function () {
//     $('#calendar-to-hide_show').toggleClass('hide-sec')
//     $('#calendar_area').toggleClass('col-md-1')
//     $('#move_left_on_toggle').toggleClass('col-md-10')
//   })
// })

// hide and show toggle
