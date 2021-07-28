import { createSlice } from '@reduxjs/toolkit'

export interface titleState {
    answers: string[];
}


const initialState: titleState = {
    answers: [],
}

export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setAnswers: (state, action) => {
            state.answers = action.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { setAnswers } = quizSlice.actions

export default quizSlice.reducer