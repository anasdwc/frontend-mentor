import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";

const theme = {
  colors: {
    white: "hsl(0, 0%, 98%)",
    gray: "hsl(0, 0%, 41%)",
    black: "hsl(0, 0%, 8%)",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Container>
          <Header />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
