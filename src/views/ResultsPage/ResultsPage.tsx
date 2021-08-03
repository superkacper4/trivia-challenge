import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { paths } from '../../Router/routes'
import { setQuestions, setError, setLoading } from '../../redux/questionsSlice'
import { setAmount } from '../../redux/titleSlice';
import { RootState } from '../../redux/store'
import { StyledResultsPage, StyledStarsDiv, StyledWrapper, StyledScore, StyledAvatar, StyledStar } from './ResultsPage.css'
import { QuestionOverview, Button, QuestionCounter, Background } from '../../components';
import star1Img from '../../assets/Star1.svg'
import star0Img from '../../assets/Star0.svg'
import avatarImg from '../../assets/avatar.svg'

const ResultsPage = () => {
    const [score, setScore] = useState<number>(0)
    const { questions } = useSelector((state: RootState) => state.questions);
    const { answers } = useSelector((state: RootState) => state.quiz);
    const dispatch = useDispatch();
    const history = useHistory();

    const countScore = () => {
        questions?.forEach((question, i) => {
            if (question.correct_answer === answers[i]) {
                setScore(prevState => prevState + 1)
            }
        })
    }

    const handlePlayAgain = () => {
        history.push(paths.TITLE)
        dispatch(setQuestions([]))
        dispatch(setLoading(false))
        dispatch(setError(false))
        dispatch(setAmount('0'))
    }

    useEffect(() => {
        countScore()
    }, [])

    return (
        <StyledResultsPage>
            <Background white={false} />

            <StyledWrapper>
                <StyledScore>
                    <StyledAvatar src={avatarImg} alt='avatar' /> You scored:  <QuestionCounter currentQuestion={score} amount={answers?.length + 1} score />
                </StyledScore>
                <StyledStarsDiv>
                    {questions?.map((question, i) => {
                        if (question.correct_answer === answers[i]) {
                            return <StyledStar src={star1Img} alt='o' key={question.question} />
                        }
                        return null
                    })}

                    {questions?.map((question, i) => {
                        if (question.correct_answer !== answers[i]) {
                            return <StyledStar src={star0Img} alt='x' key={question.question} />
                        }
                        return null
                    })}
                </StyledStarsDiv>
                {questions?.map((question, i) => {
                    const isCorrect = question.correct_answer === answers[i]
                    return (<QuestionOverview isCorrect={isCorrect} question={question.question} key={question.question} />)
                })}

                <Button type="button" onClick={handlePlayAgain} >play again</Button>
            </StyledWrapper>
        </StyledResultsPage>
    )

}


export default ResultsPage