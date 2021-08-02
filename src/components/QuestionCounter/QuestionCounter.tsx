import React from 'react'
import { StyledP, StyledSpan } from './QuestionCounter.css'

interface types {
    currentQuestion: number;
    amount: number;
    score: boolean;
}


const QuestionCounter = ({ currentQuestion, amount, score }: types) => (
    <StyledP score={score}>
        <StyledSpan>{currentQuestion < 10 ? `0${currentQuestion}` : currentQuestion}</StyledSpan>/{amount}
    </StyledP>
)

export default QuestionCounter