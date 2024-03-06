import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const StyledH1 = styled.h1`
  display: flex;
  font-size: 30px;
  color: red;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledH1>Inquiry!!</StyledH1>
    </>
  );
}

export default App;
