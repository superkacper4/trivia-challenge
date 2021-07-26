import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from "react-router-dom";
import { theme, GlobalStyle } from '../style';
import RouterComponent from '../Router';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <RouterComponent />
      <GlobalStyle />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
