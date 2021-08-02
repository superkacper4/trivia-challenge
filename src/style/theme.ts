import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
    fontSizes: {
        desktop: {
            h1: '46px',
            m: '18px',
            button: '21px',
            question: '31px',
            currentQuestion: '20px',
            questionOverview: '16px',
            level: '28px',
            topic: '81px',

        },
        mobile: {
            h1: '26px',
            m: '13px',
            button: '15px',
            question: '25px',
            currentQuestion: '20px',
            questionOverview: '12px',
            level: '13px',
            topic: '31px',
        }
    },

    colors: {
        main: '#424A9E',
        secondary: '#E5E5E5',
        third: '#FFA67A',
        fourth: '#FF6065',
        fivth: '#FF6065',
        sixth: '#C65252',
        seventh: '#DBDEFF',
        eighth: '#FFDBDB',
        white: 'white',
    },
    breakPoints: {
        phone: 'min-width:425px',
        tablet: 'min-width:768px',
        desktop: 'min-width:1024px',
        bigDesktop: 'min-width:1440px',
    }
};

export default theme;