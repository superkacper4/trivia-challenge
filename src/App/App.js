import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Helmet } from "react-helmet";
import { HashRouter } from "react-router-dom";
import { theme, GlobalStyle } from '../style';
import RouterComponent from '../Router';

const App = () => (
  <ThemeProvider theme={theme}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>TRIVIA Challenge</title>
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap" rel="stylesheet" />
    </Helmet>
    <HashRouter>
      <RouterComponent />
      <GlobalStyle />
    </HashRouter>
  </ThemeProvider>
);

export default App;
