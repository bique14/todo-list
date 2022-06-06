import { take, put, call } from "redux-saga/effects";
import { buttonActions } from "../actions";
import { noteActions } from "../../note/actions";
import { uid } from "../../../lib/uid";

export function* submitNoteEffect() {
  while (true) {
    const action = yield take(buttonActions.submitValue.id);
    const id = yield call(uid);
    yield put(noteActions.createNewNote({ ...action.payload, id }));
  }
}
