import type { FC } from 'react';
import Card from '../../components/Card/Card';
import { Button } from '../../shared/components/Button/Button';
import classes from './Home.module.scss';

export const Home: FC = () => {
    return(
        <div className={classes.wrapper}>
            <h1 className={classes.title}>Welcome to my <b>t</b>odo</h1>
            <h2 className={classes.subtitle}> List of todos </h2>
            <Card />
            <Button> Add todo </Button> 
        </div>
    );
};