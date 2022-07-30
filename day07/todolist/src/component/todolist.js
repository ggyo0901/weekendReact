const TodoList = ({ onRemoveHandler, state }) => {
  const onRemoveClick = () => {
    onRemoveHandler(state.id);
  };
  // 실행문이 여러개일떄는 이렇게 만들어서 넣어준다

  /* 실행문으로 실행할떄는 매개변수가 있을떄 실행문으로 사용한다 */

  return (
    <div>
      {state.id}.{state.todo}
      <button onClick={onRemoveClick}>완료</button>
    </div>
  );
};
export default TodoList;
