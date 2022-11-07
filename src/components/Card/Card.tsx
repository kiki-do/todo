import type { FC } from 'react'
import { Nothing } from '../../shared/components/Nothing/Nothing';
import { useGetTodoQuery, useDeletePostMutation } from '../../store/todoApi';
import { CardItem } from '../CardItem/CardItem'
import classes from './Card.module.scss';

export interface ITodo {
  id: number;
  text: string;
  importance: string;
  handleDeletePost: (id: number) => void
}

const Card: FC = () => {
  const {data = []} = useGetTodoQuery(0);
  const [deletePost] = useDeletePostMutation();

  const handleDeletePost = async(id: number) => {
    await deletePost(id).unwrap();
  }

  if(data.length === 0) return <Nothing />

  return (
    <div className={classes.wrapper}>
      {data.map(({id, text, importance}: ITodo) => (
        <CardItem key={id} text={text} id={id} importance={importance} handleDeletePost={handleDeletePost}/>
        
      ))

      }
    </div>
  )
}

export default Card