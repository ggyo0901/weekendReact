import AddState from "./addState";
import { useContext, useEffect, useCallback } from "react";
import { Context } from "../reducer/context";
const ContextAPI = () => {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    console.log(state);
  }, [state]);
  const onRemove = useCallback(() => {
    dispatch({
      type: "REMOVE_STATE",
    });
  });

  return (
    <>
      <AddState
        state={state}
        dispatch={dispatch}
        stateId={state.length > 0 && state[state.length - 1].id}
      />
      {state.map((v) => (
        <div>
          {v.id}.{v.name}
          <button onClick={onRemove}>삭제</button>
        </div>
      ))}
    </>
  );
};
export default ContextAPI;
