import TodoList from "../components/todolist";
import TodoTitle from "../components/todotitle";
import TodoForm from "../components/todoform";
import { useSelector } from "react-redux";

const Todo = () => {
  const { todos } = useSelector((state) => state.todo);

  return (
    <>
      <TodoTitle todos={todos} />
      <TodoForm />
      {todos.map((v) => (
        <TodoList key={v.id} todos={v} />
      ))}
    </>
  );
};
export default Todo;
