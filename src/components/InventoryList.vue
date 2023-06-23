<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { inventoryCells } from '../data/inventoryCells';
import { InventoryCell, Item } from '../types/types';
import UiInteractionMenu from './UI/UiInteractionMenu.vue';

const cells = ref<InventoryCell[]>([]);
const isMenuActive = ref(false);
const draggedItemIndex = ref<number | null>(null);
const clickedCell = ref<InventoryCell | null>(null);

onMounted(() => {
  const localStorageCells: InventoryCell[] | null | string = localStorage.getItem('inventory-cells');
  if (localStorageCells) {
    cells.value = JSON.parse(localStorageCells);
  } else {
    cells.value = inventoryCells;
  }
});

const openMenu = (cell: InventoryCell) => {
  clickedCell.value = cell;
  isMenuActive.value = true;
};
const closeMenu = () => isMenuActive.value = false;

const dragStartHandler = (event: Event, index: number) => {
  if (cells.value[index].item) {
    draggedItemIndex.value = index;
  } else {
    event.preventDefault();
  }
};
const dragOverHandler = (event: Event) => event.preventDefault();
const dropHandler = (event: Event, index: number) => {
  event.preventDefault();
  if (draggedItemIndex.value !== null) {
    const draggedItem: Item = Object.assign({}, cells.value[draggedItemIndex.value].item);
    cells.value[draggedItemIndex.value].item = null;
    cells.value[index].item = { ...draggedItem };
    localStorage.setItem('inventory-cells', JSON.stringify(cells.value));
  }
};
const deleteItem = (qty: number) => {
  cells.value = cells.value.map(el => {
    if (el.item && (el.id === clickedCell.value?.id)) {
      qty === el.item.quantity ? el.item = null : el.item.quantity -= qty;
    }
    return el;
  })
  localStorage.setItem('inventory-cells', JSON.stringify(cells.value));
  closeMenu();
} 
</script>

<template>
  <ul class="inventory-list">
    <li 
      v-for="(cell, index) in cells"
      :key="cell.id"
      :draggable="true"
      :class="{ 'inventory-list__item_no-hover': draggedItemIndex !== null }"
      class="inventory-list__item item" 
      @click="openMenu(cell)"
      @dragstart="dragStartHandler($event, index)"
      @dragover="dragOverHandler($event)"
      @drop="dropHandler($event, index)"
      @dragend="draggedItemIndex = null"
    >
      <img v-if="cell.item" :src="cell.item.image" alt="item-image">
      <div v-if="cell.item" class="item__counter">{{ cell.item?.quantity }}</div>
    </li>
    <Transition name="slide-fade">
      <UiInteractionMenu 
        v-if="isMenuActive && clickedCell?.item"
        :cell="clickedCell"
        @close-menu="closeMenu"
        @delete-item="deleteItem"
      />
    </Transition>
  </ul>
</template>

<style lang="scss" scoped>
$primary-border: 1px solid #4D4D4D;
$bg-color: #4D4D4D;
$cell-hover-color: #2F2F2F;
$cell-color: #262626;
$semi-transparent-white: rgba(255, 255, 255, 0.5);
.inventory-list {
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  width: 525px;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  background-color: $bg-color;
  grid-gap: 1px;
  list-style: none;
  padding: 0;
  margin: 0;
  border: $primary-border;

  &__item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    background-color: $cell-color;
    cursor: url('../assets/icons/cursor-pointer-icon.svg'), auto;

    &:hover {
      background-color: $cell-hover-color;
    }
  
    &_no-hover:hover {
      background-color: $cell-color;
    }
  }
}

.item {
  &__counter {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 16px;
    height: 16px;
    text-align: center;
    border-top: $primary-border;
    border-left: $primary-border;
    border-top-left-radius: 6px;
    color: $semi-transparent-white;
    font-size: 10px;
  }
}

.slide-fade-leave-active,
.slide-fade-enter-active {
  transition: all 0.1s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
}
</style>