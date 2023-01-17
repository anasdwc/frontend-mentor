import styled from "styled-components";
import Footer from "./components/Footer";

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.div`
  padding: 4rem;
  background: papayawhip;
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello World</Title>
      <Footer />
    </Wrapper>
  );
}

export default App;
