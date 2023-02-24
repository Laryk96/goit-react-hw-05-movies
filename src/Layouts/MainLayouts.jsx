import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import { Container } from 'components/App.styled';
import Footer from 'components/Footer/Footer';

const MainLayouts = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default MainLayouts;
