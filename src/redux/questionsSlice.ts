import { createSlice } from '@reduxjs/toolkit'

/* eslint-disable camelcase */

export interface CounterState {
    category: string;
    type: boolean;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

interface questionInterface {
    questions: CounterState[];
}


const initialState: questionInterface = {
    questions: []
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        asign: (state, action) => {
            state.questions.push(action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { asign } = counterSlice.actions

export default counterSlice.reducer