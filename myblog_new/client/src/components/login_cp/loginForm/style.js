import styled from "styled-components";

export const LoginForm_box = styled.div`
  height: calc(100vh - 202px);
`;
export const LoginForm = styled.form`
  padding: 1rem;
  border-radius: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  border-radius: 0.5rem;

  & p {
    height: 3rem;
  }
`;
export const Login_logo = styled.p`
  text-align: center;
  color: var(--myblog--main--color);
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: bold;
`;
export const BtnBox = styled.div`
  width: 100%;
  margin: 1rem 0;
  font-size: 0.825rem;
  & > button {
    background-color: var(--myblog--main--color);
    color: #fff;
    width: 100%;
    height: 2rem;
  }
  & > button:hover {
    opacity: 0.8;
  }
`;
export const LoginInput = styled.input`
  float: right;
  margin-bottom: 0.5rem;
  margin-left: 1rem;
  width: 15rem;
  border: none;
  border-bottom: 1px solid rgba(34, 34, 34, 0.5);
  padding-left: 1rem;
  &::placeholder {
    font-size: 0.825rem;
  }
`;

export const LoginBtn = styled.div`
  & > div {
    margin: 0.5rem 0;
  }
  & > button {
    background-color: ${(props) =>
      props.type === "button"
        ? props.theme.mainColor
        : props.type === "naver"
        ? "#03c75a"
        : props.type === "kakao"
        ? "#fee500"
        : props.type === "apple"
        ? "#00000"
        : props.type === "hpAyth" && props.theme.subColor};
    width: 100%;
    height: 2rem;
  }
`;
