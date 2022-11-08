import { createAsyncThunk } from "@reduxjs/toolkit";
export const addTodos = createAsyncThunk("todo/addTodo", async (todo) => {
  setTimeout(() => {
    console.log("test");
  }, 1000);
  return todo;
});
