import { Outlet } from "react-router-dom";
import LayoutHeader from "./Header/header";
import * as S from "./style";
function HeaderLayout() {
  return (
    <S.Wrapper>
      <LayoutHeader />
      <Outlet />
    </S.Wrapper>
  );
}
export default HeaderLayout;
