import { useCallback, useState } from "react";
import type { FC, ChangeEvent, SetStateAction, Dispatch } from "react";
import { Button } from "../../shared/components/Button/Button";
import { addPost } from "../../store/dataSlice/slice";
import classes from "./AddPost.module.scss";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { Modal } from "../../shared/components/Modal/Modal";

export interface AddPostProps {
	isModal: boolean;
	setIsModal: Dispatch<SetStateAction<boolean>>;
}

export interface AddPostComponent extends FC<AddPostProps> {}

export const AddPost: AddPostComponent = ({ isModal, setIsModal }) => {
	const dispatch = useAppDispatch();
	const [newPost, setNewPost] = useState<string>("");
	const [newTitle, setNewTitle] = useState<string>("");
	const [value, setValue] = useState(1);
	const handleIsModal = useCallback(() => {
		setIsModal(!isModal);
		if (isModal === true) {
			setNewPost("");
			setNewTitle("");
		}
	}, [setIsModal, isModal]);

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
					order: value,
				})
			);

			setIsModal(false);

			setNewPost("");
			setNewTitle("");
		}
	};

	const onChangeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setNewTitle(e.target.value);
	}, []);

	const onChangePost = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setNewPost(e.target.value);
	}, []);

	const onChangeValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setValue(Number(e.target.value));
	}, []);

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
			<Modal
				isModal={isModal}
				text={newPost}
				onChangeText={onChangePost}
				title={newTitle}
				onChangeTitle={onChangeTitle}
				handleIsModal={handleIsModal}
				value={value}
				onChangeValue={onChangeValue}
				handleAddPost={handleAddPost}
			/>
			<Button onClick={handleAddPost}>Add post</Button>
			<Button onClick={handleIsModal}>Made extends</Button>
		</div>
	);
};
