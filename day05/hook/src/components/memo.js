import { useMemo, useState } from "react";

const Memo = () => {
  const [color, setColor] = useState("red");
  const [text, setText] = useState("");
  const getColor = useMemo(() => console.log(`색은 ${color}입니다`, [color]));
  /* 
    useMemok,useCallBack,useEffect의 []의 값을 의존성 배열이라고 이야기하며 해당
    배열에 들어간 값이 바뀌었을 떄만 해당 함수를 랜더링 시 재호출한다.
  */
  const getText = useMemo(() =>
    console.log(`텍스트는 실행하지 않습니다`, [text])
  );
  /*useMemo에는 함수를 잘 담지 않고 값이 바로 선언되기 떄문에 변수인 값을 담습니다
      즉 해당 값이 의존성 배열에 있는 값이 바뀌어야만 랜더링 시 재호출되기 떄문에
      [메모이제이션]을 실현 할수있다
    */
  const onChangeColor = () => {
    if (color === "red") {
      setColor("blue");
    } else {
      setColor("red");
    }
  };
  return (
    <>
      <div>Memo</div>
      <input type="text" readOnly value={color} style={{ color }} />
      <button onClick={onChangeColor}>변경</button>
    </>
  );
};
export default Memo;
