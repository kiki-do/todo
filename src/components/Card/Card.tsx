import type { FC } from 'react'
import { CardItem } from '../CardItem/CardItem'
import classes from './Card.module.scss';

const Card: FC = () => {
  return (
    <div className={classes.wrapper}>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </div>
  )
}

export default Card