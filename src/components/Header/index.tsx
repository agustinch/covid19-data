import React from 'react';
import { Badge, Row, Col, Container } from 'react-bootstrap';
import { HeaderContainer, HeaderTitle, HeaderSubTitle } from './Styles';

interface Props {
  id: string;
}

const Header: React.FC<Props> = () => (
  <HeaderContainer className="d-flex">
    <Container className="my-auto w-100 text-center">
      <Row>
        <Col xl={12} className="text-center my-auto">
          <HeaderTitle>Covid-19 datos en el mundo</HeaderTitle>
          <HeaderSubTitle>
            Datos actualizados sobre la situación del Covid-19 en el mundo
          </HeaderSubTitle>
        </Col>
      </Row>
    </Container>
  </HeaderContainer>
);

export default Header;
