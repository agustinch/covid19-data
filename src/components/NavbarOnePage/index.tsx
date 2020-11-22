import React from 'react';
import { Navbar, Nav, Col, Container } from 'react-bootstrap';
import { NavbarContainer } from './Styles';
import { Link, animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';

const NavbarOnePage: React.FC = () => (
  <NavbarContainer bg="dark" variant="dark" expand="lg" sticky="top">
    <Navbar.Brand onClick={() => scroll.scrollToTop()}>
      Covid-19 Datos
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link
          as={Link}
          to="casesTotal"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
        >
          Datos globales
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="about"
          spy={true}
          smooth={true}
          offset={-120}
          duration={500}
        >
          Sobre Covid
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="countryCases"
          spy={true}
          smooth={true}
          offset={-120}
          duration={500}
        >
          Datos por País
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </NavbarContainer>
);

export default NavbarOnePage;
