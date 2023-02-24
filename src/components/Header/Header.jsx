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
            <NavLinkStyled to={home} end>
              Home
            </NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to={movies} end>
              Movies
            </NavLinkStyled>
          </li>
        </NavigationList>
      </Navigation>
    </HeaderNav>
  );
};

export default Header;
