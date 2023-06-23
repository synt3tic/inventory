export interface UiIconProps {
  icon: IconNames;
}
export type IconNames = 'close' | 'cursor' | 'cursor-pointer'

export interface UiButtonProps {
  size?: ButtonSizes;
  color?: ButtonColors
}
export type ButtonColors = 'primary-red' | 'primary-white'
export type ButtonSizes = 'sm' | 'md' | 'lg'

export interface UiInputProps {
  modelValue: string | number;
}

export interface InventoryCell {
  id: number;
  item: Item | null;
}
export interface UiMenuProps {
  cell: InventoryCell;
}
export interface Item {
  image: string;
  name: string; 
  quantity: number; 
}

export interface UiSkeletoneProps {
  size?: 'sm' | 'md';
}
