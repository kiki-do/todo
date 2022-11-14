import { FC, useState } from 'react';
import { Button } from '../../shared/components/Button/Button';
import { IconNames } from '../../shared/components/Icon/svg';
import classes from './CardItem.module.scss';

interface CardItemProps{
  text: string;
  complete: boolean;
  handleDeletePost: (id: number) => void;
  handleIsOpen: (prev: boolean) => void;
  id: number;
}

export interface CardItemComponent extends FC<CardItemProps>{}


export interface IIcons{
  id?: number;
  name: IconNames;
  size?: number;
  complete?: boolean;
  handles: () => void;
}

export const CardItem: CardItemComponent = ({ id, text, complete, handleDeletePost, handleIsOpen}) => {


  
  /* Значения для кнопок иконок */
  const icons = [{id: 1, name: "trash", size: 24, handles: () => handleDeletePost(id)},
                 {id: 2, name: "edit", size: 16, handles: () => setIsOpen(isOpen)},
                 {id: 3, name: "done", size: 16, }
                ];

  const [isOpen, setIsOpen] = useState<boolean>(false);


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
