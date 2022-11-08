import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "../saga";
import rootReducer from "../reducer/_index";
const logger = createLogger();
// 로거 생성
const sagaMiddleware = createSagaMiddleware();
//사가 생성

const createConfigure = () => {
  const store = createStore(
    rootReducer,
    process.env.NODE_ENV === "development"
      ? composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
      : applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
export default createConfigure;
