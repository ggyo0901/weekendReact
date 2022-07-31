import { useState, useRef, useCallback, useContext } from "react";
import { Context, ADD_STATE } from "../reducer/context";

const AddState = () => {
  const [name, setName] = useState("");
  const nameInput = useRef(null);
  const { state, dispatch } = useContext(Context);
  const onChangeInput = (e) => {
    setName(e.target.value);
  };
  const onAdd = useCallback(() => {
    dispatch({
      type: ADD_STATE,
      id: state[state.length - 1].id + 1,
      name: name,
    });
    setName("");
    nameInput.current.focus();
  }, [state, name, dispatch]);
  const onReturn = useCallback(() => {
    setName("");
    nameInput.current.focus();
  }, [state]);
  return (
    <>
      <input
        type="text"
        placeholder="이름을 입력하세요"
        value={name}
        onChange={onChangeInput}
        ref={nameInput}
      />
      <button onClick={onAdd}>추가</button>
      <button onClick={onReturn}>초기화</button>
    </>
  );
};
export default AddState;
