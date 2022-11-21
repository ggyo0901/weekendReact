import TodoListPage from "pages/Todolist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FullLayout from "../components/layout/fulllayout";
import HeaderLayout from "../components/layout/headerlayout";
import HomePage from "../pages/Home";
import PrivateRoute from "./privateroute";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FullLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route element={<HeaderLayout />}>
            <Route path="/todo" element={<TodoListPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
//레이아웃을 따로 다른종류로 주고싶을떄
export default Router;
