import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import UiContextProvider from './context/ui.context';

const GlobalStyle = createGlobalStyle`
  a:-webkit-any-link {
    text-decoration: none;
  }
`;

ReactDOM.render(
  <UiContextProvider>
    <GlobalStyle />
    <App />
  </UiContextProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
