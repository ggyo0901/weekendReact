import { all, delay, fork, put, takeLatest } from "redux-saga/effects";
import {
  ADD_TODO_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SCUCESS,
  DELETE_TODO_FAILURE,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SCUCESS,
  EDIT_TODO_REQUEST,
  EDIT_TODO_SCUCESS,
} from "../reducer/todo";

function* addTodo(action) {
  /*try{
        ...에러가 날수있는문장 (예외가 생길수 있는 문장)
        ..성공 하면 실행할 문장
    }catch(err){
        err..실패한 내용
        ... 싫패할 떄 실행할 문장
    }
    
    */
  try {
    delay(1000);
    yield put({
      type: ADD_TODO_SCUCESS,
      payload: action.payload, //왔던 action값을 그대로 전달, 원래라면 백엔드에게 받은 데이터 전달
    });
  } catch (err) {
    yield put({
      type: ADD_TODO_FAILURE,
      payload: { err: err.response.data },
    });
    throw new Error(err);
  }
}
/**
 * dispatch(pending,loading) -> 백엔드 통신 ->성공/실패 => dispatch( success/fullfield,faulure/reject)
 */
/*
이벤트리스너 
reducer에 action이 전달되면 
해당 action_type을 캐치
*/

function* deleteTodo(action) {
  try {
    yield put({
      type: DELETE_TODO_SCUCESS,
      payload: { id: action.payload.id },
    });
  } catch (err) {
    yield put({
      type: DELETE_TODO_FAILURE,
      payload: { err: err.response.data },
    });
    throw new Error(err);
  }
}
function* editTodo(action) {
  try {
    yield put({
      type: EDIT_TODO_SCUCESS,
      payload: { id: action.payload.id, todo: action.payload.todo },
    });
  } catch (err) {}
}
function* watchAddTodo() {
  yield takeLatest(ADD_TODO_REQUEST, addTodo);
}
function* watchDeleteTodo() {
  yield takeLatest(DELETE_TODO_REQUEST, deleteTodo);
}
function* watchEditTodo() {
  yield takeLatest(EDIT_TODO_REQUEST, editTodo);
}

export default function* todoSaga() {
  yield all([fork(watchAddTodo), fork(watchDeleteTodo), fork(watchEditTodo)]);
}
