import { useCallback, useState } from "react";
import TodoForm from "../component/todoform";
import TodoList from "../component/todolist";
import TodoTitle from "../component/todotitle";

const Todo = () => {
  const [state, setState] = useState([
    {
      id: 1,
      todo: "리액트 공부하기",
    },
    {
      id: 2,
      todo: "리액트 또 공부하기",
    },
  ]);
  const onAddHandler = useCallback(
    (id, todo) => {
      setState([...state, { id: id, todo: todo }]);
    },
    [state]
  );
  const onRemoveHandler = useCallback(
    (id) => {
      const removeState = state.filter((itme) => itme.id !== id);
      setState(removeState);
    },
    [state]
  );
  return (
    <>
      <TodoTitle state={state} />
      <TodoForm
        onAddHandler={onAddHandler}
        id={state.length > 0 && state[state.length - 1].id}
      />
      {state.map((v) => (
        <TodoList onRemoveHandler={onRemoveHandler} key={v.id} state={v} />
      ))}
    </>
  );
};
export default Todo;
