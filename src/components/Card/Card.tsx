import { FC, useState } from 'react'
import { Button } from '../../shared/components/Button/Button';
// import { Nothing } from '../../shared/components/Nothing/Nothing';
import { useGetTodoQuery, useDeletePostMutation} from '../../store/todoApi';
import { CardItem } from '../CardItem/CardItem'
import { EditInput } from '../EditInput/EditInput';
import classes from './Card.module.scss';


export interface ITodo {
  id: number;
  text: string;
  importance: string;
  isOpen: boolean;
  handleDeletePost: (id: number) => void;
  handleEditPost: (id: number, text: string) => void
  complete: boolean;
}

const Card: FC = () => {
  const [page, setPage] = useState(1);
  const {data = [],  isLoading, isFetching} = useGetTodoQuery(page);
  const [deletePost] = useDeletePostMutation();

  
  const handleDeletePost = async(id: number) => {
    await deletePost(id).unwrap();
  }

  // if(data.length === 0) return <Nothing />


  return (
    <div className={classes.wrapper}>
      {data.map(({id, text, complete, isOpen}: ITodo) => (
        <div key={id} className={classes.content}>
          <CardItem text={text} id={id} complete={complete} isOpen={isOpen}
            handleDeletePost={handleDeletePost}/>  

          <div className={classes.input}>
          <EditInput isOpen={isOpen} text={text} id={id} />
          </div>
        </div>
        
      ))
       
      }
    </div>
  )
}

export default Card