import { useMemo, forwardRef } from 'react';
import clsx from 'clsx';
import type { ButtonHTMLAttributes, FC } from 'react';
import { Icon, IconProps } from '../../Icon/Icon';
import { IconNames } from '../../Icon/svg';

import classes from './ButtonIcon.module.scss';

/* Свойство кнопки иконки */
export interface ButtonIconProps 
  extends ButtonHTMLAttributes<HTMLButtonElement>, Pick<IconProps, 'size'>{

    /* Иконка */
     name: IconNames;

     /* Состояние */
     isActive?: boolean;

};

 export interface ButtonIconComponent extends FC<ButtonIconProps>{}


export const ButtonIcon: ButtonIconComponent = forwardRef<HTMLButtonElement, ButtonIconProps> (({
  name, isActive = false, size = 24, className, ...props
}, ref) => {
  const wrapperClassName = useMemo(
    () => 
      clsx(classes.wrapper, {
        [classes.isActive]: isActive,
      }, className),  
     [className, isActive]
    );

  const style = useMemo(
    () => ({
      ...(size !== 'auto' && { width: size, height: size }),
    }), [size]
  )

  return(
    <button {...props} ref={ref} className={wrapperClassName} style={style} >
      <Icon className={classes.icon} name={name} size={size} />
    </button>
  )

})