import styled from 'styled-components'

// switch (expr) {
//     case 'Oranges':
//       console.log('Oranges are $0.59 a pound.');
//       break;
//     case 'Mangoes':
//     case 'Papayas':
//       console.log('Mangoes and papayas are $2.79 a pound.');
//       // expected output: "Mangoes and papayas are $2.79 a pound."
//       break;
//     default:
//       console.log(`Sorry, we are out of ${expr}.`);
//   }

const Button = styled.button`
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    background-image: linear-gradient(to right, ${({ theme }) => theme.colors.third}, ${({ theme }) => theme.colors.fourth});
    font-size: ${({ theme }) => theme.fontSizes.mobile.button};
    padding: 3vh;
    margin-bottom: 2vh;
    border-radius: 14px;
    box-shadow: 0px 5px 0px 0px ${({ theme }) => theme.colors.sixth};
    border: none;


    @media (${({ theme }) => theme.breakPoints.desktop}){
        width: 60%;
        font-size: ${({ theme }) => theme.fontSizes.desktop.button};
        cursor: pointer;
        &:hover{
            background-image: linear-gradient(to right, ${({ theme }) => theme.colors.third}, ${({ theme }) => theme.colors.third});
        }
    }
`;

export default Button