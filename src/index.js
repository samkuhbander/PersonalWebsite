import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Footer from "./components/footer";
import Header from "./components/header";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Header></Header>
    <App />
    <Footer></Footer>
  </BrowserRouter>,
  document.getElementById('root')
)
