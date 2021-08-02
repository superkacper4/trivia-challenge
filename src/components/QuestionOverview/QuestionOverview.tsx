import React from 'react'
import { StyledQuestionOverview, StyledP, StyledSign } from './QuestionOverview.css'
import oImg from '../../assets/o.svg'
import xImg from '../../assets/x.svg'

interface types {
    question: string;
    isCorrect: boolean;
}

const QuestionOverview = ({ question, isCorrect }: types) => {
    const createMarkup = () => ({ __html: question })

    return (
        <StyledQuestionOverview isCorrect={isCorrect}>
            <StyledP dangerouslySetInnerHTML={createMarkup()} />
            <StyledSign>{isCorrect ? <img src={oImg} alt='o' /> : <img src={xImg} alt='x' />}</StyledSign>
        </StyledQuestionOverview>
    )
}

export default QuestionOverview