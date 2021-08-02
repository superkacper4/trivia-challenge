import React from 'react'
import Logo from '../Logo'
import { StyledLoader } from './Loader.css'

interface types {
    isLoading: boolean;
}

const Loader = ({ isLoading }: types) => (
    <StyledLoader isLoading={isLoading}>
        <Logo />
    </StyledLoader>
)

export default Loader