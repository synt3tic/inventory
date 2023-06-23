<script setup lang="ts">
import { ref } from 'vue';
import UiModal from './components/UI/UiModal.vue';
import UiInput from './components/UI/UiInput.vue';

const inputValue = ref('');
</script>

<template>
  <UiModal>
    <UiInput v-model="inputValue" type="number" />
  </UiModal>
</template>

<style lang="scss"></style>
