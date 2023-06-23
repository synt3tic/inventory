<script setup lang="ts">
import UiSkeletone from './UiSkeletone.vue';
</script>

<template>
  <div class="inventory-info">
    <div>
      <img src="../../assets/images/image-blur.png" alt="image-blur" />
    </div>
    <UiSkeletone />
  </div>
</template>

<style lang="scss" scoped>
$bg-color: #262626;
$primary-border: 1px solid #4D4D4D;
.inventory-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: fit-content;
  height: 500px;
  padding: 0 14px;
  background-color: $bg-color;
  border: $primary-border;
  border-radius: 12px;
}
</style>