import { ResponseDataType } from "../../../services/getData";
import { dataReducer, setDataAC } from "./data-reducer";
import { testData } from "./testData";

let state: Array<ResponseDataType>;

beforeEach(() => {
  state = [];
});

test("testing action_SET-DATA from data-reducer ", () => {
  const action = setDataAC(testData);
  const newState = dataReducer(state, action);
  expect(newState.length).toBe(100);
});
