import { ChangeEvent, useState } from "react";
import type { FC } from "react";
import { Button } from "../../shared/components/Button/Button";
import { addPost } from "../../store/dataSlice/slice";
import classes from "./Input.module.scss";
import { useAppDispatch } from "../../hooks/useAppDispatch";

export const Input: FC = () => {
	const dispatch = useAppDispatch();
	const [newPost, setNewPost] = useState<string>("");
	const [newTitle, setNewTitle] = useState<string>("");

	const handleAddPost = async () => {
		if (newPost || newTitle) {
			dispatch(
				addPost({
					id: Date.now().toString(),
					title: newTitle,
					text: newPost,
					isOpen: false,
					isModal: false,
					stage: "start",
					order: "low",
				})
			);

			setNewPost("");
			setNewTitle("");
		}
	};

	const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
		setNewTitle(e.target.value);
	};

	const onChangePost = (e: ChangeEvent<HTMLInputElement>) => {
		setNewPost(e.target.value);
	};

	return (
		<div className={classes.wrapper}>
			<input
				className={classes.input}
				type="text"
				placeholder="Write here you title!"
				value={newTitle}
				onChange={onChangeTitle}
			/>

			<input
				className={classes.input}
				type="text"
				placeholder="Write here you todo!"
				value={newPost}
				onChange={onChangePost}
			/>
			<Button onClick={handleAddPost}>Add post</Button>
		</div>
	);
};
