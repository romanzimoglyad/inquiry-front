import { SiStudyverse } from "react-icons/si";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import StyledNavLink from "./StyledNavLink";
import UserAvatar from "../features/auth/UserAvatar";

const StyledHeaderNav = styled.div`
  display: flex;
  gap: 3.2rem;
  font-size: var(--font-size-llg);
  color: var(--color-grey-800);
`;

function HeaderNav() {
  return (
    <StyledHeaderNav>
      <UserAvatar />
      <StyledNavLink to="/resources">Resources</StyledNavLink>
      <StyledNavLink to="/about">About</StyledNavLink>
      <StyledNavLink to="/contacts">Contact</StyledNavLink>
    </StyledHeaderNav>
  );
}

export default HeaderNav;
