import React, { useEffect } from "react";


const Home = () => {
  useEffect(() => {
    // chart 1
    var options_1 = {
      series: [13, 43, 22],
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Balance", "Expense", "Credit Loan"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };
    var chart_1 = new ApexCharts(document.querySelector("#pie-chart"), options_1);
    chart_1.render();
// chart2
    var options = {
      series: [{
          name: 'Income',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }, {
          name: 'Expense',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      }, {
          name: 'Transfer',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }],
      chart: {
          type: 'bar',
          height: 350
      },
      plotOptions: {
          bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded'
          },
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
      },
      xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      yaxis: {
          title: {
              text: '$ (thousands)'
          }
      },
      fill: {
          opacity: 1
      },
      tooltip: {
          y: {
              formatter: function (val) {
                  return "$ " + val + " thousands"
              }
          }
      }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
  return()=>{
    chart_1.destroy()
    chart.destroy()

  }
  }, []);

  return (
    
    <>
      <div className="title-group mb-3">
              <h1 className="h2 mb-0">Overview</h1>
              <small className="text-muted">Hello Thomas, welcome back!</small>
            </div>
            <div className="row my-4">
              <div className="col-lg-12 col-12">
                <div className="custom-block bg-white">
                  <h5 className="mb-4">History</h5>
                  <div id="pie-chart" />
                </div>
              </div>
              <div className="col-lg-12 col-12">
                <div className="custom-block bg-white">
                  <div id="chart" />
                </div>
              </div>
            </div>
    </>
  );
};

export default Home;
