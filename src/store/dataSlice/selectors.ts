import { RootReducer, RootState } from "./../store";

export const dataSelector = (state: RootReducer) => state.data.data;
