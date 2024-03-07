import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { SiStudyverse } from "react-icons/si";
import HeaderNav from "./HeaderNav";
import StyledNavLink from "./StyledNavLink";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.4rem;
  padding: 2.4rem;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledNavLink to="/">
        <SiStudyverse color="var(--color-brand-600)"></SiStudyverse>
      </StyledNavLink>
      <HeaderNav />
    </StyledHeader>
  );
}
export default Header;
