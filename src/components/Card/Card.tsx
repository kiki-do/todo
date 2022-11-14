import type { FC } from 'react'
import { Nothing } from '../../shared/components/Nothing/Nothing';
import { useGetTodoQuery, useDeletePostMutation} from '../../store/todoApi';
import { CardItem } from '../CardItem/CardItem'
import { EditInput } from '../EditInput/EditInput';
import classes from './Card.module.scss';

export interface ITodo {
  id: number;
  text: string;
  importance: string;
  handleDeletePost: (id: number) => void;
  handleEditPost: (id: number, text: string) => void
  complete: boolean;
}

const Card: FC = () => {
  const {data = []} = useGetTodoQuery(0);
  const [deletePost] = useDeletePostMutation();



  const handleIsOpen = (prev: boolean) => !prev;

  const handleDeletePost = async(id: number) => {
    await deletePost(id).unwrap();
  }

  if(data.length === 0) return <Nothing />


  return (
    <div className={classes.wrapper}>
      {data.map(({id, text, importance, complete}: ITodo) => (
        <div className={classes.content}>
        <CardItem key={id} text={text} id={id} complete={complete}
          handleDeletePost={handleDeletePost} handleIsOpen={handleIsOpen}  />  

         <EditInput key={id} text={text} id={id} />
        </div>
      ))
       
      }
    </div>
  )
}

export default Card