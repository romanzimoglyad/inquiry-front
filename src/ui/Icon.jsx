import styled from "styled-components";

export const StyledMaterialItem = styled.div`
  display: flex;
  gap: 1rem;
  font-size: ${({ hover }) => (hover ? "3rem" : "var(--font-size-llg)")};
  transition: font-size 0.3s ease;
`;
