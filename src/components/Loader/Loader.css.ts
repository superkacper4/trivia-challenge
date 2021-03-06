import styled from "styled-components";

interface types {
    isLoading: boolean;
}

const StyledLoader = styled.div`
    background-color: ${({ theme }) => theme.colors.main};
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    transform: ${({ isLoading }: types) => isLoading ? 'translateX(0)' : 'translateX(-100vw)'};
    transition: transform .5s;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    
    @media (${({ theme }) => theme.breakPoints.desktop}){
        padding: 20vw;
    }
`;

export { StyledLoader }