import styled from 'styled-components'

const H2 = styled.h2`
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.mobile.h1};
    margin: 0;
    padding: 0;

    @media (${({ theme }) => theme.breakPoints.desktop}){
        font-size: ${({ theme }) => theme.fontSizes.desktop.h1};
    }
`;

export default H2