export interface IData {
	data: DataItems[];
	status: "loading" | "success" | "error";
}

export type DataItems = {
	id: string;
	title: string;
	text: string;
	stage: string;
	order: string;
	isOpen: boolean;
	isModal: boolean;
};
