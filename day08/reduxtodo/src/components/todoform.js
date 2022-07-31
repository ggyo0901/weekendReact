import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { INSERT_TODO } from "../reducer/todo";
const TodoForm = () => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();
  const state = useSelector((state) => state.todo);
  //리듀서에있는것을 state를다가져온다 그중에 todo를불러온다
  /*
  rootReducer 설정 (reducer 들을 combine(합친)한다)
  => 리덕스설정에서 store에 매개변수로 전달
  => Provider에 store를 전달

  =>useSelector((state)<--결과값이 reducer에서 만든 모든 state들중에서 내가원하는 reducer의 state들이 전달되고 그중에서 하위선택자를 이용 내가 원하는 reducer의 state를 가지고 올수있다)
   */
  const onAddState = useCallback(() => {
    console.log(state);
    dispatch({
      type: INSERT_TODO,
      data: {
        id: state[state.length - 1].id + 1,
        todo: todo,
      },
    });
    setTodo("");
  }, []);
  const onChangeTodo = useCallback(
    (e) => {
      setTodo(e.target.value);
    },
    [setTodo]
  );
  return (
    <div>
      <TodoaddInput
        value={todo}
        onChange={onChangeTodo}
        type="text"
        placeholder="할 일을 적어주세요"
      />
      <TodoButton onClick={onAddState}>추가</TodoButton>
    </div>
  );
};
export default TodoForm;

const TodoaddInput = styled.input`
  border-radius: 5px;
  width: 500px;
  font-size: 32px;
  position: relative;
  padding-left: 20px;
`;

const TodoButton = styled.button`
  border-radius: 5px;
  width: 53px;
  height: 43px;
  position: absolute;
`;
