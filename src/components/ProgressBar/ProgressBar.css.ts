import styled from 'styled-components'

interface types {
    currentQuestion: number;
    amount: number;
}

const StyledWrapper = styled.div`
    width: 80%;
    max-width: 350px;
`;

const StyledProgressBar = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height:5px;
    background-color: ${({ theme }) => theme.colors.seventh};
`;

const StyledProgress = styled.div`
    width: ${({ currentQuestion, amount }: types) => `${(currentQuestion / amount) * 100}%`};
    height: 5px;
    z-index: 2;
    background-color: ${({ theme }) => theme.colors.third};
`

const StyledP = styled.p`
    width: 100%;
    font-size: ${({ theme }) => theme.fontSizes.mobile.level};
`;

const StyledSpan = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.mobile.currentQuestion};
    color: ${({ theme }) => theme.colors.third};
`;

export { StyledWrapper, StyledProgress, StyledProgressBar, StyledP, StyledSpan }

