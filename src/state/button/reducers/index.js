import { submitReducer } from "./submit";
import { onDoneReducer } from "./onDone";
import { initialState } from "./init";

export const buttonReducers = (state = initialState, action) => {
  switch (action.type) {
    case "button/SUBMIT":
      return submitReducer(state, action);
    case "button/ON_DONE":
      return onDoneReducer(state, action);
    default:
      return state;
  }
};
