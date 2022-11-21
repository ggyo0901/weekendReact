import { Outlet } from "react-router-dom";
import LayoutFooter from "./Footer/footer";
import LayoutHeader from "./Header/header";

import * as S from "./style";
function FullLayout() {
  return (
    <S.Wrapper>
      <LayoutHeader />
      <Outlet />
      {/* 자식결로요소(router)를  컴포넌트를 랜더링랜더링 */}
      <LayoutFooter />
    </S.Wrapper>
  );
}
export default FullLayout;
