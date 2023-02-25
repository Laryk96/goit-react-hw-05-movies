import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import { Container, Wrapper } from 'components/App.styled';
import Footer from 'components/Footer/Footer';

const MainLayouts = () => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default MainLayouts;
