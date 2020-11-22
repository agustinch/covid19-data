import CountUp from 'react-countup';
import styled from 'styled-components';

export const CasesTotalContainer = styled.div`
  min-height: 45vh;
  margin: 0px 20vw;
  padding: 30px;
  text-align:center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  -webkit-box-shadow: 0px 0px 29px -5px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 0px 29px -5px rgba(0, 0, 0, 0.16);
  background-color: white;
  h1 {
    font-size 1.8rem;
    color: #969696;
  }

  h2 {
    font-size 1.6rem;
  }
`;

export const TotalNumbers = styled(CountUp)`
  font-size: 1.8rem;
  font-weight: 600;
`;
