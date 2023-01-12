import { useEffect, useRef } from "react";
import type { FC, DragEvent } from "react";
import { Nothing } from "../../shared/components/Nothing/Nothing";
import { CardItem } from "../CardItem/CardItem";
import { EditInput } from "../EditInput/EditInput";
import classes from "./Card.module.scss";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { dataSelector } from "../../store/dataSlice/selectors";
import type { DataItems } from "../../store/dataSlice/types";
import {
	isModalPost,
	isOpenPost,
	removePost,
	stagePost,
} from "../../store/dataSlice/slice";
import { Modal } from "../Modal/Modal";

export interface fieldsType {
	id: number;
	stage: string;
}

const Card: FC = () => {
	const dispatch = useAppDispatch();

	const data = useAppSelector(dataSelector);

	const isMounted = useRef(false);

	useEffect(() => {
		if (isMounted.current) {
			const json = JSON.stringify(data);
			localStorage.setItem("data", json);
		}
		isMounted.current = true;
	}, [data]);

	const handleDeletePost = (id: string) => {
		dispatch(removePost(id));
	};

	const handleIsOpen = (id: string) => dispatch(isOpenPost(id));

	const handleIsModal = (id: string) => dispatch(isModalPost(id));

	const fields: fieldsType[] = [
		{ id: 1, stage: "start" },
		{ id: 2, stage: "develop" },
		{ id: 3, stage: "done" },
	];

	const draggingOver = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		console.log("Dragging over");
	};

	const draggingDrop = (
		e: DragEvent<HTMLDivElement> & { dataTransfer?: DataTransfer },
		item: fieldsType
	) => {
		let transferId = e.dataTransfer.getData("id");
		dispatch(stagePost({ stage: item.stage, id: transferId }));
	};

	if (data.length === 0) return <Nothing />;

	return (
		<div className={classes.wrapper}>
			{fields.map((item: fieldsType) => (
				<div key={item.id} className={classes.stages}>
					{item.stage}
					<div
						onDragOver={e => draggingOver(e)}
						onDrop={e => draggingDrop(e, item)}
						className={classes.stage}
					>
						{data &&
							data.map(
								({ id, text, isOpen, stage, isModal }: DataItems) =>
									stage === item.stage && (
										<div key={id} className={classes.content}>
											<CardItem
												text={text}
												id={id}
												handleDeletePost={handleDeletePost}
												handleIsOpen={handleIsOpen}
												handleIsModal={handleIsModal}
												stage={stage}
											/>

											<div className={classes.input}>
												<Modal isModal={isModal} />
												<EditInput text={text} id={id} isOpen={isOpen} />
											</div>
										</div>
									)
							)}
					</div>
				</div>
			))}
		</div>
	);
};

export default Card;
