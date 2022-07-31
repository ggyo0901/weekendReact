import { useDispatch, useSelector } from "react-redux";
import { DELETE_TODO } from "../reducer/todo";
const TodoList = ({ state }) => {
  const dispatch = useDispatch();
  // const state = useSelector((state) => state.todo);
  const onRemoveClick = (id) => {
    console.log(state);
    dispatch({
      type: DELETE_TODO,
      data: {
        id: id,
      },
    });
  };
  // 실행문이 여러개일떄는 이렇게 만들어서 넣어준다

  /* 실행문으로 실행할떄는 매개변수가 있을떄 실행문으로 사용한다 */

  return (
    <div>
      {state.id}.{state.todo}
      <button onClick={() => onRemoveClick(state.id)}>완료</button>
    </div>
  );
};
export default TodoList;
