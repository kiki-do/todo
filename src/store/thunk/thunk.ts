import { DataItems } from "./../dataSlice/types";
import { BASE_URL, HEROKU_URL } from "./../const";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk<DataItems[]>(
	"todo/fetchData",
	async () => {
		const responce = await axios.get(BASE_URL);
		return responce.data;
	}
);
