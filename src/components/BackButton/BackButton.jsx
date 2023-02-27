import { FaArrowLeft, FaHome } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { ButtonToHomePage } from './BackButton.styled';
import paths from 'routs/paths';
const { home } = paths;

const BackButton = ({ isPageNotFound, children }) => {
  const { state } = useLocation();

  if (isPageNotFound) {
    return (
      <ButtonToHomePage to={home}>
        <FaHome />
        <p>{children}</p>
      </ButtonToHomePage>
    );
  }

  if (state || state.prevPage) {
    return (
      <ButtonToHomePage to={state.prevPage}>
        <FaArrowLeft />
        <p>{children}</p>
      </ButtonToHomePage>
    );
  }
};

BackButton.propTypes = {
  isPageNotFound: PropTypes.bool,
};

export default BackButton;
