import "./App.css";
import { Provider } from "react-redux";

import createConfigure from "./store";
import Todo from "./pages/todo";
function App() {
  console.log(process.env.NODE_ENV);

  console.log(process.env.REACT_APP_TOKEN);
  /**
   * 1. 개발환경인지 배포환경인지 알기위해서
   * 2.값을 숨기기 위새허, 외부에서 키값을 공개하지 않기위해서
   */
  const store = createConfigure();
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

export default App;
