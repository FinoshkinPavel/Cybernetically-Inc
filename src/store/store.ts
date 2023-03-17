import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { dataReducer } from "./reducer/data-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  data: dataReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export type AppStoreType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
