import { TitlePage } from '../views'

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
]
