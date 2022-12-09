import { ChangeEvent, useState } from "react";
import type { FC } from "react";
import { Button } from "../../shared/components/Button/Button";
import { addPost } from "../../store/dataSlice/slice";
import classes from "./Input.module.scss";
import { useAppDispatch } from "../../hooks/useAppDispatch";

export const Input: FC = () => {
	const dispatch = useAppDispatch();
	const [newPost, setNewPost] = useState<string>("");

	const handleAddPost = async () => {
		if (newPost) {
			dispatch(
				addPost({
					id: Date.now().toString(),
					text: newPost,
					isOpen: false,
					isModal: false,
					stage: "start",
				})
			);

			setNewPost("");
		}
	};

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNewPost(e.target.value);
	};

	return (
		<div className={classes.wrapper}>
			<input
				className={classes.input}
				type="text"
				placeholder="Write here you todo!"
				value={newPost}
				onChange={onChange}
			/>
			<Button onClick={handleAddPost}>Add post</Button>
		</div>
	);
};
