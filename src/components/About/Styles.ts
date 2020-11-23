import styled from 'styled-components';

export const AboutContainer = styled.div`
  background-color: white;
  width: 100%;
  min-height: 300px;
  padding: 2vh 20vw;
  -webkit-box-shadow: 0px -7px 15px -1px rgba(0, 0, 0, 0.08);
  box-shadow: 0px -7px 15px -1px rgba(0, 0, 0, 0.08);
  &:before {
    content: '';
    background-color: rgb(255 255 255);
    border: solid 5px #fff;
    border-color: white white #ffffff white;
    border-radius: 0 0 240px 50%/60px;
  }
  p {
    text-align: left;
    font-size: 1.1em;
  }
`;
