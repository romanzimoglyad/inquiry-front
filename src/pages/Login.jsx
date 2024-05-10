import styled from "styled-components";
import LoginForm from "../features/auth/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;
const StyledLogo = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Login() {
  return (
    <LoginLayout>
      <StyledLogo>
        <Logo />
      </StyledLogo>
      <Heading as="h4">Login to your account</Heading>
      <LoginForm></LoginForm>
    </LoginLayout>
  );
}

export default Login;
