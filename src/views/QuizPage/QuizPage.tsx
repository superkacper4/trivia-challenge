import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const QuizPage = () => {
    const { questions } = useSelector((state: RootState) => state.questions);

    return (
        <div>
            <h1>quiz</h1>

            {questions.map((question) => <div key={question.question}>{question.question}</div>)}
        </div>
    )
}

export default QuizPage