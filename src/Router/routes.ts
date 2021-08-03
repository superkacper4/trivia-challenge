import { TitlePage, QuizPage, ResultsPage, ErrorPage } from '../views'

export const api = 'https://opentdb.com/api.php?'

export const paths = {
    TITLE: '/',
    QUIZ: '/quiz',
    RESULTS: '/results',
    ERROR: '/error'
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
    {
        path: paths.ERROR,
        component: ErrorPage,
        exact: true
    },
]
