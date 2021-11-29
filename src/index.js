import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Arya from './Arya';
// alamat form harus sama dengan nama file yang akan dituju
import Alamat from './AlamatRumah';
import reportWebVitals from './reportWebVitals';
// alamat import harus sama dgn id yang ada di file yang akan dituju
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Arya />
    <Alamat />
  </React.StrictMode>,
  // alamat id react harus sama dengan id import dan id file yang akan di tuju
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
