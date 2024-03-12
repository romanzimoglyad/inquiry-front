import styled from "styled-components";

import Fancy from "./Fancy";
import Line from "./Line";
import Row from "./Row";

const Img = styled.img`
  display: block;
  width: 2.4rem;

  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;
const StyledAchievements = styled.div`
  margin-top: 4.2rem;
`;
const StyledTable = styled.div`
  margin-top: 0.8rem;
  display: grid;
  gap: 2.4rem;
  grid-template-columns: 1fr 1fr 1fr;
`;
const Header = styled.div`
  line-height: 1.6;
  font-weight: 700;
  font-size: var(--font-size-llg);
  color: var(--color-grey-900);
`;

const ArcRow = styled.div`
  display: flex;
  gap: 1.6rem;
  justify-content: left;
  align-items: center;
`;
const Text = styled.div`
  line-height: 1.6;
  font-size: var(--font-size-llg);
  font-weight: 500;
  color: var(--color-grey-800);
`;
function Achievements() {
  return (
    <StyledAchievements>
      <Header>
        <Fancy color="brand-700">Reached so far :</Fancy>
      </Header>
      <Line />
      <StyledTable>
        <Row gap="1.6rem">
          <Header>Schools</Header>
          <ArcRow>
            <Img src="brooks.png"></Img>
            <Text>Brooks Moscow</Text>
          </ArcRow>
          <ArcRow>
            <Img src="nis.jpeg"></Img>
            <Text>Oxford</Text>
          </ArcRow>
          <ArcRow>
            <Img src="nis.jpeg"></Img>
            <Text>Nagoya international school</Text>
          </ArcRow>
        </Row>
        <Row>
          <Header>Education</Header>
          <Text>PGCI</Text>
          <Text>Selta</Text>
          <Text>PhD</Text>
        </Row>
      </StyledTable>
    </StyledAchievements>
  );
}

export default Achievements;
