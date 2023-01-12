import { useEffect, useRef } from "react";
import type { FC } from "react";
import Card from "../../components/Card/Card";
import { Input } from "../../components/Input/Input";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import classes from "./Home.module.scss";
import { fetchData } from "../../store/thunk/thunk";

export const Home: FC = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchData());
		console.log(fetchData());
	}, [dispatch]);

	return (
		<div className={classes.wrapper}>
			<h1 className={classes.title}>
				Welcome to my <b>t</b>odo
			</h1>
			<h2 className={classes.subtitle}> List of todos </h2>
			<Card />
			<div className={classes.input}>
				<Input />
			</div>
		</div>
	);
};
