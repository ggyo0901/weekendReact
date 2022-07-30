import { useCallback, useState } from "react";
import styled from "styled-components";
const TodoForm = ({ onAddHandler, id }) => {
  const [todo, setTodo] = useState("");
  const onAddState = useCallback(() => {
    onAddHandler(id + 1, todo);
    setTodo("");
  }, [id, todo, setTodo, onAddHandler]);
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
