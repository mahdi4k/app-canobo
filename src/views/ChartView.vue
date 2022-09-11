<template>
  <div>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";

export default {
  data() {
    return {
      highcharts: Chart,
      chartOptions: {
        chart: {
          type: "scatter",
          zoomType: "xy",
        },

        subtitle: {
          HTML: true,
        },

        xAxis: {
          startOnTick: true,
          endOnTick: true,
          showLastLabel: true,
          labels: {
            format: "{text}%",
          },
        },
        yAxis: {
          labels: {
            format: "{text}%",
          },
        },
        tooltip: {
          useHTML: true,
          formatter: function () {
            return `<button onclick="myFunction()">Click me</button>`;
          },
          style: {
            pointerEvents: "auto",
          },
        },
        plotOptions: {
          scatter: {
            marker: {
              radius: 5,
              states: {
                hover: {
                  enabled: true,
                  lineColor: "rgb(100,100,100)",
                },
              },
            },
            states: {
              hover: {
                marker: {
                  enabled: false,
                },
              },
            },
          },
        },
        series: [
          {
            name: "2011-2020",
            data: [
              [1.4, 0.4],
              [2.4, 5.3],
              [2.9, 4.9],
              [1.9, 3.4],
              [3.6, 1.9],
              [2.1, 3],
              [2, 4],
              [2, 5.6],
              [0.6, 6.3],
              [1.2, 6.3],
            ],
          },
        ],
      },
    };
  },

  methods: {
    myFunction() {
      this.chartOptions.series = [{ data: [2, 3, 5] }];
    },
  },
  created() {
    window.myFunction = this.myFunction;
  },
};
</script>

<style>
</style>