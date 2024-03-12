import styled from "styled-components";

const Link = styled.a`
  &:link,
  &:visited {
    color: var(--color-grey-600);
    font-weight: 500;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover {
    color: var(--color-brand-700);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    color: var(--color-grey-400);
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
