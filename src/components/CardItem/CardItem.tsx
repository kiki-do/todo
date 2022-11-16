import clsx from 'clsx';
import { FC, useMemo } from 'react';
import { Button } from '../../shared/components/Button/Button';
import { IconNames } from '../../shared/components/Icon/svg';
import { useCompletePostMutation, useIsOpenPostMutation } from '../../store/todoApi';
import classes from './CardItem.module.scss';


interface CardItemProps{
  text: string;
  isOpen: boolean;
  complete: boolean;
  handleDeletePost: (id: number) => void;
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

export const CardItem: CardItemComponent = ({ id, text, complete, handleDeletePost, isOpen}) => {

  const [completePost] = useCompletePostMutation();
  const [isOpenPost] = useIsOpenPostMutation();

  const handleComplete = async() => await completePost({complete: !complete, id, text})
  
  const handleIsOpen =  async() => await isOpenPost({isOpen: !isOpen, id, text})
  
  /* Значения для кнопок иконок */
  const icons = [{id: 1, name: "trash", size: 24, handles: () => handleDeletePost(id)},
                 {id: 2, name: "edit", size: 16, handles: () =>  handleIsOpen()},
                 {id: 3, name: "done", size: 16, handles: () => handleComplete()}
                ];

    const wrapperClassName = useMemo(
    () => 
    clsx(
      classes.wrapper,
      {
        [classes.complete]: complete,
        

      },
    ),
    [complete],
  );

  return (
    <div className={wrapperClassName}>
      <div className={classes.text}>{text}</div>
      {icons.map(({id, name, size, handles}: any) => (
        /* Исправить тип для масива объектов */
        <Button.Icon key={id} className={classes.icon} name={name} size={size} onClick={handles} />
      ))}
      
    </div>
  )
}
