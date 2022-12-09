export interface IData {
	data: DataItems[];
	status: "loading" | "success" | "error";
}

export type DataItems = {
	id: string;
	text: string;
	stage: string;
	isOpen: boolean;
	isModal: boolean;
};
