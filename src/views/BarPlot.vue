<template>
    <div class="borderTopBottom">
        <div class="container">
            <Header2 />
            <Accordian />
            <Selection :selected="selected" :greened="greened" />
            <div class="row">
                <div class="col-3 barPlot pe-0">
                    <div class="left-sidebar">
                        <div class="header-section mb-3 d-flex justify-content-between">
                            <h2>Filename:</h2>
                            <span><img :src="pen" alt="" /></span>
                        </div>
                        <div class="fileName mb-4">
                            <span>BoxPlot_non_Normalized</span>
                        </div>
                        <div class="first-radio-selection">
                            <h3>Normalization Method:</h3>
                            <div class="ps-4 pt-4">
                                <span class="d-flex pb-3 align-items-center">
                                    <input @change="radioChange(second, first)" type="radio" v-model.number="first"
                                        value="1" />
                                    <span class="ms-3">Log2</span>
                                </span>
                                <span class="d-flex pb-3 align-items-center">
                                    <input @change="radioChange(second, first)" type="radio" v-model.number="first"
                                        value="2" />
                                    <span class="ms-3">None</span>
                                </span>
                            </div>
                        </div>
                        <div class="second-radio-selection">
                            <h3>Color Scheme</h3>
                            <div class="ps-4 pt-4">
                                <span class="d-flex pb-3 align-items-center">
                                    <input @change="radioChange(second, first)" type="radio" v-model.number="second"
                                        value="1" />
                                    <span class="ms-3">Black and White</span>
                                </span>
                                <span class="d-flex pb-3 align-items-center">
                                    <input @change="radioChange(second, first)" type="radio" v-model.number="second"
                                        value="2" />
                                    <span class="ms-3">Analogous</span>
                                </span>
                                <span class="d-flex pb-3 align-items-center">
                                    <input @change="radioChange(second, first)" type="radio" v-model.number="second"
                                        value="3" />
                                    <span class="ms-3">Teradic</span>
                                </span>
                                <span class="d-flex pb-3 align-items-center">
                                    <input @change="radioChange(second, first)" type="radio" v-model.number="second"
                                        value="4" />
                                    <span class="ms-3">Color Blind </span>
                                </span>
                            </div>
                        </div>
                        <div>
                            <select-box title="Export the Plot" value="select the format" :list="listDataValueType" />
                        </div>
                        <div>
                            <a :href="heatImg" download>
                                <button class="download mt-4">Download</button>
                            </a>
                        </div>
                        <div>
                            <button class="Re-Run">Re-Run</button>
                        </div>
                    </div>
                </div>
                <div class="col-9 barPlot">
                    <div class="chart-img">
                        <img :src="heatImg" alt="" />
                    </div>
                </div>
            </div>
            <div class="bottom-buttons">
                <router-link to="heat-map">
                    <button class="Back">Back</button>
                </router-link>
                <router-link to="density-plot">
                    <button class="Next">Next</button>
                </router-link>
            </div>
            <div class="logo">
                <img :src="logo" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
import Accordian from "@/components/Accordian.vue";
import Selection from "@/components/Selection.vue";
import Header2 from "@/components/Header2.vue";
import pen from "@/assets/pen.svg";
import logo from '@/assets/group55.png';
import barPlot1 from "@/assets/barPlot1.png";
import barPlot2 from "@/assets/barPlot2.png";
import barPlot3 from "@/assets/barPlot3.png";
import barPlot4 from "@/assets/barPlot4.png";
import SelectBox from "@/components/SelectBox.vue";

export default {
    components: { Header2, Accordian, Selection, SelectBox },
    data() {
        return {
            pen,
            logo,
            first: 1,
            second: 2,
            listDataValueType: ["PNG", "JPG", "TIFF", "SVG", "PDF"],
            selected: {
                principal: false,
                dotPlot: false,
                heatmap: false,
                barplot: true,
                density: false,
            },
            greened: {
                principal: true,
                dotPlot: true,
                heatmap: true,
                barplot: false,
                density: false,
            },
            heatImg: barPlot1
        };
    },
    methods: {
        radioChange(second, first) {
            if (first == 1 && second == 2) {
                    this.heatImg = barPlot1
            }
            if(first == 1 && second == 1){
                this.heatImg = barPlot2
            }
            if(first == 2 && second == 2){
                this.heatImg = barPlot3
            }
            if(first == 2 && second == 1){
                this.heatImg = barPlot4
            }
            
        }
    }
};
</script>

<style lang="scss">
.left-sidebar {
    border: 4px solid #d4d4d4;
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
        border: 2px solid #d4d4d4;
        border-radius: 11px;

        @media (max-width:1300px) {
            font-size: 22px;
        }
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
                accent-color: #e52620;
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

    @media (max-width:1600px) {
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        font-size: 25px !important;
        padding: unset !important;
        padding-top: 10px !important;
        padding-bottom: 10px !important;
    }
}

.Re-Run {
    background-color: #e52620;
    border: 0;
    border-radius: 11px;
    color: white;
    padding-left: 110px;
    padding-right: 110px;
    padding: 10px 110px;
    font-size: 30px;
    width: 100%;
    white-space: nowrap;
    margin-top: 100px;

    @media (max-width:1600px) {
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        font-size: 25px !important;
        padding: unset !important;
        padding-top: 10px !important;
        padding-bottom: 10px !important;
    }
}

.barPlot .chart-img {
    border: 4px solid #d4d4d4;
    border-radius: 14px;

    img {
        padding: 35px 18px;
        width: 95%;
        height: auto;
        object-fit: scale-down;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>