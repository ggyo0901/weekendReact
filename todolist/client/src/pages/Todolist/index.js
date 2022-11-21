import { axiosInstance } from "apis";
import { TodoApi } from "apis/todoAPi";

import { useEffect, useState } from "react";
import TodoForm from "./components/form/form";
import Todo from "./components/todo/todo";

const TodoListPage = () => {
  /**자바스크립트 빌트인 객체(전역객체에 포함)
   * 빌트인 객체?
   *    자바스크립트 내장된 함수들이 저장된 객체
   *        ex) console,Math,String,Number,Object,....
   *
   */
  const [todoList, setTodoList] = useState([]);

  //페이지가 처음 열렸을 때
  //백엔드에게 요청 --> 투두리스트 줘

  // useEffect(() => {
  //   axiosInstance
  //     .get("/todo")
  //     .then((res) => {
  //       if (res.status === 200) {
  //         setTodoList(res.data.data);
  //       }
  //     })
  //     .catch((err) => console.log(err.response.data));
  // }, []);
  useEffect(() => {
    handler();
  }, []);
  const handler = async () => {
    const res = await TodoApi.getTodo();
    try {
      if (res.status === 200) {
        setTodoList(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {todoList.map((v) => (
        <Todo
          key={v.id}
          todo={v}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
      <TodoForm todoList={todoList} setTodoList={setTodoList} />
    </>
  );
};
export default TodoListPage;
