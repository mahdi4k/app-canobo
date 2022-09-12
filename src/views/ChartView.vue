<template>
  <div>
    <div class="borderTopBottom">
      <div class="container">
        <div class="header">
          <div class="d-flex align-items-center">
            <img class="logo-section" :src="simpleMicrogenetics2" alt="" />
            <span class="ms-3">GEO-A</span>
          </div>
          <div class="input-section py-5">
            <div class="position-relative">
              <input placeholder="Search Results" class="runName runNameSearch" type="text">
              <span class="runInputIcon"><img :src="search" alt=""></span>
            </div>
          </div>
        </div>
        <div class="accordian-section">
          <div class="header px-3 mb-4">
            <h1 class="fw-bolder">Quality Check </h1>
            <span class="cursor-pointer" @click="toggleAccordian"><img :class="showAccordian ? '' : 'rotate-img'"
                :src="arrow" alt=""></span>
          </div>
          <div :class="showAccordian ? 'showAccrodian' : ''" class="content-section">
            <div class="row mx-0">
              <div class="col-9 left-section">
                <div class="row">
                  <div class="col-5">

                    <div>
                      <span>Data Type</span>
                      <span class="fw-bolder">Microarray </span>
                    </div>
                    <div>
                      <span>Platform:</span>
                      <span class="fw-bolder">GPL 95</span>
                    </div>
                    <div>
                      <span>Matched probs:</span>
                      <span class="fw-bolder">63745</span>
                    </div>
                  </div>
                  <div class="col-5 ps-8">
                    <div>
                      <span>Samples Size: </span>
                      <span class="fw-bolder">36 </span>
                    </div>
                    <div>
                      <span>Batch effect removal::</span>
                      <span>(Comming Soon)</span>
                    </div>
                    <div>
                      <span>Dataset ID:</span>
                      <span class="fw-bolder">GSE 2345884</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-3 ps-4">
                <div class="right-section">
                  <span>Cohorts:</span>
                  <div class="d-flex flex-res  mt-2">
                    <div class="box-sections">
                      <span class="blue-dot"></span>
                      <span>Tumor</span>
                    </div>
                    <div class="box-sections ms-4">
                      <span class="red-dot"></span>
                      <span>Normal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="step-sections">
          <span class="active">Principal component analysis</span>
          <span>Dot Plot</span>
          <span>Heatmap</span>
          <span>Bar Plot</span>
          <span>Density Plot</span>
        </div>
      </div>
      <highcharts :options="chartOptions"></highcharts>
    </div>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";
import simpleMicrogenetics2 from "@/assets/simpleMicrogenetics2.svg";
import search from '@/assets/search.svg';
import arrow from '@/assets/arrow.svg';

export default {
  data() {
    return {
      simpleMicrogenetics2,
      search,
      arrow,
      showAccordian: false,
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
            return `<div class='chart-box '>
            <div class='d-flex flex-column justify-content-between'>
              <div><span>Brain metastasis 45</span></div>
              <div><span>GSE126649</span></div>
            </div>
            <span>CD34 Cohort</span>
            <span>PC1 : -0.0987</span>
            <div class='d-flex justify-content-between'>
            <div><span>PC2 : -0.9984</span></div>
            <button class="remove-button" onclick="myFunction()">Click me</button>
            </div>
            </div>
            </div>`;
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
    toggleAccordian() {
      this.showAccordian = !this.showAccordian
    }
  },
  created() {
    window.myFunction = this.myFunction;
  },
};
</script>

<style lang="scss">
.header {
  justify-content: space-between;
  align-items: center;
  display: flex;

  .logo-section {
    width: 50px;
    height: 50px;
  }

  span {
    font-size: 41px;
  }
}

.accordian-section {
  padding: 1.5rem;
  border-radius: 15px;
  border: 1px solid #DBDBDB;

  .content-section {
    font-size: 28px;

    .left-section {
      padding: 30px 40px 20px 60px;
      background-color: #F7F7F7;
      border-radius: 20px;
      border: 1px solid #DBDBDB;

      .col-5 {
        div {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
      }
    }

    .right-section {
      padding: 15px 30px 90px 30px;
      background-color: #F7F7F7;
      border-radius: 20px;
      border: 1px solid #DBDBDB;

      .box-sections {
        padding: 2px 22px;
        background-color: white;
        border-radius: 30px;
        display: flex;
        align-items: center;

        .blue-dot {
          width: 18px;
          height: 18px;
          background-color: #00BFC4;
          border-radius: 100%;
          margin-right: 15px;
        }

        .red-dot {
          width: 18px;
          height: 18px;
          background-color: #F8766D;
          border-radius: 100%;
          margin-right: 15px;
        }
      }

      @media (max-width:1560px) {
        .flex-res {
          flex-wrap: wrap;

          .ms-4 {
            margin-top: 20px;
            margin-left: 0 !important;
          }
        }
      }
    }
  }

  .ps-8 {
    margin-left: 9rem;

    @media (max-width:1600px) {
      margin-left: 6rem;
    }
  }
}

.showAccrodian {
  display: none;
}

.rotate-img {
  transform: rotate(180deg);
}

.step-sections {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;

  span {
    padding: 10px 93px;
    font-size: 28px;
    border-radius: 20px;
    background-color: #F5F5F5;
    color: #919191;

    &.active {
      background-color: white;
      border: 3px solid #E52620;
      color: black;
    }
  }
}

.highcharts-tooltip {
  width: 460px;
}

.highcharts-tooltip span {
  height: auto;
width: 460px;
  padding: 15px;
  white-space: normal !important; // add this line...
}

.highcharts-tooltip-box {
  fill: rgb(255, 255, 255);
  stroke: #B7B7B7;

}

.chart-box {
  font-size: 25px;
  font-family: adobe-arabic !important;
}
</style>