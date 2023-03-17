import { dataAPI, ResponseDataType } from "../../../services/getData";
import { Dispatch } from "redux";
import { ACType } from "../../store";
import { changeRequestStatus } from "../app-reducer/app-reducer";

const initialState: Array<ResponseDataType> = [];

export const dataReducer = (
  state = initialState,
  action: ACType
): Array<ResponseDataType> => {
  switch (action.type) {
    case "DATA-REDUCER/SET-DATA": {
      return [...state, ...action.data];
    }
    default:
      return state;
  }
};

//ACTION
export const setDataAC = (data: Array<ResponseDataType>) => {
  return { type: "DATA-REDUCER/SET-DATA", data } as const;
};
//THUNK
export const fetchData = (apiKey: string) => (dispatch: Dispatch) => {
  dispatch(changeRequestStatus("loading"));
  dataAPI.getData(apiKey).then((res) => {
    dispatch(setDataAC(res.data));
    dispatch(changeRequestStatus("succeeded"));
  });
};
//TYPE

export type SetDataType = ReturnType<typeof setDataAC>;
