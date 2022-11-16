import { useState } from 'react';
import type { FC } from 'react'
import { useAddPostMutation } from '../../store/todoApi'
import { Button } from '../../shared/components/Button/Button';
import classes from './Input.module.scss';  


export const Input: FC = () => {

  const [addPost] = useAddPostMutation();
  const [newPost, setNewPost] = useState<string>('');

  const handleAddPost = async() => {
    if(newPost){
      await addPost({ text : newPost, complete: false, isOpen: false}).unwrap();
      setNewPost('');
    };
  };

  //   const wrapperClassName = useMemo(
  //   () => 
  //   clsx(
  //     classes.wrapper,
  //     {
  //       [classes.isFetching]: ,

  //     },
  //   ),
  //   [isFetching],
  // );


  // const handleEditPost = async() => {}

  const onChange = (e: any) => {
    setNewPost(e.target.value);
  }

  return (
    <div className={classes.wrapper}>
      <input className={classes.input} type="text" placeholder='Write here you todo!' 
        value={newPost} onChange={onChange} />
      <Button onClick={handleAddPost}>Add post</Button>
    </div>
  )
}
