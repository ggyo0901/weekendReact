import { useCallback, useState } from "react";

const Callback = () => {
  const [color, setColor] = useState("red");
  const onChangeColor = useCallback(() => {
    if (color === "red") {
      setColor("blue");
    } else {
      setColor("red");
    }
  }, [color]);
  return (
    <>
      <div>useCallBack</div>
      <input type="text" readOnly value={color} style={{ color }} />
      <button onClick={onChangeColor}>확인</button>
    </>
  );
};
export default Callback;
