import clsx from 'clsx';
import { FC, useEffect, useMemo, useState } from 'react';
import { Button } from '../../shared/components/Button/Button';
import { useUpdatePostMutation } from '../../store/todoApi';

import classes from './EditInput.module.scss';

interface EditInputProps{
  text:string;
  id:number;
  isOpen?: boolean;
}

export interface EditInputComponent extends FC<EditInputProps>{}

export const EditInput: EditInputComponent = ({ text, id, isOpen }) => {

  const [updatePost] = useUpdatePostMutation();
  const [editPost, setEditPost] = useState<string>('');

  const handleEditPost = async () => {
    await updatePost({text: editPost, id }).unwrap();
  };

  const handleClearText = () => {
    setEditPost('');
  };

  useEffect(() => {
    if (text) {
      setEditPost(text)
    }
  }, [text])

  const onChange = (e: any) => {
    setEditPost(e.target.value);
  }


const wrapperClassName = useMemo(
    () => 
      clsx(classes.wrapper, {
        [classes.isOpen]: isOpen,
        [classes.isNotOpen]: !isOpen,
      }, ),  
     [isOpen]
    );

  return (
    <div className={wrapperClassName}>
      <input className={classes.input} type="text" placeholder='Write here you todo!' 
        value={editPost} onChange={onChange} 
        /> 
      <div className={classes.button}>
        <Button onClick={handleEditPost}>Edit</Button>
        <Button onClick={handleClearText}>Clear Text</Button>
      </div>
    </div>
  )
}
