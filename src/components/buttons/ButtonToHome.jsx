import { FaArrowLeft } from 'react-icons/fa';
import { ButtonToHomePage } from './ButtonToHome.styled';
import paths from 'routs/paths';

const { home } = paths;

const ButtonToHome = ({ children }) => {
  return (
    <ButtonToHomePage to={home}>
      <FaArrowLeft />
      <p> {children}</p>
    </ButtonToHomePage>
  );
};

export default ButtonToHome;
