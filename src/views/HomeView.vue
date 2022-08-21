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
        <div class="header flex-wrap d-flex">
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
              <div @click="activeClass" class=" tab-item raw-tab me-3 active">
                <span class="name">RAW</span>
                <span class="title">Upload the data manually</span>
              </div>
              <div @click="activeClass" class="tab-item api-tab">
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
            <div data-bs-toggle="modal" data-bs-target=".bd-example-modal-lg">
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
            <RangeSlider />
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
        <div class="dropzone-section">
          <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
        </div>
      </div>
      <div class="bottom-section">
        <div class="left">
          <span class="note">NOTE</span>
          <span class="text">By Pressing “Start Analysis” you will accept all terms and conditions </span>
        </div>
        <div class="right">
          <button class="demo">Demo Run</button>
          <button class="analysis">Start Analysis</button>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content home-modal">
          <div class="img-modal">
            <img :src="modal" alt="">
          </div>
          <div class="title-sections">
            <div>
              <h1>How’s This Work?</h1>
            </div>
            <div class="title-section">
              <div>
                <span class="head-title blue">Data Type</span>
                <p class="prev-text">
                  There are two key contemporary techniques in the field: microarrays, which quantify a set of
                  predetermined sequences, and RNA-Seq, which uses high-throughput sequencing to record all transcripts.
                </p>
              </div>

              <div>
                <span class="head-title green">Data Value Type</span>
                <p class="prev-text">
                  There are two forms of transcriptome data, Raw and Normalized. It’s very important to know the type
                  value of the detail for further analyzes and even better if you know from which method the data were
                  normalized
                </p>
              </div>

              <div>
                <span class="head-title brown">Gene Level</span>
                <p class="prev-text">
                  Gene Set Enrichment Analysis (GSEA) has been developed recently to capture changes in the expression
                  of
                  pre-defined sets of genes. A gene-set-level statistic is aggregated by these gene-levelstatistics.
                  Aggregation approaches can be sum, mean, median of the gene-level statistics <span
                    class="text-blue">(Jiang and
                    Gentleman,2007)</span>
                </p>
              </div>

              <div>
                <span class="head-title blue">Gene Annoutation</span>
                <p class="prev-text">
                  An accurate mapping of the array probes is essential to generate reliable biological findings.
                  However,
                  manufacturers of the microarray platforms typically provide incomplete and outdated annotation tables,
                  which often rely on older genome and transcriptome versions that differ substantially from up-to-date
                  sequence databases. We provide an up-to-date and complete annotation file for almost every platforms
                  for
                  biotechnology companies.
                </p>
              </div>
              <div>
                <span class="head-title red">Batch effect Removal (For Metadata):</span>
                <p class="prev-text">
                  This part is essential for me to analyzes and using more than one series matrix file views combat from
                  SBA module in our language for neutralizing the batch effect for integrated data since unfortunately
                  this feature is not available now and will be available in mid 2023.
                </p>
              </div>
              <div>
                <span class="head-title light">Library Usage :</span>
                <p class="prev-text">
                  You several libraries for analyzing the gene expression however you can only use the limma for
                  MicroArray datasets and the rest of the library that we provided is for RNA-Seq technology. you can
                  choose your own preferred library but the system will automatically suggest you the best library feet
                  to
                  your data sets
                </p>
              </div>
              <div>
                <span class="head-title green">Upload Files</span>
                <p class="prev-text">
                  In this section you have to only upload this series matrix of the expression file and TXT or CSV or GZ
                  formants. currently it can only analyze a single dataset but in future and you can analyze METADATA
                  which include up to five data sets for microbarray or are in a sec in the same time.
                </p>
              </div>
            </div>
          </div>
          <div class="close-icon cursor-pointer">
            <img :src="close" alt="">
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
import close from "@/assets/close.svg";
import close2 from "@/assets/close2.svg";
import modal from "@/assets/modal.png";
import SelectBox from '@/components/SelectBox.vue';
import RangeSlider from "@/components/RangeSlider.vue";
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import uploadfile from "@/assets/uploadfile.svg";

export default {
  components: { SelectBox, RangeSlider, vueDropzone: vue2Dropzone },

  data() {
    return {
      simpleMicrogenetics2,
      inputIcon,
      check,
      uploadfile,
      question,
      close,
      close2,
      modal,
      isMobile: false,
      value: 'Please choose an item',
      list: ["Orange", "Apple", "Kiwi", "Lemon", "Pineapple"],
      value2: 'Please choose an item',
      list2: ["Orange", "Appl2e", "Ki2wi", "Le2mon", "Pineap2ple"],
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        thumbnailWidth: 150,
        headers: { "My-Awesome-Header": "header value" },
        addRemoveLinks: true,
        uploadMultiple: false,
        dictDefaultMessage: "Upload File",
        init: function () {
          this.on("processing", function (file) {
            document.querySelector('.dz-remove').innerHTML = ''
            document.querySelector('.dz-size').innerHTML = ''
          });
          this.on("complete", function (file) {
            document.querySelector('.dz-remove').innerHTML = ''
            document.querySelector('.dz-size').innerHTML = ''
          });
        },

      }
    };

  },
  mounted() {
    this.mobileUser()
  },
  methods: {
    mobileUser() {
      this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },
    activeClass(e){
      console.log(e);
    }
  }
};
</script>
<style lang="scss">
.ml-10 {
  margin-left: 13%;
}

