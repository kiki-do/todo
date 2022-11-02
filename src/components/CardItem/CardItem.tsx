import type { FC } from 'react';
import { Icon } from '../../shared/components/Icon/Icon';
import classes from './CardItem.module.scss';

export const CardItem: FC = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.text}>Погулять с собакой и сделать наконец что-то интересное</div>
      <Icon className={classes.trash} name="trash" size={24}/>
    </div>
  )
}
