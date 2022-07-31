import TodoForm from "../components/todoform";
import TodoList from "../components/todolist";
import TodoTitle from "../components/todotitle";
import { useSelector } from "react-redux";
const Todo = () => {
  const state = useSelector((state) => state.todo);

  return (
    <>
      <TodoTitle state={state} />
      <TodoForm />
      {state.map((v) => (
        <TodoList key={v.id} state={v} />
      ))}
    </>
  );
};
export default Todo;
