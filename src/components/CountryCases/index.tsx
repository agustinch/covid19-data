import React, { useEffect, useState } from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import CovidImage from '../../assets/covid.jpg';
import { CountryCasesContainer } from './Styles';
import styled from 'styled-components';
import { DataTotals } from '../../App';
import { TotalNumbers } from '../CasesTotal/Styles';

interface Props {
  id: string;
  dataTotalsCountry: DataTotals[];
}

const TotalCasesCountry = styled.div`
  padding: 30px;
  h1 {
    font-size: 2.1em;
  }
  span {
    font-size: 1.91em;
  }
`;

const CountryCases: React.FC<Props> = ({ dataTotalsCountry }) => {
  const [countryActived, setCountryActived] = useState<DataTotals>(
    dataTotalsCountry[0]
  );

  const handleChange = (e: any) => {
    if (e.target.checked) {
      setCountryActived(
        dataTotalsCountry.find((d) => d.idCountry === e.target.id) ||
          dataTotalsCountry[0]
      );
    }
  };

  useEffect(() => {
    setCountryActived(dataTotalsCountry[0]);
  }, [dataTotalsCountry]);
  return (
    <CountryCasesContainer>
      <div className="text-center">
        <h1>Datos por País</h1>
      </div>
      <Row noGutters className="mt-4 p-5">
        <Col lg={6} className="d-flex align-items-center flex-column">
          {dataTotalsCountry.map((country: DataTotals, i) => (
            <>
              <input
                className="checkbox-budget"
                type="radio"
                name="country"
                id={country.idCountry}
                checked={countryActived.idCountry === country.idCountry}
                onChange={handleChange}
              />
              <label
                className="for-checkbox-budget"
                htmlFor={country.idCountry}
              >
                <span data-hover={country.countryName}>
                  {country.countryName}
                </span>
              </label>
            </>
          ))}
        </Col>
        <Col lg={6} className="d-flex align-items-center flex-column">
          <TotalCasesCountry>
            <h1>Casos Confirmados</h1>
            <TotalNumbers
              end={countryActived.totalConfirmed}
              duration={1}
              formattingFn={(value: number) =>
                Intl.NumberFormat().format(value)
              }
            />
          </TotalCasesCountry>
          <TotalCasesCountry>
            <h1>Fallecidos</h1>
            <TotalNumbers
              end={countryActived.totalDeaths}
              duration={1}
              formattingFn={(value: number) =>
                Intl.NumberFormat().format(value)
              }
            />
          </TotalCasesCountry>
          <TotalCasesCountry>
            <h1>Recuperados</h1>
            <TotalNumbers
              end={countryActived.totalRecovered}
              duration={1}
              formattingFn={(value: number) =>
                Intl.NumberFormat().format(value)
              }
            />{' '}
          </TotalCasesCountry>
        </Col>
      </Row>
    </CountryCasesContainer>
  );
};

export default CountryCases;
