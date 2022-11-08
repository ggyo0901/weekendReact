import produce from "immer";

const initialState = {
  todos: [
    {
      id: 2,
      todo: "리액트",
    },
    {
      id: 1,
      todo: "리액트 공부하기",
    },
  ],

  addtodo: {
    loading: false,
    done: false,
    err: null,
  },
  deletetodo: {
    loading: false,
    done: false,
    err: null,
  },
  edittodo: {
    loading: false,
    done: false,
    err: null,
  },
};
export const INSERT_TODO = "INSERT_TODO";
export const DELETE_TODO = "DELETE_TODO"; //실습
export const EDDIT_TODO = "EDDIT_TODO";

export const ADD_TODO = "todo/ADD_TODO";
export const ADD_TODO_REQUEST = "todo/ADD_TODO_REQUEST";
export const ADD_TODO_SCUCESS = "todo/ADD_TODO_SCUCESS";
export const ADD_TODO_FAILURE = "todo/ADD_TODO_FAILURE";
//delete
export const DELETE_TODO_REQUEST = "todo/DELETE_TODO_REQUEST";
export const DELETE_TODO_SCUCESS = "todo/DELETE_TODO_SCUCESS";
export const DELETE_TODO_FAILURE = "todo/DELETE_TODO_FAILURE";
//edit
export const EDIT_TODO_REQUEST = "todo/EDIT_TODO_REQUEST";
export const EDIT_TODO_SCUCESS = "todo/EDIT_TODO_SCUCESS";
export const EDIT_TODO_FAILURE = "todo/EDIT_TODO_FAILURE";

const todo = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_TODO_REQUEST:
        /**
         * loading:true
         * done: false
         * err: null
         */
        draft.addtodo.loading = true;
        draft.addtodo.done = false;
        draft.addtodo.err = null;
        break;
      case ADD_TODO_SCUCESS:
        /**
         * loading:flase
         * done:true
         * err:null
         * */
        draft.addtodo.loading = false;
        draft.addtodo.done = true;
        draft.addtodo.err = null;
        draft.todos.unshift(action.payload);
        break;
      //unshift=맨위에 추가하는 명령어

      case ADD_TODO_FAILURE:
        /**
         * loading:false
         * done(실행이끝났나):true
         * err:action.payload.err
         */
        draft.addtodo.loading = false;
        draft.addtodo.done = true;
        draft.addtodo.err = action.payload.err;

        break;
      case DELETE_TODO_REQUEST:
        draft.deletetodo.loading = true;
        draft.deletetodo.done = false;
        draft.deletetodo.err = null;
        break;
      case DELETE_TODO_SCUCESS:
        draft.deletetodo.loading = false;
        draft.deletetodo.done = true;
        draft.deletetodo.err = null;
        draft.todos = draft.todos.filter(
          (item) => item.id !== action.payload.id
        );
        break;
      case DELETE_TODO_FAILURE:
        draft.deletetodo.loading = false;
        draft.deletetodo.done = true;
        draft.deletetodo.err = action.payload.err;
        break;

      case EDIT_TODO_REQUEST:
        draft.edittodo.loading = true;
        draft.edittodo.done = false;
        draft.edittodo.err = null;
        break;
      case EDIT_TODO_SCUCESS:
        draft.edittodo.loading = false;
        draft.edittodo.done = true;
        draft.edittodo.err = null;
        const todo = draft.todos.find((item) => item.id === action.payload.id);
        todo.todo = action.payload.todo;
        break;
      case EDIT_TODO_FAILURE:
        draft.edittodo.loading = false;
        draft.edittodo.done = true;
        draft.edittodo.err = action.payload.err;
        break;
      default:
        return state;
    }
  });
};
export default todo;
