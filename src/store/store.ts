import dataReducer from "./dataSlice/slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
		data: dataReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
