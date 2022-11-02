import type { FC } from 'react'
import { useGetTodoQuery } from '../../store/todoApi';
import { CardItem } from '../CardItem/CardItem'
import classes from './Card.module.scss';

export interface ITodo {
  id: number;
  text: string;
  importance: string;
}

const Card: FC = () => {
  const {data = [], isLoading} = useGetTodoQuery(0);

  if (isLoading) return <h1 className={classes.loading}>...Loading</h1>

  return (
    <div className={classes.wrapper}>
      {data.map(({id, text, importance}: ITodo) => (
        <CardItem key={id} text={text} importance={importance} />
      ))}
    </div>
  )
}

export default Card