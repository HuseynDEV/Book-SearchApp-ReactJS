import { createSlice } from '@reduxjs/toolkit'



export const data = createSlice({
    name: 'data',
    initialState: {
        value:[]
    },

    reducers: {
        increment: (state, item) => {
            state.value=item
        }
    }
})

export const { increment } = data.actions
export default data.reducer