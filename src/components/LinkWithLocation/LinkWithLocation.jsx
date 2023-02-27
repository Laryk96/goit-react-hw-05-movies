import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import MovieLinkStyle from './LinkWithLocation.styled';

const LinkWithLocation = prop => {
  const { pathname } = useLocation();
  const { children } = prop;
  return (
    <MovieLinkStyle {...prop} state={{ prevPage: pathname }}>
      {children}
    </MovieLinkStyle>
  );
};

LinkWithLocation.propTypes = {
  to: PropTypes.string,
};

export default LinkWithLocation;
