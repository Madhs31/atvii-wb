import React from 'react';
import ReactDOM from 'react-dom';
import Roteador from './Rotas/index';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Roteador />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
