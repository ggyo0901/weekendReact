import { useState, useRef, useCallback } from "react";

const AddState = ({ state, dispatch }) => {
  const [name, setName] = useState("");

  const onChangeInput = (e) => {
    setName(e.target.value);
  };
  const onAdd = useCallback(() => {
    dispatch({
      type: "ADD_STATE",
    });

    setName("");
  }, [state]);
  return (
    <>
      <input
        type="text"
        placeholder="이름을 입력하세요"
        value={name}
        onChange={onChangeInput}
      />
      <button onClick={onAdd}>추가</button>
      <button>초기화</button>
    </>
  );
};
export default AddState;
