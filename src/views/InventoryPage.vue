<script setup lang="ts">
import UiInventoryInfo from '../components/UI/UiInventoryInfo.vue';
import InventoryList from '../components/InventoryList.vue';
</script>

<template>
  <section class="inventory-page">
    <div class="inventory-page__main">
      <UiInventoryInfo />
      <InventoryList />
    </div>
    <div class="inventory-page__bottom">
      <div></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
$gradient: linear-gradient(to right, #3C3C3C, #444444, #333333);
$bg-color: #262626;
.inventory-page {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: min-content;

  &__main {
    display: flex;
    gap: 24px;
  }

  &__bottom {
    padding: 18px;
    border-radius: 12px;
    background-color: $bg-color;
    width: 100%;
    box-sizing: border-box;

    div {
      background: $gradient;
      height: 36px;
      width: 100%;
      border-radius: 12px;
    }
  }
}
</style>