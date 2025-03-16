import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    history: [],
}

const navigationSlice = createSlice({
    name: "navigation",
    initialState,
    reducers: {
        addHistory: (state, action) => {
            state.history.push(action.payload)
        },
        goback: (state) => {
            if (state.history.length > 1) {
                state.history.pop()
            }
        },
        resetHistory: (state) => {
            state.history = [];
        },
    }
})

export default navigationSlice.reducer
export const { addHistory, goback, resetHistory } = navigationSlice.actions