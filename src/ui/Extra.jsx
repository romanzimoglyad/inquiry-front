import styled from "styled-components";
import Line from "./Line";

const Container = styled.div``;
const Header = styled.div`
  font-size: var(--font-size-extra);
  font-weight: 700;
`;

const StyledExtra = styled.div`
  grid-column: 2;
`;
function Extra() {
  return (
    <Container>
      <Header>Extra</Header>
      <StyledExtra>
        <Line />
      </StyledExtra>
    </Container>
  );
}

export default Extra;
