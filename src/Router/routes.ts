import { TitlePage, QuizPage, ResultsPage } from '../views'

export const api = 'https://opentdb.com/api.php?'

export const paths = {
    TITLE: '/',
    QUIZ: '/quiz',
    RESULTS: '/results',
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
    {
        path: paths.RESULTS,
        component: ResultsPage,
        exact: true
    },
]
