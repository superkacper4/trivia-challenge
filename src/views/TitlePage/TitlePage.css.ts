import styled, { css } from 'styled-components'

const StyledTitlePage = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
`;

const StyledWelcomeDiv = styled.div`
    margin: 0;
    padding: 0;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledLogo = styled.img`
    width: 100%;
    margin: 0;
    padding: 0;

    @media (${({ theme }) => theme.breakPoints.tablet}){
    width: 70%;
    }

`;

const StyledH1 = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.mobile.h1};
    margin: 0;
    padding: 0;
`;

const StyledForm = styled.form`
    width: 100%;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media (${({ theme }) => theme.breakPoints.tablet}){
    width: 70%;
    }

    @media (${({ theme }) => theme.breakPoints.desktop}){
    width: 50%;
    min-height: 40vh;
    }

    @media (${({ theme }) => theme.breakPoints.bigDesktop}){
    width: 30%;
    }
`;

const StyledSpan = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const StyledLabel = styled.label`
    width: 80%;
    padding: 0;
    margin: 0;
    color: ${({ theme }) => theme.colors.third};

`;

const styles = css`
    width: 80%;
    font-size: ${({ theme }) => theme.fontSizes.mobile.m};
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.white};
    padding: 10px;
    margin: 0 0 10px;
`;

const StyledInput = styled.input`
    ${styles}
`;

const StyledOption = styled.option`
    ${styles}
    /* background-color: red; */
    color: black;
`;

const StyledSelect = styled.select`
    ${styles}
`;

export { StyledTitlePage, StyledLogo, StyledH1, StyledInput, StyledOption, StyledSelect, StyledWelcomeDiv, StyledLabel, StyledForm, StyledSpan }