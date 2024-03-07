import styled from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  color: var(--color-brand-50);
  background-color: var(--color-brand-600);
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  &:hover {
    background-color: var(--color-brand-700);
  }
`;
export default Button;
