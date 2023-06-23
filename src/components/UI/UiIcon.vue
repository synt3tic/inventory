<script setup lang="ts">
import { computed } from "vue";
import Close from "../../assets/icons/close-icon.svg";
import Cursor from '../../assets/icons/cursor-icon.svg';
import CursorPointer from '../../assets/icons/cursor-pointer-icon.svg';
import { UiIconProps } from "../../types/types";

const props = defineProps<UiIconProps>();

const icons = {
  "close": Close,
  "cursor": Cursor,
  "cursor-pointer": CursorPointer,
};

const iconSrc = computed(() => {
  return icons[props.icon];
});
</script>

<template>
  <img :src="iconSrc" :alt="icon" class="gr-icon" />
</template>

<style scoped>
.gr-icon {
  @apply block;
}
</style>