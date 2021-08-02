import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import { api } from '../../Router/routes'
import { setQuestions, setError, setLoading } from '../../redux/questionsSlice'
import { setAmount } from '../../redux/titleSlice';
import { Button, Loader, Logo } from '../../components';
import { StyledTitlePage, StyledH1, StyledInput, StyledOption, StyledSelect, StyledWelcomeDiv, StyledLabel, StyledForm, StyledDiv, StyledWrapper, StyledIcon } from './TitlePage.css';
import cupImg from '../../assets/cup.svg'
import starImg from '../../assets/star.svg'
// import { getQuestions } from './TitlePage.api'

const TitlePage = () => {
    const [difficultyLocal, setDifficultyLocal] = useState('')
    const [amountLocal, setAmountLocal] = useState('')
    const [isLoadingLocal, setLoadingLocal] = useState(true)
    const dispatch = useDispatch();
    const history = useHistory();

    const getQuestions = (amount: string, difficulty: string) => {
        dispatch(setLoading(true))
        fetch(`${api}amount=${amount}&difficulty=${difficulty}&type=boolean`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                dispatch(setQuestions(data.results))
                dispatch(setLoading(false))
                dispatch(setError(false))
            })
            .catch(() => {
                dispatch(setLoading(false))
                dispatch(setError(true))
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

    const handleLoader = () => {
        setTimeout(() => {
            setLoadingLocal(false)
        }, 1000)
    }

    useEffect(() => {
        handleLoader()
    }, [])

    return (
        <StyledTitlePage>
            <Loader isLoading={isLoadingLocal} />
            <StyledWrapper>
                <StyledWelcomeDiv>
                    <StyledH1>Welcome to the</StyledH1>
                    <Logo />
                </StyledWelcomeDiv>
                <StyledForm onSubmit={handleSubmit}>
                    <StyledDiv>
                        <StyledDiv>
                            <StyledLabel><StyledIcon src={cupImg} alt='cup' />Difficulty</StyledLabel>
                            <StyledSelect value={difficultyLocal} onChange={(e) => handleSelect(e)} required>
                                <StyledOption value="" selected disabled>-----</StyledOption>
                                <StyledOption value="easy">easy</StyledOption>
                                <StyledOption value="hard">hard</StyledOption>
                            </StyledSelect>
                        </StyledDiv>
                        <StyledDiv>
                            <StyledLabel><StyledIcon src={starImg} alt='star' />Amount</StyledLabel>
                            <StyledInput type='number' placeholder='------' value={amountLocal} onChange={(e) => setAmountLocal(e.target.value)} required />
                        </StyledDiv>
                    </StyledDiv>
                    <Button type='submit'>next</Button>
                </StyledForm>
            </StyledWrapper>
        </StyledTitlePage>
    )
}


export default TitlePage