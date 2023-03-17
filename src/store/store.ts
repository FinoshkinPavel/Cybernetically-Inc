import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { dataReducer, SetDataType } from "./reducer/data-reducer/data-reducer";
import thunk, { ThunkMiddleware } from "redux-thunk";
import {
  appReducer,
  ChangeRequestStatusType,
} from "./reducer/app-reducer/app-reducer";

const rootReducer = combineReducers({
  data: dataReducer,
  requestStatus: appReducer,
});

const mw: ThunkMiddleware<AppStoreType, ACType> = thunk;

export const store = legacy_createStore(rootReducer, applyMiddleware(mw));
export type AppStoreType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type ACType = SetDataType | ChangeRequestStatusType;
