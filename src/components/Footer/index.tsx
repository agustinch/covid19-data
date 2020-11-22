import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FooterContainer } from './Styles';

const Footer: React.FC = () => (
  <FooterContainer>
    <Row className="h-100 w-100">
      <Col className="my-auto">
        <span>
          Dev: <a href="https://github.com/agustinch">@agustinch</a>
        </span>
      </Col>
      <Col className="text-right my-auto">
        <span>
          {' '}
          Datos proveidos por: <a href="https://covid19api.com/">Covid19api</a>
        </span>
      </Col>
    </Row>
  </FooterContainer>
);

export default Footer;
