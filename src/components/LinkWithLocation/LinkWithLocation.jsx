import { useLocation } from 'react-router-dom';
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

export default LinkWithLocation;
