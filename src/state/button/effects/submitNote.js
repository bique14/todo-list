import { take, put } from "redux-saga/effects";
import { buttonActions } from "../actions";
import { noteActions } from "../../note/actions";

export function* submitNoteEffect() {
  while (true) {
    const action = yield take(buttonActions.submitValue.id);
    yield put(noteActions.createNewNote(action.payload));
  }
}
