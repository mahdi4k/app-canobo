<template>
  <div class="container">
    <div class="header">
      <div class="d-flex align-items-center">
        <img :src="simpleMicrogenetics2" alt="" />
        <span class="ms-3">GEO-A</span>
      </div>
      <div class="input-section py-5">
        <div class="position-relative">
          <input placeholder="Search Results" class="runName" type="text">
          <span class="runInputIcon"><img :src="search" alt=""></span>
        </div>
      </div>
    </div>
    <div class="addCohort">
      <div class="input-section py-5">
        <div class="position-relative">
          <input @input="inputVal($event)" placeholder="Enter Your Cohort’s Name" class="runName md" type="text">
        </div>
      </div>
      <div>
        <button @click="addSelected" v-if="showAddButton" class="submit">submit</button>
        <img @click="addInput" v-if="showAddIcon" :src="add" alt="">
        <button @click="addCohort" v-if="showCohortButton" class="submit cohort">Add selected samples to this
          cohort</button>

      </div>
    </div>
    <table class="table table-borderless">
      <thead>
        <tr>
          <th v-for="col in columns" scope="col" :key="col.key">{{ col.key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="el in data" :key="el.Title">
          <td>{{ el.Accession }}</td>
          <td>{{ el.Title }}</td>
          <td>{{ el.SourceName }}</td>
          <td>{{ el.cellType }}</td>
          <td>{{ el.Gender }}</td>
          <td>{{ el.Age }}</td>
          <td>{{ el.CellLine }}</td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
import search from '@/assets/search.svg';
import add from '@/assets/add.svg';
import simpleMicrogenetics2 from "@/assets/simpleMicrogenetics2.svg";

export default {
  data() {
    return {
      search,
      simpleMicrogenetics2,
      add,
      data: [
        { Accession: "GSM052234", Title: 'A519', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        { Accession: "GSM052234", Title: 'A599', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        { Accession: "GSM052234", Title: 'A539', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        { Accession: "GSM052234", Title: 'A529', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        { Accession: "GSM052234", Title: 'A559', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        { Accession: "GSM052234", Title: 'A569', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        { Accession: "GSM052234", Title: 'A579', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        { Accession: "GSM052234", Title: 'A589', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        { Accession: "GSM052234", Title: 'A279', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        { Accession: "GSM052234", Title: 'A541', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        { Accession: "GSM052234", Title: 'A542', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        { Accession: "GSM052234", Title: 'A543', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        { Accession: "GSM052234", Title: 'A544', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        { Accession: "GSM052234", Title: 'A545', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        { Accession: "GSM052234", Title: 'A546', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        { Accession: "GSM052234", Title: 'A547', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        { Accession: "GSM052234", Title: 'A548', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },
        { Accession: "GSM052234", Title: 'A549', SourceName: 'A549', cellType: 'NSCLC', Gender: 'Male', Age: '52', CellLine: '' },

      ],
      columns: [
        { key: "Accession" },
        { key: "Title" },
        { key: "Source name" },
        { key: "Cell type" },
        { key: "Gender" },
        { key: "Age" },
        { key: "Cell line" },
      ],
      showAddButton: false,
      showAddIcon: true,
      showCohortButton: false,
      cohortItem: null,
      cohortItems: []
    }
  },
  methods: {
    inputVal(e) {
      let inputLength = e.target.value.length
      this.cohortItem = e.target.value
      this.showCohortButton = false;
      this.showAddIcon = false;
      this.showAddButton = inputLength > 0 ? true : false
    },
    addSelected() {
      this.cohortItems.push(this.cohortItem)
    },
    addInput() {

    }
  }
}
</script>

<style lang="scss">
.data-table-sorting-icons {
  display: none !important;
}

.table {
  --bs-table-striped-bg: rgb(255 255 255) !important;
}

.input-section {
  .runName {
    border: unset;
    background-color: #EFEFEF;
    padding: 7px 10px 7px 60px;
    width: 520px;
    border-radius: 10px;
    font-size: 30px;

    @media (max-width:1550px) {
      width: 380px;
    }

    &.md {
      width: 420px;
      padding-left: 40px;
    }
  }

  .runInputIcon {
    position: absolute;
    left: 28px;
    top: -4px;

    img {
      width: 20px;
    }

  }
}

.header {
  justify-content: space-between;
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

.addCohort {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px solid #D4D4D4;
  border-radius: 15px;
  padding-left: 40px;
  padding-right: 60px;
  margin-bottom: 80px;
}

.table {
  font-size: 28px;

  thead {
    background-color: #FAFAFA;

    tr th {
      border: unset;
      font-weight: 100;
    }
  }

  tr {
    &:first-child {
      td {
        border-top: unset !important;

      }
    }
  }

  tbody {
    position: relative;
    top: 20px;
  }
}

.submit {
  border: 3px solid #E52620;
  border-radius: 10px;
  font-size: 30px;
  background-color: #ffffff;
  color: #E52620;
  padding: 3px 60px;

  &.cohort {
    background-color: #FCF8E5;
  }
}
</style>