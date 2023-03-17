import { ResponseDataType } from "../../services/getData";
import { testData } from "./testData";

const initialState: Array<ResponseDataType> = testData;

export const dataReducer = (state = initialState, action: ACType) => {
  switch (action.type) {
    default:
      return state;
  }
};

//ACTION
const setData = (data: Array<ResponseDataType>) => {
  return { type: "SET-DATA", data } as const;
};
//THUNK
//TYPE
type ACType = SetDataType;
type SetDataType = ReturnType<typeof setData>;
