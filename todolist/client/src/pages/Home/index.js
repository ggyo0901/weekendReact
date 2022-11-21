import { useState } from "react";
import styled from "styled-components";
import { flexCenter } from "../../lips/styles/common";
import HomeLoginForm from "./component/form/form";
import HomeSignUpModal from "./component/modal/signup";

function HomePage() {
  const [isOpenSignModal, setIsOpenSignModal] = useState(false);
  const SingModalClickBtn = () => {
    setIsOpenSignModal(true);
  };
  const CloseSignModal = () => {
    setIsOpenSignModal(false);
  };
  return (
    <>
      {isOpenSignModal && <HomeSignUpModal CloseSignModal={CloseSignModal} />}
      <S.Wrapper>
        <S.MainImgBox> </S.MainImgBox>
        <S.Container>
          <HomeLoginForm />
          <p>
            아직도 회원이 아니신가요 ?
            <span onClick={SingModalClickBtn}>회원 가입</span>
          </p>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
export default HomePage;

const Wrapper = styled.div`
  display: flex;
  max-height: 100vh;
`;
const MainImgBox = styled.div`
  width: 440px;

  background-color: #800080;
  height: calc(100vh - 40px);
`;
const Container = styled.div`
  ${flexCenter};
  width: 100%;
  flex-direction: column;
  & span {
    cursor: pointer;
  }
`;
const S = {
  Wrapper,
  Container,
  MainImgBox,
};
