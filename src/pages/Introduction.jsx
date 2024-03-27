import styled from "styled-components";
import IntroductionBasic from "../ui/IntroductionBasic";
import AboutMe from "../ui/AboutMe";
import Achievements from "../ui/Achievements";
import Arch from "../ui/Schools";
import Education from "../ui/Education";
import Extra from "../ui/Extra";

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
      {/* <Achievements /> */}
      <Arch />
      <Education />
    </StyledIntroduction>
  );
}

export default Introduction;
