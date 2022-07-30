import { useReducer, useCallback } from "react";
import { reducer } from "../reducer";
const Reducer = () => {
  const initialState = 0;
  /*                    배열값을 반환 */
  const [num, dispatch] = useReducer(reducer, initialState);
  //num은 상태명,dispatch는 전달매개체
  //num은 변화된 state값을 받아온다

  const onIncrement = useCallback(() => {
    dispatch({
      type: "INCREMENT",
    });
  }, []);
  const onDecrement = useCallback(() => {
    dispatch({
      type: "DECREMENT",
      data: {
        username: 1,
        userpw: 1234,
      },
      //dispatch안에있는 객체가 action으로 전달된다
    });
  }, []);

  return (
    <div>
      <p>{num}</p>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
};
export default Reducer;

/*
userReducer(내가 만든 reducer로직,밖에 로직을 관리할 변수)
==>reducer(state,action)--- state에 이변수 값을 전달해주고 변수를 스테이트로 변환

리턴값으로
[스테이트명, dispatch]
  dispatch= 전달 매개체 action값(reducer에 데이터)전달
*/
