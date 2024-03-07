import styled from "styled-components";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import Fancy from "./LondrinaText";

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledAboutMe = styled.div`
  margin-top: 3.2rem;
  display: grid;
  gap: 3.2rem;
  grid-template-columns: 1fr 1fr;
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
  color: var(--color-brand-700);
`;
const Header = styled.div`
  font-size: 2.8rem;
`;
const Text = styled.div`
  font-size: 1.6rem;
`;

const Img = styled.img`
  display: block;
  max-width: 100%;
  object-position: center;
`;

const Line = styled.div`
  position: relative;
  border-top: 1px solid var(--color-brand-500);

  color: var(--color-brand-500);

  &::before {
    content: "";
    position: absolute;
    top: 50%; /* Position the circle in the middle of the line */
    left: 0;
    transform: translateY(-50%); /* Center the circle vertically */
    width: 10px; /* Set the width and height of the circle */
    height: 10px;
    border-radius: 50%; /* Make it a circle */
    background-color: var(--color-brand-500); /* Set the color of the circle */
  }
  transform: translateX(-20%);
`;

function AboutMe() {
  const navigate = useNavigate();
  return (
    <StyledAboutMe>
      <Left>
        <StyledText>
          <MainHeader>
            <Fancy>I am Anna!</Fancy>
          </MainHeader>
          <Line />
          <Header>I am so smart and clever and i can do everything!</Header>

          <Text>
            And also i love my husband Roman - he is an amzaing programmer!
          </Text>
        </StyledText>
        <Button onClick={() => navigate("/about")}>Learn more</Button>
      </Left>

      <Img src="anna.jpg" />
    </StyledAboutMe>
  );
}

export default AboutMe;
