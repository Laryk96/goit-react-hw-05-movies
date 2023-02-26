import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const HeaderNav = styled.header`
  background-color: #212121;
  margin-bottom: 85px;
`;

const Navigation = styled.nav`
  padding: 20px 40px;
`;

const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  gap: 25px;
`;

const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px;
  font-size: 16px;
  line-height: 1.666;
  color: white;
  text-decoration: none;
  border-radius: 7px;
  &.active {
    color: orange;
  }

  transition: transform 80ms ease-in, background-color 80ms ease-in,
    color 80ms ease-in;
  &:hover {
    transform: scale(1.1);
    background-color: orange;
    color: black;
  }
`;

export { HeaderNav, NavigationList, NavLinkStyled, Navigation };
