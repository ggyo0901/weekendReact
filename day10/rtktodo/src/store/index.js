import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducer/_index";
import logger from "redux-logger";
export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development", //true,false
  middleware: process.env.NODE_ENV === "development" && [logger], //array
});
