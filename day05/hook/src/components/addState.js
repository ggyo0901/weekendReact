import { useState } from "react";

const AddState = ({onClickEvent, stateId}) => {
    const [name, setName] = useState('');

    const onChangeInput = (e) => {
        // <input/> <-- HTML.target.value

        setName(e.target.value);
        // useState의 변수를 바꿔주는 함수는 비동기 함수입니다.

        // console.log(name)
        // 따라서 여기서 콘솔을 찍을 때는 지금 현재 바뀐 값이 지정이 되지 않습니다.
    }

    const onAddStateHandler = () => {
        onClickEvent(stateId + 1, name);
        setName('');
    }

    return (
      <>
        <input 
            type="text"
            placeholder="이름을 입력하세요"
            value={name}
            onChange={onChangeInput}
            //onChage = {() => onChangeInput()}
        />
        <button onClick={onAddStateHandler}>추가</button>
        <button>초기화</button>
      </> 
    );
}
export default AddState