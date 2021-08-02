import React from 'react'
import QuestionCounter from '../QuestionCounter'
import { StyledWrapper, StyledProgress, StyledProgressBar } from './ProgressBar.css'

interface types {
    currentQuestion: number;
    amount: number;
}


const ProgressBar = ({ currentQuestion, amount }: types) => (
    <StyledWrapper>
        <QuestionCounter currentQuestion={currentQuestion} amount={amount} score={false} />
        <StyledProgressBar>
            <StyledProgress currentQuestion={currentQuestion} amount={amount} />
        </StyledProgressBar>
    </StyledWrapper>
)

export default ProgressBar