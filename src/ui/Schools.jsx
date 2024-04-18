import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import Line from "./Line";
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

const Bubble = styled.div`
  /* color: var(--color-grey-800);
  border-radius: var(--border-radius-lg);
  padding: 1rem 1.5rem;
  color: var(--color-grey-700);
  background-color: var(--color-grey-100); */
`;

const ImgTree = styled.img`
  position: absolute;

  height: 100%;
  right: -40%;
`;

function Schools() {
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
    <IntroductionContainer>
      <IntroductionHeader ref={ref} shaking={shaking}>
        My professional way
      </IntroductionHeader>
      <Line />
      <IntroductionGrid>
        <ImgTree src="tree.png"></ImgTree>

        <IntroductionArrow />
        <IntroductionGridDate>
          <IntroductionDateItem>2017 → 2021</IntroductionDateItem>
        </IntroductionGridDate>
        <IntroductionGridItem>
          <IntroductionDescription>
            <IntroductionImg src="brooks.png"></IntroductionImg>
            <IntroductionTextHeader>Brooks Moscow</IntroductionTextHeader>
          </IntroductionDescription>

          <Bubble>
            <IntroductionText>Grade 1,2,3 teacher</IntroductionText>
            <IntroductionText>Maker space coordinator</IntroductionText>
          </Bubble>
        </IntroductionGridItem>
        <IntroductionGridDate>
          <IntroductionDateItem>2021 → 2022</IntroductionDateItem>
        </IntroductionGridDate>
        <IntroductionGridItem>
          <IntroductionDescription>
            <IntroductionImg src="brooks.png"></IntroductionImg>
            <IntroductionTextHeader>Brooks UK</IntroductionTextHeader>
          </IntroductionDescription>

          <Bubble>
            <IntroductionText>Grade 1,2,3 teacher</IntroductionText>
          </Bubble>
        </IntroductionGridItem>
        <IntroductionGridDate>
          <IntroductionDateItem>2023 → now</IntroductionDateItem>
        </IntroductionGridDate>
        <IntroductionGridItem>
          <IntroductionDescription>
            <IntroductionImg src="nis.jpeg"></IntroductionImg>
            <IntroductionTextHeader>
              Nagoya international school
            </IntroductionTextHeader>
          </IntroductionDescription>

          <Bubble>
            <IntroductionText>Grade 1,2,3 teacher</IntroductionText>
            <IntroductionText>Mother tongue coordinator</IntroductionText>
            <IntroductionText>Teacher Horizon ambasador</IntroductionText>
          </Bubble>
        </IntroductionGridItem>
      </IntroductionGrid>
    </IntroductionContainer>
  );
}

export default Schools;
