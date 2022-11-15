import { todoApi } from './todoApi';
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
  reducer:{
    [todoApi.reducerPath]: todoApi.reducer,
  },

  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(todoApi.middleware),
})

