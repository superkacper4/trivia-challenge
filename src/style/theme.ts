import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
    fontSizes: {
        desktop: {
            h1: '46px',
            m: '18px',
            button: '21px',
            question: '31px',
            questionOverview: '16px',
            level: '28px',
            topic: '81px',

        },
        mobile: {
            h1: '26px',
            m: '13px',
            button: '15px',
            question: '25px',
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
        white: 'white',
    }
};

export default theme;