let xValues;
let yValues;
var chart;

function addData() {
  xValues = localStorage.getItem('xValues').split(',');
  yValues = localStorage.getItem('yValues').split(',');
  chart = new Chart("myChart", {

    type: "line",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: "transparent",
        borderColor: "red",
        data: yValues
      },
    ]
    },
  });
};

function addLine() {
  xValues = localStorage.getItem('xValues').split(',');
  yValues = localStorage.getItem('yValues').split(',');

  chart.data.datasets[1] = {
    backgroundColor: "transparent",
    borderColor: "red",
    data: [1,2,3]
  }

  chart.update();
};

addData();