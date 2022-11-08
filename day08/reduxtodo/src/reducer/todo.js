const initialState = [
  {
    id: 1,
    todo: "리액트",
  },
  {
    id: 2,
    todo: "리액트 공부하기",
  },
];
export const INSERT_TODO = "INSERT_TODO";
export const DELETE_TODO = "DELETE_TODO"; //실습
export const EDDIT_TODO = "EDDIT_TODO";

const todo = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_TODO:
      return [...state, { id: action.data.id, todo: action.data.todo }];
    case DELETE_TODO:
      return state.filter((item) => item.id !== action.payload.id);
    case EDDIT_TODO:
      const todo = state.find((item) => item.id === action.payload.id);
      todo.todo = action.payload.todo;
      return state;
    default:
      return state;
  }
};
export default todo;
