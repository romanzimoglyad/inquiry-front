import styled from "styled-components";
import IntroductionBasic from "../ui/IntroductionBasic";
import AboutMe from "../ui/AboutMe";
import Achievements from "../ui/Achievements";
import Arch from "../ui/Schools";
import Education from "../ui/Education";
import Extra from "../ui/Extra";
import Fun from "../ui/Stat";
import Stats from "../ui/Stat";
import InquiryWall from "../ui/InquiryWall";

const StyledIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 30px;
`;

function Introduction() {
  return (
    <StyledIntroduction>
      <IntroductionBasic />
      <AboutMe />
      {/* <Achievements /> */}
      <InquiryWall />
      <Arch />

      <Education />
    </StyledIntroduction>
  );
}

export default Introduction;
