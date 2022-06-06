import { decreaseValueReducer } from "./decreaseValue";
import { increaseValueReducer } from "./increaseValue";
import { initialState } from "./init";

export const buttonReducers = (state = initialState, action) => {
  switch (action.type) {
    case "button/INCREASE_VALUE":
      return increaseValueReducer(state, action);
    case "button/DECREASE_VALUE":
      return decreaseValueReducer(state, action);
    default:
      return state;
  }
};
