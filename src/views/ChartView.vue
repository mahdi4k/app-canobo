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
              <input
                placeholder="Search Results"
                class="runName runNameSearch"
                type="text"
              />
              <span class="runInputIcon"><img :src="search" alt="" /></span>
            </div>
          </div>
        </div>
        <div class="accordian-section">
          <div class="header px-3 mb-4">
            <h1 class="fw-bolder">Quality Check</h1>
            <span class="cursor-pointer" @click="toggleAccordian"
              ><img
                :class="showAccordian ? '' : 'rotate-img'"
                :src="arrow"
                alt=""
            /></span>
          </div>
          <div
            :class="showAccordian ? 'showAccrodian' : ''"
            class="content-section"
          >
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
                  <div class="d-flex flex-res mt-2">
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
        <div class="step-sections mt-5">
          <span class="active">Principal component analysis</span>
          <span>Dot Plot</span>
          <span>Heatmap</span>
          <span>Bar Plot</span>
          <span>Density Plot</span>
        </div>
        <div class="chart-section p-4">
          <highcharts :options="chartOptions"></highcharts>
        </div>
        <div class="alert-message">
          <img class="me-2" :src="attention" alt="" />
          <p>
            You can use your mouse to interact with plot, every sample could be
            either track, monotor or even trimmed
          </p>
        </div>
        <div class="row">
          <div class="col-6">
            <div class="export-section">
              <p>Export the Plot</p>
              <div class="d-flex">
                <div class="d-flex flex-column">
                  <div class="d-flex align-items-center justify-content-between">
                    <p class="mb-0 select-title">Filename:</p>
                    <img class="pen-icon" :src="pen" alt="" />
                  </div>
                  <input class="" type="text" />
                </div>
                <div>
                  <p class="mb-0 select-title">Export as:</p>
                  <select-box
                    title=""
                    value="value"
                    :list="listDataValueType"
                  />
                  <button class="download"></button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div>System Logs</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";
import simpleMicrogenetics2 from "@/assets/simpleMicrogenetics2.svg";
import search from "@/assets/search.svg";
import arrow from "@/assets/arrow.svg";
import attention from "@/assets/attention.svg";
import pen from "@/assets/pen.svg";
import SelectBox from "@/components/SelectBox.vue";

export default {
  components: { SelectBox },
  data() {
    return {
      simpleMicrogenetics2,
      search,
      arrow,
      pen,
      attention,
      showAccordian: false,
      highcharts: Chart,
      value: "",
      listDataValueType: ["png", "jpg"],
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
        },
        yAxis: {},
        tooltip: {
          useHTML: true,
          formatter: function () {
            return `<div class='chart-box '>
            <div class='d-flex justify-content-between'>
              <div><span>Brain metastasis 45</span></div>
              <div><span>GSE126649</span></div>
            </div>
            <span>CD34 Cohort</span>
            <span>PC1 : -0.0987</span>
            <div class='d-flex justify-content-between'>
            <div><span>PC2 : -0.9984</span></div>
            <button class="remove-button" onclick="myFunction()">Remove</button>
            </div>
            </div>
            </div>`;
          },
          style: {
            pointerEvents: "auto",
          },
          hideDelay: 5000,
        },
        plotOptions: {
          series: {
            stickyTracking: false,
          },
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
            name: "normal",
            data: [
              [-0.1, 0.4],
              [0, 0.3],
              [0.2, 0.3],
              [0.9, 0.4],
              [0.6, 0.9],
              [0.1, 0.2],
              [0.2, 0.1],
              [0.2, 0.2],
              [0.7, 0.3],
              [0.2, 0.3],
            ],
          },
          {
            name: "tumor",
            data: [
              [-0.2, 0.23],
              [0, 0.27],
              [0.1, 0.15],
              [0.4, 0.23],
              [0.33, 0.1],
              [0.52, 0.11],
              [0.12, 0.14],
              [0.16, 0.16],
              [0.13, 0.13],
              [0.19, 0.19],
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
      this.showAccordian = !this.showAccordian;
    },
  },
  created() {
    window.myFunction = this.myFunction;
  },
};
</script>

<style scoped lang="scss">
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
  border: 3px solid #dbdbdb;

  .content-section {
    font-size: 28px;

    .left-section {
      padding: 30px 40px 20px 60px;
      background-color: #f7f7f7;
      border-radius: 20px;
      border: 2px solid #dbdbdb;

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
      background-color: #f7f7f7;
      border-radius: 20px;
      border: 2px solid #dbdbdb;

      .box-sections {
        padding: 2px 22px;
        background-color: white;
        border-radius: 30px;
        display: flex;
        align-items: center;

        .blue-dot {
          width: 18px;
          height: 18px;
          background-color: #00bfc4;
          border-radius: 100%;
          margin-right: 15px;
        }

        .red-dot {
          width: 18px;
          height: 18px;
          background-color: #f8766d;
          border-radius: 100%;
          margin-right: 15px;
        }
      }

      @media (max-width: 1560px) {
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

    @media (max-width: 1600px) {
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
    background-color: #f5f5f5;
    color: #919191;

    &.active {
      background-color: white;
      border: 3px solid #e52620;
      color: black;
    }
  }
}
</style>
<style lang="scss">
.highcharts-tooltip {
  width: 460px;
}

.highcharts-tooltip span {
  height: auto;
  width: 460px;
  white-space: normal !important;
}

.highcharts-tooltip-box {
  fill: rgb(255, 255, 255);
  stroke: #b7b7b7;
}

.chart-box {
  font-size: 25px;
  font-family: adobe-arabic !important;
  display: flex;
  flex-direction: column;
  padding: 15px;
}
.remove-button {
  background-color: #e52620;
  color: white;
  border: 0;
  border-radius: 10px;
  padding: 5px 20px;
}
.chart-section {
  margin-top: 20px;
  border: 4px solid #d4d4d4;
  border-radius: 15px;
}
.alert-message {
  margin-top: 30px;
  display: flex;
  background-color: #f0f0f0;
  justify-content: center;
  align-items: center;
  border: 3px solid #d4d4d4;
  border-radius: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  p {
    margin: 0;
    font-size: 32px;
    color: #656565;
  }
}
.export-section {
  .pen-icon {
    width: 42px;
    height: 42px;
  }
  input{
    height: 60px;
    font-size: 25px;
    border-radius: 8px;
    border: 2px solid #BABABA;
  }
  .select-title{
    font-size: 30px;
  }
}
</style>