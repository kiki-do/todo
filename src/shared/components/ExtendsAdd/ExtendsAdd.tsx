import type { FC, ChangeEventHandler } from "react";
import { Button } from "../Button/Button";

import { Input } from "../Input/Input";

import classes from "./ExtendsAdd.module.scss";

export interface ExtendsAddProps {
	title?: string;
	onChangeTitle?: ChangeEventHandler<HTMLInputElement>;
	text?: string;
	onChangeText?: ChangeEventHandler<HTMLInputElement>;
	className?: string;
	value?: number;
	onChangeValue?: ChangeEventHandler<HTMLInputElement>;
	handleAddPost?: () => void;
}

export interface ExtendsAddComponent extends FC<ExtendsAddProps> {}

export const ExtendsAdd: ExtendsAddComponent = ({
	title,
	text,
	onChangeText,
	onChangeTitle,
	onChangeValue,
	className,
	handleAddPost,
	value,
}) => {
	return (
		<div className={className}>
			<div className={classes.wrapper}>
				<h2>Extends Add</h2>
				<form className={classes.form}>
					<Input
						value={title}
						onChange={onChangeTitle}
						placeholder="your title..."
					/>
					<Input
						value={text}
						onChange={onChangeText}
						placeholder="your text..."
					/>

					<Input
						type="range"
						min={1}
						max={3}
						step={1}
						value={value}
						onChange={onChangeValue}
					/>
					<datalist id="range">
						<option value={1} label="low" />
						<option value={2} label="medium" />
						<option value={3} label="important" />
					</datalist>
				</form>
				<Button className={classes.button} onClick={handleAddPost}>
					Add Post
				</Button>
			</div>
		</div>
	);
};
