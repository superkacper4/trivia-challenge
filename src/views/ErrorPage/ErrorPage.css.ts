import styled from 'styled-components'

const StyledErrorPage = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.eighth};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export { StyledErrorPage }
