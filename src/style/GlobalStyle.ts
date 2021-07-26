import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${({ theme }) => theme.colors.main};
        font-size: 10rem;
        overflow-x: hidden;
        padding: 0;
        margin: 0;
        /* height: 100vh; */
    }
    * {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export default GlobalStyle;
