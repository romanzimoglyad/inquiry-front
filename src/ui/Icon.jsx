import styled from "styled-components";

export const StyledMaterialItem = styled.div`
  display: flex;
  gap: 1rem;
  font-size: ${({ hover }) => (hover ? "2.4rem" : "2.4rem")};
  transition: font-size 0.3s ease;
`;
