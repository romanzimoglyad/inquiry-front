import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;

  background-color: var(--color-brand-50);
`;

const Main = styled.main`
  padding: 4rem 4.8rem 4.8rem;
`;

const Container = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header></Header>
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
