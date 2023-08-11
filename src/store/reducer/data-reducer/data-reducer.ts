import { dataAPI, ResponseDataType } from "../../../services/getData";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchData } from "./data-async-thunk";

const initialState: InitialStateType = {
	data: [],
	isLoading: false,
	errorMessage: null,
};

const slice = createSlice({
	name: "data",
	initialState,
	reducers: {
		resetErrorMessage(state, action) {
			state.errorMessage = null;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchData.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(fetchData.fulfilled, (state, action) => {
			state.isLoading = false;
			if (action.payload) state.data = action.payload;
		});
		builder.addCase(fetchData.rejected, (state, action) => {
			state.isLoading = false;
			if (action.payload) state.errorMessage = action.payload.errorMessage;
		});
	},
});

export const dataReducer = slice.reducer;
export const { resetErrorMessage } = slice.actions;

type InitialStateType = {
	data: ResponseDataType[];
	errorMessage?: string | null;
	isLoading: boolean;
};
