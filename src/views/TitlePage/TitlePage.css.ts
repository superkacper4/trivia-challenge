import styled, { css } from 'styled-components'

const StyledTitlePage = styled.section`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
`;

const StyledWrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (${({ theme }) => theme.breakPoints.tablet}){
    width: 70%;
    }

    @media (${({ theme }) => theme.breakPoints.desktop}){
    width: 50%;
    }

    @media (${({ theme }) => theme.breakPoints.bigDesktop}){
    width: 30%;
    }
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


`;

const StyledH1 = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.mobile.h1};
    margin: 0;
    padding: 0;

    @media (${({ theme }) => theme.breakPoints.desktop}){
        font-size: ${({ theme }) => theme.fontSizes.desktop.h1};
    }
`;

const StyledForm = styled.form`
    width: 100%;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media (${({ theme }) => theme.breakPoints.desktop}){
    min-height: 40vh;
    }
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const StyledLabel = styled.label`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 10px 0;
    color: ${({ theme }) => theme.colors.third};

    @media (${({ theme }) => theme.breakPoints.desktop}){
        width: 60%;
    }

`;

const StyledIcon = styled.img`
    margin-right: 5vw;
`;

const styles = css`
    width: 100%;
    font-size: ${({ theme }) => theme.fontSizes.mobile.m};
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.white};
    padding: 2vh;
    margin: 0 0 10px;

    @media (${({ theme }) => theme.breakPoints.desktop}){
        font-size: ${({ theme }) => theme.fontSizes.desktop.m};
        width: 60%;
    }

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

export { StyledTitlePage, StyledLogo, StyledH1, StyledInput, StyledOption, StyledSelect, StyledWelcomeDiv, StyledLabel, StyledForm, StyledDiv, StyledWrapper, StyledIcon }