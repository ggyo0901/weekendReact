import AddState from "./addState";
import { useContext, useEffect, useCallback } from "react";
import { Context, REMOVE_STATE } from "../reducer/context";
const ContextAPI = () => {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    console.log(state);
  }, [state]);
  const onRemove = useCallback((id) => {
    dispatch({
      type: REMOVE_STATE,
      id: id,
    });
  }, []);

  return (
    <>
      <AddState />
      {state.map((v) => (
        <div key={v.id}>
          {v.id}.{v.name}
          <button onClick={() => onRemove(v.id)}>삭제</button>
        </div>
      ))}
    </>
  );
};
export default ContextAPI;
