import { ButtonToHomePage } from './ButtonToHome.styled';
import paths from 'routs/paths';

const { home } = paths;

const ButtonToHome = ({ children }) => {
  return <ButtonToHomePage to={home}>{children}</ButtonToHomePage>;
};

export default ButtonToHome;
