<template>
  <div class="ui-skeletone">
    <div v-for="item in 7" class="ui-skeletone__stripe"></div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
$gradient: linear-gradient(to right, #3C3C3C, #444444, #333333);
.ui-skeletone {
  width: 190px;
  height: 198px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 16px;

  &__stripe {
    height: 10px;
    border-radius: 4px;
    justify-self: center;
    background: $gradient;

    &:nth-child(1) {
      width: 190px;
      height: 26px;
      margin-bottom: 8px;
      border-radius: 8px;
    }

    &:nth-child(2) {
      width: 155px;
    }

    &:nth-child(3) {
      width: 190px;
    }

    &:nth-child(4) {
      width: 170px;
    }

    &:nth-child(5) {
      width: 160px;
    }

    &:nth-child(6) {
      width: 140px;
    }

    &:nth-child(7) {
      width: 80px;
    }
  }
}
</style>