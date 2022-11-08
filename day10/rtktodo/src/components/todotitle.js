import "./todotitle.css";
const TodoTitle = ({ todos }) => {
  return (
    <div className="navBar">
      할 일 목록 리스트 <span>{todos.length}</span>개
    </div>
  );
};
export default TodoTitle;
