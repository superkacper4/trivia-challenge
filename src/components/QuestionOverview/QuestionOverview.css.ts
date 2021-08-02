import styled from 'styled-components'

interface types {
    isCorrect: boolean;
}

const StyledQuestionOverview = styled.div<{ isCorrect: boolean }>`
    width: 100%;
    height: 65px;
    margin-bottom: 2vh; 
    padding: 2vw;
    background-color: ${({ theme, isCorrect }) => isCorrect ? theme.colors.white : theme.colors.eighth};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes.mobile.questionOverview};
    color: black;
`;

const StyledP = styled.p`
    width: 90%;
    margin: 0;
    padding: 0;
`;

const StyledSign = styled.div`
    width: 10%;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export { StyledQuestionOverview, StyledP, StyledSign }