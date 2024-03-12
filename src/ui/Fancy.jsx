import styled from "styled-components";

const Fancy = styled.span`
  color: var(--color-${(props) => props.color});
  font-family: "Londrina Solid", sans-serif;
`;

export default Fancy;
