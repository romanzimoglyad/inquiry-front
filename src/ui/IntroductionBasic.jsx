import styled from "styled-components";
import AboutMe from "./AboutMe";
import Fancy from "./LondrinaText";

const StyledIntroductionBasic = styled.div`
  display: grid;
  gap: 3.2rem;
  grid-template-columns: 1fr 1fr;
`;

const Img = styled.img`
  display: block;

  max-width: 100%;

  object-position: center;
`;

const Div = styled.div`
  padding-top: 3.2rem;
`;

function IntroductionBasic() {
  return (
    <>
      <StyledIntroductionBasic>
        <Img src="introductionBasic.jpg"></Img>
        <Div>
          Dive into a new form of <Fancy>education</Fancy> with me!
        </Div>
      </StyledIntroductionBasic>
    </>
  );
}

export default IntroductionBasic;
