import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface titleState {
    difficulty: string;
    amount: string;
}


const initialState: titleState = {
    difficulty: 'easy',
    amount: '0',
}

export const titleSlice = createSlice({
    name: 'title',
    initialState,
    reducers: {
        setDifficulty: (state, action: PayloadAction<string>) => {
            state.difficulty = action.payload
        },
        setAmount: (state, action: PayloadAction<string>) => {
            state.amount = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setAmount, setDifficulty } = titleSlice.actions

export default titleSlice.reducer