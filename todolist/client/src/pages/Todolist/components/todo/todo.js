import { axiosInstance } from "apis";
import { AuthApi } from "apis/authApi";
import { TodoApi } from "apis/todoAPi";

import useInput from "hooks/useinput";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { TokenRepository } from "repository/tokenRepository";
import styled from "styled-components";

const Todo = ({ todo, todoList, setTodoList }) => {
  /**
   * flag= true 나 false값이 바뀌면서 완료,미완료 변경
   * 삭제= 그 id에 맞는 글 삭제
   *  수정= content내용 수정할수있게 input으로 변경 value값에 todo.content값넣어서 본문도 input에 나올수있게함 onchange를 써서 바뀐값이 content에 들어갈수있게 만듬
   */
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);
  const [newTodo, onChangeNewTodo, setNewTodo] = useInput(todo.content);
  const onChangeEdit = () => {
    setEdit(true);
  };
  // const onDelete = () => {
  //   //어떤값을? =>id값
  //   //결과값 -> 성공, 실패
  //   //성공 -> 백엔드 응답값?(삭제한 todo의 id) -> filter(id)
  //   //실패 -> 이미없는 todo 입니다. <---error=> alert(modal)
  //   axiosInstance
  //     .delete(`/todo/${todo.id}`)
  //     .then((res) => {
  //       if (res.status === 200) {
  //         //tddolist.pop()=>원본훼손
  //         //todolist.filter =>단지 보여주는것 제거된 배열을
  //         //제거된 새로운 배열을 변수에 담는 것 (깊은 복사)
  //         const todoList_d = todoList.filter(
  //           (todo) => todo.id !== res.data.data
  //         );
  //         setTodoList(todoList_d);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };

  const onDelete = async () => {
    try {
      const res = await TodoApi.deleteTodo({ id: todo.id });

      const todoList_d = todoList.filter((v) => v.id !== res.data.data);
      setTodoList(todoList_d);
    } catch (err) {
      console.log(err);
    }
  };
  // const onUpdate = async () => {
  //   /*
  //   어떤값?
  //   id,content,flag => 어떤값이 응답?
  //   => find(id), 찾은 state의 content,flag값 수정

  //   */
  //   if (todo.content === newTodo) {
  //     // alert("변한 내용이 없습니다");
  //     return setEdit(false);
  //   }
  //   const data = {
  //     content: newTodo,
  //     flag: todo.flag,
  //   };
  //   axiosInstance
  //     .put(`/todo/${todo.id}`, data)
  //     .then((res) => {
  //       if (res.status === 200) {
  //         const { data } = res.data;
  //         const newTodoList = [...todoList];
  //         let todo = newTodoList.find((todo) => todo.id === data.id);
  //         todo.content = data.content;

  //         setTodoList(newTodoList);
  //         setEdit(false);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };
  const onUpdate = async () => {
    /*
    어떤값?
    id,content,flag => 어떤값이 응답?
    => find(id), 찾은 state의 content,flag값 수정


    */
    if (todo.content === newTodo) {
      // alert("변한 내용이 없습니다");
      return setEdit(false);
    }
    const data = {
      id: todo.id,
      content: newTodo,
      flag: todo.flag,
    };
    // axiosInstance
    //   .put(`/todo/${todo.id}`, data)
    //   .then((res) => {
    //     if (res.status === 200) {
    //       const { data } = res.data;
    //       const newTodoList = [...todoList];
    //       let todo = newTodoList.find((todo) => todo.id === data.id);
    //       todo.content = data.content;

    //       setTodoList(newTodoList);
    //       setEdit(false);
    //     }
    //   })
    //   .catch((err) => console.log(err));
    try {
      await TodoApi.updateTodo({ data });

      const newTodoList = [...todoList];
      let todo = newTodoList.find((todo) => todo.id === data.id);
      todo.content = data.content;
      setTodoList(newTodoList);
      setEdit(false);
    } catch (err) {
      console.log(err);
    }
  };
  // const onUpdateFlag = () => {
  //   const data = {
  //     content: todo.content,
  //     flag: !todo.flag,
  //   };
  //   axiosInstance
  //     .put(`/todo/${todo.id}`, data)
  //     .then((res) => {
  //       if (res.status === 200) {
  //         const { data } = res.data;
  //         const newTodoList = [...todoList];
  //         let todo = newTodoList.find((todo) => todo.id === data.id);
  //         todo.flag = data.flag;

  //         setTodoList(newTodoList);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };
  const onUpdateFlag = async () => {
    const data = {
      id: todo.id,
      content: todo.content,
      flag: !todo.flag,
    };
    try {
      await TodoApi.updateTodo({ data });

      const newTodoList = [...todoList];
      let todo = newTodoList.find((todo) => todo.id === data.id);
      todo.flag = data.flag;
      setTodoList(newTodoList);
      setEdit(false);
    } catch (err) {
      console.log(err);
    }
  };
  const logoutBtn = async () => {
    try {
      TokenRepository.removeToken();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <button onClick={logoutBtn}>로그아웃</button>
      <S.Wrapper>
        <div onClick={onUpdateFlag}>{todo.flag ? "완료" : "미완료"}</div>
        <div>
          {edit ? (
            <textarea value={newTodo} onChange={onChangeNewTodo}></textarea>
          ) : (
            todo.content
          )}
        </div>
        <button onClick={onDelete}>삭제</button>
        {edit ? (
          <button onClick={onUpdate}>완료</button>
        ) : (
          <button onClick={onChangeEdit}>수정</button>
        )}
        {/* 
      <button onClick={onChangeEdit}>{edit ? "완료" : "수정"}</button> */}
      </S.Wrapper>
    </>
  );
};
export default Todo;

const Wrapper = styled.div`
  display: flex;
  margin: 8px 0;
`;
const S = {
  Wrapper,
};
