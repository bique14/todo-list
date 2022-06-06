import { createStore, combineReducers } from "redux";
import { buttonReducers } from "./button/reducers";
import { noteReducers } from "./note/reducers";

const store = createStore(
  combineReducers({
    button: buttonReducers,
    note: noteReducers,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
