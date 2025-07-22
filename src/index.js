import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/fonts.css';
import Header from './components/Header.jsx';
import Main from './pages/Home.jsx';
import Footer from './components/Footer.jsx';
import Carregamento from './components/Carregamento.jsx';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
    <Carregamento />
  </React.StrictMode>
);
