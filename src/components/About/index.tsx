import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { AboutContainer } from './Styles';
import CovidImage from '../../assets/covid.jpg';
import styled from 'styled-components';

interface Props {
  id: string;
}
const About: React.FC<Props> = () => (
  <AboutContainer>
    <Row>
      <Col xl={6}>
        <div className="h-100">
          <Image src="/images/avatar-covid.png" className="w-100" />
        </div>
      </Col>
      <Col xl={6} className="my-auto">
        <h1>¿Qué es Covid-19?</h1>
        <div>
          <p>
            La COVID‑19 es la enfermedad infecciosa causada por el coronavirus
            que se ha descubierto más recientemente. Tanto este nuevo virus como
            la enfermedad que provoca eran desconocidos antes de que estallara
            el brote en Wuhan (China) en diciembre de 2019. Actualmente la
            COVID‑19 es una pandemia que afecta a muchos países de todo el
            mundo.
          </p>
        </div>
      </Col>
    </Row>
  </AboutContainer>
);

export default About;
