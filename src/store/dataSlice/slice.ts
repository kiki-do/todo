import { getDataFromLS } from "../../shared/getDataFromLS/getDataFromLS";
import type { DataItems, IData } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IData = {
	data: getDataFromLS(),
	status: "loading",
};

const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {
		setData: (state, action: PayloadAction<DataItems[]>) => {
			state.data = action.payload;
		},

		addPost: (state, action: PayloadAction<DataItems>) => {
			state.data.push(action.payload);
		},

		removePost: (state, action: PayloadAction<string>) => {
			state.data = state.data.filter(
				(item: DataItems) => item.id !== action.payload
			);
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
		},

		isOpenPost: (state, action: PayloadAction<string>) => {
			const index = state.data.find(
				(item: DataItems) => item.id === action.payload
			);
			if (index) {
				index.isOpen = !index.isOpen;
			}
		},

		isModalPost: (state, action: PayloadAction<string>) => {
			const modal = state.data.find(
				(item: DataItems) => item.id === action.payload
			);
			if (modal) {
				modal.isModal = !modal.isModal;
			}
		},

		// togglePost: (state, action: PayloadAction<string>) => {
		// 	const index = state.data.find(
		// 		(item: DataItems) => item.id === action.payload
		// 	);
		// 	if (index) {
		// 		index.complete = !index.complete;
		// 	}
		// },
	},
	// extraReducers: builder => {
	// 	builder.addCase(fetchData.pending, state => {
	// 		state.status = "loading";
	// 		state.data = [];
	// 	});

	// 	builder.addCase(
	// 		fetchData.fulfilled,
	// 		(state, action: PayloadAction<DataItems[]>) => {
	// 			state.status = "success";
	// 			state.data = action.payload;
	// 		}
	// 	);
	// 	builder.addCase(fetchData.rejected, state => {
	// 		state.status = "error";
	// 		state.data = [];
	// 	});
	// },
});

export const {
	removePost,
	addPost,
	// togglePost,
	updatePost,
	isOpenPost,
	stagePost,
	isModalPost,
} = dataSlice.actions;

export default dataSlice.reducer;
