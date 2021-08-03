import styled from 'styled-components'

const StyledQuizPage = styled.section`
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: center;
`;

const StyledWrapper = styled.div`
    width: 80%;
    color: ${({ theme }) => theme.colors.main};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    z-index: 3;

    @media (${({ theme }) => theme.breakPoints.desktop}){
        width: 60%;
    }
`;

const StyledLevel = styled.p`
    letter-spacing: 0.5em;  
    margin: 0;
    padding: 0;
    font-size: ${({ theme }) => theme.fontSizes.mobile.level};

    @media (${({ theme }) => theme.breakPoints.desktop}){
        font-size: ${({ theme }) => theme.fontSizes.desktop.level};
    }
`;

const StyledQuestion = styled.div`
    text-align: left;
    width: 90%;
    font-size: ${({ theme }) => theme.fontSizes.mobile.question};

    @media (${({ theme }) => theme.breakPoints.desktop}){
        font-size: ${({ theme }) => theme.fontSizes.desktop.question};
        text-align: center;
    }
`;

const StyledDiv = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


export { StyledQuizPage, StyledLevel, StyledQuestion, StyledDiv, StyledWrapper }