import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { StyledResultsPage, StyledStarsDiv, StyledWrapper, StyledScore, StyledAvatar, StyledStar } from './ResultsPage.css'
import { QuestionOverview, Button } from '../../components';
import star1Img from '../../assets/Star1.svg'
import star0Img from '../../assets/Star0.svg'
import avatarImg from '../../assets/avatar.svg'

const ResultsPage = () => {
    const [score, setScore] = useState<number>(0)

    const { questions } = useSelector((state: RootState) => state.questions);
    const { answers } = useSelector((state: RootState) => state.quiz);
    const history = useHistory();

    const countScore = () => {
        questions?.forEach((question, i) => {
            if (question.correct_answer === answers[i]) {
                console.log("hihi")

                setScore(prevState => prevState + 1)
            }
        })
    }

    useEffect(() => {
        countScore()

    }, [])

    return (
        <StyledResultsPage>
            <StyledWrapper>
                <StyledScore>
                    <StyledAvatar src={avatarImg} alt='avatar' /> You scored: {score}/{answers?.length + 1}
                </StyledScore>
                <StyledStarsDiv>
                    {questions?.map((question, i) => {
                        if (question.correct_answer === answers[i]) {
                            return <StyledStar src={star1Img} alt='o' />
                        }
                        return null
                    })}

                    {questions?.map((question, i) => {
                        if (question.correct_answer !== answers[i]) {
                            return <StyledStar src={star0Img} alt='x' />
                        }
                        return null
                    })}
                </StyledStarsDiv>
                {questions?.map((question, i) => {
                    const isCorrect = question.correct_answer === answers[i]
                    return (<QuestionOverview isCorrect={isCorrect} question={question.question} key={question.question} />)
                })}

                <Button type="button" onClick={() => history.push('/')}>play again</Button>
            </StyledWrapper>
        </StyledResultsPage>
    )

}


export default ResultsPage