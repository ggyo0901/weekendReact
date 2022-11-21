import { ThemeProvider } from "styled-components";
import "./App.css";

import GlobalStyles from "./lips/styles/global";
import { theme } from "./lips/styles/theme";
import Router from "./routes/router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
