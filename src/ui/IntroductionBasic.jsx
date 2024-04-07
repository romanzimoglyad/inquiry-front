import styled from "styled-components";
import AboutMe from "./AboutMe";
import Fancy from "./Fancy";
import Img from "./Img";
import { useEffect, useState } from "react";
import Row from "./Row";
import Button from "./Button";
import Materials from "./Materials";
import { useNavigate } from "react-router-dom";

const StyledIntroductionBasic = styled.div`
  display: grid;
  gap: 9.6rem;
  grid-template-columns: 1fr 1fr;
  font-size: var(--font-size-llg);
  word-break: break-word;
  position: relative;
`;

const ButtonArea = styled.div`
  display: flex;
  margin-right: 5rem;
  margin-top: 2.4rem;

  justify-content: left;
  align-items: center;
  gap: 2.4rem;
`;

const Text = styled.div`
  line-height: 1.6;
  font-weight: 600;
  justify-content: left;
`;

const Div = styled.div`
  padding-top: 3.2rem;
  line-height: 1.6;
  font-weight: 500;
`;

const Header = styled.div`
  letter-spacing: -0.5px;
  font-weight: 800;
  font-size: var(--font-size-extra);
  text-align: left;
`;

const FadingImg = styled.div`
  position: relative;
  border-radius: var(--border-radius-llg);
  object-fit: cover;
  /* @keyframes fade {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  } */
`;

const FloatingImg = styled.img`
  position: absolute;
  top: ${(props) => props.top || "0"};
  left: ${(props) => props.left || "0"};
  border-radius: var(--border-radius-lg);
  max-width: 100%;
  max-height: 100%;
`;

const Books = styled.div``;

function IntroductionBasic() {
  const navigate = useNavigate();

  const images = [
    { src: "introductionBasic.jpg", top: "30%", left: "-10%" },
    { src: "anna.jpg", top: "100%", left: "20%" },
    { src: "Anna_standing.jpg", top: "-10%", left: "60%" },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <StyledIntroductionBasic>
        <Text>
          <Header>
            Dive into a new form of <Fancy color="brand-700">education</Fancy>{" "}
            with me
          </Header>
          <Div>
            Enjoy all my <Fancy color="brand-700">learning materials</Fancy> and
            {` `}
            <Fancy color="brand-700">lessons</Fancy>
          </Div>
          <ButtonArea>
            <Button onClick={() => navigate("/resources")}>Try it now</Button>
            <Button as="a" href="#aboutme" variation="secondary">
              Learn more &darr;
            </Button>
          </ButtonArea>
          <Materials />
        </Text>
        <FadingImg>
          {images.map((image, index) => (
            <FloatingImg
              key={index}
              src={image.src}
              top={image.top}
              left={image.left}
            />
          ))}
        </FadingImg>
      </StyledIntroductionBasic>
    </>
  );
}

export default IntroductionBasic;
