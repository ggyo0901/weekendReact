import styled from "styled-components";
import { flexCenter } from "../../../../lips/styles/common";
import { useNavigate } from "react-router-dom";
import useInput from "hooks/useinput";

import { axiosInstance } from "apis";
import { AuthApi } from "apis/authApi";
import { TokenRepository } from "repository/tokenRepository";
const HomeLoginForm = () => {
  const [email, onChangeEmail, setEmail] = useInput("");
  const [password, onChangePw, setPw] = useInput("");
  const navigate = useNavigate();
  /*window.location.href="/todo" 페이지이동시키는 js문
  이렇게 보내면 a태그로 보내는거랑 같다, 그래서 react에서는 useNavigate를 지원 다시 값을 받아오느냐의 차이*/
  const LoginBtn = async (e) => {
    // e.preventDefault();
    //replace => 뒤로가기 못하게방지 ,history남기지 않음

    //백엔드 통신, 성공하면 보내라만 넣으면 끝
    //   AuthApi.login({ email, password })
    //     .then(
    //       (res) => res.data
    //       // navigate("/todo", { replace: true });
    //     )
    //     .catch((err) => err);

    //에러가 날수도 있는 문장 시도
    try {
      //예외가 생길수도 있는문장
      const res = await AuthApi.login({ email, password });
      console.log(res);
      if (res.status === 200) {
        TokenRepository.setToken(res.data.data.token);
        // localStorage.setItem("token", res.data.data.data.token);

        if (localStorage.getItem("token")) {
          TokenRepository.getToken(res.data.data.token);
          navigate("/todo", { replace: true });
        }

        /**
         * 인증토큰 (ascess_token)
         * 1.인증토큰이 웹스토리지에있다면, 이사람은 로그인 된 사용자
         * 2.로그인 되지 않는 사용자는 접근 불가
         *    *로그인되지않는 사용자 ===토큰이없는 사용자
         *
         *
         * 3.인증토큰은 백엔드에게 req(요청)을/를 보낼떄
         *    axios의 header에 데이터를 보내주어야만 결과 값을  받아올수있다
         *
         *    *axios 역시 header와 body로 이루어져있음
         *      header에는 axios의 설정및 보안, 요청url
         *      body에는 요청의 data가 들어갑니다
         */
      }
      // navigate("/todo", { replace: true });
    } catch (err) {
      //만약에러가 난다면 이렇게 처리할꺼야
      console.log(err);
      // alert(err.response.data.error);
    }
  };

  return (
    <div>
      <S.Form action="">
        <input
          type="text"
          placeholder="아이디"
          value={email}
          onChange={onChangeEmail}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={onChangePw}
        />
      </S.Form>
      <button onClick={LoginBtn}>로그인</button>
    </div>
  );
};
export default HomeLoginForm;

const Form = styled.form`
  ${flexCenter}
  flex-direction: column;
  &input {
    background-color: #fff;
    border-radius: 2rem;
    outline: none;
    border: #999;
    margin-bottom: 8px;
  }
`;

const S = {
  Form,
};
