import styled from "styled-components";

import Fancy from "./Fancy";
import Line from "./Line";
import Row from "./Row";

const Img = styled.img`
  display: block;
  width: 4.2rem;
`;
const StyledAchievements = styled.div`
  margin-top: 4.2rem;
`;
const StyledTable = styled.div`
  margin-top: 0.8rem;
  display: grid;
  gap: 2.4rem;
  grid-template-columns: 1fr 1fr;
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
  background-color: var(--color-brand-600);
  border-radius: var(--border-radius-lg);
  padding: 1rem 1rem;
  color: var(--color-grey-700);
  min-width: 10rem;
  text-align: center;
`;
const EducationRow = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
            <Text>Brooks UK</Text>
          </ArcRow>
          <ArcRow>
            <Img src="nis.jpeg"></Img>
            <Text>Nagoya international school</Text>
          </ArcRow>
        </Row>
        <EducationRow>
          <Header>Education</Header>
          <Text>PGCE</Text>
          <Text>QTC</Text>
          <Text>PhD</Text>
        </EducationRow>
      </StyledTable>
    </StyledAchievements>
  );
}

export default Achievements;
