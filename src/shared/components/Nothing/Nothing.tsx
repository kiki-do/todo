import type { FC } from 'react';
import classes from './Nothing.module.scss';

export const Nothing: FC = () => {
  return (
    <div className={classes.wrapper}>Похоже у тебя сегодня нет задач... Надо бы это исправить 😉</div>
  );
};