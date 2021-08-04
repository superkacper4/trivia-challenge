import styled, { css } from 'styled-components'



const Button = styled.button<{
    option?: string;
}>`
    width: 100%;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSizes.mobile.button};
    padding: 3vh;
    margin-bottom: 2vh;
    border-radius: 14px;
    border: none;

    ${({ theme, option }) => {
        switch (option) {
            case 'white':
                return css`
                background-color: ${theme.colors.white};
                border: 4px solid ${theme.colors.main};
                color: ${theme.colors.main};

                @media (${theme.breakPoints.desktop}){
                    &:hover{
                        background-color: lightgray;
                    }
                }
                `;

            case 'blue':
                return css`
                color: ${theme.colors.white};
                background-color: ${theme.colors.main};

                @media (${theme.breakPoints.desktop}){
                    &:hover{
                        background-color: ${theme.colors.nineth};
                    }
                }
                `;

            default:
                return css`
                background-image: linear-gradient(to right, ${theme.colors.third}, ${theme.colors.fourth});
                box-shadow: 0px 5px 0px 0px ${theme.colors.sixth};
                color: ${theme.colors.white};

                @media (${theme.breakPoints.desktop}){
                    &:hover{
                    background-image: linear-gradient(to right, ${theme.colors.third}, ${theme.colors.third});
                    }
                }
            `;
        }
    }}

    @media (${({ theme }) => theme.breakPoints.desktop}){
        width: 60%;
        font-size: ${({ theme }) => theme.fontSizes.desktop.button};
        cursor: pointer;

    }
`;

export default Button