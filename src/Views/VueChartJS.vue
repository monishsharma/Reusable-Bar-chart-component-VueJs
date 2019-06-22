<template>
  <section class="container">
    <h1>Chart bar</h1>
    <div class="columns">
      <div class="column">
        <h3>Line Chart</h3>
        <!-- Line Chart reusable component -->
        <line-chart :chartdata="chartData" :options="chartOptions"></line-chart>
      </div>
      <div class="column">
        <h3>Bar Chart</h3>
        <!-- bar Chart reusable component -->
        <bar-chart :chartdata="chartData" :options="chartOptions"></bar-chart>
      </div>
    </div>
  </section>
</template>

<script>
import LineChart from "@/components/LineChart";
import BarChart from "@/components/BarChart";
export default {
  name: "VueChartJS",
  components: {
    LineChart,
    BarChart,
  },
  data() {
    return {
      chartData: {
        //Data to be represented on x-axis
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#5550FD",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#5550FD",
            //Data to be represented on y-axis
            data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
          }
        ]
      },
      //Chart.js options that controls the appearance of the chart
      chartOptions: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    };
  }
};
</script>