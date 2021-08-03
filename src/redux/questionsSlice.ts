import { createSlice } from '@reduxjs/toolkit'

/* eslint-disable camelcase */

export interface questionsState {
    category: string;
    type: boolean;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

interface questionInterface {
    questions: questionsState[];
    isLoading: boolean;
    isError: boolean;
}


const initialState: questionInterface = {
    questions: [],
    isLoading: false,
    isError: false
}

export const counterSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        setQuestions: (state, action) => {
            state.questions = action.payload
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setError: (state, action) => {
            state.isError = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setQuestions, setError, setLoading } = counterSlice.actions

export default counterSlice.reducer