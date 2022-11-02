import type { FC } from 'react';
import { Button } from '../../shared/components/Button/Button';
import classes from './CardItem.module.scss';

interface CardItemProps{
  text: string;
  importance: string;
}

export interface CardItemComponent extends FC<CardItemProps>{}

export const CardItem: CardItemComponent = ({ text, importance}) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.text}>{text}</div>
      <Button.Icon className={classes.trash} name="trash" size={24}/>
    </div>
  )
}
