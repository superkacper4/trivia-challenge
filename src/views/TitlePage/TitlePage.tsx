import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import { api } from '../../Router/routes'
import { setQuestions } from '../../redux/questionsSlice'
import { setAmount } from '../../redux/titleSlice';
import { Button } from '../../components';
import { StyledTitlePage, StyledLogo, StyledH1, StyledInput, StyledOption, StyledSelect, StyledWelcomeDiv, StyledLabel, StyledForm, StyledSpan } from './TitlePage.css';
import logo from '../../assets/logo.svg'
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
        dispatch(setAmount(amountLocal))

        history.push('/quiz')
    }


    return (
        <StyledTitlePage>
            <StyledWelcomeDiv>
                <StyledH1>Welcome to the</StyledH1>
                <StyledLogo src={logo} alt='Logo' />
            </StyledWelcomeDiv>
            <StyledForm onSubmit={handleSubmit}>
                <StyledSpan>
                    <StyledSpan>
                        <StyledLabel>Difficulty</StyledLabel>
                        <StyledSelect value={difficultyLocal} onChange={(e) => handleSelect(e)}>
                            <StyledOption value="" selected disabled>-----</StyledOption>
                            <StyledOption value="easy">easy</StyledOption>
                            <StyledOption value="hard">hard</StyledOption>
                        </StyledSelect>
                    </StyledSpan>
                    <StyledSpan>
                        <StyledLabel>Amount</StyledLabel>
                        <StyledInput type='number' placeholder='give number' value={amountLocal} onChange={(e) => setAmountLocal(e.target.value)} />
                    </StyledSpan>
                </StyledSpan>
                <Button type='submit'>next</Button>
            </StyledForm>
        </StyledTitlePage>
    )
}


export default TitlePage