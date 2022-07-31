/*
index로 적게되면 폴더까지만 경로로 가지고와도 기본경로로 읽는다 import from/reducer
_index읽지못해서 improt from /reducer/_index 로가지고와야한다
*/
import { combineReducers } from "redux";
import todo from "./todo";
const rootReducer = combineReducers({
  //합칠 리듀서 목록
  todo,
});
export default rootReducer;
