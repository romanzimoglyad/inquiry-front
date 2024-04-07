import styled from "styled-components";
import { useState } from "react";

const StyledSchools = styled.div`
  display: grid;
  grid-template-columns: 2fr 7fr;
  gap: 2rem;
  margin-top: 5rem;
  align-self: flex-start;
  margin-left: 2rem;
  position: relative;
`;

const LeftColumn = styled.div`
  position: relative;
`;

const School = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
`;

const Bubble = styled.div`
  /* color: var(--color-grey-800);
  border-radius: var(--border-radius-lg);
  padding: 1rem 1.5rem;
  color: var(--color-grey-700);
  background-color: var(--color-grey-100); */
`;

const Img = styled.img`
  display: block;
  width: 10rem;
`;

const TextHeader = styled.div`
  line-height: 1.6;
  font-size: var(--font-size-lllg);
  font-weight: 600;
  color: var(--color-grey-800);
`;

const CenterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Description = styled.div`
  display: flex;
  width: 40rem;

  align-items: center;

  gap: 1rem;
`;

const Arrow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 19rem;
  width: 0;
  height: 100%;
  border-left: 2px dashed var(--color-brand-700);
  &::after {
    content: "";
    position: absolute;
    top: calc(100% - 4px);
    left: -7px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid var(--color-brand-700);
  }
`;

const DateContainer = styled.div`
  text-align: center;
`;

const DateItem = styled.div`
  font-size: var(--font-size-medium);
  color: var(--color-grey-600);
  padding: 0.5rem;
`;

const Text = styled.div`
  line-height: 1.6;
  font-size: var(--font-size-llg);
  font-weight: 400;
  color: var(--color-grey-800);

  color: var(--color-grey-700);
  min-width: 10rem;
  &::before {
    content: "•";
    margin-right: 5px;
  }
`;
const GridDate = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-items: ${(props) => props.align};
  text-align: left;

  /* Adjust the height as needed */
`;
const GridItem = styled.div`
  display: flex;
  justify-content: left;
  align-items: ${(props) => props.align};
  text-align: left;

  padding: 1rem;
  /* background-color: var(--color-grey-50);
  border-radius: var(--border-radius-md);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
  position: relative;
  /* Adjust the height as needed */
`;
GridItem.defaultProps = {
  align: "center",
};

const Header = styled.div`
  margin-top: 10rem;
  letter-spacing: -0.5px;
  font-weight: 800;
  font-size: var(--font-size-extra);
  text-align: left;
  align-self: flex-start;
`;

const ImgTree = styled.img`
  position: absolute;

  height: 100%;
  right: -40%;
`;
function Schools() {
  return (
    <>
      <Header>My professional way</Header>

      <StyledSchools>
        <ImgTree src="tree.png"></ImgTree>

        <Arrow />
        <GridDate>
          <DateItem>2017 → 2021</DateItem>
        </GridDate>
        <GridItem>
          <Description>
            <Img src="brooks.png"></Img>
            <TextHeader>Brooks Moscow</TextHeader>
          </Description>

          <Bubble>
            <Text>Grade 1,2,3 teacher</Text>
            <Text>Maker space coordinator</Text>
          </Bubble>
        </GridItem>
        <GridDate>
          <DateItem>2021 → 2022</DateItem>
        </GridDate>
        <GridItem>
          <Description>
            <Img src="brooks.png"></Img>
            <TextHeader>Brooks UK</TextHeader>
          </Description>

          <Bubble>
            <Text>Grade 1,2,3 teacher</Text>
          </Bubble>
        </GridItem>
        <GridDate>
          <DateItem>2023 → now</DateItem>
        </GridDate>
        <GridItem>
          <Description>
            <Img src="nis.jpeg"></Img>
            <TextHeader>Nagoya international school</TextHeader>
          </Description>

          <Bubble>
            <Text>Grade 1,2,3 teacher</Text>
            <Text>Mother tongue coordinator</Text>
            <Text>Teacher Horizon ambasador</Text>
          </Bubble>
        </GridItem>
      </StyledSchools>
    </>
  );
}

export default Schools;
