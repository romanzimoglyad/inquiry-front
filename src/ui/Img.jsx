import styled, { css } from "styled-components";

const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-position: center;
  border-radius: var(--border-radius-lg);
  ${({ scale }) =>
    scale &&
    css`
      transform: scale(1.25); /* Increase size */
    `}
  transition: transform 0.3s ease;
`;
export default Img;
