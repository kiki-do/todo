import { useMemo } from 'react';
import type { FC, ButtonHTMLAttributes } from 'react';
import classes from './Button.module.scss';
import clsx from 'clsx';
import { ButtonIcon, ButtonIconComponent } from './ButtonIcon/ButtonIcon';

/* Виды кнопок */
export const VIEWS = {

  /* Главный вид */
  primary: classes.primary,

  /* Дополнительный вид */
  secondary: classes.secondary,
} as const; 
 
  /* Размеры кнопок */
 export const SIZES = {
  /* Маленький */
  small: classes.small,
 
  /* Средний */
  medium: classes.medium,
} as const;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  view?: keyof typeof VIEWS;

  size?: keyof typeof SIZES;

  block?: boolean;

  isActive?: boolean;
}

export interface ButtonComponent extends FC<ButtonProps>{

  Icon: ButtonIconComponent
}

export const Button: ButtonComponent = ({ 
  view = 'primary', 
  size = 'medium', 
  block = false, 
  className, 
  type = 'button', 
  isActive, 
  children, 
  ...props }) => {
  
  const wrapperClassName = useMemo(
    () => 
    clsx(
      classes.wrapper,
      SIZES[size],
      VIEWS[view],
      {
        [classes.block]: block,
        [classes.active]: isActive,
      },
      className,
    ),
    [block, isActive, className, size, view],
  );
    
  return (
    <button {...props} className={wrapperClassName} type={type}>
      <span className={classes.text}>{children}</span>
    </button>
  );
};
  Button.Icon = ButtonIcon;