.text-blue {
  color: #2082E5;
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

          @media (max-width:1550px) {
            width: 380px;
          }
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

        @media (max-width:1200px) {
          border-bottom: unset;
        }

        .tab-item {
          padding: 10px 20px;
          border: 2px solid #BEBEBE;
          background-color: #F7F7F7;
          border-radius: 10px;
          width: 460px;
          cursor: pointer;

          @media (max-width:1550px) {
            width: 390px;
            white-space: nowrap;
          }

          @media (max-width:1400px) {
            width: 317px;
            white-space: nowrap;
          }

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

          &.active {
            border: 2px solid #E52620;

            .title {
              font-size: 1.5rem;
              color: #343434;
            }

            .name {
              background-color: #E52620;
              color: white;
            }
          }
        }
      }
    }

    .section-style {
      .header {
        display: flex;
        justify-content: space-between;
        max-width: 1415px;
        margin-left: auto;
        margin-right: auto;
        border-bottom: 1px solid #ccc;

        .title {
          font-size: 40px;
        }
      }

      .select-boxes {
        max-width: 1252px;
      }
    }
  }
}

#dropzone {
  max-width: 1406px;
  margin-left: auto;
  margin-right: auto;
  background-color: #F7F7F7;
  border: unset;
  border-radius: 10px;
  margin-top: 5%;
  position: relative;
  min-height: 280px;

  &::after {
    content: "";
    background-image: url('~@/assets/uploadfile.svg');
    background-repeat: no-repeat;
    width: 56px;
    height: 62px;
    display: block;
    position: absolute;
    right: 1%;
    top: 10%;
  }
}

.dz-details {
  display: flex !important;
  background-color: #E8E8E8 !important;
  border-radius: 10px !important;
}

.dz-preview {
  width: 409px !important;
  min-height: 69px !important;
  height: 60px !important;
  border-radius: 10px;
  min-width: 513px !important;
}

.dropzone-section {}

.dz-remove {
  background-image: url('~@/assets/remove.svg');
  background-repeat: no-repeat;
  right: 22px;
  padding: 22px !important;
  margin: 0 !important;
  border: unset !important;
  background-position-x: center;
  background-position-y: center;
  padding-bottom: 23px !important;
  bottom: 17% !important;
  border-radius: 7px;
  background-color: #D9D9D9;
}

.dz-filename {
  color: black !important;
  font-size: 13pt;
}

.dz-size {
  background-image: url('~@/assets/file.svg');
  background-repeat: no-repeat;
  display: flex;
  width: 33px;
  height: 28px;
  object-fit: contain;
  position: relative;
  bottom: 5px;
}

.dz-default {
  text-align: left !important;
  margin-top: 0 !important;
  color: black;
  font-size: 25pt;
  font-family: adobe-arabic !important;
  display: block !important;
  margin-bottom: 3% !important;
}

.bottom-section {
  margin-top: 8%;
  margin-bottom: 5%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  .left {
    display: flex;
    flex-direction: column;
    font-size: 30px;

    .note {
      color: #E52620;

    }

  }

  .right {
    margin-bottom: 8px;

    button {
      border: 1px solid #E52620;
      border-radius: 10px;
      font-size: 30px;
    }

    .analysis {
      background-color: #E52620;
      color: white;
      padding: 3px 80px;
      margin-left: 20px;
    }

    .demo {
      background-color: #ffffff;
      color: #E52620;
      padding: 3px 60px;
    }
  }

  @media (max-width:1400px) {
    .right {
      button {

        font-size: 25px;
      }

      .analysis {
        padding: 3px 60px;
      }

      .demo {
        padding: 3px 40px;
      }
    }
  }
}

.modal-dialog {
  .modal-content {
    .close-icon {
      text-align: center;
      padding-bottom: 2.8rem;
    }

    .img-modal {
      text-align: center;
      margin-top: 30px;
    }

    .title-sections {
      padding-left: 5rem;
      padding-right: 5rem;

      h1 {
        font-size: 55px;
        font-weight: 700;
        padding-top: 25px;
        padding-bottom: 25px;
      }

      .title-section {
        padding-left: 3.9rem;

        .head-title {
          font-size: 35px;
          color: black;
          font-weight: 700;
          position: relative;

          &::before {
            content: "";
            width: 28px;
            height: 10px;
            border-radius: 30px;
            display: block;
            position: absolute;
            left: -38px;
            bottom: 14px;
          }

          &.blue {
            &::before {
              background-color: #22258C;
            }
          }

          &.green {
            &::before {
              background-color: #3AB446;
            }
          }

          &.brown {
            &::before {
              background-color: #BE402E;
            }
          }

          &.red {
            &::before {
              background-color: #F63912;
            }
          }

          &.light {
            &::before {
              background-color: #6065BE;
            }
          }

          &.green {
            &::before {
              background-color: #12F6A7;
            }
          }
        }

        .prev-text {
          font-size: 33px;
          line-height: 1.2;
          margin-bottom: 3rem;
        }
      }
    }
  }

  @media (min-width: 1200px) {
    &.modal-xl {
      min-width: 1451px !important;
    }
  }
}
</style>