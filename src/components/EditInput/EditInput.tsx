import clsx from "clsx";
import { ChangeEvent, FC, useEffect, useMemo, useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { Button } from "../../shared/components/Button/Button";
import { updatePost } from "../../store/dataSlice/slice";

import classes from "./EditInput.module.scss";

interface EditInputProps {
	text: string;
	id: string;
	isOpen?: boolean;
}

export interface EditInputComponent extends FC<EditInputProps> {}

export const EditInput: EditInputComponent = ({ text, id, isOpen = false }) => {
	const [editPost, setEditPost] = useState<string>("");

	const dispatch = useAppDispatch();

	const handleEditPost = () => {
		if (editPost) dispatch(updatePost({ text: editPost, id, isOpen: false }));
	};
	const handleClearText = () => {
		setEditPost("");
	};

	useEffect(() => {
		if (text) {
			setEditPost(text);
		}
	}, [text]);

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEditPost(e.target.value);
	};

	const wrapperClassName = useMemo(
		() =>
			clsx(classes.wrapper, {
				[classes.isOpen]: isOpen,
				[classes.isNotOpen]: !isOpen,
			}),
		[isOpen]
	);

	return (
		<div className={wrapperClassName}>
			<input
				className={classes.input}
				type="text"
				placeholder="Write here you todo!"
				value={editPost}
				required
				onChange={onChange}
			/>
			<div className={classes.button}>
				<Button onClick={handleEditPost}>Edit</Button>
				<Button onClick={handleClearText}>Clear Text</Button>
			</div>
		</div>
	);
};
