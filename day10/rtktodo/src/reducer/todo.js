import { createSlice } from "@reduxjs/toolkit";
import { addTodos } from "../store/todo";

const initialState = {
  todos: [
    {
      id: 2,
      todo: "리액트",
    },
    {
      id: 1,
      todo: "java",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      state.todos.unshift(action.payload);
    },
    removetodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload.id);
    },
    updatetodo: (state, action) => {
      const todo = state.todos.find((item) => item.id === action.payload.id);
      todo.todo = action.payload.todo;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addTodos.pending, (state, action) => {
      //로딩중일떄
      /**
       * loading :true;
       * done:false;
       * err:null
       */
    });
    builder.addCase(addTodos.fulfilled, (state, action) => {
      //성공했을때
      /**
       * loading :false;
       * done:true;
       * err:null
       */
      state.todos.unshift(action.payload);
    });
    builder.addCase(addTodos.rejected, (state, action) => {
      //실패
      /**
       * loading :false;
       * done:true;
       * err:action.payload.err
       */
    });
  },
});

export const { addtodo, removetodo, updatetodo } = todoSlice.actions;

/**
 * 일반 redux에서도 create action이라는 기능이 있으나 오히려 더 길어진다는 점에서 사용하기 꺼려함
 * redux toolkit이러한 create action의 문제를 slice.actions로 해결
 * 액현명이 함수 형태가 그리고 그 매개변수가 payload로 action에 전달
 *
 * ex)
 * dispatch(addtodo(액션명)(payload로 전달될 데이터))
 * payload로에 객체가전달될경우 {}사용
 *
 */
