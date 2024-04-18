import styled, { css, keyframes } from "styled-components";

export const IntroductionGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 7fr;
  gap: 2rem;
  margin-top: 5rem;
  align-self: flex-start;
  margin-left: 2rem;
  position: relative;
`;

export const IntroductionContainer = styled.div`
  position: relative;
`;

const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px) ; }
  50% { transform: translateX(5px) ;}
  75% { transform: translateX(-5px) ;}
  100% { transform: translateX(0); }
`;

export const IntroductionHeader = styled.div`
  margin-top: 10rem;
  letter-spacing: -0.5px;
  font-weight: 800;
  font-size: var(--font-size-extra);
  text-align: left;
  align-self: flex-start;
  ${({ shaking }) =>
    shaking &&
    css`
      animation: ${shakeAnimation} 0.5s;
    `}
`;

export const IntroductionArrow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 19rem;
  width: 0;
  height: 100%;
  border-left: 2px dashed var(--color-brand-700);
  &::after {
    content: "";
    position: absolute;
    top: calc(100% - 4px);
    left: -7px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid var(--color-brand-700);
  }
`;

export const IntroductionTextHeader = styled.div`
  line-height: 1.6;
  font-size: var(--font-size-lllg);
  font-weight: 600;
  color: var(--color-grey-800);
`;

export const IntroductionCenterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const IntroductionRightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const IntroductionDescription = styled.div`
  display: flex;
  width: 40rem;

  align-items: center;

  gap: 1rem;
`;

export const IntroductionDateContainer = styled.div`
  text-align: center;
`;

export const IntroductionDateItem = styled.div`
  font-size: var(--font-size-medium);
  color: var(--color-grey-600);
  padding: 0.5rem;
`;

export const IntroductionText = styled.div`
  line-height: 1.6;
  font-size: var(--font-size-llg);
  font-weight: 400;
  color: var(--color-grey-800);

  color: var(--color-grey-700);
  min-width: 10rem;
  &::before {
    content: "•";
    margin-right: 5px;
  }
`;
export const IntroductionGridDate = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-items: ${(props) => props.align};
  text-align: left;

  /* Adjust the height as needed */
`;
export const IntroductionGridItem = styled.div`
  display: flex;
  justify-content: left;
  align-items: ${(props) => props.align};
  text-align: left;

  padding: 1rem;
  /* background-color: var(--color-grey-50);
  border-radius: var(--border-radius-md);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
  position: relative;
  /* Adjust the height as needed */
`;
IntroductionGridItem.defaultProps = {
  align: "center",
};

export const IntroductionImg = styled.img`
  display: block;
  width: 10rem;
`;
