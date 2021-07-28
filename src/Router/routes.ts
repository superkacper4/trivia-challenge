import { TitlePage, QuizPage } from '../views'

export const api = 'https://opentdb.com/api.php?'

export const paths = {
    TITLE: '/',
    QUIZ: '/quiz',
    RESULT: '/result',
}

export default [
    {
        path: paths.TITLE,
        component: TitlePage,
        exact: true
    },
    {
        path: paths.QUIZ,
        component: QuizPage,
        exact: true
    },
]
