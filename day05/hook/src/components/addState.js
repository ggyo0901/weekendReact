import { useRef, useState } from "react";

const AddState = ({ onClickEvent, stateId }) => {
  const [name, setName] = useState("");
  const nameInput = useRef(null); //돔에 접근할수있게 도와주는 것 ,빈공간을만들어줌
  const onChangeInput = (e) => {
    // <input/> <-- HTML.target.value

    setName(e.target.value);
    // useState의 변수를 바꿔주는 함수는 비동기 함수입니다.

    // console.log(name)
    // 따라서 여기서 콘솔을 찍을 때는 지금 현재 바뀐 값이 지정이 되지 않습니다.
  };

  const onAddStateHandler = () => {
    onClickEvent(stateId + 1, name);
    setName("");
  };
  const onResetHandler = () => {
    setName("");
    nameInput.current.focus(); //초기화하고 커서가 인풋태그에 포커스되게하는 것
    // nameInput.current.style.display = "none";
    //nameInput.current.style=domselector.(input) //돔셀렉터로 가져온것
  };
  const onEnterAddState = (e) => {
    if (e.key === "Enter") {
      onClickEvent(stateId + 1, name);
      setName("");
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="이름을 입력하세요"
        value={name}
        //이벤트 객체를 받기 위해서는 이벤트 함수속성={실행함수명} 으로 실행해야한다
        //단, 이벤트 객체 함수를 받지 않고 두가지 이상의 함수를 실행하고자 할 떄는
        //이벤트 함수속성={()=>{함수1(),함수2()}}으로 실행해야한다

        onChange={onChangeInput}
        //onChage = {() => onChangeInput()}
        ref={nameInput} //돔에 접근하기위해 current에 담아줌
        onKeyPress={onEnterAddState}
      />
      <button onClick={onAddStateHandler}>추가</button>
      <button onClick={onResetHandler}>초기화</button>
    </>
  );
};
export default AddState;
