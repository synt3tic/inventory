<script setup lang="ts">
import { UiButtonProps } from '../../types/types'

const props = withDefaults(defineProps<UiButtonProps>(), {
  color: 'primary-white',
  size: 'md',
})
</script>

<template>
  <button :class="`ui-button_${props.color} ui-button_${props.size}`" class="ui-button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
$primary-red: #FA7272;
$primary-white: #FFFFFF;
$white-shadow: 0 4px 6px -1px rgba(255, 255, 255, 0.2), 0 2px 4px -2px rgba(243, 243, 243, 0.2);
$red-shadow: 0 4px 6px -1px rgba(214, 102, 136, 0.2), 0 2px 4px -2px rgba(226, 128, 169, 0.2);
.ui-button {
  width: 100%;
  border-radius: 8px;
  text-align: center;
  border: none;
  outline: none;
  transition: all .1s linear;

  &:hover {
    cursor: pointer;
  }

  &:active {
    scale: .99;
  }

  &_primary-red {
    background-color: $primary-red;
    color: $primary-white;

    &:hover {
      box-shadow: $red-shadow;
    }
  }

  &_primary-white {
    background-color: $primary-white;

    &:hover {
      box-shadow: $white-shadow;
    }
  }

  &_sm {
    width: 24px;
    height: 24px;
    background: none;

    &:hover {
      box-shadow: none;
    } 
  }

  &_md {
    padding: 8px 15px;
  }

  &_lg {
    padding: 11px 16px;
  }
}
</style>