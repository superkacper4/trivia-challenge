import React from 'react'
import { useHistory } from "react-router-dom";
import { Button } from '../../components'
import { StyledErrorPage } from './ErrorPage.css'

const ErrorPage = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/')
    }

    return (
        <StyledErrorPage>
            Something gone wrong.
            <Button onClick={handleClick} >Try Again!</Button>
        </StyledErrorPage>
    )
}

export default ErrorPage