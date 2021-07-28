import React, { useState, SetStateAction } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import { api, paths } from '../../Router/routes'
import { setQuestions } from '../../redux/questionsSlice'
// import { getQuestions } from './TitlePage.api'

const TitlePage = () => {
    const [difficultyLocal, setDifficultyLocal] = useState('')
    const [amountLocal, setAmountLocal] = useState('')
    const dispatch = useDispatch();
    const history = useHistory();

    const getQuestions = (amount: string, difficulty: string) => {
        fetch(`${api}amount=${amount}&difficulty=${difficulty}&type=boolean`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                dispatch(setQuestions(data.results))
            })
            .catch((error) => {
                console.error('Error:', error);
                return error
            });
    }

    const handleSelect = (e: any): void => {
        setDifficultyLocal(e.target.value)
    }


    const handleSubmit = () => {
        getQuestions(amountLocal, difficultyLocal)
        history.push('/quiz')
    }


    return (
        <div>
            <h1 >xd</h1>
            <select value={difficultyLocal} onChange={(e) => handleSelect(e)}>
                <option value="" selected disabled>-----</option>
                <option value="easy">easy</option>
                <option value="hard">hard</option>
            </select>
            <input type='number' placeholder='give number' value={amountLocal} onChange={(e) => setAmountLocal(e.target.value)} />
            <button type='submit' onClick={handleSubmit}>xd</button>
        </div>
    )
}


export default TitlePage