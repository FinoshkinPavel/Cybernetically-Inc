import {
	AnyAction,
	Dispatch,
	applyMiddleware,
	combineReducers,
	legacy_createStore,
} from "redux";
import { dataReducer } from "./reducer/data-reducer/data-reducer";
import thunk, { ThunkDispatch, ThunkMiddleware } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
	data: dataReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});

export type AppStoreType = ReturnType<typeof rootReducer>;
export type AppDispatchType = ThunkDispatch<AppStoreType, void, AnyAction>;

export type AsyncThunkType<RV> = {
	state: AppStoreType;
	dispatch: Dispatch;
	rejectValue: RV;
	serializedErrorType?: unknown;
	pendingMeta?: unknown;
	fulfilledMeta?: unknown;
	rejectedMeta?: unknown;
	extra?: { s: string; n: number };
};
