import styled from 'styled-components'

const StyledResultsPage = styled.section`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes.mobile.currentQuestion};
    color: ${({ theme }) => theme.colors.white};

    @media (${({ theme }) => theme.breakPoints.desktop}){
        font-size: ${({ theme }) => theme.fontSizes.desktop.currentQuestion};

    }
`

const StyledWrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    z-index: 3;


    @media (${({ theme }) => theme.breakPoints.desktop}){
        width: 60%;
    }

    @media (${({ theme }) => theme.breakPoints.bigDesktop}){
        width: 40%;
    }
`;

const StyledScore = styled.div`
    width: 100%;
    padding: 4vh 2vw 0 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledAvatar = styled.img`
    width: 10vw;
    height: 10vw;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    margin-right:10px ;

    @media (${({ theme }) => theme.breakPoints.desktop}){
        width: 5vw;
        height: 5vw;
    }

    @media (${({ theme }) => theme.breakPoints.bigDesktop}){
        width: 2.5vw;
        height: 2.5vw;
    }
`

const StyledStarsDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 2vh 0; 
`;

const StyledStar = styled.img`
    width: 5vw;
    height: 5vw;

    @media (${({ theme }) => theme.breakPoints.desktop}){
        width: 3vw;
        height: 3vw;
    }

    @media (${({ theme }) => theme.breakPoints.bigDesktop}){
        width: 1.5vw;
        height: 1.5vw;
    }
`;

export { StyledResultsPage, StyledStarsDiv, StyledWrapper, StyledScore, StyledAvatar, StyledStar }