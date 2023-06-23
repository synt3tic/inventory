<script setup lang="ts">
import UiButton from './UiButton.vue';

const emit = defineEmits(['submitForm', 'closeModal'])
</script>

<template>
  <form class="ui-modal" @submit.prevent="emit('submitForm')">
    <slot />
    <div class="ui-modal__buttons">
      <UiButton @click="emit('closeModal')">Отмена</UiButton>
      <UiButton color="primary-red" type="submit">Подтвердить</UiButton>
    </div>
  </form>
</template>

<style lang="scss" scoped>
$primary-border: 1px solid #4D4D4D;
$background-color: #262626;
.ui-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 50;
  width: 100%;
  box-sizing: border-box;
  border-top: $primary-border;
  background-color: $background-color;

  &__buttons {
    display: flex;
    gap: 10px;
  }
}
</style>