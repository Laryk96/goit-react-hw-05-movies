import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const HeaderNav = styled.header`
  background-color: #212121;
  margin-bottom: 25px;
`;

const Navigation = styled.nav`
  padding: 25px 40px;
`;

const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  gap: 25px;
`;

const NavLinkStyled = styled(NavLink)`
  font-size: 18px;
  line-height: 1.666;
  color: white;
  text-decoration: none;

  &.active {
    color: orange;
  }
`;
export { HeaderNav, NavigationList, NavLinkStyled, Navigation };
