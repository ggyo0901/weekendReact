import { useCallback } from "react";
import { useInput } from "../../../hooks/userInput";
import {
  LoginForm_box,
  LoginForm,
  Login_logo,
  BtnBox,
  LoginInput,
  LoginBtn,
} from "./style";
const Login_Form = () => {
  const [id, setId, ChangeId] = useInput("");
  const [pw, setPw, changePw] = useInput("");

  const loingHandler = useCallback(
    (e) => {
      e.preventDefault();
      console.log(id);
      console.log(pw);
    },
    [id, pw]
  );
  const buttonC = (e) => {
    e.preventDefault();
    console.log(e.type);
  };
  return (
    <LoginForm_box>
      {/* <!-- loginForm--> */}
      <LoginForm>
        {/* <!-- loginTapmlate --> */}
        <div id="login_tamplate">
          <Login_logo>myBlog</Login_logo>
          <p>
            이메일
            <LoginInput
              placeholder="이메일을 입력해주세요"
              value={id}
              onChange={ChangeId}
            />
          </p>
          <p>
            비밀번호
            <LoginInput
              placeholder="비밀번호를 입력해주세요"
              value={pw}
              onChange={changePw}
            />
          </p>
          <BtnBox>
            <button id="login_button" onClick={loingHandler}>
              이메일로 로그인
            </button>
          </BtnBox>
        </div>
        {/* <!-- buttonGroup--> */}
        <LoginBtn>
          {/* <!-- naver --> */}
          <BtnBox>
            <button id="login_naver_button" typeof="naver" onClick={buttonC}>
              네이버로 로그인
            </button>
          </BtnBox>
          {/* <!-- kakao --> */}
          <BtnBox>
            <button id="login_kakao_button">카카오로 로그인</button>
          </BtnBox>
          {/* <!-- apple --> */}
          <BtnBox>
            <button id="login_apple_button">Apple로 로그인</button>
          </BtnBox>
        </LoginBtn>
      </LoginForm>
    </LoginForm_box>
  );
};
export default Login_Form;
