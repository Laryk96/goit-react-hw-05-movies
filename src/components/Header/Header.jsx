import { FaHome, FaFilm } from 'react-icons/fa';
import paths from 'routs/paths.js';
import {
  HeaderNav,
  Navigation,
  NavigationList,
  NavLinkStyled,
} from './Header.styled';
const { home, movies } = paths;

const Header = () => {
  return (
    <HeaderNav>
      <Navigation>
        <NavigationList>
          <li>
            <NavLinkStyled to={home}>
              <FaHome />
              <p> Home</p>
            </NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to={movies}>
              <FaFilm />
              <p> Movies</p>
            </NavLinkStyled>
          </li>
        </NavigationList>
      </Navigation>
    </HeaderNav>
  );
};

export default Header;
