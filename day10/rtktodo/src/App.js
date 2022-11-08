import { store } from "./store";
import { Provider } from "react-redux";
import Todo from "./pages/todo";
function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

export default App;

/**
 * 회사마다 다를 수있음
 *
 * 1. index.js는 건들지 않고 app.js에 provider,react-router-dom는 따로 폴더로 빼자
 *
 * 2. index.js에 provider를 두고 app은 react-router-dom
 */
