import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const ResultsPage = () => {
    const [score, setScore] = useState<number>(0)
    const { questions } = useSelector((state: RootState) => state.questions);
    const { answers } = useSelector((state: RootState) => state.quiz);
    const history = useHistory();

    const countScore = () => {
        questions?.forEach((question, i) => {
            if (question.correct_answer === answers[i]) {
                console.log("hihi")
                setScore(score + 1)
            }
        })
    }

    useEffect(() => {
        countScore()
    }, [])

    return (
        <div>
            <h1>results</h1>
            <div>
                {score}/{answers?.length + 1}
            </div>
            {questions?.map((question, i) => {
                const isCorrect = question.correct_answer === answers[i]
                return (<div key={question.question}>{question.question}<span>{isCorrect ? 'o' : 'x'}</span></div>)
            })}

            <button type="button" onClick={() => history.push('/')}>play again</button>

        </div>
    )

}


export default ResultsPage