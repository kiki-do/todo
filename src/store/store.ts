import dataReducer from "./dataSlice/slice";
import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import hardSet from "redux-persist/es/stateReconciler/hardSet";
import storage from "redux-persist/es/storage";

export const rootReducer = combineReducers({
	data: dataReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;

// const persistedReducer = persistReducer(
// 	persistConfig,
// 	rootReducer
// ) as typeof rootReducer;

export const store = configureStore({
	reducer: {
		data: dataReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat([]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;
