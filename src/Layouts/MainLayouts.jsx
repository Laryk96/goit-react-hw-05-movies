import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import { Container } from 'components/App.styled';

const MainLayouts = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default MainLayouts;
