import { FaArrowLeft, FaHome } from 'react-icons/fa';
import PropTypes from 'prop-types';

import { ButtonToHomePage } from './BackButton.styled';
const BackButton = ({ to, children }) => {
  return (
    <ButtonToHomePage to={to}>
      <FaArrowLeft />
      <p>{children}</p>
    </ButtonToHomePage>
  );
};

BackButton.propTypes = {
  to: PropTypes.string.isRequired,
};

export default BackButton;
