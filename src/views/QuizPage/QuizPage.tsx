import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { setAnswers } from '../../redux/quizSlice';
import { RootState } from '../../redux/store'
import { StyledQuizPage, StyledLevel, StyledQuestion, StyledDiv, StyledWrapper } from './QuizPage.css';
import { Button, H2, ProgressBar } from '../../components';

const QuizPage = () => {
    const [numberQuestion, setNumberQuestion] = useState(0)
    const [answersLocal, setAnswersLocal] = useState<string[]>([])
    const { questions } = useSelector((state: RootState) => state.questions);
    const { amount } = useSelector((state: RootState) => state.title);
    const history = useHistory()
    const dispatch = useDispatch();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const newVal: string = e.currentTarget.value
        setAnswersLocal([...answersLocal, newVal])
        setNumberQuestion(numberQuestion + 1)

        if (numberQuestion + 1 >= Number(amount)) {
            history.push('/results')
            dispatch(setAnswers(answersLocal))
        }
    }
    const createMarkup = () => ({ __html: questions[numberQuestion]?.question })

    return (
        <StyledQuizPage>
            <StyledWrapper>
                <StyledDiv>
                    <H2>{questions[numberQuestion]?.category}</H2>
                    <StyledLevel>level 1</StyledLevel>
                </StyledDiv>

                <ProgressBar currentQuestion={numberQuestion + 1} amount={Number(amount)} />

                <StyledQuestion dangerouslySetInnerHTML={createMarkup()} />

                <StyledDiv>
                    <Button type='button' value='True' onClick={(e) => handleClick(e)}> True </Button>
                    <Button type='button' value='False' onClick={(e) => handleClick(e)}> False </Button>
                </StyledDiv>
            </StyledWrapper>
        </StyledQuizPage>
    )
}

export default QuizPage