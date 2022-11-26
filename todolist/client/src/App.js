import { Provider } from "react-redux";
import { store } from "store/store";
import { ThemeProvider } from "styled-components";
import "./App.css";

import GlobalStyles from "./lips/styles/global";
import { theme } from "./lips/styles/theme";
import Router from "./routes/router";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Router />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
