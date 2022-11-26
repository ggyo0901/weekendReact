import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addTodos = createAsyncThunk("todo/addTodo", (todo) => {
  try {
    setTimeout(() => {
      console.log("test");
      return todo;
    }, 1000);
  } catch (err) {
    console.error(err);
    return err;
  }
});

const initialState = {
  todos: [
    {
      id: 2,
      todo: "리엑트 공부하기",
    },
    {
      id: 1,
      todo: "리엑트 또 공부하기",
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
      //loading: true;
      //done: false;
      //err: null
    });

    builder.addCase(addTodos.fulfilled, (state, action) => {
      //loading: false;
      //done: true;
      //err: null
      state.todos.unshift(action.payload);
    });

    builder.addCase(addTodos.rejected, (state, action) => {
      //loading: false;
      //done: true;
      //err: action.payload.err
    });
  },
});

export const { addtodo, removetodo, updatetodo } = todoSlice.actions;

/* 
    일반 redux에서도 create action이라는 기능이 있으나 오히려 가 더 길어진다는 점에서
    사용하기 꺼려함

    redux toolkit 이러한 creat action의 문제를 slice.actions로 해결
    액션명이 함수 형태가 그리고 그 매개변수가 payload로 action에 전달

    ex)

    dispatch({
        type: addtodo,
        payload: 데이터
    })

    🔻

    dispatch( addtodo(액션.type) ( (액션.payload)로 전달될 데이터 ) )
    dispttch(addtodo({id,todo}))

*/
