<template>
    <div class="borderTopBottom">
        <div class="container">
            <Header2 />
            <div class="top-title mt-3">
                <span>Final Results </span>
                <h2>DEGs Table</h2>
            </div>
            <div class="table-section">
                <div class="d-flex px-3">
                    <div class="d-flex flex-column">
                        <div class="button-total top-width mb-4">
                            <span>LogFC</span>
                            <div class="increase-decrease d-flex align-items-center me-2 ">
                                <span class="cursor-pointer" @click="logFcDec"><img :src="leftArrow" alt=""></span>
                                <p class="mb-0 p-width pt-1 px-3">{{ logFc }}</p>
                                <span class="cursor-pointer" @click="logFcInc"> <img :src="rightArrow" alt=""></span>
                            </div>
                        </div>
                        <div class="button-total top-width">
                            <span>P-Value</span>
                            <div class="increase-decrease d-flex align-items-center me-2">
                                <span @click="PValueDec" class="cursor-pointer"><img :src="leftArrow" alt=""></span>
                                <p class="mb-0 pt-1 p-width px-3">{{ Pvalue }}</p>
                                <span @click="PValueInc" class="cursor-pointer"> <img :src="rightArrow" alt=""></span>
                            </div>
                        </div>
                    </div>
                    <div class="top-width filename-section">
                        <div class="header-section mb-2 d-flex justify-content-between">
                            <h2>Filename:</h2>
                            <span><img :src="pen" alt="" /></span>
                        </div>
                        <div class="fileName mb-4">
                            <span>DEGs Table</span>
                        </div>
                    </div>
                    <div class="ms-5">
                        <select-box title="Export the Plot" value="select the format" :list="listDataValueType" />
                    </div>
                    <div class="mt-4 ms-5">
                        <a download>
                            <button class="download mt-4">Download</button>
                        </a>
                    </div>
                </div>

                <div class="d-flex header-table justify-content-around">
                    <span>
                        Gene Symbol
                    </span>
                    <span>
                        LogFC
                    </span>
                    <span>
                        T
                    </span>
                    <span>
                        P. Value
                    </span>
                    <span>
                        Adj.P.Value
                    </span>
                    <span>
                        B
                    </span>
                </div>
                <div class="grid">

                    <span class="raduis-top-left">IRS1</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span class="raduis-top-right">0.107830214579005</span>
                    <span>EEF1A2</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>EEF1A2</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>GPC1</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>HOMER2</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>FAAP24</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>ACHE</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>GSM052241</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>GSM052242</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>GSM052243</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>GSM052244</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>GSM052245</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>GSM052246</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>GSM052247</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>GSM052248</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>GSM052249</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>GSM052250</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>GSM052251</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span class="raduis-bottom-left">HOMER2</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span>0.107830214579005</span>
                    <span class="raduis-bottom-right">0.107830214579005</span>
                </div>

            </div>

        </div>
        <div class="bottom-table-section">
            <router-link to="/">
                <button class="main-page">back to main page</button>
            </router-link>
            <div class="logo-table-section">
                <img :src="logo" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
import leftArrow from "@/assets/leftArrow.svg";
import rightArrow from "@/assets/rightArrow.svg";
import pen from "@/assets/pen.svg";
import SelectBox from "@/components/SelectBox.vue";
import Header2 from "@/components/Header2.vue";
import logo from '@/assets/group55.png';


export default {
    components: { SelectBox, Header2 },

    data() {
        return {
            leftArrow,
            rightArrow,
            pen,
            logo,
            logFc: 1.25,
            Pvalue: .5,
            listDataValueType: ["PNG", "JPG", "TIFF", "SVG", "PDF"],
            columns: [
                { key: "Gene Symbol " },
                { key: "LogFC" },
                { key: "T" },
                { key: "P. Value" },
                { key: "Adj.P.Value" },
                { key: "B" },
            ],
        }

    },
    methods: {
        logFcDec() {
            this.logFc = Number(this.logFc) - .25
        },
        logFcInc() {
            this.logFc = Number(this.logFc) + .25
        },
        PValueInc() {
            this.Pvalue = Number(this.Pvalue) + Number(.5)

        },
        PValueDec() {
            this.Pvalue = Number(this.Pvalue) - Number(.5)

        }
    }
}
</script>

<style lang="scss">
.top-title {
    span {
        font-size: 35px;
    }

    h2 {
        font-size: 45px;
        font-weight: 900;
    }

    margin-bottom: 70px;
}

.table-section {
    padding: 50px 60px;
    border: 4px solid #D4D4D4;
    border-radius: 14px;

    .top-width {
        width: 289px;
    }

    .button-total {
        display: flex;
        justify-content: space-between;
        padding: 8px 10px;
        align-items: center;
        border: 3px solid #D4D4D4;
        border-radius: 13px;
        font-size: 27px;
    }

    .header-section {
        h2 {
            font-size: 33px;
            font-weight: 900;
        }
    }

    .filename-section {
        margin-left: 143px;
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

    .aselect {
        width: 289px;
        margin-top: 0;

        .title {
            display: block;
            margin-bottom: 10px;
        }
    }

    .download {
        margin-top: 1.7rem !important;
        padding: 8px 110px;
    }
}

.grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    border-top: 1px solid #A5A5A5;
    border-right: 1px solid #A5A5A5;
    border-left: 1px solid #A5A5A5;
    border-radius: 10px;

}

.grid>span {
    padding: 8px 4px;
    border-bottom: 1px solid #A5A5A5;
    text-align: center;
    font-size: 27px;
    background-color: #F7F7F7;
}

.grid>span:nth-child(12n+1),
.grid>span:nth-child(12n+2),
.grid>span:nth-child(12n+3),
.grid>span:nth-child(12n+4),
.grid>span:nth-child(12n+5),
.grid>span:nth-child(12n+6) {
    background-color: rgb(255, 255, 255);
}

.header-table {
    margin-top: 80px;
    font-size: 27px;
    border: 3px solid #E52620;
    border-radius: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 35px;

    span {
        width: 127px;
        text-align: center;
    }
}

.p-width {
    width: 69px;
    text-align: center;
}

.raduis-top-left {
    border-top-left-radius: 10px;
}

.raduis-top-right {
    border-top-right-radius: 10px;
}

.raduis-bottom-right {
    border-bottom-right-radius: 10px;
}

.raduis-bottom-left {
    border-bottom-left-radius: 10px;
}

.bottom-table-section {
    position: relative;
    margin-top: 80px;
    padding-top: 40px;
    padding-bottom: 50px;
    border-top: 3px solid #D8D8D8;
    display: flex;
    justify-content: center;
    align-items: center;

    .main-page {
        background-color: #E52620;
        color: white;
        padding: 10px 200px;
        border: unset;
        font-size: 33px;
    }
}

.logo-table-section {
    position: absolute;
    left: 80px;
    bottom: 15px;
}
</style>