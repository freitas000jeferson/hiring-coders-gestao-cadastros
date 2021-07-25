import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyled from './GlobalStyled';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyled/>
  </React.StrictMode>,
  document.getElementById('root')
);
