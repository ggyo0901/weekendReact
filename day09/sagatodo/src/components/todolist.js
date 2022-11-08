import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { DELETE_TODO_REQUEST, EDIT_TODO_REQUEST } from "../reducer/todo";
const TodoList = ({ todos }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("");
  const onChangeText = (e) => {
    setText(e.target.value);
  };
  // const state = useSelector((state) => state.todo);
  const onRemoveClick = useCallback(() => {
    console.log(todos);
    dispatch({
      type: DELETE_TODO_REQUEST,
      payload: {
        id: todos.id,
      },
    });
  }, [dispatch, todos]);
  const clickEddit = () => {
    setEdit(true);
  };
  const onEdittoto = () => {
    dispatch({
      type: EDIT_TODO_REQUEST,
      payload: {
        id: todos.id,
        todo: text,
      },
    });
    setEdit(false);
  };
  // 실행문이 여러개일떄는 이렇게 만들어서 넣어준다

  /* 실행문으로 실행할떄는 매개변수가 있을떄 실행문으로 사용한다 */

  return (
    <div key={todos.id}>
      {edit ? (
        <textarea value={text} onChange={onChangeText}></textarea>
      ) : (
        <div key={todos.id}>{todos.todo}</div>
      )}
      <button onClick={onRemoveClick}>삭제</button>
      <button onClick={edit ? onEdittoto : clickEddit}>
        {edit ? "완료" : "수정"}
      </button>
    </div>
  );
};
export default TodoList;
