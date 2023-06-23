<script setup lang="ts">
import { computed } from 'vue';
import { UiInputProps } from '../../types/types';

const props = defineProps<UiInputProps>();
const emit = defineEmits(['update:modelValue']);

const modelValueProxy = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit('update:modelValue', newValue);
  },
})
</script>

<template>
  <input v-model="modelValueProxy" class="ui-input" />
</template>

<style lang="scss" scoped>
$primary-border: 1px solid #4D4D4D;
.ui-input {
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  outline: none;
  border: $primary-border;
  border-radius: 4px;
  background-color: transparent;
  color: white;
}
</style>