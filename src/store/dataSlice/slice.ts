import type { DataItems, IData } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const LS_DATA_KEY = "ldk";

const initialState: IData = {
	data: JSON.parse(localStorage.getItem(LS_DATA_KEY) ?? "[]"),
	status: "loading",
};

const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {
		setData: (state, action: PayloadAction<DataItems[]>) => {
			state.data = action.payload;
			localStorage.setItem(LS_DATA_KEY, JSON.stringify(state.data));
		},

		addPost: (state, action: PayloadAction<DataItems>) => {
			state.data.push(action.payload);
			localStorage.setItem(LS_DATA_KEY, JSON.stringify(state.data));
		},

		removePost: (state, action: PayloadAction<string>) => {
			state.data = state.data.filter(
				(item: DataItems) => item.id !== action.payload
			);
			localStorage.setItem(LS_DATA_KEY, JSON.stringify(state.data));
		},

		stagePost: (
			state,
			action: PayloadAction<Pick<DataItems, "stage" | "id">>
		) => {
			state.data.map((item: DataItems) => {
				if (item.id === action.payload.id) {
					item.stage = action.payload.stage;
					item.id = action.payload.id;
				}
			});
			localStorage.setItem(LS_DATA_KEY, JSON.stringify(state.data));
		},

		updatePost: (
			state,
			action: PayloadAction<Pick<DataItems, "text" | "id" | "isOpen">>
		) => {
			state.data.map((item: DataItems) => {
				if (item.id === action.payload.id) {
					item.text = action.payload.text;
					item.isOpen = !item.isOpen;
				}
			});
			localStorage.setItem(LS_DATA_KEY, JSON.stringify(state.data));
		},

		isOpenPost: (state, action: PayloadAction<string>) => {
			const index = state.data.find(
				(item: DataItems) => item.id === action.payload
			);
			if (index) {
				index.isOpen = !index.isOpen;
			}
		},

		// isModalPost: (state, action: PayloadAction<string>) => {
		// 	const modal = state.data.find(
		// 		(item: DataItems) => item.id === action.payload
		// 	);
		// 	if (modal) {
		// 		modal.isModal = !modal.isModal;
		// 	}
		// },
	},
});

export const {
	removePost,
	addPost,
	// togglePost,
	updatePost,
	isOpenPost,
	stagePost,
} = dataSlice.actions;

export default dataSlice.reducer;
