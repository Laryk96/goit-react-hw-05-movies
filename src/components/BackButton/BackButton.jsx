import { FaArrowLeft } from 'react-icons/fa';
import { ButtonToHomePage } from './BackButton.styled';
import { useLocation } from 'react-router-dom';

const BackButton = ({ children }) => {
  const { state } = useLocation();

  if (!state || !state.prevPage) return null;

  return (
    <ButtonToHomePage to={state.prevPage}>
      <FaArrowLeft />
      <p>{children}</p>
    </ButtonToHomePage>
  );
};

export default BackButton;
