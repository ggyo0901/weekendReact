import React, { useReducer } from "react";
//  improt {createContext} from "react" 둘다 같은것

export const Context = React.createContext();

const initialState = [
  {
    id: 1,
    name: "max",
  },
  {
    id: 2,
    name: "jane",
  },
  {
    id: 3,
    name: "met",
  },
];
export const REMOVE_STATE = "REMOVE_STATE";
export const ADD_STATE = "ADD_STATE";
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_STATE":
      return [...state, { id: action.id, name: action.name }];
    case "REMOVE_STATE":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
export default ContextProvider;
