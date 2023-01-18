import { useEffect, useState } from "react";
import type { FC } from "react";
import Card from "../../components/Card/Card";
import { AddPost } from "../../components/AddPost/AddPost";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import classes from "./Home.module.scss";
import { fetchData } from "../../store/thunk/thunk";

export const Home: FC = () => {
	const dispatch = useAppDispatch();
	const [isModal, setIsModal] = useState(false);

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
				<AddPost isModal={isModal} setIsModal={setIsModal} />
			</div>
		</div>
	);
};
