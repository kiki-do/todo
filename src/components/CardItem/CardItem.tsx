import type { FC } from 'react';
import { Button } from '../../shared/components/Button/Button';
import { IconNames } from '../../shared/components/Icon/svg';
import classes from './CardItem.module.scss';

interface CardItemProps{
  text: string;
  importance: string;
  handleDeletePost: (id: number) => void;
  id: number;
}

export interface CardItemComponent extends FC<CardItemProps>{}


export interface IIcons{
  id?: number;
  name: IconNames;
  size?: number;
}

export const CardItem: CardItemComponent = ({ id, text, importance, handleDeletePost}) => {

  const icons = [{id: 1, name: "trash", size: 24, handles: () => handleDeletePost(id)},
                 {id: 2, name: "edit", size: 16},
                 {id: 3, name: "done", size: 16}
                ];

  return (
    <div className={classes.wrapper}>
      <div className={classes.text}>{text}</div>
      {icons.map(({id, name, size, handles}: any) => (
        /* Исправить тип для масива объектов */
        <Button.Icon key={id} className={classes.icon} name={name} size={size} onClick={handles} />
      ))}
      
    </div>
  )
}
