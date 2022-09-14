<template>
    <div class="borderTopBottom">
        <div class="container">
            <Header2 />
            <Accordian />
            <Selection />
            <div class="row">
                <div class="col-3 pe-0">
                    <div class="left-sidebar">
                        <div class="header-section mb-3 d-flex justify-content-between">
                            <h2>Filename:</h2>
                            <span><img :src="pen" alt=""></span>
                        </div>
                        <div class="fileName mb-4">
                            <span>BoxPlot_non_Normalized</span>
                        </div>
                        <div class="first-radio-selection">
                            <h3>Normalization Method:</h3>
                            <div class="ps-4 pt-4">
                                <span class="d-flex pb-3 align-items-center">
                                    <input type="radio" v-model="first" value="0">
                                    <span class="ms-3">Linear Scaling</span>
                                </span>
                                <span class="d-flex pb-3 align-items-center">
                                    <input type="radio" v-model="first" value="1">
                                    <span class="ms-3">Clipping</span>
                                </span>
                                <span class="d-flex pb-3 align-items-center">
                                    <input type="radio" v-model="first" value="2">
                                    <span class="ms-3">Log Scaling</span>
                                </span>
                                <span class="d-flex pb-3 align-items-center">
                                    <input type="radio" v-model="first" value="2">
                                    <span class="ms-3">Z-score</span>
                                </span>

                            </div>
                        </div>
                        <div class="second-radio-selection">
                            <h3>Color Scheme</h3>
                            <div class="ps-4 pt-4">
                                <span class="d-flex pb-3 align-items-center">
                                    <input type="radio" v-model="second" value="0">
                                    <span class="ms-3">Black and White</span>
                                </span>
                                <span class="d-flex pb-3 align-items-center">
                                    <input type="radio" v-model="second" value="1">
                                    <span class="ms-3">Analogous</span>
                                </span>
                                <span class="d-flex pb-3 align-items-center">
                                    <input type="radio" v-model="second" value="2">
                                    <span class="ms-3">Teradic</span>
                                </span>
                                <span class="d-flex pb-3 align-items-center">
                                    <input type="radio" v-model="second" value="2">
                                    <span class="ms-3">Color Blind</span>
                                </span>
                            </div>
                        </div>
                        <div>
                            <select-box title="Export the Plot" value="select the format" :list="listDataValueType" />
                        </div>
                        <div>
                            <button class="download mt-4">Download</button>
                        </div>
                        <div>
                            <button class="Re-Run">Re-Run</button>
                        </div>
                    </div>

                </div>
                <div class="col-9">
                    <div class="chart-img">
                        <img :src="dotPlot" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import Accordian from '@/components/Accordian.vue';
import Selection from '@/components/Selection.vue';
import Header2 from "@/components/Header2.vue";
import pen from "@/assets/pen.svg";
import dotPlot from "@/assets/dotPlot.png";
import SelectBox from "@/components/SelectBox.vue";


export default {
    components: { Header2, Accordian, Selection, SelectBox },
    data() {
        return {
            pen,
            dotPlot,
            first: '',
            second: '',
            listDataValueType: ["PNG", "JPG", "TIFF", "SVG", "PDF"],

        }
    }
}
</script>

<style lang="scss">
.left-sidebar {
    border: 4px solid #D4D4D4;
    border-radius: 14px;
    padding: 35px;

    .header-section {
        h2 {
            font-size: 33px;
            font-weight: 900;
        }
    }

    .fileName {
        font-size: 28px;
        padding: 8px;
        border: 2px solid #D4D4D4;
        border-radius: 11px;

    }

    .first-radio-selection,
    .second-radio-selection {
        h3 {
            font-size: 33px;
            font-weight: 900;
        }

        .ps-4 {
            padding-left: 2.3rem !important;
        }

        .pt-4 {
            padding-top: 1.3rem !important;
        }

        div {
            display: flex;
            flex-direction: column;
            font-size: 33px;

            input {
                -ms-transform: scale(1.5);
                /* IE 9 */
                -webkit-transform: scale(1.5);
                /* Chrome, Safari, Opera */
                transform: scale(1.5);
                accent-color: #E52620
            }

            .ms-3 {
                margin-left: 1.3rem !important;
            }

        }

    }

    .aselect {
        width: auto !important;

        .title {
            font-weight: 800;
        }
    }

}

.download {
    background-color: black;
    border: 0;
    border-radius: 11px;
    color: white;
    padding-left: 110px;
    padding-right: 110px;
    padding: 10px 110px;
    font-size: 30px;
}

.Re-Run {
    background-color: #E52620;
    border: 0;
    border-radius: 11px;
    color: white;
    padding-left: 110px;
    padding-right: 110px;
    padding: 10px 110px;
    font-size: 30px;
    width: 100%;
    margin-top: 100px;
}
</style>