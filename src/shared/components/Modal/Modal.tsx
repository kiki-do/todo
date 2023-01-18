import { ChangeEvent, useMemo } from "react";
import type { FC, Dispatch, SetStateAction } from "react";

import classes from "./Modal.module.scss";
import clsx from "clsx";
import { Button } from "../Button/Button";
import { ExtendsAdd } from "../ExtendsAdd/ExtendsAdd";

export interface ModalProps {
	isModal: boolean;
	handleIsModal?: () => void;
	title?: string;
	onChangeText?: (e: ChangeEvent<HTMLInputElement>) => void;
	onChangeTitle?: (e: ChangeEvent<HTMLInputElement>) => void;
	text?: string;
	setText?: Dispatch<SetStateAction<string>>;
	value?: number;
	setValue?: Dispatch<SetStateAction<number>>;
	onChangeValue?: (e: ChangeEvent<HTMLInputElement>) => void;
	handleAddPost?: () => void;
}

export interface ModalComponent extends FC<ModalProps> {}

export const Modal: ModalComponent = ({
	isModal = false,
	handleIsModal,
	title,
	onChangeText,
	text,
	onChangeTitle,
	value,
	handleAddPost,
	onChangeValue,
}) => {
	const wrapperClassName = useMemo(
		() =>
			clsx(classes.wrapper, {
				[classes.isModal]: isModal,
			}),
		[isModal]
	);
	return (
		<div className={wrapperClassName}>
			<div
				className={classes.content}
				onClick={event => event.stopPropagation()}
			>
				<Button.Icon onClick={handleIsModal} name="remove" />
				<ExtendsAdd
					className={classes.extends}
					title={title}
					text={text}
					onChangeText={onChangeText}
					onChangeTitle={onChangeTitle}
					value={value}
					onChangeValue={onChangeValue}
					handleAddPost={handleAddPost}
				/>
			</div>
		</div>
	);
};
