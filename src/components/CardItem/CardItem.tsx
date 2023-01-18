import clsx from "clsx";
import { useMemo } from "react";
import type { FC } from "react";
import { Button } from "../../shared/components/Button/Button";
import classes from "./CardItem.module.scss";

interface CardItemProps {
	id: string;
	title: string;
	text: string;
	stage: string;
	order: number;
	handleDeletePost: (id: string) => void;
	handleIsOpen: (id: string) => void;
}

export interface CardItemComponent extends FC<CardItemProps> {}

export interface IIcons {
	id?: string;
	name: "done" | "edit" | "trash";
	size?: number;
	handles: () => void;
}

export const CardItem: CardItemComponent = ({
	id,
	title,
	text,
	order,
	stage,
	handleDeletePost,

	handleIsOpen,
}) => {
	/* Значения для кнопок иконок */
	const icons: IIcons[] = [
		{
			id: "1",
			name: "trash",
			size: 24,
			handles: () => handleDeletePost(id),
		},
		{
			id: "2",
			name: "edit",
			size: 14,
			handles: () => handleIsOpen(id),
		},
	];

	const wrapperClassName = useMemo(
		() =>
			clsx(classes.wrapper, {
				[classes.complete]: stage === "done",
				[classes.low]: order === 1,
				[classes.medium]: order === 2,
				[classes.high]: order === 3,
			}),
		[stage, order]
	);

	const dragStarted = (e: any, id: string) => {
		console.log("Drag is started", id);
		e.dataTransfer.setData("id", id);
	};

	return (
		<div
			className={wrapperClassName}
			// onClick={() => handleIsModal(id)}
			draggable
			onDragStart={e => dragStarted(e, id)}
		>
			<div className={classes.title} data-content-editable-leaf="true">
				{title}
			</div>
			<div className={classes.text}>{text}</div>
			{icons.map(({ id, name, size, handles }: IIcons) => (
				/* Исправить тип для масива объектов */

				<Button.Icon
					key={id}
					className={classes.icon}
					name={name}
					size={size}
					onClick={handles}
				/>
			))}
		</div>
	);
};
