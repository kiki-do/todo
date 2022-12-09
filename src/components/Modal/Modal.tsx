import { PropsWithChildren, useMemo } from "react";
import clsx from "clsx";
import type { FC, ReactNode } from "react";
import classes from "./Modal.module.scss";

export interface ModalProps extends PropsWithChildren {
	isModal: boolean;
}

export interface ModalComponent extends FC<ModalProps> {}

export const Modal: ModalComponent = ({ isModal, children }) => {
	const wrapperClassName = useMemo(
		() =>
			clsx(classes.wrapper, {
				[classes.active]: isModal,
			}),
		[isModal]
	);

	return (
		<div className={wrapperClassName}>
			<div className={classes.content} onClick={e => e.stopPropagation}>
				{children}
			</div>
		</div>
	);
};
