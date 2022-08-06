import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Main from "./pages/main";
import Login from "./pages/login";
import Sign from "./pages/sign";
import BlogPage from "./pages/blogPage";
import Chat from "./pages/chat";
import MyblogLayout from "./_layout/myblog_layout";
import GlobalStyle from "./style/global";
function App() {
  useEffect(() => {
    console.log(`기본지원모드:${process.env.NODE_ENV}`);
    //개발용인가 배포용인가
    //리액트에서 자체지원
    //npm start=>development
    //npm build=>production
  }, []);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <MyblogLayout>
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/sign"} element={<Sign />} />
          <Route path={"/blog/userid=:id"} element={<BlogPage />} />
          <Route path={"/chat"} element={<Chat />} />
        </Routes>
      </MyblogLayout>
    </BrowserRouter>
  );
}

export default App;
