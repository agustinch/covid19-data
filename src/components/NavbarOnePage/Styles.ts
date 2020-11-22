import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';

export const NavbarContainer = styled(Navbar)`
  height: 70px;

  & > .navbar-brand {
    cursor: pointer;
  }
  & > .navbar-collapse > .navbar-nav > .nav-link {
    cursor: pointer;
  }
`;
