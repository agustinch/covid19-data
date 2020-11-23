import React, { useEffect, useState } from 'react';
import { RefactorActionInfo } from 'typescript';
import About from './components/About';
import CasesTotal from './components/CasesTotal';
import Header from './components/Header';
import NavbarOnePage from './components/NavbarOnePage';
import styled from 'styled-components';
import CountryCases from './components/CountryCases';
import { Element } from 'react-scroll';
import Footer from './components/Footer';

const AppContainer = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(/images/world.png);
  background-size: auto;
  background-position: top;
`;

const countries = [
  {
    id: 'US',
    name: 'USA',
  },
  {
    id: 'IN',
    name: 'India',
  },
  {
    id: 'BR',
    name: 'Brasil',
  },
  {
    id: 'FR',
    name: 'Francia',
  },
  {
    id: 'RU',
    name: 'Rusia',
  },
];

export interface DataTotals {
  idCountry?: string;
  countryName?: string;
  newConfirmed?: number;
  newDeaths?: number;
  newRecovered?: number;
  totalConfirmed: number;
  totalDeaths: number;
  totalRecovered: number;
}

const App: React.FC = () => {
  const [dataTotalsGlobal, setDataTotalsGlobal] = useState<DataTotals>({
    newConfirmed: 0,
    newDeaths: 0,
    newRecovered: 0,
    totalConfirmed: 0,
    totalDeaths: 0,
    totalRecovered: 0,
  });
  const [dataTotalsCountry, setDataTotalsCountry] = useState<DataTotals[]>([
    {
      idCountry: '',
      countryName: '',
      totalConfirmed: 0,
      totalDeaths: 0,
      totalRecovered: 0,
    },
  ]);

  useEffect(() => {
    fetch('https://api.covid19api.com/summary', {
      method: 'GET',
      redirect: 'follow',
    })
      .then((response) => response.json())
      .then((result) => {
        setDataTotalsGlobal({
          newConfirmed: result.Global.NewConfirmed,
          newDeaths: result.Global.NewDeaths,
          newRecovered: result.Global.NewRecovered,
          totalConfirmed: result.Global.TotalConfirmed,
          totalDeaths: result.Global.TotalDeaths,
          totalRecovered: result.Global.TotalRecovered,
        });
        const countriesData = result.Countries.filter((country: any) =>
          countries.map((c) => c.id).includes(country.CountryCode)
        );
        setDataTotalsCountry(
          countriesData
            .map((country: any) => ({
              idCountry: country.CountryCode,
              countryName:
                countries.find((c) => c.id === country.CountryCode)?.name ||
                country.Country,
              totalConfirmed: country.TotalConfirmed,
              totalDeaths: country.TotalDeaths,
              totalRecovered: country.TotalRecovered,
            }))
            .sort(
              (a: DataTotals, b: DataTotals) =>
                b.totalConfirmed - a.totalConfirmed
            )
        );
      })
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <>
      <AppContainer>
        <NavbarOnePage />
        <Element name="header">
          <Header id="header" />
        </Element>
        <Element name="casesTotal">
          <CasesTotal id="casesTotal" dataTotalsGlobal={dataTotalsGlobal} />
        </Element>
        <Element name="about">
          <About id="about" />
        </Element>
        <Element name="countryCases">
          <CountryCases
            id="countryCases"
            dataTotalsCountry={dataTotalsCountry}
          />
        </Element>
        <Footer />
      </AppContainer>
    </>
  );
};

export default App;
