<template>
    <div class="step-sections my-5">
        <span class="active">Principal component analysis</span>
        <span>Dot Plot</span>
        <span>Heatmap</span>
        <span>Bar Plot</span>
        <span>Density Plot</span>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
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

  @media(max-width:1550px) {
    span {
      padding: 10px 45px;
    }
  }
}
</style>