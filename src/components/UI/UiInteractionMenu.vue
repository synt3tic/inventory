<script setup lang="ts">
import UiButton from './UiButton.vue';
import UiIcon from './UiIcon.vue';
import UiSkeletone from './UiSkeletone.vue';
import UiModal from './UiModal.vue';
import { ref } from 'vue';

const isModalActive = ref(false);
</script>

<template>
  <div class="interaction-menu">
    <div class="interaction-menu__close-button">
      <UiButton size="sm">
        <UiIcon icon="close" />
      </UiButton>
    </div>
    <div class="interaction-menu__item-image">
      <img src="../../assets/images/item-image-2.png" alt="item-image" style="width: 100%;" />
    </div>
    <div class="interaction-menu__stroke"></div>
    <UiSkeletone size="sm" />
    <div class="interaction-menu__stroke"></div>
    <Transition name="slide-fade">
      <UiModal v-if="isModalActive" @close-modal="isModalActive = false" />
    </Transition>
    <UiButton color="primary-red" @click="isModalActive = true">Удалить предмет</UiButton>
  </div>
</template>

<style lang="scss" scoped>

$primary-border: 1px solid #4D4D4D;
$stroke-color: #4D4D4D;
$background-color: #262626;
.interaction-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 0;
  width: 250px;
  padding: 8px;
  border-left: $primary-border;
  background-color: $background-color;
  backdrop-filter: blur(4px);

  &__close-button {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  &__item-image {
    width: 130px;
    height: 130px;
    margin: 23px 0 30px;
  }

  &__stroke {
    width: 92%;
    height: 1px;
    background-color: $stroke-color;
    margin: 16px 0;
  }
}

.slide-fade-leave-active,
.slide-fade-enter-active {
  transition: all 0.1s linear;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20%);
  opacity: 0;
}
</style>