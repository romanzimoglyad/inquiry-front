import styled from "styled-components";
import Line from "./Line";
import Fancy from "./Fancy";
const Header = styled.div`
  font-size: var(--font-size-extra);
  font-weight: 700;
  text-align: center;
`;

const StyledEducation = styled.div`
  margin-top: 4.2rem;
`;
const Container = styled.div`
  margin-top: 3.2rem;
  display: grid;
  gap: 2.4rem;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Educ = styled.div``;

const TextHeader = styled.div`
  line-height: 1.6;
  font-size: var(--font-size-lllg);
  font-weight: 700;
  color: var(--color-grey-800);

  color: var(--color-grey-700);
  min-width: 10rem;
`;

const Text = styled.div`
  line-height: 1.6;
  font-size: var(--font-size-llg);
  font-weight: 400;
  color: var(--color-grey-800);

  color: var(--color-grey-700);
  min-width: 10rem;
`;
const Bubble = styled.div`
  color: var(--color-grey-800);

  border-radius: var(--border-radius-lg);
  padding: 1rem 1rem;
  color: var(--color-grey-700);
`;

function Education() {
  return (
    <StyledEducation>
      <Header>
        <Fancy color="brand-700">Education</Fancy>
      </Header>
      <Line />
      <Container>
        <Bubble>
          <Educ>
            <TextHeader>PGCE</TextHeader>
            <Text>My amazing PGCE</Text>
          </Educ>
        </Bubble>
        <Bubble>
          <Educ>
            <TextHeader>QTC</TextHeader>
            <Text>My amazing QTC</Text>
          </Educ>
        </Bubble>
        <Bubble>
          <Educ>
            <TextHeader>Selta</TextHeader>
            <Text>My amazing Selta</Text>
          </Educ>
        </Bubble>
      </Container>
    </StyledEducation>
  );
}

export default Education;
