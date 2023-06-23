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