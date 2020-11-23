import styled from 'styled-components';

export const CountryCasesContainer = styled.div`
  background-color: #1c212e;
  width: 100%;
  min-height: 400px;
  color: white;
  text-align: center;
  -webkit-box-shadow: inset 0px 0px 15px 6px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0px 0px 15px 6px rgba(0, 0, 0, 0.2);
  h1 {
    font-weight: 700;
  }
  &:before {
    content: '';
    transform: skewY(-1deg);
    transform-origin: top left;
    display: block;
    width: 100%;
    background-color: #1c212e;
    height: 50px;
  }

  @media (max-width: 432px) {
    .checkbox-budget:checked + label,
    .checkbox-budget:not(:checked) + label {
      font-size: 30px;
    }
  }
`;
