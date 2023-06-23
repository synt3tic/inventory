<script setup lang="ts">
import { ref } from 'vue';
import UiInput from './components/UI/UiInput.vue';

const inputValue = ref('22');
</script>

<template>
  <UiInput v-model="inputValue" type="number" placeholder="Введите количество" />
</template>

<style lang="scss"></style>
