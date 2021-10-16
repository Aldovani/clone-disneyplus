import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { GlobalCss } from './styles/Global';
import { Palette } from './styles/Palette';
import {ThemeProvider} from 'styled-components'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Palette}>
      <GlobalCss/>
    <App />
</ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
