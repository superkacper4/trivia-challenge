import 'styled-components';

// and extend it
declare module 'styled-components' {
    export interface DefaultTheme {
        fontSizes: {
            desktop: {
                h1: string;
                m: string;
                button: string;
                question: string;
                currentQuestion: string;
                questionOverview: string;
                level: string;
                topic: string;

            },
            mobile: {
                h1: string;
                m: string;
                button: string;
                question: string;
                currentQuestion: string;
                questionOverview: string;
                level: string;
                topic: string;
            }
        }

        colors: {
            main: string;
            secondary: string;
            third: string;
            fourth: string;
            fivth: string;
            sixth: string;
            seventh: string;
            eighth: string;
            white: string;
        };

        breakPoints: {
            phone: string;
            tablet: string;
            desktop: string;
            bigDesktop: string;
        }
    }
}