import { ACType } from "../../store";

const initialState: InitialStateType = {
  status: "idle",
};

export const appReducer = (state = initialState, action: ACType) => {
  switch (action.type) {
    case "APP-REDUCER/CHANGE-STATUS-REQUEST": {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
};

export const changeRequestStatus = (status: RequestStatusType) => {
  return { type: "APP-REDUCER/CHANGE-STATUS-REQUEST", status } as const;
};

export type ChangeRequestStatusType = ReturnType<typeof changeRequestStatus>;
export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed";
type InitialStateType = {
  status: RequestStatusType;
};
