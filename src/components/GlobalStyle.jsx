import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #f8f3f3;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }
  
`;

export const WrapSection = styled.div`
min-height: 300px;
  display: flex;
  margin: auto;
`;

export const SectionWrap = styled.div`
margin-left: 400px;
  background-color: aqua;
`;
export const SectionInfo = styled.div`
margin-left: 20px;
  background-color: whitesmoke;
`;
