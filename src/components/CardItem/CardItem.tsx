import type { FC } from 'react';
import { Button } from '../../shared/components/Button/Button';
import classes from './CardItem.module.scss';

export const CardItem: FC = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.text}>Погулять с собакой и сделать наконец что-то интересное</div>
      <Button.Icon className={classes.trash} name="trash" size={24}/>
    </div>
  )
}
