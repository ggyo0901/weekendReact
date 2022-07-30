import { useCallback, useEffect, useState } from "react";

const Effect = () => {
  const [color, setColor] = useState("red");
  const onChangeColor = useCallback(() => {
    if (color === "red") {
      setColor("blue");
    } else {
      setColor("red");
    }
  }, [color]);

  //useEffect는 페이지가 열렸을떄 한번 실행한다
  useEffect(() => {
    console.log("페이지가 열렸습니다");
  }, []);
  //의존성배열이없기떄문에 시작할떄만 실행함
  useEffect(() => {
    console.log("색이 변경되었습니다");
  }, [color]);
  //의존성배열이 있기떄문에 color가 변할 떄마다 실행된다
  return (
    <>
      <div>Effect</div>
      <input type="text" readOnly value={color} style={{ color }} />
      <button onClick={onChangeColor}>변경</button>
    </>
  );
};
export default Effect;
