import styled from 'styled-components'

interface types {
    score: boolean;
}

const StyledP = styled.p`
    width: ${({ score }: types) => score ? 'auto' : '100%'};
    margin-left: ${({ score }: types) => score ? '10px' : 'none'};
    font-size: ${({ theme }) => theme.fontSizes.mobile.level};
`;

const StyledSpan = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.mobile.currentQuestion};
    color: ${({ theme }) => theme.colors.third};
`;

export { StyledP, StyledSpan }