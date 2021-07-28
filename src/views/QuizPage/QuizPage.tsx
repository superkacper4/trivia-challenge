import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const QuizPage = () => {
    const [numberQuestion, setNumberQuestion] = useState(0)
    const [answers, setAnswers] = useState<string[]>([])
    const { questions } = useSelector((state: RootState) => state.questions);
    const { amount } = useSelector((state: RootState) => state.title);
    const history = useHistory()


    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const newVal: string = e.currentTarget.value
        setAnswers([...answers, newVal])
        setNumberQuestion(numberQuestion + 1)

        if (numberQuestion + 1 >= Number(amount)) {
            history.push('/results')
        }
    }


    return (
        <div>
            <h1>quiz</h1>

            {/* {questions.map((question) => <div key={question.question}>{question.question}</div>)} */}
            {questions[numberQuestion]?.question}


            <button type='button' value='True' onClick={(e) => handleClick(e)}> prawda </button>
            <button type='button' value='False' onClick={(e) => handleClick(e)}> falsz </button>
        </div>
    )
}

export default QuizPage