import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login";
import SignPage from "../pages/sign";
import TodoPage from "../pages/todo";
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign" element={<SignPage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routing;
