import styled from "styled-components";
import Line from "./Line";
import Fancy from "./Fancy";
import {
  IntroductionArrow,
  IntroductionContainer,
  IntroductionDateItem,
  IntroductionDescription,
  IntroductionGrid,
  IntroductionGridDate,
  IntroductionGridItem,
  IntroductionHeader,
  IntroductionImg,
  IntroductionText,
  IntroductionTextHeader,
} from "./IntroductionGrid";
import { useEffect, useRef, useState } from "react";
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
  const [shaking, setShaking] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top, bottom } = ref.current.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        // If the top of the element is in the viewport
        if (top >= 0 && bottom <= windowHeight) {
          setShaking(true);
        } else {
          setShaking(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledEducation>
      <IntroductionContainer>
        <IntroductionHeader ref={ref} shaking={shaking}>
          Education
        </IntroductionHeader>
        <Line />
        <IntroductionGrid>
          <IntroductionArrow />
          <IntroductionGridDate>
            <IntroductionDateItem>2017 → 2018</IntroductionDateItem>
          </IntroductionGridDate>
          <IntroductionGridItem>
            <IntroductionDescription>
              <IntroductionImg src="pgce.jpeg"></IntroductionImg>
              <IntroductionTextHeader>PGCE</IntroductionTextHeader>
            </IntroductionDescription>

            <Bubble>
              <IntroductionText>Some information about pgce</IntroductionText>
            </Bubble>
          </IntroductionGridItem>
          <IntroductionGridDate>
            <IntroductionDateItem>2020 → 2021</IntroductionDateItem>
          </IntroductionGridDate>
          <IntroductionGridItem>
            <IntroductionDescription>
              <IntroductionImg src="qtc.png"></IntroductionImg>
              <IntroductionTextHeader>QTC</IntroductionTextHeader>
            </IntroductionDescription>

            <Bubble>
              <IntroductionText>Some information about QTC</IntroductionText>
            </Bubble>
          </IntroductionGridItem>
          <IntroductionGridDate>
            <IntroductionDateItem>2023</IntroductionDateItem>
          </IntroductionGridDate>
          <IntroductionGridItem>
            <IntroductionDescription>
              <IntroductionImg src="selta.png"></IntroductionImg>
              <IntroductionTextHeader>Selta</IntroductionTextHeader>
            </IntroductionDescription>

            <Bubble>
              <IntroductionText>Some information about Selta</IntroductionText>
            </Bubble>
          </IntroductionGridItem>
        </IntroductionGrid>
      </IntroductionContainer>
    </StyledEducation>
  );
}

export default Education;
