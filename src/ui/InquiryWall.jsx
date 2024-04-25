import styled from "styled-components";
import Img from "./Img";
import { IntroductionHeader } from "./IntroductionGrid";

const StyledInquiryWall = styled.div`
  margin-top: 9.6rem;
`;

const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 2.4rem;
`;

const ImgS = styled.div`
  width: 60%;
`;
const Text = styled.div``;
function InquiryWall() {
  return (
    <StyledInquiryWall>
      <IntroductionHeader>Enquiry wall</IntroductionHeader>
      <Container>
        <Text>Some text</Text>
        <ImgS>
          <Img src="./inquiry_wall.jpeg" />
        </ImgS>
      </Container>
    </StyledInquiryWall>
  );
}

export default InquiryWall;
