import { createAsyncThunk } from "@reduxjs/toolkit";
import { ResponseDataType, dataAPI } from "../../../services/getData";
import { AsyncThunkType } from "../../store";
import axios, { AxiosError } from "axios";

export const fetchData = createAsyncThunk<
	ResponseDataType[],
	string,
	AsyncThunkType<{ errorMessage: string }>
>("users/fetchUsers", async (apiKey, thunkAPI) => {
	try {
		const res = await dataAPI.getData(apiKey);
		console.log(res);
		return res.data;
	} catch (e) {
		console.log(e, "err");
		const err = e as Error | AxiosError<{ error: string }>;
		if (axios.isAxiosError(err)) {
			const error = err.response?.data ? err.response.data : err.message;
			return thunkAPI.rejectWithValue({ errorMessage: error });
		} else {
			return thunkAPI.rejectWithValue({
				errorMessage: `Native error ${err.message}`,
			});
		}
	}
});
