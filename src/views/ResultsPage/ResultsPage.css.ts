import styled from 'styled-components'

const StyledResultsPage = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes.mobile.currentQuestion};
    color: ${({ theme }) => theme.colors.white};
`

const StyledWrapper = styled.div`
    width: 80%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media (${({ theme }) => theme.breakPoints.desktop}){
        width: 60%;
    }

    @media (${({ theme }) => theme.breakPoints.bigDesktop}){
        width: 40%;
    }
`;

const StyledScore = styled.div`
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
    margin-right:5vw ;

    @media (${({ theme }) => theme.breakPoints.desktop}){
        width: 5vw;
        height: 5vw;
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
`;

export { StyledResultsPage, StyledStarsDiv, StyledWrapper, StyledScore, StyledAvatar, StyledStar }