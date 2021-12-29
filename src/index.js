import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Footer from "./components/footer";
import Header from "./components/header";
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';


let theme = createTheme({
  typography: {
    fontFamily: 'Roboto'
  }
})
theme = responsiveFontSizes(theme);

ReactDOM.render(
  <ThemeProvider theme={theme}>
  <BrowserRouter>
    <Header></Header>
    <App />
    <Footer></Footer>
  </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
)