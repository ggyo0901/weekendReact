import "./App.css";
import ContextAPI from "./components/contextAPI";
import Reducer from "./components/reducer";
import ContextProvider from "./reducer/context";
function App() {
  return (
    <ContextProvider>
      <ContextAPI></ContextAPI>
    </ContextProvider>
  );
}

export default App;
