import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';

export const NavbarContainer = styled(Navbar)`
  & > .navbar-brand {
    cursor: pointer;
  }
  & > .navbar-collapse > .navbar-nav > .nav-link {
    cursor: pointer;
  }
`;
