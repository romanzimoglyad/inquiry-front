import { SiStudyverse } from "react-icons/si";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import StyledNavLink from "./StyledNavLink";

const StyledHeaderNav = styled.div`
  display: flex;
`;

function HeaderNav() {
  return (
    <StyledHeaderNav>
      <StyledNavLink to="/resources">
        <span>Resources</span>
      </StyledNavLink>
      <StyledNavLink to="/about">
        <span>About</span>
      </StyledNavLink>
      <StyledNavLink to="/contacts">
        <span>Contact</span>
      </StyledNavLink>
    </StyledHeaderNav>
  );
}

export default HeaderNav;
