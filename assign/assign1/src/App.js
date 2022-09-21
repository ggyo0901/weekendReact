import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/thema";
import Routing from "./router/Routing";
function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* 
      themeProvider사용법
      ex) styled.button`
      color:${(props)=>props.theme.palette.mainColor}
      `
      or

      color:${({theme})=>theme.palette.mainColor}

      */}
      <GlobalStyles></GlobalStyles>
      <Routing />
    </ThemeProvider>
  );
}

export default App;
