import { axiosInstance } from "apis";
import { AuthApi } from "apis/authApi";
import { TodoApi } from "apis/todoAPi";

import useInput from "hooks/useinput";

const TodoForm = ({ todoList, setTodoList }) => {
  const [todo, onChangeTodo, setTodo] = useInput("");
  //
  // const onClickAddBtn = () => {
  //   /**
  //    * ? -> todo-> 성공 실패
  //    * 성공-> 어떤 결과값 -> todolist 추가
  //    *          결과값의 형태? ->json 형태의 객체
  //    *              {
  //    *                  id:db에저장된 고유번호
  //    *                  content:db에 저장된 내용
  //    *                  flag:기본값 0
  //    *                      }
  //    *
  //    *  (1) 추가되는 함수 자체를 만들어서 props
  //    *  (2) todolist,settoodlist를 props
  //    *
  //    * 실패-> alert경고창, 에러페이지 이동 (500,404=> 에러페이지)
  //    */
  //   axiosInstance
  //     .post("/todo", { content: todo })
  //     .then((res) => {
  //       if (res.status === 200) {
  //         alert("ADD TODOLIST");
  //         setTodoList([res.data.data, ...todoList]);
  //         setTodo("");
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };
  const onClickAddBtn = async () => {
    try {
      const res = await TodoApi.createTodo({ content: todo });
      console.log(1);
      if (res.status === 200) {
        setTodoList([res.data.data, ...todoList]);
        setTodo("");
        console.log(todoList);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <input value={todo} onChange={onChangeTodo} />
      <button onClick={onClickAddBtn}>추가</button>
    </>
  );
};
export default TodoForm;
