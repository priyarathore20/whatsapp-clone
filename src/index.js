import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.styled';
import { GlobalStyles } from './App.styled';
import { ThemeProvider } from 'styled-components';
import AuthContextProvider from './Context/AppContext';
import { SnackbarProvider } from 'notistack';

const darkTheme = {
  color: {
    body: '#111B21',
    font: '#222e35',
    panelHeaderBackground: '#202c33',
    panelHeaderBackgroundRgb: '32,44,51',
  },
};

// const lightTheme = {

// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeProvider theme={darkTheme}>
      <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
        <GlobalStyles />
        <App />
        </SnackbarProvider>
      </ThemeProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
