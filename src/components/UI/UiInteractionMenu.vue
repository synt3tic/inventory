<script setup lang="ts">
import UiButton from './UiButton.vue';
import UiIcon from './UiIcon.vue';
import UiSkeletone from './UiSkeletone.vue';
import UiModal from './UiModal.vue';
import UiInput from './UiInput.vue';
import { ref } from 'vue';
import { UiMenuProps } from '../../types/types';

const props = defineProps<UiMenuProps>();
const emit = defineEmits(['closeMenu', 'deleteItem'])

const isModalActive = ref(false);
const itemsDeleteQty = ref('');

const closeModal = () => {
  isModalActive.value = false;
  itemsDeleteQty.value = '';
}
const deleteItem = () => {
  const item = props.cell.item;
  if (item && item.quantity < +itemsDeleteQty.value || !+itemsDeleteQty.value) {
    alert('Введите верное значение');
  } else {
    emit('deleteItem', +itemsDeleteQty.value);
  }
}
</script>

<template>
  <div class="interaction-menu">
    <div class="interaction-menu__close-button">
      <UiButton size="sm" @click="emit('closeMenu')">
        <UiIcon icon="close" />
      </UiButton>
    </div>
    <div class="interaction-menu__item-image">
      <img :src="cell.item?.image " alt="item-image" style="width: 100%;" />
    </div>
    <div class="interaction-menu__stroke"></div>
    <UiSkeletone size="sm" />
    <div class="interaction-menu__stroke"></div>
    <Transition name="slide-fade">
      <UiModal v-if="isModalActive" @close-modal="closeModal" @submit-form="deleteItem">
        <UiInput v-model="itemsDeleteQty" type="number" placeholder="Введите количество" />
      </UiModal>
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
  bottom: 0;
  top: 0;
  width: 250px;
  padding: 8px;
  border-left: $primary-border;
  background-color: $background-color;
  backdrop-filter: blur(4px);
  transform: translateX(0);

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
