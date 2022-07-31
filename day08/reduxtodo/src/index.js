import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//리덕스 설정(원리없음,리덕스에서 다 정해놓은것)
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducer/_index";

//dev-tools 미들웨어 적용
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(rootReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
