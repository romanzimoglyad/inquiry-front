import styled from "styled-components";
import IntroductionBasic from "../ui/IntroductionBasic";
import AboutMe from "../ui/AboutMe";

const StyledIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

function Introduction() {
  return (
    <StyledIntroduction>
      <IntroductionBasic />
      <AboutMe />
    </StyledIntroduction>
  );
}

export default Introduction;
