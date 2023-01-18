import type { ChangeEventHandler, FC, HTMLInputTypeAttribute } from "react";

import classes from "./Input.module.scss";

export interface InputProps {
	value?: string | number;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	placeholder?: string;
	className?: string;
	type?: HTMLInputTypeAttribute;
	min?: number;
	max?: number;
	step?: number;
}

export interface InputComponent extends FC<InputProps> {}

export const Input: InputComponent = ({
	value,
	onChange,
	placeholder,
	className,
	type,
	min,
	max,
	step,
}) => {
	return (
		<div className={className}>
			<input
				className={classes.wrapper}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				min={min}
				max={max}
				step={step}
			/>
		</div>
	);
};
