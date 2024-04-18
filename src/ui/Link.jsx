import styled from "styled-components";

const Link = styled.a`
  &:link,
  &:visited {
    color: var(--color-grey-800);
    font-weight: 700;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover {
    color: var(--color-brand-700);
    border-radius: var(--border-radius-lg);
  }

  & svg {
    width: 4rem;
    height: 4rem;
    color: var(--color-grey-800);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-700);
  }
`;

export default Link;
