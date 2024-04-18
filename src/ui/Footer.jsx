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
  position: relative;

  border-top: 2px solid var(--color-brand-100);
  max-width: 120rem;
  margin: 0 auto;

  margin-top: 2.4rem;
`;

const PenImg = styled.img`
  position: absolute;
  display: block;
  max-width: 100%;
  width: 10rem;
  height: 10rem;
  bottom: 13%;
  object-position: center;
  transform: rotate(-10deg);
  transform: rotate(-128.8deg);
  border-radius: var(--border-radius-lg);
`;

const BooksImg = styled.img`
  position: absolute;
  right: -50%;
  rotate: 10%;
  bottom: 15%;
  display: block;
  max-width: 100%;
  width: 10rem;
  height: 10rem;
  object-position: center;

  border-radius: var(--border-radius-lg);
`;

function Footer() {
  return (
    <StyledFooter>
      <BooksImg src="books.png"></BooksImg>

      <Row type="horizontal" gap="4.2rem">
        <Links>
          <Row type="horizontal" gap="2.4rem">
            <Link href="https://www.instagram.com/your_username">
              <CiInstagram
                style={{
                  height: "var(--font-size-lllg)",
                  width: "var(--font-size-lllg)",
                }}
              />
            </Link>
            <Link href="https://www.instagram.com/your_username">
              <CiFacebook
                style={{
                  height: "var(--font-size-lllg)",
                  width: "var(--font-size-lllg)",
                }}
              />
            </Link>
            <Link href="https://www.instagram.com/your_username">
              <CiTwitter
                style={{
                  height: "var(--font-size-lllg)",
                  width: "var(--font-size-lllg)",
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
            {/* <PenImg src="pen.png"></PenImg> */}
            <FooterText>
              Copyright &copy; <span className="year">2024</span>
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
