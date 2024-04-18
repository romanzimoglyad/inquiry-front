import { SiStudyverse } from "react-icons/si";
import Row from "./Row";
import Fancy from "./Fancy";
import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: left;
  font-size: var(--font-size-lllg);
  align-items: center;
  font-weight: 400;
`;

function Logo() {
  //{ height, width, color }
  return (
    <StyledLogo>
      <SiStudyverse
      // style={{
      //   height: height,
      //   width: width,
      //   color: color,
      // }}
      ></SiStudyverse>
      <Fancy>AnnaZim</Fancy>
    </StyledLogo>
  );
}

export default Logo;
