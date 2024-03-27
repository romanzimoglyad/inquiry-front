import styled from "styled-components";
import Line from "./Line";
import Fancy from "./Fancy";
import AppleImg from "./Apple";

const StyledSchools = styled.div`
  margin-top: 4.2rem;
  position: relative;
`;

const Container = styled.div`
  margin-top: 3.2rem;
  display: grid;
  gap: 2.4rem;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Header = styled.div`
  font-size: var(--font-size-extra);
  font-weight: 700;
`;
const School = styled.div``;

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
  background-color: var(--color-brand-100);
  border-radius: var(--border-radius-lg);
  padding: 1rem 1rem;
  color: var(--color-grey-700);
`;
const Img = styled.img`
  display: block;
  width: 5.4rem;
  padding-bottom: 1.6rem;
`;
function Schools() {
  return (
    <StyledSchools>
      <AppleImg src="apple.png"></AppleImg>
      <Header>
        <Fancy color="brand-700">Schools</Fancy>
      </Header>
      <Line />
      <Container>
        <School>
          <Img src="brooks.png"></Img>
          <Bubble>
            <TextHeader>Brooks Moscow</TextHeader>
            <Text>Grade 1,2,3 teacher</Text>
            <Text>Maker space coordinator</Text>
          </Bubble>
        </School>
        <School>
          <Img src="brooks.png"></Img>
          <Bubble>
            <TextHeader>Brooks UK</TextHeader>
            <Text>Grade 1,2,3 teacher</Text>
          </Bubble>
        </School>
        <School>
          <Img src="nis.jpeg"></Img>
          <Bubble>
            <TextHeader>Nagoya international school</TextHeader>
            <Text>Grade 1,2,3 teacher</Text>
            <Text>Mother tongue coordinator</Text>
            <Text>Teacher Horizon ambasador</Text>
          </Bubble>
        </School>
      </Container>
    </StyledSchools>
  );
}

export default Schools;
