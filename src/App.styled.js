import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }
`;

export const Loader = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
  background-color: #111b21;

  img {
    height: 50%;
    width: 50%;
  }
`;
