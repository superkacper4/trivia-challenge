import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${({ theme }) => theme.colors.main};
        overflow-x: hidden;
        padding: 0;
        margin: 0;
        font-family: 'Quicksand', sans-serif;
        /* height: 100vh; */
    }
    * {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export default GlobalStyle;
