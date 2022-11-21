import styled from "styled-components";
import { flexCenter, ModalBackground } from "lips/styles/common";
import useInput from "hooks/useinput";

import { useEffect, useState } from "react";
import { axiosInstance } from "apis";
import { AuthApi } from "apis/authApi";

const HomeSignUpModal = ({ CloseSignModal }) => {
  const [email, onChangeEmail, setEmail] = useInput("");
  const [password, onChangePw, setPw] = useInput("");
  const [error, setError] = useState(false);
  const [errText, setErrText] = useState(false);
  const onClickSignUpBtn = async () => {
    /*백엔드의 로그인 restApi주소가 http://localhost:9000*/
    // axiosInstance
    //   .post("/user/sign", { email, password })
    //   .then((res) => {
    //     if (!alert(res.data.data)) CloseSignModal(false);
    //   })
    //   .catch((err) => {
    //     setError(true);
    //     setErrText(err.response.data.err);
    //   });
    // // CloseSignModal();
    try {
      const res = await AuthApi.signup({ email, password });
      if (!alert(res.data.data)) CloseSignModal(false);
    } catch (err) {
      setError(true);
      setErrText(err.response.data.err);
    }
  };
  useEffect(() => {
    setError(false);
  }, [email.password]);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <span>SIGNUP</span>
          <span onClick={CloseSignModal}>X</span>
        </S.Header>
        <S.Content>
          <input
            type={"text"}
            placeholder="아이디입력"
            value={email}
            onChange={onChangeEmail}
          />
          <input
            type={"password"}
            placeholder="비밀번호입력"
            value={password}
            onChange={onChangePw}
          />
          <p>아직도회원이아니신가요?</p>
          <button onClick={onClickSignUpBtn}>회원가입</button>
        </S.Content>
      </S.Container>
    </S.Wrapper>
  );
};
export default HomeSignUpModal;

const Wrapper = styled.div`
  ${ModalBackground}
`;
const Container = styled.div`
  background-color: #fff;

  width: 380px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 32px;
  background-color: ${({ theme }) => theme.palette.primary[300]};
`;
const Content = styled.div`
  ${flexCenter}
  flex-direction: column;
  padding: 32px 0;
  & input {
    border: 1px solid #999;
    margin-bottom: 8px;
  }
`;
const S = {
  Wrapper,
  Container,
  Content,
  Header,
};
