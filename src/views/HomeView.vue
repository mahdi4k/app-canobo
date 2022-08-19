<template>
  <div class="home">
    <div class="container home-section">
      <div class="col-section">
        <div class="header">
          <img :src="simpleMicrogenetics2" alt="" />
          <span class="ms-3">Express-A</span>
        </div>
        <div class="description">
          <span>A modified platform to analyze the microarray expression data from GEO database in a
            modern and smart approach which can trim the principal component analysis results as well as custom volcano
            plots
            and lastly Enrich analyzes based on DEGs results. This package will be online in mid 2023.</span>
        </div>
      </div>
      <div class="form-section pt-4 ps-1">
        <div class="header d-flex">
          <div class="input-section pe-5 pb-5">
            <p class="mb-2">Please Enter your run name</p>
            <div class="position-relative">
              <input class="runName" type="text">
              <span class="runInputIcon"><img :src="inputIcon" alt=""></span>
            </div>
          </div>
          <div class="tab-section ps-4">
            <p class="mb-2">Method</p>
            <div class="d-flex">
              <div class=" tab-item raw-tab me-3">
                <span class="name">RAW</span>
                <span class="title">Upload the data manually</span>
              </div>
              <div class="tab-item api-tab">
                <span class="name">API</span>
                <span class="title">Use GEO Database</span>
              </div>
            </div>
          </div>
        </div>
        <div class="section-style Annotations pt-5">
          <div class="header d-flex justify-content-between align-items-center">
            <div>
              <span class="title me-3">Annotations</span>
              <img :src="check" alt="">
            </div>
            <div>
              <img :src="question" alt="">
            </div>
          </div>
          <div class="d-flex flex-wrap mx-auto select-boxes">
            <select-box title="Data Value Type:" :value="value" :list="list" />
            <select-box class="mx-5" title="Data Type:" :value="value2" :list="list2" />
            <select-box title="Gene Level::" :value="value2" :list="list2" />
            <select-box class="me-5" size="xl" title="Gene Level::" :value="value2" :list="list2" />
            <select-box title="Gene Level::" :value="value2" :list="list2" />
          </div>
        </div>
        <div class="section-style Filtering pt-5">
          <div class="header d-flex justify-content-between align-items-center">
            <div>
              <span class="title me-3">Filtering</span>
              <img :src="check" alt="">
            </div>
            <div>
              <img :src="question" alt="">
            </div>
          </div>
          <div class="d-flex flex-wrap mx-auto select-boxes">
            <RangeSlider/>
            <select-box class="ml-10" size="lg" title="Data Value Type:" :value="value" :list="list" />
           
          </div>
        </div>
         <div class="section-style Method pt-5">
          <div class="header d-flex justify-content-between align-items-center">
            <div>
              <span class="title me-3">Method</span>
              <img :src="check" alt="">
            </div>
            <div>
              <img :src="question" alt="">
            </div>
          </div>
          <div class="d-flex flex-wrap mx-auto select-boxes">
           <select-box title="Data Value Type:" :value="value" :list="list" />
            <select-box class="mx-5" title="Data Type:" :value="value2" :list="list2" />
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import simpleMicrogenetics2 from "@/assets/simpleMicrogenetics2.svg";
import inputIcon from "@/assets/inputIcon.svg";
import check from "@/assets/check.svg";
import question from "@/assets/question.svg";
import SelectBox from '@/components/SelectBox.vue';
import RangeSlider from "@/components/RangeSlider.vue";

export default {
  components: { SelectBox, RangeSlider },

  data() {
    return {
      simpleMicrogenetics2,
      inputIcon,
      check,
      question,
      isMobile: false,
      value: 'Please choose an item',
			list: ["Orange","Apple","Kiwi", "Lemon", "Pineapple"],
      value2: 'Please choose an item',
			list2: ["Orange","Appl2e","Ki2wi", "Le2mon" , "Pineap2ple"],
    };

  },
  mounted() {
    this.mobileUser()
  },
  methods: {
    mobileUser() {
      this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
  }
};
</script>
<style lang="scss">
.ml-10{
  margin-left: 13%;
}
.home-section {
  padding-top: 80px;

  .col-section {
    display: flex;
    flex-direction: column;

    .header {
      align-items: center;
      display: flex;

      img {
        width: 50px;
        height: 50px;
      }

      span {
        font-size: 41px;
      }
    }

    .description {
      font-size: 33px;
      padding-left: 5px;
      padding-top: 20px;
      max-width: 95%;
    }
  }

  .form-section {
    .input-section {
      border-bottom: 1px solid #ccc;
    }

    .header {
      p {
        font-size: 2.5rem;
      }

      .input-section {
        .runName {
          border: unset;
          background-color: #EFEFEF;
          padding: 7px 10px 7px 40px;
          width: 520px;
          border-radius: 10px;
          font-size: 30px;
        }

        .runInputIcon {
          position: absolute;
          left: 10px;
          top: 15px;

          img {
            width: 20px;
          }

        }
      }

      .tab-section {
        border-bottom: 1px solid #ccc;

        .tab-item {
          padding: 10px 20px;
          border: 2px solid #BEBEBE;
          background-color: #F7F7F7;
          border-radius: 10px;
          width: 460px;

          .name {
            background-color: #707070;
            color: white;
            padding: 2px 15px;
            border-radius: 5px;

          }

          .title {
            font-size: 1.5rem;
            padding-left: 10px;
            padding-right: 30px;
            color: #BEBEBE;
          }
        }
      }
    }
    .section-style{
      .header{
        display: flex;
        justify-content: space-between;
        max-width: 1415px;
        margin-left:auto;
        margin-right: auto;
        border-bottom: 1px solid #ccc;
        .title{
          font-size: 40px;
        }
      }
      .select-boxes{
        max-width: 1252px;
      }
    }
  }
}
</style>