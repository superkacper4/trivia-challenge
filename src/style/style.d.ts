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
                questionOverview: string;
                level: string;
                topic: string;

            },
            mobile: {
                h1: string;
                m: string;
                button: string;
                question: string;
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
            white: string;
        };
    }
}