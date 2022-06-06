import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import { buttonReducers } from "./button/reducers";
import { noteReducers } from "./note/reducers";
import { buttonEffects } from "./button/effects";
import { noteEffects } from "./note/effects";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    button: buttonReducers,
    note: noteReducers,
  }),
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

buttonEffects.forEach((fx) => sagaMiddleware.run(fx));
noteEffects.forEach((fx) => sagaMiddleware.run(fx));

export { store };
