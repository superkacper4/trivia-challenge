import styled from 'styled-components'

const Button = styled.button`
    width: 80%;
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    background-image: linear-gradient(to right, ${({ theme }) => theme.colors.third}, ${({ theme }) => theme.colors.fourth});
    font-size: ${({ theme }) => theme.fontSizes.mobile.button};
    padding: 2vh;
    border-radius: 14px;
    box-shadow: 0px 5px 0px 0px ${({ theme }) => theme.colors.sixth};
    border: none;

`;

export default Button