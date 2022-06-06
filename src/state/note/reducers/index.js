import { createNewNote } from "./createNewNote";
import { doneNote } from "./doneNote";
import { initialState } from "./init";

export const noteReducers = (state = initialState, action) => {
  switch (action.type) {
    case "note/CREATE_NEW_NOTE":
      return createNewNote(state, action);
    case "note/DONE_NOTE":
      return doneNote(state, action);
    default:
      return state;
  }
};
