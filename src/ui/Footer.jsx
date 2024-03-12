import styled from "styled-components";
import Row from "./Row";
import Logo from "./Logo";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import Link from "./Link";
import StyledNavLink from "./StyledNavLink";
import Line from "./Line";

const FooterHeading = styled.div`
  font-size: var(--font-size-llg);
  font-weight: 500;
  line-height: 1;
  color: var(--color-grey-900);
`;
const FooterText = styled.div`
  font-size: var(--font-size-lg);
  color: var(--color-grey-700);
  &:last-child {
    margin-top: auto;
  }
`;

const Links = styled.div``;
const Container = styled.div`
  display: grid;
  gap: 8rem;
  grid-template-columns: auto 1fr;
`;

const FooterLink = styled.div`
  font-size: var(--font-size-extra);
  color: var(--color-grey-900);
`;

const StyledFooter = styled.footer`
  padding: 2.4rem 0;

  border-top: 2px solid var(--color-brand-100);
  max-width: 120rem;
  margin: 0 auto;

  margin-top: 2.4rem;
`;

function Footer() {
  return (
    <StyledFooter>
      <Row type="horizontal" gap="4.2rem">
        <Links>
          <Row type="horizontal" gap="2.4rem">
            <Link href="https://www.instagram.com/your_username">
              <CiInstagram
                style={{
                  height: "var(--font-size-llg)",
                  width: "var(--font-size-llg)",
                  color: "var(--color-grey-900)",
                }}
              />
            </Link>
            <Link href="https://www.instagram.com/your_username">
              <CiFacebook
                style={{
                  height: "var(--font-size-llg)",
                  width: "var(--font-size-llg)",
                  color: "var(--color-grey-900)",
                }}
              />
            </Link>
            <Link href="https://www.instagram.com/your_username">
              <CiTwitter
                style={{
                  height: "var(--font-size-llg)",
                  width: "var(--font-size-llg)",
                  color: "var(--color-grey-900)",
                }}
              />
            </Link>
          </Row>
          <Line />
        </Links>
        <Container>
          <Row>
            <FooterHeading>
              <Link href="#">
                <Logo />
              </Link>
            </FooterHeading>

            <FooterText>
              Copyright &copy; <span className="year">2027</span>
            </FooterText>
          </Row>
          <Row>
            <StyledNavLink to="/resources">
              <span>Resources</span>
            </StyledNavLink>
            <StyledNavLink to="/about">
              <span>About</span>
            </StyledNavLink>
            <StyledNavLink to="/contacts">
              <span>Contact</span>
            </StyledNavLink>
          </Row>
        </Container>
      </Row>
    </StyledFooter>
  );
}

export default Footer;
