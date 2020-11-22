import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Col, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import { DataTotals } from '../../App';
import { CasesTotalContainer, TotalNumbers } from './Styles';

interface Props {
  id: string;
  dataTotalsGlobal: DataTotals;
}

const CasesTotal: React.FC<Props> = ({ dataTotalsGlobal }) => {
  return (
    <CasesTotalContainer className=" ">
      <h1>Datos globales</h1>
      <Row noGutters className="mt-3">
        <Col xl={4}>
          <div className="p-4">
            <h2>Total casos activos</h2>
            <TotalNumbers
              end={dataTotalsGlobal.totalConfirmed}
              duration={3}
              formattingFn={(value: number) =>
                Intl.NumberFormat().format(value)
              }
            />
          </div>
          <div className="border-top p-4">
            <h2>Casos activos hoy</h2>
            <TotalNumbers
              end={dataTotalsGlobal.newConfirmed || 0}
              duration={3}
              formattingFn={(value: number) =>
                Intl.NumberFormat().format(value)
              }
            />
          </div>
        </Col>
        <Col className=" p-0 rounded" xl={4}>
          <div className=" p-4">
            <h2>Total fallecidos</h2>

            <TotalNumbers
              end={dataTotalsGlobal.totalDeaths}
              duration={3}
              formattingFn={(value: number) =>
                Intl.NumberFormat().format(value)
              }
            />
          </div>
          <div className="border-top  p-4">
            <h2>Fallecidos hoy</h2>

            <TotalNumbers
              end={dataTotalsGlobal.newDeaths || 0}
              duration={3}
              formattingFn={(value: number) =>
                Intl.NumberFormat().format(value)
              }
            />
          </div>
        </Col>
        <Col xl={4}>
          <div className="p-4">
            <h2>Total recuperados</h2>

            <TotalNumbers
              end={dataTotalsGlobal.totalRecovered}
              duration={3}
              formattingFn={(value: number) =>
                Intl.NumberFormat().format(value)
              }
            />
          </div>
          <div className="border-top  p-4">
            <h2>Recuperados hoy</h2>

            <TotalNumbers
              end={dataTotalsGlobal.newRecovered || 0}
              duration={3}
              formattingFn={(value: number) =>
                Intl.NumberFormat().format(value)
              }
            />
          </div>
        </Col>
      </Row>
    </CasesTotalContainer>
  );
};
export default CasesTotal;
