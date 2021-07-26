import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from '../style';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
