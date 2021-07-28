import { configureStore } from '@reduxjs/toolkit'
import titleReducer from './titleSlice'
import quizReducer from './quizSlice'
import questionsReducer from './questionsSlice'

export const store = configureStore({
    reducer: { title: titleReducer, questions: questionsReducer, quiz: quizReducer },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch