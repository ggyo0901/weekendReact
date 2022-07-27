import { useRef, useState } from "react";
import AddState from "./addState";
const State = () => {
  //   const [state, setState] = useState("state 처음 시작");
  // const[변수명, 변수 값을 바꿔줄 함수명] = useState(변수의 기본값)
  // setState("값") ----> 변수의 값이 바뀜

  // const onChangeText = () =>{
  //     setState("두번째 시작하는 state");
  // }

  // staet의 불변성 (state의 값이 객체일 때)
  /* 
        const obj = {1}
        const ob2 = {}

        obj === obj2 (T/F?)
        const obj3 = obj // obj3와 obj가 같은 참조 값을 가진다

        따라서, obj가 가지고 있는 객체값이 변경되면  obj3도 같은 객체를 가지기 때문에
        값이 변경됩니다. 즉, 원본 데이터의 훼손, 이러한 훼손은 예상치 못한 오류와 버그
        를 일으킬 가능성이 큽니다. (참조 오류)
    
        <얕은 복사의 에러를 해결하기 위해 깊은 복사를 실현>

        1. spread operator (...)
        2. immerjs와 같은 라이브러리를 이용

      
        const [state, setState] = useState([
            {
                id:1,
                name: "김성용"
            },
                        {
                id:2,
                name: "김사과"
            },
                        {
                id:3,
                name: "예찬"
            },  
        ])

        해당 객체가 state의 값이라면
        이 배열에 id:4, name:"신민석"이라는 객체의 값을 추가하려면 어떻게 해야할까요?
        단 렌더링이 일어나야한다.

        1. setState([...state, {id:4, name:"신민석"}])

        2. let arr = state
            arr.push = {id:4, name:"신민석"}
            setState(arr)
    

        */

  //변수명    //변수를 바꾸는 함수명
  const [userList, setUserList] = useState([
    {
      id: 1,
      name: "김성용",
    },
    {
      id: 2,
      name: "김사과",
    },
    {
      id: 3,
      name: "김예찬",
    },
  ]);

  const onClickEvent = (idValue, nameValue) => {
    setUserList([...userList, { id: idValue, name: nameValue }]);
  };

  /*
        ***
        백엔드 받아오는 데이터의 형식의 대부분은 배열인 경우가 많습니다
        따라서 이러한 배열들을 화면에 보여주기 위해 사용하는 함수
        ===> 배열일 경우에만 사용가능

        1. map
            [반복문, 한줄 씩 읽어오는 것]
            => 주로 배열의 길이만큼 반복할 때 사용

            ex)
            배열명.map((결과값 변수명) => 실행문)

            ex) 실행문의 경우
            userList.map((v) => console.log(v.id) ) // 1,2,3

            ex) HTML 반복의 경우
             userList.map((v) => 
             (
                <div>
                    <div></div>
                </div>
             ))

        2. find/findIndex
            [검색, 조건에 맞는 데이터를 읽어오는 것]
            => 주로 배열 내에서 조건식을 만족하는 값/인덱스를 찾아올 때 사용

        
            ex)
            배열명.find((결과값 변수명) => 조건식 )

            ex)
            userList.find((v) => v.id === 1).name // 김성용
            
            ex)
            userList.findIndx((v) => v.id === 1) // 0 (객체 반환x 인덱스번호 반환)
            userList[0].name


        3. filter
            [거름망, 조건에 맞지 않는 데이터를 제외하고  조건에 맞는 데이터만 읽어오는 것]
            => 주로 백엔드 데이터가 삭제되었을 떄 프론트 엔드에서도 삭제하기 위해 사용

            ex)
            배열명.filter((결과값 변수명) => 조건식 )
    */

  /*
        ex) 상품정보에 대한 데이터

        {
            message: "failure"
            err: "해당 상품은 준비 중입니다."

        }
        ---------------------------------
        {
            messaga: "success"
            data: {
                prodName : "떡볶이"
                prodPrice : 80000000
                prodImg : "https://www.tester.koreiad/img/12345"
                prodContent : "<div class="a">이 상품은...</div> "
                review : [
                    {
                        User: [
                            id: 952
                            email: "korpg95274@gmail.com"
                            name : "김**
                        ]
                        poind: 5
                        contents: "<div> ... </div>"
                    },
                    {},
                    {},
                    {},
                    {}, -----------------> 10개
                    {},
                    .... ===> setState(draft.data.review.push(객체명))
                ]
            }
        }
    */
  const onRemoveHandler = (e) => {
    console.log(typeof e.target.value); //e.target.value가 string이기떄문에 조건식에안맞아서 삭제가안됨 그러기떄문에 e.target.value를 paseInt로 묶어서 강제형변환시킴
    //오류가나면 type도찾아볼것
    const removeState = userList.filter(
      (item) => item.id !== parseInt(e.target.value)
    );
    //filter는 제거하라는 명령문이 아니라 해당 상태가 맞지않는 데이터를 제외하고
    //읽어오는 것이므로 원본데이터를 훼손한 상태가 아니다.
    setUserList(removeState);
  };
  const removeButtonArr = useRef([]);
  const RemoveHandler2 = () => {
    console.log(removeButtonArr);
  };
  const RemoveHandler3 = (itemId) => {
    console.log(itemId);
    const removeState = userList.filter((item) => item.id !== itemId.id);
    setUserList(removeState);
  };
  return (
    <>
      {userList.map((item, index) => (
        <div>
          {item.id}. {item.name}
          <button
            value={item.id} //value는 string으로반환
            //map의 안에서 매개변수로 전달을 하게되면 해당객체에 해당하는 모든 정보를
            //매게변수로 전달받을수있다
            onClick={() => {
              RemoveHandler3(item);
            }}
            ref={(el) => (removeButtonArr[item.id] = el)} // 배열로 값을 넣는방법 //배열로 여러가지를 가지고올수있다 allselector같은
          >
            삭제
          </button>
        </div>
      ))}
      <AddState
        onClickEvent={onClickEvent}
        stateId={userList.length > 0 && userList[userList.length - 1].id}
      />
    </>
  );
};
export default State;
