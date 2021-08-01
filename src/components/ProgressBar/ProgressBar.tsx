import React from 'react'
import { StyledWrapper, StyledProgress, StyledProgressBar, StyledP, StyledSpan } from './ProgressBar.css'

interface types {
    currentQuestion: number;
    amount: number;
}


const ProgressBar = ({ currentQuestion, amount }: types) => (
    <StyledWrapper>
        <StyledP><StyledSpan>{currentQuestion}</StyledSpan>/{amount}</StyledP>
        <StyledProgressBar>
            <StyledProgress currentQuestion={currentQuestion} amount={amount} />
        </StyledProgressBar>
    </StyledWrapper>
)

export default ProgressBar