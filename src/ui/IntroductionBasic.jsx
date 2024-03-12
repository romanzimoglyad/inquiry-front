import styled from "styled-components";
import AboutMe from "./AboutMe";
import Fancy from "./Fancy";
import Img from "./Img";
import { useEffect, useState } from "react";
import Row from "./Row";

const StyledIntroductionBasic = styled.div`
  display: grid;
  gap: 3.2rem;
  grid-template-columns: 1fr 1fr;
  font-size: var(--font-size-llg);
`;

const Div = styled.div`
  padding-top: 3.2rem;
  line-height: 1.6;
  font-weight: 500;
`;

const FadingImg = styled.div`
  transition: opacity 0.5s ease-in-out;
  animation: fade 3s infinite;
  @keyframes fade {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
`;

function IntroductionBasic() {
  const images = ["introductionBasic.jpg", "anna.jpg"];
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
        <FadingImg>
          <Img src={images[currentImageIndex]}></Img>
        </FadingImg>
        <Row>
          <Div>
            Dive into a new form of <Fancy color="brand-700">education</Fancy>
          </Div>
          <Div>
            Enjoy all my <Fancy color="brand-700">learning materials</Fancy> and
            {` `}
            <Fancy color="brand-700">lessons</Fancy>
          </Div>
        </Row>
      </StyledIntroductionBasic>
    </>
  );
}

export default IntroductionBasic;
