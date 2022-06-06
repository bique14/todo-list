import { take, put } from "redux-saga/effects";
import { buttonActions } from "../actions";
import { noteActions } from "../../note/actions";

export function* doneNoteEffect() {
  while (true) {
    const action = yield take(buttonActions.onDone.id);
    yield put(noteActions.doneNote(action.payload));
  }
}
