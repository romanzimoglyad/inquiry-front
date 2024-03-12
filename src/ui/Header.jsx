import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { SiStudyverse } from "react-icons/si";
import HeaderNav from "./HeaderNav";
import StyledNavLink from "./StyledNavLink";
import Logo from "./Logo";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.4rem;
  padding: 2.4rem;
  border-radius: 32rem;
  background-color: var(--color-grey-50);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Add a less visible box shadow to the bottom */
  padding: 1.6rem;
  margin: 2.4rem;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledNavLink to="/">
        <Logo></Logo>
      </StyledNavLink>
      <HeaderNav />
    </StyledHeader>
  );
}
export default Header;
