import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface titleState {
    difficulty: string;
    ammount: number;
}


const initialState: titleState = {
    difficulty: 'easy',
    ammount: 0,
}

export const titleSlice = createSlice({
    name: 'title',
    initialState,
    reducers: {
        setDifficulty: (state, action: PayloadAction<string>) => {
            state.difficulty = action.payload
        },
        setAmmount: (state, action: PayloadAction<number>) => {
            state.ammount = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setAmmount, setDifficulty } = titleSlice.actions

export default titleSlice.reducer