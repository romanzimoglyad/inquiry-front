import { SiStudyverse } from "react-icons/si";
import Row from "./Row";
import Fancy from "./Fancy";
import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  gap: 0.4rem;
  justify-content: left;
  align-items: center;
`;

function Logo({ height, width, color }) {
  return (
    <StyledLogo>
      <SiStudyverse
        style={{
          height: height,
          width: width,
          color: color,
        }}
      ></SiStudyverse>
      <Fancy>AnnaZim</Fancy>
    </StyledLogo>
  );
}

export default Logo;
