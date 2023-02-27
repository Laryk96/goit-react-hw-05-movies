import { FaArrowLeft, FaHome } from 'react-icons/fa';
import PropTypes from 'prop-types';

import { ButtonToHomePage } from './BackButton.styled';
const BackButton = ({ to, children }) => {
  console.log(to);
  return (
    <ButtonToHomePage to={to}>
      <FaArrowLeft />
      <p>{children}</p>
    </ButtonToHomePage>
  );
};

BackButton.propTypes = {
  isPageNotFound: PropTypes.bool,
};

export default BackButton;
