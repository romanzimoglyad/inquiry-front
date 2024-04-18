import styled, { css, keyframes } from "styled-components";

const shakeAnimation = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px) ; }
  50% { transform: translateX(5px) ;}
  75% { transform: translateX(-5px) ;}
  100% { transform: translateX(0); }
`;
const Fancy = styled.div`
  display: inline-block;
  color: var(--color-${(props) => props.color});
  font-family: "Londrina Solid", sans-serif;
  ${({ shaking }) =>
    shaking &&
    css`
      animation: ${shakeAnimation} 0.6s;
    `}
`;

export default Fancy;
