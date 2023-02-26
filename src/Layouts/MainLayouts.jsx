import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import { Container, Wrapper } from 'components/App/App.styled';
import Footer from 'components/Footer/Footer';

const MainLayouts = () => {
  return (
    <Wrapper>
      <Header />

      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default MainLayouts;
