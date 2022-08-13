import styled from "styled-components";

export const SignForm_box = styled.div`
  height: calc(100vh - 202px);
`;
export const SignForm = styled.form`
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
export const SignInput = styled.input`
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
export const Sing_hp = styled.button`
  background-color: #fff;
  color: var(--myblog--main--color);
  border: 1px solid var(--myblog--main--color);
  &:hover {
    opacity: 0.3;
  }
`;
export const SignBtn = styled.div`
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
