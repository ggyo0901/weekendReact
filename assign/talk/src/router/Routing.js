import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./path";
const Routing = () => {
  const route = routes();
  return (
    <BrowserRouter>
      <Routes>
        {route.map(({ path, element }) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
export default Routing;
