import styled from "styled-components";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import Fancy from "./Fancy";
import Img from "./Img";
import Line from "./Line";
import Stats from "./Stat";

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledAboutMe = styled.div`
  margin-top: 3.2rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: auto 1fr;
`;
const StyledText = styled.div`
  max-width: 40rem;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;
const MainHeader = styled.div`
  font-size: 3.2rem;
`;
const Header = styled.div`
  margin-top: 2.4rem;
  font-size: 2.8rem;
`;
const Text = styled.div`
  margin-top: 1.2rem;
  font-size: 1.6rem;
`;

function AboutMe() {
  const navigate = useNavigate();
  return (
    <StyledAboutMe id="aboutme">
      <Stats />
      <Left>
        <StyledText>
          <MainHeader>
            <Fancy color="brand-700">I am Anna!</Fancy>
          </MainHeader>
          <Line />
          <Header>I am so smart and clever and i can do everything!</Header>

          <Text>
            And also i love my husband Roman - he is an amzaing programmer!
          </Text>
        </StyledText>
        <Button onClick={() => navigate("/about")}>Learn more</Button>
      </Left>

      {/* <Img src="anna.jpg" /> */}
    </StyledAboutMe>
  );
}

export default AboutMe;
